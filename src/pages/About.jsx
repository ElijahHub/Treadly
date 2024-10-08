import React, { useState } from "react";
import StarRating from "react-star-ratings";
import { CommonHero } from "../components/common/Others";
import { banner, review_img } from "../assets";
import { Button } from "../components/common";
import { FAQS } from "../constant";
import { CiCircleQuestion } from "react-icons/ci";
import { Deals, Labels } from "../components";
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  const [active, setActive] = useState(0);
  const reviews = [
    {
      name: "Anthony N. Southall",
      country: "Australia",
    },
    {
      name: "Tommy Reaves",
      country: "Melbourne",
    },
    {
      name: "Cassandra Noel",
      country: "Africa",
    },
  ];

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
                src='https://images.asos-media.com/products/new-balance-9060-sneakers-in-bright-blue-with-pink-detail/206054530-1-midblue'
                alt='shoe'
                width={300}
                className='w-full h-full '
              />
            </div>
            <div className=' w-[20rem] h-[20rem] absolute right-24 bottom-10 bg-n-8 overflow-hidden box-border '>
              <img
                src='https://images.asos-media.com/products/nike-running-infinity-run-4-sneakers-in-black-and-white/206391098-1-black'
                alt='shoe'
                width={300}
                className='w-full h-full'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#eee]'>
        <Labels />
      </div>
      <div className='container my-20  grid grid-cols-1 gap-6 justify-center lg:grid-cols-2 '>
        <div className=' hidden lg:flex relative py-20 '>
          <div className=' relative w-[20rem] h-[30rem] overflow-hidden box-border'>
            <img
              src='https://images.asos-media.com/products/nike-running-infinity-run-4-sneakers-in-blue-and-white/205825923-1-midblue'
              alt='nike'
              width={400}
              className='w-full h-full'
            />
          </div>
          <div className='relative top-[20%] left-[-18%]  w-[20rem] h-[30rem] overflow-hidden box-border'>
            <img
              src='https://images.asos-media.com/products/asos-design-penny-loafers-in-black-and-white-leather/206149953-1-black'
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

      <div className='container my-20 flex flex-col gap-10 '>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-4 items-start'>
            <p className='body-2 text-red-500'>WHAT BUYERS SAY</p>
            <h3 className='h3'>Latest Buyers Reviews</h3>
          </div>
          <div className=' hidden sm:flex items-center justify-end'>
            <Button className='flex items-center justify-center gap-2 bg-red-500 py-4 px-6 rounded-sm '>
              <p className='body-2 text-n-1 '>More Reviews</p>
              <FaArrowRight className='text-n-1' />
            </Button>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
          {reviews.map((el, i) => (
            <div
              key={i}
              className='flex flex-col items-start p-11 border border-n-3 rounded-sm gap-10 '
            >
              <p className='text-body-2  text-n-3'>
                "Impressed with master class support of the team and really look
                forward for the future. Really, really well made! Love that each
                component is handmade and customized Great Work!"
              </p>
              <StarRating
                starRatedColor='#ff9900'
                starDimension='25px'
                starSpacing='2px'
                isSelectable={false}
                rating={5}
              />
              <div className='flex gap-5 justify-start items-center '>
                <div className='w-[5rem] h-[5rem]  rounded-full'>
                  <img
                    src={review_img}
                    alt='profile pic'
                    className='w-full rounded-full'
                  />
                </div>
                <div className='flex flex-col gap-2 '>
                  <h5 className='h5'>{el.name}</h5>
                  <p className='text-body-2 text-n-3'>{el.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Deals />
    </>
  );
};

export default About;
