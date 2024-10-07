import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../context/StateContext";
import { Box, CommonHeading } from "../components/common/Others";
import { Button, Pagination } from "../components/common";
import { paginate } from "../utils/paginate";
import { FaArrowLeftLong } from "react-icons/fa6";
import Table from "../components/common/Table";
import { toast } from "react-hot-toast";

const Cart = () => {
  const { cartItems, dispatch } = useContext(StateContext);

  const stateObj = {
    cartProducts: [],
    currentPage: 1,
    pageSize: 4,
  };

  const [state, setState] = useState(stateObj);
  const [discount, setDiscount] = useState("");

  const { cartProducts, currentPage, pageSize } = state;

  const getProducts = () => {
    setState({ ...state, cartProducts: cartItems });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = (product) => {
    setState({
      ...state,
      cartProducts: cartProducts.filter((p) => p.id !== product.id),
    });
    dispatch({ type: "REMOVE_FROM_CART", payload: product });

    toast.success("PRODUCT REMOVED FROM CART", {
      duration: 3000,
      position: "top-right",
    });
  };

  const handlePageChange = (page) => {
    setState({ ...state, currentPage: page });
  };

  const handleQuantity = (id, operation) => {
    let products = [...cartProducts];

    let specificEl = products.filter((item) => item.id === id.id);

    if (operation === "inc") {
      specificEl[0] = {
        ...specificEl[0],
        quantity: specificEl[0]?.quantity + 1,
      };
    } else {
      if (specificEl[0]?.quantity === 0) {
        specificEl[0] = {
          ...specificEl[0],
          quantity: 0,
        };
      } else {
        specificEl[0] = {
          ...specificEl[0],
          quantity: specificEl[0]?.quantity - 1,
        };
      }
    }

    const index = products.findIndex((el) => el.id === specificEl[0].id);

    products[index] = specificEl[0];

    setState({ ...state, cartProducts: products });
  };

  const updateCartState = () => {
    for (let product of cartProducts) {
      dispatch({ type: "UPDATE_QUANTITY", payload: product });
    }
  };

  const handleTotal = () => {
    const prices = cartProducts.map((item) => item.priceValue * item.quantity);
    const total = prices.reduce((a, b) => a + b, 0);

    return total.toFixed(2);
  };

  const total = handleTotal();

  const cartData = paginate(cartProducts, currentPage, pageSize);

  return (
    <>
      <CommonHeading title='Shopping Cart' />
      <div className='container'>
        <Button isLink path='/shop' className='flex gap-4 items-center my-11'>
          <FaArrowLeftLong />
          <p className='body-1'>Back to shop</p>
        </Button>
        {cartProducts.length === 0 ? (
          <div className='flex items-center justify-center my-36 '>
            <h2 className='h2 font-mono'>No product as been added to cart.</h2>
          </div>
        ) : (
          <div className='flex flex-col lg:flex-row my-24 gap-10' id='start'>
            <div className='w-full'>
              <Table
                showTotal
                headings={["PRODUCTS", "QUANTITY", "TOTAL"]}
                data={cartData}
                onDelete={handleDelete}
                handleQuantity={handleQuantity}
              />
              <Pagination
                itemsCount={cartProducts.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
              <div className='flex items-center justify-between mt-10'>
                <Button
                  text='CONTINUE SHOPPING'
                  isLink
                  path='/shop'
                  onClick={updateCartState}
                  className='bg-n-1 text-center py-3 text-n-8 px-5 border border-n-8 transition-all hover:bg-n-8 hover:text-n-1'
                />
                <Button
                  text='UPDATE CART'
                  onClick={updateCartState}
                  className='bg-n-8 text-center py-3 text-n-1 px-5 border border-n-8 hover:bg-n-1 hover:text-n-8'
                />
              </div>
            </div>
            <div className=' w-full md:w-[35rem] py-5'>
              <h5 className='h5 mb-10'>Discount Code</h5>
              <form className='flex mb-20 '>
                <input
                  type='text'
                  name='coupon'
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  placeholder='Coupon Code'
                  className='w-full px-2 py-3 bg-transparent border border-n-4 focus:outline-none '
                />
                <Button
                  text='Apply'
                  className='bg-n-8 p-3 w-[10rem] text-n-1'
                />
              </form>
              <Box className='p-9' background='bg-[#eee]'>
                <h5 className='h5 mb-5'>CART TOTAL</h5>
                <div className='flex justify-between mb-2'>
                  <p className='body-2'>Sub Total</p>
                  <p className='body-2 text-red-500'>${total}</p>
                </div>
                <div className='flex justify-between mb-8'>
                  <p className='body-2'>Total</p>
                  <p className='body-2 text-red-500'>${total}</p>
                </div>
                <div className='flex items-center justify-center'>
                  <Button
                    text='PROCEED TO CHECKOUT'
                    isLink
                    path='/shop/checkout'
                    onClick={updateCartState}
                    className='bg-n-8 text-center py-3 text-n-1 px-5'
                  />
                </div>
              </Box>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
