import React from "react";

const HeroSection = ({ name }: { name: string }) => {
  return (
    <div className="w-full p-8 bg-primary mt-4 rounded-xl relative">
      <div className="">
        <p className="text-3xl text-white font-bold">Good Morning, {name}</p>
        <p className="text-sm text-white opacity-80 mt-4 max-w-[40%]">
          Have a nice a day managing Mz-hears. Thank you for keeping everything
          running perfectly!
        </p>
      </div>
      <div className="absolute h-full w-full top-0 left-0 bg-[url('/noise.png')] opacity-50 pointer-events-none [mask-image:linear-gradient(to_left,black,transparent)] [-webkit-mask-image:linear-gradient(to_left,black,transparent)]" />
    </div>
  );
};

export default HeroSection;
