import React from "react";
import { FaAngleRight } from "react-icons/fa6";

export const Box = ({ children, className, background, title, onClick }) => {
  return (
    <div
      className={` ${
        background || "bg-n-2/10"
      } backdrop-blur border border-n-1/10  ${className || ""}`}
      title={title}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CommonHero = ({ text, quote, image }) => {
  return (
    <main className='mt-[5rem] relative  bg-color-3/10 shadow-sm lg:rounded-br-3xl '>
      <div className='container relative flex items-center py-24 lg:py-0 '>
        <div className=''>
          <h3 className='h3 mb-3 text-n-4 font-serif'>{quote}</h3>
          <div className='flex items-center justify-start gap-2 text-n-5'>
            <p className='body-1 font-[600]'>Home</p>
            <FaAngleRight />
            <p className='body-1'>{text}</p>
          </div>
        </div>

        <div className='hidden lg:block mx-auto mr-10'>
          <img src={image} width={400} className='rounded-lg' alt='banner' />
        </div>
      </div>
    </main>
  );
};

export const CommonHeading = ({ title }) => {
  return (
    <main className='mt-[5rem] relative  bg-[#eee] shadow-sm lg:rounded-br-3xl '>
      <div className='container relative  py-10 '>
        <h4 className='h4 mb-3 text-n-4 font-serif'>{title}</h4>
        <div className='flex items-center justify-start gap-2 text-n-5'>
          <p className='body-2 font-[600]'>Home</p>
          <FaAngleRight />
          <p className='body-2'>Shop</p>
          <FaAngleRight />
          <p className='body-2'>{title}</p>
        </div>
      </div>
    </main>
  );
};
