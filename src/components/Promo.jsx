import React, { useEffect, useState } from "react";
import { product_sales } from "../assets";
import { Button } from "./common";
import { Box } from "./common/Others";

const Promo = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let deadline = new Date(Date.parse(new Date()) + 30 * 24 * 60 * 60 * 1000);
    let time = Date.parse(deadline) - Date.parse(new Date());

    setTime(time / 1000);

    const id = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(id);
  }, []); // Only run once when the component mounts

  let seconds = Math.floor(time % 60);
  let minutes = Math.floor((time / 60) % 60);
  let hours = Math.floor((time / (60 * 60)) % 24);
  let days = Math.floor(time / (60 * 60 * 24));

  if (time <= 0) clearInterval(); // Handle the case when time reaches 0

  return (
    <section className='my-10 bg-color-3/30 rounded-2xl backdrop-blur'>
      <div className='container relative flex flex-col-reverse  justify-between items-center py-10 lg:flex-row lg:py-26'>
        <div className='relative '>
          <div className=' relative z-4'>
            <h3 className='h3  text-n-4'>Super</h3>
            <h3 className='h3 text-red-500'>Shoe Collection</h3>
            <h3 className='h3 text-n-4'>Package</h3>
          </div>

          <Box
            className=' hidden absolute w-[30rem] h-[20rem] -top-14 -left-[20rem] rounded-2xl lg:block '
            background='bg-n-1'
          ></Box>
        </div>
        <div className='relative mt-24 mb-10 '>
          <img src={product_sales} alt='product-sales' />
          <div className='absolute -top-14 -right-4 bg-n-8 w-[9rem] h-[9rem] rounded-full flex flex-col items-center justify-center '>
            <p className='body-2 text-n-1 '>Sale of</p>
            <h5 className='h4 text-n-1'>$29.99</h5>
          </div>
        </div>
        <div>
          <p className='body-2 text-red-500'>DEAL OF THE WEEK</p>
          <h2 className='h2 py-4'>
            Multi-pocket Chest <br /> Black Bag
          </h2>
          <div className='flex gap-2'>
            <Box
              className='w-[5rem] h-[5rem] flex flex-col items-center justify-center rounded-2xl'
              background='bg-n-1'
            >
              <h4 className='h4 text-red-500'>
                {days.toString().padStart(2, 0)}
              </h4>
              <p className='body-2 text-[.9rem] '>Days</p>
            </Box>
            <Box
              className='w-[5rem] h-[5rem] flex flex-col items-center justify-center rounded-2xl'
              background='bg-n-1'
            >
              <h4 className='h4 text-red-500'>
                {hours.toString().padStart(2, 0)}
              </h4>
              <p className='body-2 text-[.9rem]'>Hours</p>
            </Box>
            <Box
              className='w-[5rem] h-[5rem] flex flex-col items-center justify-center rounded-2xl'
              background='bg-n-1'
            >
              <h4 className='h4 text-red-500'>
                {minutes.toString().padStart(2, 0)}
              </h4>
              <p className='body-2 text-[.9rem]'>Minutes</p>
            </Box>
            <Box
              className='w-[5rem] h-[5rem] flex flex-col items-center justify-center rounded-2xl'
              background='bg-n-1'
            >
              <h4 className='h4 text-red-500'>
                {seconds.toString().padStart(2, 0)}
              </h4>
              <p className='body-2 text-[.9rem]'>Seconds</p>
            </Box>
          </div>

          <Button
            isLink
            path='/shop'
            className='w-[15rem] flex items-center justify-center gap-5 bg-n-8 text-n-1 text-center py-3 mt-10'
          >
            SHOP NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Promo;
