"use client";

import Alert from "@/components/Alert";
import MainContent from "@/components/operator/MainContent";
import Profile from "@/components/operator/Profile";
import { baseUrl } from "@/contants/baseUrl";
import { useAuth } from "@/hooks/useAuth";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface AlertState {
  message: string;
  type: "error" | "success" | "warning";
}

const page = () => {
  const user = useAuth(["operator"]);
  const [alert, setAlert] = useState<AlertState | null>(null);
  const [stats, setStats] = useState<any>({});

  const fetchDashboardStats = async () => {
    if (!user) return;
    try {
      const res = await axios.get(
        `${baseUrl}/api/v1/dashboard-stats/operator/${user?.id}`
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
    <div className="w-full flex flex-row">
      <MainContent data={stats} />
      <Profile data={stats} />
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
