"use client";

import MainContent from "@/components/responder/MainContent";
import Profile from "@/components/responder/Profile";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-row">
      <MainContent />
      <Profile />
    </div>
  );
};

export default page;
