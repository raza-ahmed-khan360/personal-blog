import React from "react";

function Hero({ title = "PRIVACY POLICY" }) {
  return (
    <h1 className="bg-white pt-16 font-semibold flex justify-center text-center text-[30px] sm:text-[70px] md:text-[110px] lg:text-[120px] xl:text-[143px]">
      {title}
    </h1>
  );
}

export default Hero;
