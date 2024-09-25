import { Box } from "./common/Others";
import { Link } from "react-router-dom";
import { Button } from "./common";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

import {
  blackFri,
  facebook_logo,
  google_logo,
  ios_logo,
  shoe_1,
  shoe_3,
  shoe_4,
} from "../assets";
import { adsItem } from "../constant";

const Ads = () => {
  return (
    <section className='my-10'>
      <div className='container flex flex-col lg:flex-row gap-3 '>
        {/* box 1 */}
        <div className='  flex flex-col lg:w-[25rem] gap-3'>
          <Box className='p-8 rounded-3xl'>
            <div className='flex items-center justify-center gap-2'>
              <Button
                isLink
                className='w-[9rem] bg-n-8 text-n-1 text-[1rem] rounded-full  py-2 flex items-center justify-center '
                text='Register'
              />
              <Button
                isLink
                className='w-[9rem] bg-n-1 text-n-8 text-[1rem] rounded-full  py-2 flex items-center justify-center border border-n-8'
                text='Sign in'
              />
            </div>
            <p className='body-2 text-center my-4'>or continue with</p>
            <div className='flex items-center justify-center gap-6'>
              <Link>
                <img src={facebook_logo} width={40} alt='facebook logo ' />
              </Link>
              <Link>
                <img src={google_logo} width={40} alt='google logo' />
              </Link>
              <Link>
                <img src={ios_logo} width={30} alt='ios logo' />
              </Link>
            </div>
          </Box>
          <Box className='p-8 rounded-3xl ' background='bg-color-3/10'>
            <h4 className='h4 text-red-500  font-[600] '>Welcome Deal</h4>
            <p className='body-2'>Your exclusive price</p>
            <div className='flex flex-col items-center justify-center mt-5 '>
              <div className='w-full overflow-hidden rounded-xl'>
                <img
                  src={shoe_4}
                  className='w-full'
                  width={200}
                  height={200}
                  alt='banner'
                />
              </div>
              <div className='mt-5 flex items-center justify-center gap-6'>
                <h5 className='h5 text-red-500 '>$30.33</h5>
                <h5 className='h5 text-n-3 line-through'>$100.33</h5>
              </div>
            </div>
          </Box>
        </div>
        {/* box2 */}
        <div className='lg:w-[29rem] flex flex-col gap-3'>
          <Box className=' rounded-3xl p-8 '>
            <h4 className='h4 text-red-500 font-[600]'>First come, 50% off</h4>
            <p className='flex gap-2 body-2 items-center'>
              <span className='h6 bg-yellow-400 rounded-md px-1'>Choice</span>{" "}
              Free shipping
            </p>
            <Box
              className='w-full mt-8 rounded-lg  flex gap-3 flex-wrap justify-center items-center sm:justify-between p-1  sm:p-0 lg:flex-col  lg:gap-7'
              background='bg-n-8/10'
            >
              <div className='sm:w-[15rem] rounded-lg sm:self-start '>
                <img className='w-full rounded-lg' src={shoe_1} alt='' />
              </div>
              <div className='sm:w-[16rem] rounded-lg  sm:self-end '>
                <img className='w-full rounded-lg' src={shoe_3} alt='' />
              </div>
            </Box>
          </Box>
        </div>
        {/* box3 */}
        <div className='lg:w-[33rem] flex flex-col gap-3'>
          <Box
            className='rounded-3xl p-8 flex flex-col gap-2  '
            background='bg-color-2/20'
          >
            <h4 className='h4 text-n-8 font-[550]'>
              3 from <span className='text-red-500'>US $2.99</span>
            </h4>
            <p className='flex gap-2 body-2 items-center'>
              <span className='h6 bg-yellow-400 rounded-md px-1'>Choice</span>{" "}
              Free shipping
            </p>
            <div className='flex  justify-center items-center gap-3 mt-5 flex-row flex-wrap '>
              {adsItem.map((item) => (
                <div
                  key={item.current_price}
                  className='flex flex-col items-center'
                >
                  <img
                    src={item.image}
                    className='rounded-lg'
                    width={125}
                    height={125}
                    alt=''
                  />
                  <div className='flex gap-2'>
                    <h6 className='h6 text-red-500'>{item.current_price}</h6>
                    <h6 className='h6 text-n-3 line-through '>
                      {item.prev_price}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </Box>
          <div className='flex gap-3'>
            <Box className='grid grid-cols-2 lg:grid-cols-1 w-[10rem] rounded-3xl flex-1 items-center  place-items-center '>
              <Link>
                <FaFacebook className='text-[4rem] text-blue-600 ' />
              </Link>
              <Link>
                <FaPinterest className='text-[4rem] text-red-500 ' />
              </Link>
              <Link>
                <FaTwitter className='text-[4rem] text-blue-600 ' />
              </Link>
              <Link>
                <FaInstagram className='text-[4rem] text-red-400 ' />
              </Link>
            </Box>
            <div className='flex-1 lg:flex-none'>
              <img
                src={blackFri}
                className=' rounded-3xl'
                width={300}
                height={300}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ads;
