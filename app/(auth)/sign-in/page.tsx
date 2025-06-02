"use client";

import LeftSection from "@/components/auth/LeftSection";
import RightSection from "@/components/auth/RightSection";
import React from "react";

const page = () => {
  return (
    <div className="w-full p-2 gap-4 h-full overflow-hidden scroll-container bg-slate-50 flex flex-row">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default page;
