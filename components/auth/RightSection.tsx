import React, { useEffect, useState } from "react";

const backgrounds = [
  { image: "/bg3.jpg", message: "Mz-Hears: Where Urgency Meets Action." },
  { image: "/bg2.jpg", message: "Log in. Stay Alert. Save Lives." },
  { image: "/bg4.jpg", message: "Powering Health, One Alert at a Time." },
];

const RightSection = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % backgrounds.length);
        setFade(true);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const { image, message } = backgrounds[index];

  return (
    <div className="relative w-[60%] h-full overflow-hidden rounded-xl">
      <div
        className={`absolute inset-0 bg-center bg-cover transition-opacity duration-000 ease-in-out scale-105 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent rounded-xl flex items-end px-16 py-20 z-10">
        <p className="text-white text-4xl font-semibold tracking-wide leading-snug transition-opacity duration-1000 ease-in-out text-center w-full max-w-xl mx-auto drop-shadow-lg">
          {message}
        </p>
      </div>

      <div className="absolute inset-0 bg-black/30 rounded-xl z-0" />
    </div>
  );
};

export default RightSection;
