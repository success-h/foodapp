import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex px-4 md:px-0 justify-center  mx-auto mt-16 w-full flex-col md:grid grid-cols-2">
      <div className="mx-auto flex flex-col mt-7">
        <h1 className="md:mt-7 text-center md:text-start text-6xl lg:text-7xl font-semibold font-Philosopher ">
          it&#39;s not just Food, it&#39;s an Experience.
        </h1>
        <div className="mt-10 mb-10 justify-center md:justify-start gap-5 flex text-xs">
          <button className="btn-brown">View Menu</button>
          <button className="btn-white">Book A Table</button>
        </div>
      </div>
      <div className="w-full justify-center">
        <Image
          src="/hero.png"
          height={600}
          width={600}
          alt="hero"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Hero;
