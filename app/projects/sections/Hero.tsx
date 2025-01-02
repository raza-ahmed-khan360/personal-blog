import React from "react";

function Hero({ title = "PROJECTS" }) {
  return (
    <h1 className="bg-white pt-16 font-semibold flex justify-center text-center text-[40px] sm:text-[80px] md:text-[120px] lg:text-[180px] xl:text-[227px]">
      {title}
    </h1>
  );
}

export default Hero;
