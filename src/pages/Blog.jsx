import React from "react";
import { banner } from "../assets";
import { CommonHero } from "../components/common/Others";
import { blogContent } from "../constant";
import { Button } from "../components/common";
import { Deals } from "../components";
const Blog = () => {
  const tags = [
    "Finance",
    "Testing",
    "Developing",
    "Landscape",
    "Lawncare",
    "Gardening",
    "Watering",
    "Material",
  ];

  return (
    <>
      <CommonHero text='Blog' quote='BLOG' image={banner} />
      <div className='container my-20 '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 '>
          {blogContent.flatMap((item) => (
            <div key={item.title} className='flex flex-col gap-6 group'>
              <div className='w-full h-[17rem] overflow-hidden box-border  '>
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-full scale-[1.2] group-hover:translate-x-3 '
                />
              </div>
              <div className='flex flex-wrap gap-3'>
                {tags.flatMap((el, i) => (
                  <div
                    key={i}
                    className='border border-n-3 p-2 cursor-pointer transition-all hover:bg-n-7 hover:text-n-1 '
                  >
                    <p className='text-center body-2 text-n-5 hover:text-n-1 '>
                      {el}
                    </p>
                  </div>
                ))}
              </div>
              <hr className=' w-full border border-n-3 ' />
              <h5 className='h5'>{item.title}</h5>
              <p className='body-2 text-n-3'>
                Saw wherein fruitful good days image them, midst, waters upon
                saw. Seas lights seasons. Fourth hath rule Evening...
              </p>
              <Button
                className='bg-n-7 text-n-1 h6 w-[12rem] py-3 body-2 mt-auto '
                text='Read More'
              />
            </div>
          ))}
        </div>
      </div>
      <Deals />
    </>
  );
};

export default Blog;
