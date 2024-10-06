import React, { useContext, useEffect } from "react";
import { Box, CommonHeading } from "../components/common/Others";
import { confirmation } from "../constant";
import { StateContext } from "../context/StateContext";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const { orderDetails } = useContext(StateContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (orderDetails.length === 0) {
      navigate("/shop");
    }
  }, [orderDetails, navigate]);

  const total = orderDetails
    ?.map((item) => Number(item.price.replace("$", 0)) * item.quantity)
    .reduce((a, b) => a + b, 0);

  const shipping = orderDetails
    ?.map((item) => item.quantity)
    .reduce((a, b) => a + b, 0);

  const checkOut = [
    {
      title: "SUBTOTAL",
      value: total,
    },
    {
      title: "SHIPPING",
      value: shipping >= 30 ? 100 : 50,
    },
    {
      title: "TOTAL",
      value: total + (orderDetails.length >= 10 ? 100 : 50),
    },
  ];

  return (
    <>
      <CommonHeading title='Confirmation' />
      <div className='container flex flex-col my-20 gap-11'>
        <h4 className='h4 text-red-500 text-center '>
          Thank you. Your order as been received
        </h4>

        <div className=' w-full flex flex-col items-center gap-5 lg:flex-row lg:justify-between '>
          {confirmation?.map((item) => (
            <div key={item.title} className=' w-full flex flex-col gap-4'>
              <h6 className='h6  ml-4'>{item.title}</h6>
              <hr className='border border-n-2  ' />
              <ul className='flex flex-col gap-3 px-5 py-2'>
                {Object.entries(item.details).map((el, i) => (
                  <li key={i} className='grid grid-cols-2 '>
                    <p className='body-2 text-n-4'>{el[0]}</p>
                    <p className='body-2 text-n-7 '>
                      <span className='text-n-4'>:</span>
                      {el[1]}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Box className='w-full py-10 px-15 ' background='bg-[#eee]'>
          <h4 className='h4 mb-6'>Order Details</h4>
          <table className='table-auto w-full'>
            <thead>
              <tr>
                <th className='text-start body-2 text-n-8 py-5 '>Product</th>
                <th className='text-start body-2 text-n-8 py-5 '>Quantity</th>

                <th className='text-start body-2 text-n-8 py-5'>Total</th>
              </tr>
            </thead>
            <tbody>
              {orderDetails?.map((item) => (
                <tr key={item.id} className='border-y border-n-3 '>
                  <td className='body-2 text-n-4 py-4'>{item.name}</td>
                  <td className='body-2 text-n-4 py-4'>
                    x{item.quantity.toString().padStart(2, 0)}
                  </td>
                  <td className='body-2 text-n-6 py-4'>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className='w-full mt-5 py-5'>
            {checkOut?.map((item) => (
              <div key={item.title} className='grid grid-cols-2 py-1 '>
                <p className='body-2'>{item.title}</p>
                <p className='body-2 text-red-500 '>
                  {item.title === "SHIPPING" && "Flat rate: "}$
                  {item.value.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </Box>
      </div>
    </>
  );
};

export default Confirmation;
