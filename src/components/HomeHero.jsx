import {
  FaArrowRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { hero_img } from "../assets";
import { ScrollParallax } from "react-just-parallax";
import { Button } from "./common";

const HomeHero = () => {
  return (
    <main className='mt-[5rem] py-10 bg-[#eee] lg:py-20 '>
      {/* Container Element */}
      <div className='container flex flex-col lg:flex-row '>
        {/* Single Block */}
        <div className='flex flex-col items-center gap-4 lg:py-15 lg:items-start'>
          <h6 className='h6'>SUMMER COLLECTION</h6>
          <h1 className='h1 text-center lg:text-left'>
            Fall - Winter <br /> Collection 2030
          </h1>
          <p className='sm:w-[24rem] body-2 text-center lg:w-3/4 lg:py-2 lg:text-left'>
            A specialist label creating luxury essentials. Ethically crafted
            with an unwavering commitment to exceptional quality.
          </p>

          <Button
            isLink
            path='/shop'
            className='w-[15rem] flex items-center justify-center gap-5 bg-n-8 text-n-1 text-center py-3'
          >
            SHOP NOW
            <FaArrowRight />
          </Button>
        </div>
        {/* Single Block */}
        <div className='relative flex max-w-[35rem] mx-auto my-10  lg:my-14 '>
          <div className='relative flex items-center justify-center z-1 p-1 rounded-2xl bg-conic-gradient'>
            <div className='relative bg-[#eee] rounded-[1rem]'>
              <div className='h-[1.4rem] bg-n-10 rounded-t-[0.9rem]' />

              <img
                className='scale-[0.7] -rotate-12  '
                src={hero_img}
                alt='shoe'
              />

              <ScrollParallax isAbsolutelyPositioned>
                <ul className='hidden absolute -left-[7.8rem] bottom-[10rem] px-1 py-1 bg-n-1/60 backdrop-blur border border-n-1/10 rounded-2xl md:flex '>
                  <li className='p-5 cursor-pointer'>
                    <Link>
                      <FaFacebook className='text-[1.5rem] text-blue-600 ' />
                    </Link>
                  </li>
                  <li className='p-5 cursor-pointer'>
                    <Link>
                      <FaPinterest className='text-[1.5rem] text-red-500 ' />
                    </Link>
                  </li>
                  <li className='p-5 cursor-pointer'>
                    <Link>
                      <FaTwitter className='text-[1.5rem] text-blue-600 ' />
                    </Link>
                  </li>
                  <li className='p-5 cursor-pointer'>
                    <Link>
                      <FaInstagram className='text-[1.5rem] text-red-400 ' />
                    </Link>
                  </li>
                </ul>
              </ScrollParallax>

              <div className='flex items-center justify-center py-2 gap-5 mb-3 md:hidden'>
                <FaFacebook className='text-[1.5rem] text-blue-600 ' />
                <FaPinterest className='text-[1.5rem] text-red-500 ' />
                <FaTwitter className='text-[1.5rem] text-blue-600 ' />
                <FaInstagram className='text-[1.5rem] text-red-400 ' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeHero;
