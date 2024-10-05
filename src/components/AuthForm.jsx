import { Button, Input } from "./common";
import { google_logo, logo, ios_logo, facebook_logo } from "../assets";
import React from "react";
import { Link } from "react-router-dom";

const AuthForm = ({ data }) => {
  const options = [
    {
      image: google_logo,
      title: "Continue with Google",
    },
    {
      image: facebook_logo,
      title: "Continue with Facebook",
    },
    {
      image: ios_logo,
      title: "Continue with Apple ",
    },
  ];

  return (
    <div className='container overflow-hidden flex justify-center items-center'>
      <div className=' w-full h-[100vh] md:w-[25rem] flex flex-col items-center gap-6 '>
        <div className='mt-10 flex items-center justify-center w-[12rem] xl:mr-8'>
          <img src={logo} alt='logo' width={120} height={40} />
        </div>
        <div className='mt-auto w-full flex items-center justify-center'>
          {data.length === 2 ? (
            <h3 className='h3'>Welcome</h3>
          ) : (
            <h3 className='h3'>Create your account</h3>
          )}
        </div>
        <div className=' w-full flex flex-col gap-5'>
          {data.map((el, i) => (
            <Input
              className='w-full'
              key={i}
              type={el.type}
              name={el.id}
              id={el.id}
              placeholder={el.placeHolder}
              onChange={el.onChange}
            />
          ))}
        </div>
        <Button
          isLink
          text='CONTINUE'
          className='bg-n-6 w-full text-n-1 py-3 text-center rounded-sm '
          path='/'
        />
        <div className='w-full flex items-center justify-center'>
          {data.length === 2 ? (
            <p className='body-2'>
              Don't have an account?{" "}
              <Link className='text-n-3' to='/sign-up'>
                Create Account
              </Link>
            </p>
          ) : (
            <p className='body-2'>
              Already have an account?{" "}
              <Link className='text-n-3' to='/login'>
                Log in
              </Link>
            </p>
          )}
        </div>
        <div className=' w-full flex justify-center items-center gap-3'>
          <hr className='w-full border border-n-3' />
          <p className='body-2'>OR</p>
          <hr className='w-full border border-n-3' />
        </div>

        <div className=' w-full flex flex-col items-center justify-center gap-1 '>
          {options.map((el, i) => (
            <div
              key={i}
              className=' w-full flex justify-start items-center gap-3 border border-n-8 p-2 rounded-md cursor-pointer '
            >
              <div className='w-[2.5rem]  '>
                <img src={el.image} className='w-full' alt={el.title} />
              </div>
              <p className='body-1'>{el.title}</p>
            </div>
          ))}
        </div>

        <div className=' mt-auto mb-10 flex items-center justify-center'>
          <p className='body-2 text-n-3'>Terms of Use | Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
