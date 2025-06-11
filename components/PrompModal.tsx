import React from "react";
import { MdOutlineErrorOutline } from "react-icons/md";

const PromptModal = ({
  title,
  message,
  handleCancel,
  handleOk
}: {
  title: string;
  message: string;
  handleCancel: any;
  handleOk: any;
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black text-primary bg-opacity-80 flex justify-center items-center overflow-hidden z-[9999] px-4 md:px-0">
      <div className="w-full md:w-[35%] shadow-lg rounded-xl">
        <div className="p-6 flex flex-row gap-4 items-start bg-white rounded-t-xl">
          <div className="p-2 bg-red-100 rounded-full">
            <MdOutlineErrorOutline size={25} color="red" />
          </div>
          <div className="">
            <h3 className="text-lg font-bold" style={{ fontWeight: 800}}>{title}</h3>
            <p style={{ fontWeight: 500}}>{message}</p>
          </div>
        </div>
        <div className="w-full bg-slate-50 p-4 rounded-b-xl flex flex-row justify-end gap-4">
          <button
            className="px-6 py-1 border-2 rounded-xl border-red-600 hover:bg-red-100 hover:scale-110"
            onClick={async() => {
              handleCancel()
              await handleOk()
            }}
          >
            <p className="text-sm font-bold text-red-600">Continue</p>
          </button>
          <button
            className="px-6 py-1 bg-primary rounded-xl hover:scale-110"
            onClick={handleCancel}
          >
            <p className="text-sm font-bold text-white">Cancel</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptModal;
