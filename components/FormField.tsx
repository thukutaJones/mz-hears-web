import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormField = ({
  field,
  hidePassword,
  setHidePassword,
  value,
  handleOnChange,
}: {
  field: any;
  hidePassword?: boolean;
  setHidePassword?: any;
  value: string;
  handleOnChange: any;
}) => {
  return (
    <div className="w-full">
      <label className="text-xs text-black font-bold">{field?.title}</label>
      <div
        className={`w-full h-10 bg-blue-50 shadow shadow-blue-600 rounded-2xl flex flex-row`}
      >
        <input
          className={`h-full px-4 ${
            field?.placeholder === "••••••••••••" ? "w-[85%]" : "w-full"
          } bg-transparent focus:outline-0 text-black text-sm`}
          placeholder={field?.placeholder}
          id={field?.variable}
          required
          formNoValidate
          type={
            field?.placeholder !== "••••••••••••"
              ? field?.type
              : hidePassword
              ? "password"
              : "text"
          }
          value={value}
          onChange={handleOnChange}
        />
        {field?.placeholder === "••••••••••••" && (
          <div
            className="h-full w-[15%] flex items-center justify-center cursor-pointer"
            onClick={() => setHidePassword(!hidePassword)}
          >
            {hidePassword ? (
              <FaEye className="text-black" size={20} />
            ) : (
              <FaEyeSlash className="text-black" size={20} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormField;
