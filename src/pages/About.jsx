import React, { useState } from "react";
import { CommonHero } from "../components/common/Others";
import { banner, shoe_1, shoe_2, shoe_4, shoe_6, shoe_7 } from "../assets";
import { Button } from "../components/common";
import { FAQS, labels } from "../constant";
import { FaQuestionCircle } from "react-icons/fa";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { CiCircleQuestion } from "react-icons/ci";

const About = () => {
  const [active, setActive] = useState(0);

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
      <div className='container my-20  grid grid-cols-1 gap-6 justify-center lg:grid-cols-2 '>
        <div className=' hidden lg:flex relative py-20 '>
          <div className=' relative w-[20rem] h-[30rem] overflow-hidden box-border'>
            <img
              src={shoe_6}
              alt='nike'
              width={400}
              className='w-full h-full'
            />
          </div>
          <div className='relative top-[20%] left-[-18%]  w-[20rem] h-[30rem] overflow-hidden box-border'>
            <img
              src={shoe_4}
              alt='nike'
              width={400}
              className='w-full h-full'
            />
          </div>
        </div>
        <div className=' flex flex-col gap-4 '>
          <p className='body-2 text-red-500'>Find Answer Here</p>
          <h3 className='h3 text-n-8'>Classic Interiors & Exteriors</h3>
          <p className='body-2 text-n-3'>
            {" "}
            Mobilia similitude solute laboriously distinction, ahem maxima endue
            under aquae dolores banditries <br />
            Mobilia similitude solute laboriously distinction, ahem maxima
          </p>

          <div className='flex flex-col gap-2 pt-5  '>
            {FAQS.map((el, i) => (
              <div key={i} className='flex flex-col gap-3'>
                <div
                  className='border border-n-3 flex justify-between items-center py-3 px-6 cursor-pointer '
                  onClick={() => setActive(i)}
                >
                  <h6 className='h6'>{el}</h6>
                  <CiCircleQuestion className='h4' />
                </div>
                <div className={`${active === i ? "" : "hidden"} px-6 py-2`}>
                  <p className='body-2 text-n-3'>
                    Saw wherein fruitful good days image them, midst, waters
                    upon, swa. Seas light seasons. Fourth hath rule creepster
                    own lesser years itself so seed fifth for grass.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className='border-[0.5px] border-[#eee]  ' />

      <div className='container'></div>
    </>
  );
};

export default About;
