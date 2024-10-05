import React, { useState } from "react";
import { Box, CommonHero } from "../components/common/Others";
import { banner } from "../assets";
import { Deals } from "../components";
import { Button, Input } from "../components/common";

const Contact = () => {
  const stateObj = {
    firstName: "",
    lastName: "",
    phoneNum: "",
    email: "",
    companyName: "",
    country: "",
    stateRegion: "",
    city: "",
    strAddress: "",
  };

  const [state, setState] = useState(stateObj);

  const {
    firstName,
    lastName,
    phoneNum,
    email,
    companyName,
    country,
    stateRegion,
    city,
    strAddress,
  } = state;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <CommonHero text='contact' quote='CONTACT US' image={banner} />
      <div className='container py-20'>
        <div className='flex flex-col lg:flex-row gap-6 '>
          <div className='flex flex-col gap-3 '>
            <h4 className='h4'>Showroom & Store</h4>
            <p className='body-2 text-n-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              alias impedit illum sapiente nihil ipsum voluptas officiis
              expedita architecto culpa.
            </p>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-1 mt-6 '>
                <h6 className='h6'>Address</h6>
                <p className='body-2 text-n-3'>
                  Nigeria - 985 15th Street.Office 4178/B Kaduna.
                </p>
              </div>
              <div className='flex justify-between items-center flex-wrap'>
                <div className='flex flex-col gap-2'>
                  <h6 className='h6'>Email</h6>
                  <p className='body-2 text-n-3 '>contact@tready.com</p>
                  <p className='body-2 text-n-3 '>info@tready.com</p>
                </div>
                <div className='flex flex-col gap-2'>
                  <h6 className='h6'>Phone Number</h6>
                  <p className='body-2 text-n-3 '>+234 1234 567 889</p>
                  <p className='body-2 text-n-3 '>+234 9922 334 923</p>
                </div>
                <div className='flex flex-col gap-2'>
                  <h6 className='h6'>Opening Hours</h6>
                  <p className='body-2 text-n-3 '>Monday - Friday: 9am - 7pm</p>
                  <p className='body-2 text-n-3 '>Weekend Closed</p>
                </div>
              </div>
            </div>
          </div>

          <Box
            className='w-full p-10 flex flex-col gap-5 '
            background='bg-[#eee]'
          >
            <div className='flex gap-3 items-center '>
              <Input
                id='firstName'
                name='firstName'
                label='First Name'
                type='text'
                value={firstName}
                onChange={handleOnChange}
              />
              <Input
                id='lastName'
                name='lastName'
                label='Last Name'
                type='text'
                value={lastName}
                onChange={handleOnChange}
              />
            </div>
            <div className='flex gap-3 items-center '>
              <Input
                id='phoneNum'
                name='phoneNum'
                label='Phone number'
                type='text'
                value={phoneNum}
                onChange={handleOnChange}
              />
              <Input
                id='email'
                name='email'
                label='Email'
                type='email'
                value={email}
                onChange={handleOnChange}
              />
            </div>
            <div className='flex gap-3 items-center '>
              <Input
                id='companyName'
                name='companyName'
                label='Country/Region'
                type='text'
                value={companyName}
                onChange={handleOnChange}
              />
              <Input
                id='country'
                name='country'
                label='Country/Region'
                type='text'
                value={country}
                onChange={handleOnChange}
              />
              <Input
                id='stateRegion'
                name='stateRegion'
                label='State/Region'
                type='text'
                value={stateRegion}
                onChange={handleOnChange}
              />
            </div>
            <div className='w-full'>
              <Input
                id='city'
                name='city'
                label='City'
                type='text'
                value={city}
                onChange={handleOnChange}
              />
            </div>
            <div className='w-full'>
              <Input
                id='strAddress'
                name='strAddress'
                label='Street address'
                type='text'
                value={strAddress}
                onChange={handleOnChange}
              />
            </div>
            <div className='w-full'>
              <Button
                text='Submit'
                className='w-full bg-red-500 text-n-1 text-center py-3 rounded-sm '
              />
            </div>
          </Box>
        </div>
      </div>
      <Deals />
    </>
  );
};

export default Contact;
