"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuth } from "@/hooks/useAuth";
import LoadingAnimation from "@/components/LoadingAnimation";
import Alert from "@/components/Alert";
import { baseUrl } from "@/contants/baseUrl";
import PromptModal from "@/components/PrompModal";
import Breadcrumb from "@/components/Breadcrumb";

interface AlertState {
  message: string;
  type: "error" | "success" | "warning";
}

interface PromptModalState {
  title: string;
  message: string;
  handleOk: any;
}

const Page = () => {
  const user_ = useAuth(["operator"]);
  const [user, setUser] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertState | null>(null);
  const [prompt, setPrompt] = useState<PromptModalState | null>(null);

  const router = useRouter();

  const fetchUser = async () => {
    if (!user_) return;
    setIsLoading(true);
    try {
      const res = await axios.get(`${baseUrl}/api/v1/user/staff-member/${user_?.id}`, {
        headers: {
          Authorization: `Bearer ${user_?.token}`,
        },
      });
      setUser(res.data.user);
    } catch (error: any) {
      setAlert({
        type: "error",
        message:
          error?.response?.data?.message ||
          "Unable to retrieve staff data. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [user_]);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      localStorage.removeItem("token");
      router.replace("/sign-in");
    } catch (error: any) {
      setAlert({
        type: "error",
        message:
          error?.response?.data?.message ||
          "Sign out failed. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    setPrompt({
      title: "Confirm Deletion",
      message: "This action will permanently delete your account. Continue?",
      handleOk: async () => {
        try {
          setIsLoading(true);
          // Add actual delete logic here
        } catch (error: any) {
          setAlert({
            type: "error",
            message:
              error?.response?.data?.message || "Failed to delete account.",
          });
        } finally {
          setIsLoading(false);
          setPrompt(null);
        }
      },
    });
  };

  if (!user || isLoading) return <LoadingAnimation />;

  return (
    <div className="py-6 px-4 md:px-20 w-full font-sans">
      <Breadcrumb />
      <div className="flex flex-col mt-4 md:flex-row md:items-center gap-4 md:gap-8 bg-white p-6 rounded-lg shadow-sm">
        <Image
          src={"/profile.png"}
          width={120}
          height={120}
          alt="Profile Picture"
          className="rounded-full h-28 w-28 object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold text-primary">{user?.fullName}</h2>
          <p className="text-sm text-gray-700 mt-1">
            {user?.role?.toUpperCase()} | {user?.facility?.location?.name || "—"}
          </p>
        </div>
      </div>

      {/* Personal Info */}
      <div className="mt-2 bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-primary mb-4">
          Staff Information
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-600 font-medium">Full Name</p>
            <p className="text-base text-black">{user?.fullName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">Email Address</p>
            <p className="text-base text-black">{user?.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">Role / Position</p>
            <p className="text-base text-black">{user?.role}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">Phone number</p>
            <p className="text-base text-black"> {user?.phoneNumber}</p>
          </div>
        </div>
      </div>

      {/* Account Actions */}
      <div className="mt-2 bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-primary mb-4">
          Account Settings
        </h3>
        <div className="flex flex-col gap-4">
          <button
            className="flex items-center gap-3 text-red-600 hover:text-red-800"
            onClick={handleDeleteAccount}
          >
            <MdDelete size={24} />
            <span>Delete Account</span>
          </button>
          <button
            className="flex items-center gap-3 text-blue-600 hover:text-blue-800"
            onClick={handleLogout}
          >
            <IoMdLogOut size={24} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
      {prompt?.title && (
        <PromptModal
          title={prompt?.title}
          message={prompt?.message}
          handleCancel={() => setPrompt(null)}
          handleOk={prompt.handleOk}
        />
      )}
    </div>
  );
};

export default Page;
