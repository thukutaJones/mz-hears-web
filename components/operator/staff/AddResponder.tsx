"use client";

import FormField from "@/components/FormField";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { isValidPhonenumber } from "@/utils/isValidPhonenumber";
import { baseUrl } from "@/contants/baseUrl";
import { addResponderFields } from "@/contants/formFields";
import MultiTextInput from "@/components/MultiTextInput";
import { getFacilityId } from "@/utils/getFacilityid";

interface FormValues {
  fullName: string;
  email: string;
  phoneNumber: string;
  sex: string;
  roles: string[];
}

const AddResponder = ({
  toggleAdd,
  setHandleToggleAdd,
  callBack,
  handlSuccess,
  user,
}: {
  toggleAdd: boolean;
  setHandleToggleAdd: (toggle: boolean) => void;
  callBack: any;
  handlSuccess: any;
  user: any;
}) => {
  const [formValues, setFormValues] = useState<FormValues>({
    fullName: "",
    email: "",
    phoneNumber: "",
    sex: "",
    roles: [],
  });

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    if (!formValues.sex) {
      setErrorMessage("Please select the gender");
      return;
    }
    if (!isValidPhonenumber(formValues.phoneNumber)) {
      setErrorMessage("Please enter a valid phone number");
      return;
    }
    setIsAdding(true);
    try {
      const facilityId = await getFacilityId(user?.id, user?.token)
      const payload = {
        email: formValues.email,
        fullName: formValues.fullName,
        role: "responder",
        phoneNumber: formValues.phoneNumber,
        sex: formValues.sex,
        roles: formValues.roles,
        facility: facilityId
      };
    
      await axios.post(`${baseUrl}/api/v1/responder`, payload);
      handlSuccess("Responder added successfully");
      await callBack();
      setHandleToggleAdd(false);
    } catch (error: any) {
      console.log(error);
      setErrorMessage(
        error?.response?.data?.message ||
          "Something went wrong!! Please try again"
      );
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <>
      {toggleAdd ? (
        <div
          className={`fixed inset-0 w-full h-screen z-[999]`}
          onClick={() => setHandleToggleAdd(false)}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7" }}
        >
          <div className="w-full flex flex-row items-end justify-end mt-2 px-6">
            <button className="" onClick={() => setHandleToggleAdd(false)}>
              <IoClose
                size={35}
                className="hover:scale-110 text-red-400 hover:text-red-600"
              />
            </button>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <div
              className="z-10 flex flex-col items-center md:mt-4 scroll-container-small w-full min-h-[70vh] max-h-[85vh] rounded-xl md:w-[30%] overflow-auto pb-4 animated fadeInUp bg-white px-8"
              onClick={(e: any) => {
                e.stopPropagation();
              }}
            >
              <h2 className="text-center text-primary font-black text-2xl mt-20 md:mt-2">
                Add Responder
              </h2>
              <form
                onSubmit={handleAdd}
                className="w-full mt-4 flex flex-col gap-2"
              >
                {errorMessage && (
                  <div className="mt-2 rounded-lg px-4 py-2 bg-red-50 text-sm text-red-600 font-medium">
                    <p>{errorMessage}</p>
                  </div>
                )}
                {addResponderFields.map((field: any, index: number) => (
                  <FormField
                    key={index?.toString()}
                    field={field}
                    value={
                      formValues[
                        field?.variable as keyof {
                          email: string;
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
                <MultiTextInput
                  values={formValues?.roles}
                  onChange={(values: any) =>
                    setFormValues({ ...formValues, roles: values })
                  }
                  label="Roles"
                  placeholder="e.g., Ambulance Driver"
                />
                <label className="text-xs text-black font-bold mt-2">Sex</label>
                <div className="w-full flex flex-row gap-4 justify-between">
                  <button
                    type="button"
                    onClick={() =>
                      setFormValues({ ...formValues, sex: "male" })
                    }
                    className={`shadow ${
                      formValues?.sex === "male"
                        ? "text-white bg-primary"
                        : "text-primary bg-blue-50"
                    } shadow-blue-600 rounded-2xl py-2 w-[50%] hover:scale-105`}
                  >
                    <p className="text-sm font-bold">Male</p>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormValues({ ...formValues, sex: "female" })
                    }
                    className={`shadow ${
                      formValues?.sex === "female"
                        ? "text-white bg-primary"
                        : "text-primary bg-blue-50"
                    } shadow-blue-600 rounded-2xl py-2 w-[50%] hover:scale-105`}
                  >
                    <p className="text-sm font-bold">Female</p>
                  </button>
                </div>
                <button
                  disabled={isAdding}
                  type="submit"
                  className="w-full px-4 py-2 font-semibold text-white bg-primary rounded-2xl hover:bg-primary focus:outline-none shadow-md focus:shadow-primary focus:ring-primary-50 focus:ring-offset-2 hover:scale-105 mt-8  flex items-center justify-center"
                >
                  {isAdding ? (
                    <div className="w-6 h-6 border-t-2 border-r-2 border-white rounded-full animate-spin" />
                  ) : (
                    <p>Add</p>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AddResponder;
