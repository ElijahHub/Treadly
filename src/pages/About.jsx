import React from "react";
import { CommonHero } from "../components/common/Others";
import { banner, shoe_1, shoe_2, shoe_4 } from "../assets";
import { Button } from "../components/common";
import { labels } from "../constant";

const About = () => {
  return (
    <>
      <CommonHero text='About' quote='ABOUT US' image={banner} />
      <div className='container my-20 '>
        <div className='flex gap-11 flex-col-reverse lg:flex-row '>
          <div className='w-full lg:w-1/2 flex flex-col gap-4'>
            <p className='body-2 text-red-500'>Massey Collection 2022</p>
            <h4 className='h4 text-n-8'>
              Autumn Deal, discounts up to 20% are waiting for you
            </h4>
            <p className='body-2 text-n-3'>
              {" "}
              Mobilia similitude solute laboriously distinction, ahem maxima
              endue under aquae dolores banditries..{" "}
            </p>
            <p className='body-2 text-n-3'>
              Open created shall two he second moving whose. He face whose two
              upon, fowl behold waters. Fly there their day creepster. Darkness
              beginning spirit after. Creepster subdue. Brought may first. Under
              living that. Third for morning whales saw were had seed can't
              divide it light shall moving, us blessed given wherein
            </p>
            <Button
              className='w-[12rem] py-3 bg-n-8 text-n-1 mt-6 '
              text='Learn More'
            />
          </div>
          <div className='hidden lg:block lg:w-1/2 relative  '>
            <div className=' w-[20rem] h-[20rem] absolute left-0 top-0 bg-n-8 overflow-hidden box-border '>
              <img
                src={shoe_1}
                alt='shoe'
                width={300}
                className='w-full h-full '
              />
            </div>
            <div className=' w-[20rem] h-[20rem] absolute right-24 bottom-10 bg-n-8 overflow-hidden box-border '>
              <img
                src={shoe_4}
                alt='shoe'
                width={300}
                className='w-full h-full'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#eee]'>
        <div className='container  flex items-center justify-center gap-10 py-10 flex-wrap'>
          {labels.map((item, i) => (
            <div key={i} className='cursor-pointer'>
              <img
                src={item}
                className=' w-full'
                width={200}
                height={200}
                alt='images'
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
