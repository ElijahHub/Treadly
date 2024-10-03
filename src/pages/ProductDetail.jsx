import React, { useContext, useEffect, useState } from "react";
import { CommonHeading, Box } from "../components/common/Others";
import { detailsPayment, shoe_1, shoe_2, shoe_3 } from "../assets";
import { Button } from "../components/common";
import { FaCartPlus } from "react-icons/fa6";
import { BiHeart, BiSolidHeart } from "react-icons/bi";
import Deals from "../components/Deals";
import { StateContext } from "../context/StateContext";
import { useNavigate } from "react-router-dom";
import { getProductDetails } from "../constant/data";
import { Loader } from "../components";

const ProductDetail = () => {
  const { productInView, dispatch, wishlist } = useContext(StateContext);

  const [details, setDetails] = useState({});

  const [loading, setLoading] = useState(true);

  const [image, setImage] = useState(productInView.imageUrl);

  const [quantity, setQuantity] = useState(1);

  const data = details.images?.map((el) => el.url) || [];

  const images = [...data, productInView.imageUrl];

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductDetails(productInView.id);
        setDetails({ ...data });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (Object.entries(productInView).length === 0) {
      navigate("/shop");
    }
  }, [productInView, navigate]);

  const handleClick = (url) => {
    setImage(url);
  };

  const isInWishLst = (item) => {
    const value = wishlist?.map((el) => el.name);

    return value?.includes(item.name);
  };

  const handleAddToCart = (item) => {
    let product = {
      id: item?.id,
      name: item?.name,
      imageUrl: item?.imageUrl,
      price: item?.price,
      priceValue: Number(item?.price.replace("$", 0)),
    };

    dispatch({ type: "ADD_TO_CART", payload: { ...product } });
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { ...product, quantity: Number(quantity) },
    });
  };

  const handleAddToWishList = (product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: { ...product } });
  };

  if (loading) return <Loader />;

  return (
    <>
      {" "}
      <CommonHeading title='Product Detail' />
      <div className='container my-20 '>
        {/* Main */}
        <div className='flex items-center gap-24'>
          <div className='w-full flex gap-2 items-center '>
            <div className='flex flex-wrap lg:flex-col gap-2'>
              {/*  */}
              {images?.map((img, i) => (
                <div
                  key={i}
                  className='rounded-md cursor-pointer w-[8rem] h-[8rem] flex justify-center items-center  overflow-hidden '
                >
                  <img
                    src={"https://" + img}
                    className='rounded-md box-border w-full hover:scale-[1.1]'
                    width={120}
                    onClick={() => handleClick(img)}
                    alt={"shoe-" + i}
                  />
                </div>
              ))}
            </div>

            {/*  */}
            <div className='w-[35rem] h-[33.5rem] border border-n-3 overflow-hidden rounded-md'>
              <img
                src={"https://" + image}
                className='rounded-md w-full h-full '
                alt=''
              />
            </div>
          </div>
          {/* Content container */}
          <div className=' w-full flex flex-col  '>
            <div className='flex flex-col mb-3 '>
              <h4 className='h5'>{productInView?.name}</h4>
              <h5 className='h6'>{productInView?.price}</h5>
            </div>

            <div className='w-full'>
              <div className='grid grid-cols-2'>
                <p className='body-2 text-n-3  '>Category</p>
                <p className='body-2 text-n-8 '>: {details?.productType}</p>
              </div>
              <div className='grid grid-cols-2'>
                <p className='body-2 text-n-3 '>Brand</p>
                <p className='body-2 text-n-8'>: {details?.brand?.name}</p>
              </div>
            </div>

            <hr className='w-full border border-n-2 my-5' />

            <p className='body-1'>
              {details?.info?.aboutMe.replace(/<br\s*\/?>/gi, " ")}
            </p>

            <div className=''>
              <Button
                className=' w-auto flex items-center gap-2 mt-6'
                onClick={() => handleAddToWishList(productInView)}
              >
                {isInWishLst(productInView) ? (
                  <BiSolidHeart className='body-1 text-[1rem] ' />
                ) : (
                  <BiHeart className='body-1 text-[1rem]' />
                )}
                <p className='body-2'>ADD TO WISHLIST</p>
              </Button>
            </div>

            <div className='flex gap-3 mt-5'>
              <input
                type='number'
                min='1'
                max='25'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className='w-[10rem] text-sm bg-n-1 border-2 border-n-3 rounded-md px-6 py-3 focus:outline-none'
              />

              <Button
                className=' flex items-center justify-center gap-2 w-[12rem] bg-n-8/90 text-center py-3 text-n-1 rounded-md  '
                onClick={() => handleAddToCart(productInView)}
              >
                <FaCartPlus /> ADD TO CART
              </Button>
            </div>

            <div className='mt-3'>
              <div className='flex items-center'>
                <hr className=' w-1/2 border border-n-2 ' />
                <h5 className='h5 w-full text-center'> Safe Checkout</h5>
                <hr className='w-1/2 border border-n-2 ' />
              </div>
              <div className=''>
                <img src={detailsPayment} alt='' />
              </div>
            </div>
          </div>
        </div>

        <Box
          className='w-full mt-16 border border-n-3 rounded-md '
          background='bg-n-1'
        >
          <Box
            className='w-full flex justify-center items-center gap-6 py-2 rounded-md '
            background='bg-n-3'
          >
            <Box className='py-2 px-8 cursor-pointer ' background='bg-n-1'>
              Description
            </Box>
            <Box className='py-2 px-8 cursor-pointer ' background='bg-n-1'>
              Specification
            </Box>
            <Box className='py-2 px-8 cursor-pointer ' background='bg-n-1'>
              Comment
            </Box>
          </Box>
          <Box className='p-10' background='bg-n-1'>
            <p>
              Beryl Cook is one of Britain’s most talented and amusing artists
              .Beryl’s pictures feature women of all shapes and sizes enjoying
              themselves .Born between the two world wars, Beryl Cook eventually
              left Kendrick School in Reading at the age of 15, where she went
              to secretarial school and then into an insurance office. After
              moving to London and then Hampton, she eventually married her next
              door neighbour from Reading, John Cook. He was an officer in the
              Merchant Navy and after he left the sea in 1956, they bought a pub
              for a year before John took a job in Southern Rhodesia with a
              motor company. Beryl bought their young son a box of watercolours,
              and when showing him how to use it, she decided that she herself
              quite enjoyed painting. John subsequently bought her a child’s
              painting set for her birthday and it was with this that she
              produced her first significant work, a half-length portrait of a
              dark-skinned lady with a vacant expression and large drooping
              breasts. It was aptly named ‘Hangover’ by Beryl’s husband and It
              is often frustrating to attempt to plan meals that are designed
              for one. Despite this fact, we are seeing more and more recipe
              books and Internet websites that are dedicated to the act of
              cooking for one. Divorce and the death of spouses or grown
              children leaving for college are all reasons that someone
              accustomed to cooking for more than one would suddenly need to
              learn how to adjust all the cooking practices utilized before into
              a streamlined plan of cooking that is more efficient for one
              person creating less
            </p>
          </Box>
        </Box>
      </div>
      <Deals />
    </>
  );
};

export default ProductDetail;
