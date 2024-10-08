import React, { useContext, useEffect, useState } from "react";
import { CommonHero } from "../components/common/Others";
import { banner } from "../assets";
import { Deals, ProductCat } from "../components";
import { StateContext } from "../context/StateContext";
import { toast } from "react-hot-toast";

const Shop = () => {
  const { dispatch } = useContext(StateContext);

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

  const handleAddToWishList = (product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: { ...product } });
  };

  const handleProductView = (product) => {
    dispatch({ type: "SET_PRODUCT_IN_VIEW", payload: { ...product } });
  };

  return (
    <>
      <CommonHero text='Shop' quote='UNLOCK YOUR STYLE' image={banner} />
      <ProductCat
        handleAddToCart={handleAddToCart}
        onClickView={handleProductView}
        handleAddToWishList={handleAddToWishList}
      />
      <Deals />
    </>
  );
};

export default Shop;
