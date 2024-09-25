import React from "react";
import { deals } from "../constant";
import { blackFri } from "../assets";

const Deals = () => {
  return (
    <section className='my-10 mb-20'>
      <div className='container flex flex-col items-center'>
        <h2 className='h2 text-center mb-2'>Deals of the Week</h2>
        <p className='  sm:w-[32rem] body-2 text-center mb-10 '>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/*  */}
        <div className='flex flex-col-reverse gap-10 lg:flex-row '>
          <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {deals.map((item, i) => (
              <div key={i} className='flex gap-3 items-center justify-start'>
                <div className=''>
                  <img
                    src={item.image}
                    width={70}
                    height={70}
                    alt={item.name}
                  />
                </div>
                <div className='flex flex-col items-center justify-start gap-1'>
                  <h6 className='h6'>{item.name}</h6>
                  <div className='flex gap-4'>
                    <p className='body-2'>{item.currentPrice}</p>
                    <p className='body-2 line-through text-n-3 '>
                      {item.prevPrice}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=''>
            <img
              src={blackFri}
              width={240}
              height={240}
              alt='black_friday_banner'
            />
          </div>
        </div>
        {/*  */}
      </div>
    </section>
  );
};

export default Deals;
