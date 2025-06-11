"use client";

import Alert from "@/components/Alert";
import Breadcrumb from "@/components/Breadcrumb";
import AddResponder from "@/components/operator/staff/AddResponder";
import StaffMembers from "@/components/operator/staff/StaffMembers";
import { baseUrl } from "@/contants/baseUrl";
import { useAuth } from "@/hooks/useAuth";
import { getFacilityId } from "@/utils/getFacilityid";
import axios from "axios";
import { useEffect, useState } from "react";

interface AlertState {
  message: string;
  type: "error" | "success" | "warning";
}

const page = () => {
  const user = useAuth(["operator"]);
  const [addResponderToggle, setAddResponderToggle] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertState | null>(null);
  const [responders, setResponders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchResponders = async () => {
    if (!user) return;
    try {
      const facilityId = await getFacilityId(user?.id || "", user?.token || "");
      const res = await axios.get(
        `${baseUrl}/api/v1/responder/facility/${facilityId}`
      );
      setResponders(res?.data?.responders);
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
    fetchResponders();
  }, [user]);

  return (
    <div className="px-6 w-full min-h-screen bg-gradient-to-br from-white to-purple-50 p-8">
      <Breadcrumb />
      <div className="w-full flex flex-row justify-end">
        <button
          className="bg-primary py-2 px-10 rounded-lg hover:scale-105 hover:shadow hover:shadow-blue-600"
          onClick={() => setAddResponderToggle(true)}
        >
          <p className="text-sm text-white font-bold">Add Responder</p>
        </button>
      </div>
      <StaffMembers staffMembers={responders} isLoading={isLoading} />
      {addResponderToggle && (
        <AddResponder
          toggleAdd={addResponderToggle}
          setHandleToggleAdd={setAddResponderToggle}
          callBack={fetchResponders}
          handlSuccess={(message: any) =>
            setAlert({ type: "success", message: message })
          }
          user={user}
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
