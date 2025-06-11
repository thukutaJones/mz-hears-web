import React, { useEffect } from "react";

const LoadingAnimation = () => {
  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden");
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-[9999]">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
