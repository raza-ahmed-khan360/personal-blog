import React from "react";

function Hero({ title = "Raza Ahmed" }) {
  return (
    <h1 className="bg-white pt-16 tracking-tight font-semibold flex justify-center text-center text-[30px] sm:text-[60px] md:text-[90px] lg:text-[120px] xl:text-[160px]">
      {title}
    </h1>
  );
}

export default Hero;
