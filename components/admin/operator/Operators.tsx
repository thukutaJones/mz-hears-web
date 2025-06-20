"use client";

import SimpleLoadingAnimation from "@/components/SimpleLoadingAnimation";
import Image from "next/image";
import React, { useState } from "react";
import { FiEdit2, FiTrash2, FiEye } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";

const Operators = ({
  isLoading,
  operators = [],
}: {
  isLoading: boolean;
  operators: any[];
}) => {
  if (isLoading)
    return (
      <div className="h-[50vh] w-full flex items-center justify-center">
        <SimpleLoadingAnimation />
      </div>
    );

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full text-sm text-gray-700">
        <thead className="bg-transparent text-left uppercase text-xs text-gray-500 tracking-wider">
          <tr>
            <th className="p-4">Operator</th>
            <th className="p-4">Email</th>
            <th className="p-4">Facility</th>
            <th className="p-4">Status</th>
            <th className="p-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {operators.map((operator: any, index: number) => (
            <tr
              key={index?.toString()}
              className={`${
                index !== operators?.length - 1 && "border-b border-gray-200"
              } hover:bg-gray-50 transition duration-200`}
            >
              <td className="p-4 flex items-center gap-3">
                <Image
                  src={"/profile.png"}
                  width={100}
                  height={100}
                  alt={"profile"}
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-medium">{operator?.fullName}</span>
              </td>
              <td className="p-4">{operator?.email}</td>
              <td className={`p-4`}>
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                    operator?.facility
                      ? ""
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {operator?.facility?.location?.name || "not assigned"}
                </span>
              </td>
              <td className="p-4">
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                    operator?.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {operator?.status}
                </span>
              </td>
              <td className="p-4 text-right space-x-2">
                <button className="text-blue-500 hover:text-blue-700">
                  <FiEye size={18} />
                </button>
                <button className="text-yellow-500 hover:text-yellow-600">
                  <FiEdit2 size={18} />
                </button>
                <button className="text-red-500 hover:text-red-600">
                  <FiTrash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
          {operators.length === 0 && (
            <tr>
              <td colSpan={5} className="p-6 text-center text-gray-500">
                No operators available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Operators;
