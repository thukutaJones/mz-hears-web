"use client";

import FormField from "@/components/FormField";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { baseUrl } from "@/contants/baseUrl";
import Dropdown from "../DropDown";
import MultiSelect from "../MultiSelect";
import MultiTextInput from "../MultiTextInput";

interface FormValues {
  operator: any;
  location: any;
  services: string[];
  typeOfEmergencies: string[];
}

const AddFacility = ({
  toggleAdd,
  setHandleToggleAdd,
  handleSuccess,
  callBack,
}: {
  toggleAdd: boolean;
  setHandleToggleAdd: (toggle: boolean) => void;
  handleSuccess: any;
  callBack: any;
}) => {
  const [formValues, setFormValues] = useState<FormValues>({
    operator: {},
    location: {},
    services: [],
    typeOfEmergencies: [],
  });

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [operators, setOperators] = useState<any[]>([]);
  const [locations, setLocations] = useState<any[]>([]);
  const [toggleSelectLocation, setToggleSelectLocation] =
    useState<boolean>(false);

  const [isFetchingOperators, setIsFetchingOperators] =
    useState<boolean>(false);
  const [isFetchingLocations, setIsFetchingLocations] =
    useState<boolean>(false);
  const [toggleSelectOperator, setToggleSelectOperator] =
    useState<boolean>(false);

  const fetchOperators = async () => {
    setIsFetchingOperators(true);
    try {
      const res = await axios.get(`${baseUrl}/api/v1/operator`);
      setOperators(res?.data?.operators);
    } catch (error: any) {
      setErrorMessage(
        error?.response?.data?.message ||
          "Something went wrong!! Please try again"
      );
    } finally {
      setIsFetchingOperators(false);
    }
  };

  useEffect(() => {
    fetchOperators();
  }, []);

  const fetchLocations = async () => {
    setIsFetchingLocations(true);
    try {
      const res = await axios.get(`${baseUrl}/api/v1/location`);
      setLocations(res?.data?.locations);
    } catch (error: any) {
      setErrorMessage(
        error?.response?.data?.message ||
          "Something went wrong!! Please try again"
      );
    } finally {
      setIsFetchingLocations(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setIsAdding(true);
    try {
      await axios.post(`${baseUrl}/api/v1/facility`, formValues);
      handleSuccess("Facility added successfully");
      await callBack();
      setHandleToggleAdd(false);
    } catch (error: any) {
      setErrorMessage(
        error?.response?.data?.message ||
          "Something went wrong!! Please try again"
      );
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <>
      {toggleAdd ? (
        <div
          className={`fixed inset-0 w-full h-screen z-[999]`}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7" }}
          onClick={() => setHandleToggleAdd(false)}
        >
          <div className="w-full flex flex-row items-end justify-end mt-2 px-6">
            <button className="" onClick={() => setHandleToggleAdd(false)}>
              <IoClose
                size={35}
                className="hover:scale-110 text-white hover:text-red-600"
              />
            </button>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <div
              className="z-10 flex flex-col items-center justify-center md:mt-4 no-scrollbar w-full min-h-[70vh] max-h-[85vh] rounded-xl md:w-[30%] overflow-auto pb-4 animated fadeInUp bg-white px-8"
              onClick={(e: any) => {
                e.stopPropagation();
              }}
            >
              <h2 className="text-center text-primary font-black text-2xl mt-20 md:mt-2">
                Add Facility
              </h2>
              {errorMessage && (
                <div className="mt-2 rounded-lg px-4 py-2 bg-red-50 text-sm text-red-600 font-medium">
                  <p>{errorMessage}</p>
                </div>
              )}
              <form onSubmit={handleAdd} className="w-full mt-4">
                <div className="mt-4 w-full">
                  <label className="block text-sm font-bold text-gray-700">
                    Operator
                  </label>
                  <Dropdown
                    title="Select operator"
                    options={operators}
                    handleSelectOption={(option: any) => {
                      setFormValues({
                        ...formValues,
                        operator: option,
                      });
                    }}
                    isLoading={isFetchingOperators}
                    isOpen={toggleSelectOperator}
                    setIsOpen={setToggleSelectOperator}
                    selectedOption={formValues?.operator?.fullName}
                    variable="fullName"
                  />
                </div>
                <div className="mt-4 w-full">
                  <label className="block text-sm font-bold text-gray-700">
                    Location
                  </label>
                  <Dropdown
                    title="Select location"
                    options={locations}
                    handleSelectOption={(option: any) => {
                      setFormValues({
                        ...formValues,
                        location: option,
                      });
                    }}
                    isLoading={isFetchingOperators}
                    isOpen={toggleSelectLocation}
                    setIsOpen={setToggleSelectLocation}
                    selectedOption={formValues?.location?.name}
                    variable="name"
                  />
                </div>
                <MultiTextInput
                  values={formValues?.services}
                  onChange={(values: any) =>
                    setFormValues({ ...formValues, services: values })
                  }
                  label="Services"
                  placeholder="e.g., Ambulance"
                />
                <MultiTextInput
                  values={formValues?.typeOfEmergencies}
                  onChange={(values: any) =>
                    setFormValues({ ...formValues, typeOfEmergencies: values })
                  }
                  label="Types of Emergency"
                  placeholder="e.g., Heart Attack"
                />
                <button
                  disabled={isAdding}
                  type="submit"
                  className="w-full px-4 py-2 font-semibold text-white bg-primary rounded-md hover:bg-primary focus:outline-none shadow-md focus:shadow-primary focus:ring-primary-50 focus:ring-offset-2 hover:scale-105 mt-8  flex items-center justify-center"
                >
                  {isAdding ? (
                    <div className="w-6 h-6 border-t-2 border-r-2 border-white rounded-full animate-spin" />
                  ) : (
                    <p>Add</p>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AddFacility;
