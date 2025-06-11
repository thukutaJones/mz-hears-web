"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosPeople } from "react-icons/io";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaHospital } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";

import Image from "next/image";
import { primary } from "@/contants/colors";

const SideBar = () => {
  const path = usePathname();

  return (
    <div className="w-full bg-white h-full px-4 py-8">
      <div className="w-full flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <Image
            src="/logo.png"
            width={100}
            height={100}
            alt="Logo"
            className="w-5 h-5"
          />
          <Link href="/admin">
            <h1 className="text-xl font-bold text-black uppercase">Masm-Mears</h1>
          </Link>
        </div>
      </div>
      <p className="mt-10 text-sm text-gray-400 font-bold">Main Menu</p>
      <nav className="w-full h-full mt-4">
        <ul className="w-full h-full flex flex-col gap-4">
          <li>
            <Link
              href="/admin"
              className={`flex flex-row gap-2 items-center ${
                path === "/admin" ? "bg-primary" : "bg-gray-100"
              }  py-2 px-2 rounded-lg hover:scale-105`}
            >
              <TbLayoutDashboardFilled
                color={path === "/admin" ? "white" : primary}
                size={25}
              />
              <p  className={`${
                  path === "/admin" ? "text-white" : "text-primary"
                } text-sm`}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/operators"
              className={`flex flex-row gap-2 items-center ${
                path === "/admin/operators" ? "bg-primary" : "bg-gray-100"
              }  py-2 px-2 rounded-lg hover:scale-105`}
            >
              <FaUserTie
                color={path === "/admin/operators" ? "white" : primary}
                size={25}
              />
              <p
                className={`${
                  path === "/admin/operators" ? "text-white" : "text-primary"
                } text-sm`}
              >
                Operators
              </p>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/users"
              className={`flex flex-row gap-2 items-center ${
                path === "/admin/users" ? "bg-primary" : "bg-gray-100"
              }  py-2 px-2 rounded-lg hover:scale-105`}
            >
              <IoIosPeople
                color={path === "/admin/users" ? "white" : primary}
                size={25}
              />
              <p
                className={`${
                  path === "/admin/users" ? "text-white" : "text-primary"
                } text-sm`}
              >
                Users
              </p>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/facilities"
              className={`flex flex-row gap-2 items-center ${
                path === "/admin/facilities"
                  ? "bg-primary"
                  : "bg-gray-100"
              }  py-2 px-2 rounded-lg hover:scale-105`}
            >
              <FaHospital
                color={path === "/admin/facilities" ? "white" : primary}
                size={25}
              />
              <p className={`${
                path === "/admin/facilities" ? "text-white" : "text-primary"
              } text-sm overflow-clip line-clamp-1`}>
                Facilities
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
