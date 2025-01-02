import React from "react";
import Featured from "./sections/Featured";
import Hero from "./sections/Hero";
import RecentPost from "./sections/RecentPost";
import AllBlogs from "./sections/AllBlogs";

function Homepage() {
  return (
    <div>
      <Hero />
      <RecentPost />
      <Featured />
      <AllBlogs />
    </div>
  );
}

export default Homepage;
