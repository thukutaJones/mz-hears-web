"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoPerson } from "react-icons/io5";
import { IoMedical } from "react-icons/io5";
import { RiHome5Fill } from "react-icons/ri";

const SideBar = () => {
  const path = usePathname();

  return (
    <div className="w-full bg-primary h-full">
      <nav className="w-full h-full">
        <ul className="w-full h-full flex flex-col justify-center items-center gap-10">
          <Link href="/staff-member">
            <li
              className="p-2 rounded-full"
              style={{
                backgroundColor:
                  path === "/staff-member"
                    ? "rgba(255, 255, 255, 0.3)"
                    : "transparent",
              }}
            >
              <RiHome5Fill size={23} color="white" />
            </li>
          </Link>
          <Link href="/staff-member/emergencies">
            <li
              className="p-2 rounded-full"
              style={{
                backgroundColor:
                  path === "/staff-member/emergencies"
                    ? "rgba(255, 255, 255, 0.3)"
                    : "transparent",
              }}
            >
              <IoMedical size={23} color="white" />
            </li>
          </Link>
          <Link href="/staff-member/profile">
            <li
              className="p-2 rounded-full"
              style={{
                backgroundColor:
                  path === "/staff-member/profile"
                    ? "rgba(255, 255, 255, 0.3)"
                    : "transparent",
              }}
            >
              <IoPerson size={23} color="white" />
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
