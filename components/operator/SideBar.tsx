"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosPeople } from "react-icons/io";
import { IoMedical } from "react-icons/io5";
import { FaSuitcaseMedical } from "react-icons/fa6";
import { TiTickOutline } from "react-icons/ti";
import { RiHome5Fill } from "react-icons/ri";

const SideBar = () => {
  const path = usePathname();

  return (
    <div className="w-full bg-primary h-full">
      <nav className="w-full h-full">
        <ul className="w-full h-full flex flex-col justify-center items-center gap-10">
          <Link href="/operator">
            <li
              className="p-2 rounded-full"
              style={{
                backgroundColor:
                  path === "/operator"
                    ? "rgba(255, 255, 255, 0.3)"
                    : "transparent",
              }}
            >
              <RiHome5Fill size={23} color="white" />
            </li>
          </Link>
          <Link href="/operator/staff">
            <li
              className="p-2 rounded-full"
              style={{
                backgroundColor:
                  path === "/operator/staff"
                    ? "rgba(255, 255, 255, 0.3)"
                    : "transparent",
              }}
            >
              <IoIosPeople size={23} color="white" />
            </li>
          </Link>
          <Link href="/operator/emergencies">
            <li
              className="p-2 rounded-full"
              style={{
                backgroundColor:
                  path === "/operator/emergencies"
                    ? "rgba(255, 255, 255, 0.3)"
                    : "transparent",
              }}
            >
              <IoMedical size={23} color="white" />
            </li>
          </Link>
          <Link href="/operator/services">
            <li
              className="p-2 rounded-full"
              style={{
                backgroundColor:
                  path === "/operator/services"
                    ? "rgba(255, 255, 255, 0.3)"
                    : "transparent",
              }}
            >
              <FaSuitcaseMedical size={23} color="white" />
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
