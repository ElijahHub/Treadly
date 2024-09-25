import React, { useState } from "react";
import { FaCartPlus, FaEye } from "react-icons/fa6";
import { BiHeart, BiSearch, BiSolidHeart } from "react-icons/bi";
import Button from "./Button";
import { Box } from "./Others";

const Gallery = ({
  imageUrl,
  currentItem,
  name,
  path,
  price,
  width,
  onClickView,
  handleAddToWishList,
  handleAddToCart,
}) => {
  return (
    <div
      className={`relative group  ${
        width || "w-[16.5rem]"
      }  flex flex-col overflow-hidden `}
    >
      <div className='w-full mb-3'>
        <img
          className=' w-full object-contain h-full rounded-md hover:scale-105  '
          src={imageUrl}
          width={220}
          height={180}
          alt={name}
        />
      </div>
      <h6 className='h6'>{name}</h6>
      <div className='flex justify-between items-center pr-2 mt-auto '>
        <h6 className='h6 text-red-500 '>{price}</h6>
        <Button isLink title='Add to Cart' onClick={handleAddToCart}>
          <FaCartPlus className='text-[1.2rem] text-n-5 ' />
        </Button>
      </div>

      {/* Display on hover */}
      <div className='absolute flex flex-col gap-3 right-5 top-8 transition-all translate-x-24 group-hover:translate-x-0 '>
        <Box
          className='w-[2.5rem] h-[2.5rem] flex items-center justify-center '
          background='bg-n-1'
        >
          <Button isLink title='Add to Favorite' onClick={handleAddToWishList}>
            {currentItem ? (
              <BiSolidHeart className='text-[1.5rem]' />
            ) : (
              <BiHeart className='text-[1.5rem]' />
            )}
            {/* <BiHeart className='text-[1.5rem]' /> */}
          </Button>
        </Box>
        <Box
          className='w-[2.5rem] h-[2.5rem] flex items-center justify-center '
          background='bg-n-1'
        >
          <Button isLink title='View Product' onClick={onClickView} path={path}>
            <FaEye className='text-[1.5rem]' />
          </Button>
        </Box>
        <Box
          className='w-[2.5rem] h-[2.5rem] flex items-center justify-center '
          background='bg-n-1'
        >
          <Button isLink title='Search'>
            <BiSearch className='text-[1.5rem]' />
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Gallery;
