import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../context/StateContext";
import { CommonHeading } from "../components/common/Others";
import { Button, Pagination } from "../components/common";
import { paginate } from "../utils/paginate";
import { FaArrowLeftLong } from "react-icons/fa6";
import Table from "../components/common/Table";
import { toast } from "react-hot-toast";

const Wishlist = () => {
  const { wishlist, dispatch } = useContext(StateContext);

  const stateObj = {
    wishListItems: [],
    currentPage: 1,
    pageSize: 4,
  };

  const [state, setState] = useState(stateObj);

  const { wishListItems, currentPage, pageSize } = state;

  const getWishListData = () => {
    setState({ ...state, wishListItems: wishlist });
  };

  useEffect(() => {
    getWishListData();
  }, []);

  const handleAddToCart = (item, i) => {
    let product = {
      id: i,
      name: item?.name,
      imageUrl: item?.imageUrl,
      price: item?.price,
      priceValue: Number(item?.price.replace("$", 0)),
    };

    dispatch({ type: "ADD_TO_CART", payload: { ...product } });

    toast.success("PRODUCT ADDED TO CART", {
      duration: 3000,
      position: "top-right",
    });
  };

  const handleProductView = (product) => {
    dispatch({ type: "SET_PRODUCT_IN_VIEW", payload: { ...product } });
  };

  const handleDelete = (product) => {
    setState({
      ...state,
      wishListItems: wishListItems.filter((item) => item.id !== product.id),
    });
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });

    toast.success("PRODUCT REMOVED FROM WISHLIST", {
      duration: 3000,
      position: "top-right",
    });
  };

  const handlePageChange = (page) => {
    setState({ ...state, currentPage: page });
  };

  const wishListData = paginate(wishListItems, currentPage, pageSize);

  const tableHead = ["Product", "BrandName"];
  return (
    <>
      <CommonHeading title='Wishlist' />
      <div className='container'>
        <Button isLink path='/shop' className='flex gap-4 items-center my-11'>
          <FaArrowLeftLong />
          <p className='body-1'>Back to shop</p>
        </Button>
        {wishListItems.length === 0 ? (
          <div className='flex items-center justify-center my-36 '>
            <h2 className='h2 font-mono'>
              No product as been added to wishlist.
            </h2>
          </div>
        ) : (
          <div className='my-20'>
            <Table
              headings={tableHead}
              data={wishListData}
              onDelete={handleDelete}
              onClick={handleAddToCart}
              onClickView={handleProductView}
            />
            <Pagination
              itemsCount={wishListItems.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;
