"use client";

import AddFacility from "@/components/admin/AddFacility";
import AddOperator from "@/components/admin/AddOperator";
import FacilitiesTable from "@/components/admin/facility/FacilitiesTable";
import Alert from "@/components/Alert";
import Breadcrumb from "@/components/Breadcrumb";
import { baseUrl } from "@/contants/baseUrl";
import axios from "axios";
import { useEffect, useState } from "react";

interface AlertState {
  message: string;
  type: "error" | "success" | "warning";
}

const page = () => {
  const [addFacilityToggle, setAddFacilityToggle] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertState | null>(null);
  const [facilities, setFacilities] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchFacilities = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/v1/facility`);
      setFacilities(res?.data?.facilities);
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
    fetchFacilities();
  }, []);

  return (
    <div className="px-6 pb-40 w-full min-h-screen bg-gradient-to-br from-white to-purple-50 h-[calc(100vh-80px)] overflow-auto scroll-container">
      <Breadcrumb />
      <div className="w-full flex flex-row justify-end">
        <button
          className="bg-primary py-2 px-10 rounded-lg hover:scale-105 hover:shadow hover:shadow-blue-600"
          onClick={() => setAddFacilityToggle(true)}
        >
          <p className="text-sm text-white font-bold">Add Facility</p>
        </button>
      </div>
      <FacilitiesTable facilities={facilities} isLoading={isLoading} />
      {addFacilityToggle && (
        <AddFacility
          toggleAdd={addFacilityToggle}
          setHandleToggleAdd={setAddFacilityToggle}
          callBack={fetchFacilities}
          handleSuccess={(message: any) =>
            setAlert({ type: "success", message: message })
          }
        />
      )}

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
