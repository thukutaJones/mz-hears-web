import Breadcrumb from "@/components/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-[calc(100vh-80vh)] overflow-auto scroll-container p-8">
      <Breadcrumb />
    </div>
  );
};

export default page;
