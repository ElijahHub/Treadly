import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CommonHeading, Box } from "../components/common/Others";
import { Input, Button } from "../components/common";
import { checkOutFormEl } from "../constant";
import { StateContext } from "../context/StateContext";

const Checkout = () => {
  const { cartItems, dispatch } = useContext(StateContext);
  const navigate = useNavigate();

  const stateObj = {
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    strAddress: "",
    apartAddress: "",
    postcode: "",
    phone: "",
    email: "",
    accPassword: "",
    orderNote: "",
    createAccount: false,
    checkNote: false,
    terms: false,
    paymentMethod: "check-payment",
  };

  const [state, setState] = useState(stateObj);

  const {
    createAccount,
    checkNote,
    accPassword,
    orderNote,
    paymentMethod,
    terms,
  } = state;

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/shop");
    }
  }, [cartItems, navigate]);

  const handelInputChange = ({ currentTarget: target }) => {
    const { name, value } = target;
    const inputObj = { ...state, [name]: value };

    setState({ ...inputObj });
  };

  const handleCheckChange = ({ currentTarget: target }) => {
    const { name, checked } = target;
    const checkObj = { ...state, [name]: checked };

    setState({ ...checkObj });
  };

  const handleClick = () => {
    dispatch({
      type: "RESET_CART_ITEM",
    });
  };

  const cartTotal =
    cartItems.length === 0
      ? 0
      : cartItems
          .map((el) => Number(el.price.replace("$", 0)) * el.quantity)
          .reduce((a, b) => a + b);

  const checkOut = [
    {
      title: "SUBTOTAL",
      value: cartTotal.toFixed(2),
    },
    {
      title: "SHIPPING",
      value: cartItems.length > 12 ? 100 : 50,
    },
    {
      title: "TOTAL",
      value: cartTotal.toFixed(2) + (cartItems.length > 12 ? 100 : 50),
    },
  ];

  return (
    <>
      <CommonHeading title='Check Out' />
      <div className='container flex flex-col md:flex-row my-20 gap-11'>
        <div className=' w-full flex flex-col gap-8'>
          <Box
            className='w-full p-4 border-t-4 border-t-green-500 '
            background='bg-[#eee]'
          >
            <p className='body-2'>
              Have a coupon? <Link>Click here</Link> to enter your code
            </p>
          </Box>
          <div className='w-full flex flex-col gap-6'>
            <div className='w-full border-b border-n-3 pb-6 '>
              <h6 className='h6'>BILLING DETAILS</h6>
            </div>
            <form className='w-full flex flex-col gap-8'>
              {checkOutFormEl.map((el) => (
                <div
                  key={el.title}
                  className={`flex flex-col gap-5 ${
                    el.title === "names" || el.title === "contacts"
                      ? " md:flex-row gap-6"
                      : ""
                  }`}
                >
                  {el.element.map((item) => (
                    <Input
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      label={item.label}
                      placeholder={item.placeholder}
                      value={state[item.name]}
                      onChange={handelInputChange}
                    />
                  ))}
                </div>
              ))}
              <div className=''>
                <Input
                  type='checkbox'
                  id='createAccount'
                  name='createAccount'
                  label='Create an account?'
                  checked={createAccount}
                  value='create account'
                  onChange={handleCheckChange}
                />
              </div>
              <p className='body-2 '>
                Create an account by entering the information below. If you are
                a returning customer please login at the top of the page.
              </p>
              <div className=''>
                <Input
                  id='accPassword'
                  name='accPassword'
                  label='Account Password'
                  value={accPassword}
                  onChange={handelInputChange}
                />
              </div>
              <div className=''>
                <Input
                  type='checkbox'
                  id='checkNote'
                  name='checkNote'
                  label='Note about your order, e.g special note for delivery'
                  checked={checkNote}
                  value='note'
                  onChange={handleCheckChange}
                />
              </div>
              <div className=''>
                <Input
                  id='orderNote'
                  name='orderNote'
                  label='Order notes'
                  placeholder='Notes about your order, e.g special notes for delivery'
                  value={orderNote}
                  onChange={handelInputChange}
                />
              </div>
            </form>
          </div>
        </div>
        <Box className=' w-full md:w-[35rem] p-10' background='bg-[#eee]'>
          <h4 className='h4'>YOUR ORDER</h4>
          <hr className='w-full border-2 border-n-2 my-6' />
          <table className='table-auto w-full'>
            <thead>
              <tr>
                <th className='text-start body-2 text-n-8 pb-2 '>Product</th>
                <th></th>
                <th className='text-start body-2 text-n-8 pb-2'>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className='body-2 text-[12px] text-n-4'>{item.name}</td>
                  <td className='body-2 text-n-4'>
                    x{item.quantity.toString().padStart(2, 0)}
                  </td>
                  <td className='body-2 text-n-6'>
                    $
                    {(
                      item.quantity * Number(item.price.replace("$", 0))
                    ).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr className='w-full border border-n-2 my-6' />

          {checkOut.map((item) => (
            <div key={item.title} className='flex justify-between'>
              <p className='body-2'>{item.title}</p>
              <p className='body-2 text-red-500 '>
                {item.title === "SHIPPING" && "Flat rate: "}${item.value}
              </p>
            </div>
          ))}

          <hr className='w-full border border-n-2 my-6' />

          <div className='flex flex-col gap-6'>
            <Input
              type='radio'
              value='check-payment'
              label='CHECK PAYMENT'
              checked={paymentMethod === "check-payment"}
              name='paymentMethod'
              onChange={handelInputChange}
            />
            <Box className='p-4' background='bg-n-1'>
              <p className='body-2 text-n-3'>
                Please send a check to Store Name, Store Street, Store Town,
                Store State / County, Store Postcode.
              </p>
            </Box>
            <Input
              type='radio'
              value='paypal'
              label='PAYPAL'
              checked={paymentMethod === "paypal"}
              name='paymentMethod'
              onChange={handelInputChange}
            />
            <Box className='p-4' background='bg-n-1'>
              <p className='body-2 text-n-3'>
                Pay via PayPal; you can pay with your credit card if you don’t
                have a PayPal account.
              </p>
            </Box>
          </div>
          <div className='my-6'>
            <Input
              type='checkbox'
              id='terms'
              name='terms'
              label='I`ve read and accept the terms & conditions*'
              checked={terms}
              onChange={handleCheckChange}
              className='text-[0.9rem]'
            />
          </div>
          <div className='w-full flex justify-center'>
            <Button
              isLink
              path='/shop/confirmation'
              text='PLACE ORDER'
              className='w-full bg-n-8 text-center py-3 text-n-1  '
              onClick={handleClick}
            />
          </div>
        </Box>
      </div>
    </>
  );
};

export default Checkout;
