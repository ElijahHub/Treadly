import React from "react";
import { banner } from "../assets";
import { CommonHero } from "../components/common/Others";
const Blog = () => {
  return (
    <>
      <CommonHero text='Blog' quote='BLOG' image={banner} />
      <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '></div>
    </>
  );
};

export default Blog;
