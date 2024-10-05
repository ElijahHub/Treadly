import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  BiCartAlt,
  BiUser,
  BiHeart,
  BiSearch,
  BiSolidHeart,
} from "react-icons/bi";
import { StateContext } from "../../context/StateContext";

const NavItem = ({ isMobile, isDesktop, handleClick }) => {
  const { wishlist, cartItems } = useContext(StateContext);

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      {isMobile && (
        <div className='pt-10 pb-5 w-full flex items-center justify-center gap-8 lg:hidden'>
          <BiSearch className=' text-[1.5rem] cursor-pointer' />
          <Link to='/shop/wishlist'>
            {wishlist.length === 0 ? (
              <BiHeart
                className='text-[1.5rem] cursor-pointer  '
                title='Favorite'
                onClick={handleClick}
              />
            ) : (
              <BiSolidHeart
                className='text-[1.5rem] cursor-pointer  text-red-500 '
                title='Favorite'
                onClick={handleClick}
              />
            )}
          </Link>
          <Link to='/shop/cart' className='relative' onClick={handleClick}>
            <BiCartAlt className='text-[1.5rem] cursor-pointer' title='Cart' />
            {cartItems.length !== 0 && (
              <div className='absolute w-[1.2rem] h-[1.2rem] flex items-center justify-center rounded-full bg-n-9 -top-2 -right-2 p-1 '>
                <p className='body-2 text-[0.8rem] text-n-1 '>
                  {cartItems.length}
                </p>
              </div>
            )}
          </Link>
        </div>
      )}
      {isDesktop && (
        <div className='relative hidden lg:flex mx-auto mr-[8rem] items-center gap-5 '>
          <input
            type='search'
            className='w-[20rem] bg-[#f7f1f1] px-10 py-2 rounded-[20px] text-sm placeholder:opacity-[0.9] focus:outline-none '
            placeholder='Search here...'
            value={search}
            onChange={handleChange}
          />
          <BiSearch className='absolute text-xl left-3 top-3.5 text-n-4' />
          <Link to='/shop/wishlist'>
            {wishlist.length === 0 ? (
              <BiHeart
                className='text-[1.5rem] cursor-pointer '
                title='Favorite'
              />
            ) : (
              <BiSolidHeart
                className='text-[1.5rem] cursor-pointer text-red-500 '
                title='Favorite'
              />
            )}
          </Link>
          <Link to='/shop/cart' className='relative'>
            <BiCartAlt className='text-[1.5rem] cursor-pointer' title='Cart' />
            {cartItems.length !== 0 && (
              <div className='absolute w-[1.2rem] h-[1.2rem] flex items-center justify-center rounded-full bg-n-9 -top-2 -right-2 p-1 '>
                <p className='body-2 text-[0.8rem] text-n-1 '>
                  {cartItems.length}
                </p>
              </div>
            )}
          </Link>
          <Link
            className=' h-[3rem]  flex gap-1 items-center pl-2 border-l-[3px] border-n-4 cursor-pointer'
            to='/login'
          >
            <BiUser className='text-[1.5rem]' title='Sign in' />
            <p>Sign in</p>
          </Link>
        </div>
      )}
    </>
  );
};

export default NavItem;
