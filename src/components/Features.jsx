import React from "react";
import { features } from "../constant";
import { Box } from "./common/Others";

const Features = () => {
  return (
    <section className=' my-16  '>
      <div className='container'>
        <Box className='py-16 px-8 grid grid-cols-1 items-center justify-center shadow-md rounded-lg sm:grid-cols-2 lg:grid-cols-4 lg:py-10  mx-auto '>
          {features.map((item) => (
            <div
              key={item.title}
              className='flex flex-col gap-1 my-5 px-3 items-center justify-center lg:my-0 '
            >
              <div className='mb-2'>
                <img src={item.icon} width={34} height={34} alt={item.title} />
              </div>
              <h6 className='h6'>{item.title}</h6>
              <p className='body-2 text-center'>{item.text}</p>
            </div>
          ))}
        </Box>
      </div>
    </section>
  );
};

export default Features;
