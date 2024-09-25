import React from "react";
import { Link } from "react-router-dom";
import { logo, payment } from "../assets";
import { BiEnvelope } from "react-icons/bi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { footer } from "../constant";
import { Button } from "./common";

const Footer = () => {
  return (
    <footer className='mt-10 py-5 bg-n-8 '>
      <div className='container'>
        <div className='flex justify-start gap-3 pl-5 items-center '>
          <Link>
            <FaFacebook className='text-[2.5rem] text-blue-600 ' />
          </Link>
          <Link>
            <FaPinterest className='text-[2.5rem] text-red-500 ' />
          </Link>
          <Link>
            <FaTwitter className='text-[2.5rem] text-blue-600 ' />
          </Link>
          <Link>
            <FaInstagram className='text-[2.5rem] text-red-400 ' />
          </Link>
        </div>
        <hr className='w-full border border-n-5 mb-10 mt-8' />
        <div className=' flex  gap-10 flex-wrap items-center justify-between '>
          {/*  */}
          <div className='   flex flex-col items-start gap-10'>
            <div className='w-full'>
              <img src={logo} width={300} height={300} alt='logo' />
            </div>
            <p className=' sm:w-[22rem] body-2 text-n-3'>
              The customer is at the heart of our unique business model, which
              includes design.
            </p>
            <div className=''>
              <img
                src={payment}
                width={300}
                height={300}
                alt='payment method'
              />
            </div>
          </div>
          {/*  */}
          {footer.map((item) => (
            <div key={item.title} className=''>
              <h6 className='h6 text-n-1'>{item.title}</h6>
              <ul className='flex flex-col gap-2 items-center'>
                {item.links.map((link) => (
                  <li key={link.linkTitle} className='body-2 text-n-3'>
                    <Button isLink text={link.linkTitle} path={link.path} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/*  */}
          <div className='sm:w-[22rem]'>
            <h6 className='h6  text-n-1 '>NEWSLETTER</h6>
            <p className='body-2 text-n-3 '>
              Be the first to know about new arrivals, look books, sales &
              promos!
            </p>
            <div className='relative w-full mt-5'>
              <input
                type='text'
                placeholder='Email'
                className=' w-full bg-n-1/10  p-3 border-2 border-n-1 rounded-md placeholder:opacity-90 placeholder:text-n-4 text-n-4'
              />
              <BiEnvelope className='absolute right-5 top-[30%] text-n-1 text-[1.5rem] cursor-pointer ' />
            </div>
          </div>
          {/*  */}
        </div>

        <hr className='w-full border border-n-5 mt-10 mb-8' />

        <div className=' w-full flex items-center justify-center'>
          <p className='body-2 text-n-3'>
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
