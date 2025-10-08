import React from "react";

function Hero({ title = "THE BLOG" }) {
  return (
    <h1 className="bg-white pt-8 font-semibold flex justify-center text-center text-[40px] sm:text-[80px] md:text-[120px] lg:text-[180px] xl:text-[243px]">
      {title}
    </h1>
  );
}

export default Hero;
