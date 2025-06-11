"use client";

import AddOperator from "@/components/admin/AddOperator";
import Operators from "@/components/admin/operator/Operators";
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
  const [addOperatorToggle, setAddOperatorToggle] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertState | null>(null);
  const [operators, setOperators] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchOperators = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/v1/operator`);
      setOperators(res?.data?.operators);
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
    fetchOperators();
  }, []);

  return (
    <div className="px-6 w-full min-h-screen bg-gradient-to-br from-white to-purple-50">
      <Breadcrumb />
      <div className="w-full flex flex-row justify-end">
        <button
          className="bg-primary py-2 px-10 rounded-lg hover:scale-105 hover:shadow hover:shadow-blue-600"
          onClick={() => setAddOperatorToggle(true)}
        >
          <p className="text-sm text-white font-bold">Add Operator</p>
        </button>
      </div>
      <Operators operators={operators} isLoading={isLoading} />
      {addOperatorToggle && (
        <AddOperator
          toggleAdd={addOperatorToggle}
          setHandleToggleAdd={setAddOperatorToggle}
          callBack={fetchOperators}
          handlSuccess={(message: any) =>
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
