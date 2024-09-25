import { useContext } from "react";
import {
  HomeHero,
  Features,
  Products,
  Promo,
  Labels,
  Deals,
} from "../components";
import Ads from "../components/Ads";
import { StateContext } from "../context/StateContext";

const Home = () => {
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
  };

  const handleAddToWishList = (product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: { ...product } });
  };

  const handleProductView = (product) => {
    dispatch({ type: "SET_PRODUCT_IN_VIEW", payload: { ...product } });
  };

  return (
    <>
      <HomeHero />
      <Features />
      <Ads />
      <Products
        handleAddToCart={handleAddToCart}
        handleAddToWishList={handleAddToWishList}
        onClickView={handleProductView}
      />
      <Promo />
      <Labels />
      <Deals />
    </>
  );
};

export default Home;
