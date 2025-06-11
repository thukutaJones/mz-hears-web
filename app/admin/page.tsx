import HeroSection from "@/components/admin/HeroSection";
import Stats from "@/components/admin/Stats";
import Breadcrumb from "@/components/Breadcrumb";
import Charts from "@/components/admin/Charts";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] overflow-auto scroll-container p-8">
      <Breadcrumb />
      <HeroSection />
      <Stats />
      <Charts />
    </div>
  ); 
};

export default page;
