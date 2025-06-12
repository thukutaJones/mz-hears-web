"use client";

import HeroSection from "@/components/admin/HeroSection";
import Stats from "@/components/admin/Stats";
import Breadcrumb from "@/components/Breadcrumb";
import Charts from "@/components/admin/Charts";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import axios from "axios";
import { baseUrl } from "@/contants/baseUrl";
import Alert from "@/components/Alert";

interface AlertState {
  message: string;
  type: "error" | "success" | "warning";
}

const page = () => {
  const user = useAuth(["admin"]);
  const [alert, setAlert] = useState<AlertState | null>(null);
  const [stats, setStats] = useState<any>({});

  const fetchDashboardStats = async () => {
    if (!user) return;
    try {
      const res = await axios.get(
        `${baseUrl}/api/v1/dashboard-stats/admin/${user?.id}`
      );
      setStats(res.data?.data);
    } catch (error: any) {
      setAlert({
        type: "error",
        message:
          error?.response?.data?.message ||
          "Something went wrong!! Please try again...",
      });
    }
  };

  useEffect(() => {
    fetchDashboardStats();
  }, [user]);
  return (
    <div className="w-full h-[calc(100vh-80px)] overflow-auto scroll-container p-8">
      <Breadcrumb />
      <HeroSection name={stats?.admin?.fullName} />
      <Stats stats={stats}/>
      <Charts />
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
    </div>
  );
};

export default page;
