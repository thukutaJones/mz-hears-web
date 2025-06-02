import React from "react";

const Bottom = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div>
      <button
        disabled={isLoading}
        type="submit"
        className="w-full px-4 py-2 font-semibold text-white bg-primary rounded-full focus:outline-none shadow-md focus:shadow-primary text-primary-500 focus:ring-offset-2 mt-4  flex items-center justify-center hover:scale-105"
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2 py-2">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        ) : (
          <p>Sign In</p>
        )}
      </button>
    </div>
  );
};

export default Bottom;
