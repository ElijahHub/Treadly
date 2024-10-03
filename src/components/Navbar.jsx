import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { navigation } from "../constant";
import { Button, NavItem } from "./common";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const handleClick = () => {
    setOpenNavigation(!openNavigation);
  };

  return (
    <>
      {openNavigation && (
        <div
          className='fixed w-full h-[100vh] left-0 top-0 bg-n-8/50 z-10 lg:hidden '
          onClick={handleClick}
        ></div>
      )}
      <header
        className={`fixed top-0 left-0 w-full z-50 border-n-2 lg:bg-n-1/90 lg:backdrop-blur-sm ${
          openNavigation ? "bg-n-1" : "bg-n-1/90 backdrop-blur-sm"
        } `}
      >
        <div className='w-full flex items-center  px-5 py-4 lg:px-8 xl:px-10 max-lg:py-4 '>
          <Link to='/' className='block w-[12rem] xl:mr-8'>
            <img src={logo} alt='logo' width={120} height={40} />
          </Link>
          <nav
            className={` ${
              openNavigation ? "translate-x-0" : "-translate-x-80 "
            } w-[20rem] fixed transition-all top-[4.79rem] left-0 right-0 bottom-0 bg-[#ffffff] px-3 shadow-xl lg:translate-x-0 lg:px-0 lg:static lg:-ml-10 lg:flex lg:bg-transparent lg:shadow-none `}
          >
            <div className='z-2 flex flex-col items-start justify-start  lg:flex-row w-full '>
              <NavItem isMobile handleClick={handleClick} />
              {navigation.map((item) => (
                <Button
                  isLink
                  key={item.id}
                  path={item.url}
                  onClick={handleClick}
                  text={item.title}
                  className={` w-full block relative font-mono text-md uppercase text-n-8 transition-all hover:text-n-1 px-6 py-4 hover:bg-n-7/20 lg:text-md  lg:font-semibold lg:leading-5 lg:hover:bg-transparent lg:hover:text-n-3 lg:px-2 lg:w-0 xl:px-12 `}
                />
              ))}
              <Button
                isLink
                text={"Sign in"}
                className='w-full mt-5 bg-n-8 py-4 rounded-md text-center text-n-1 lg:hidden'
              />
            </div>
          </nav>
          <Button
            className='flex mx-auto mr-5 border-2 border-n-8 p-1 rounded-md lg:hidden'
            onClick={handleClick}
            text={<FaBars className='text-[1.5rem]' />}
          />
          <NavItem isDesktop />
        </div>
      </header>
    </>
  );
};

export default Navbar;
