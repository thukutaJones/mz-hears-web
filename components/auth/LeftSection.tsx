"use client";

import Image from "next/image";
import React, { useState } from "react";
import FormField from "../FormField";
import { signInFields } from "@/contants/formFields";
import Bottom from "./Bottom";
import Link from "next/link";
import { baseUrl } from "@/contants/baseUrl";
import axios from "axios";
import { decodeToken } from "@/utils/decodeToken";

const LeftSection = () => {
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formValues, setFormValues] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSigningIn(true);
    try {
      const res = await axios.post(
        `${baseUrl}/api/v1/auth/sign-in`,
        formValues
      );
      localStorage.setItem("token", res?.data?.token);
      const decoded: any = await decodeToken(res?.data?.token);
      if (decoded?.role === "admin") {
        window.location.href = "/admin";
        return;
      }
      if (decoded?.role === "operator") {
        window.location.href = "/operator";
        return;
      }
      if (decoded?.role === "responder") {
        window.location.href = "/staff-member";
        return;
      }
      setErrorMessage("Your role is not allowed here");
    } catch (error: any) {
      setErrorMessage(
        error?.response?.data?.message ||
          "Something went wrong!! Please try again"
      );
    } finally {
      setIsSigningIn(false);
    }
  };
  return (
    <div className="w-[50%] h-full flex flex-col justify-center items-center">
      <div className="w-[60%] flex flex-col items-center">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="logo"
          className="w-10 h-10"
        />
        <h1 className="text-center mt-8 text-black font-bold text-2xl">
          Sign in your account
        </h1>
        {errorMessage && (
          <div className="mt-2 rounded-lg px-4 py-2 bg-red-50 text-sm text-red-600 font-medium">
            <p>{errorMessage}</p>
          </div>
        )}
        <form className="w-full flex flex-col" onSubmit={handleSignIn}>
          <div className="w-full flex flex-col gap-4">
            {signInFields?.map((field: any, index: number) => (
              <FormField
                key={index?.toString()}
                field={field}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
                value={
                  formValues[
                    field?.variable as keyof {
                      email: string;
                      password: string;
                    }
                  ]
                }
                handleOnChange={(e: any) =>
                  setFormValues({
                    ...formValues,
                    [field["variable"]]: e.target.value,
                  })
                }
              />
            ))}
          </div>
          <Link href="/sign-in">
            <p className="text-primary text-xs mt-1 text-right">
              Forget Password?
            </p>
          </Link>
          <Bottom isLoading={isSigningIn} />
        </form>
      </div>
    </div>
  );
};

export default LeftSection;
