import { useContext, useState } from "react";
import { Button, Gallery } from "./common";
import { Box } from "./common/Others";
import { products } from "../constant";
import { StateContext } from "../context/StateContext";

const Products = ({ handleAddToCart, handleAddToWishList, onClickView }) => {
  const { wishlist } = useContext(StateContext);

  const [count, setCount] = useState(8);

  const isInWishLst = (item) => {
    const value = wishlist.map((el) => el.name);

    return value.includes(item.name);
  };

  return (
    <section className='my-10'>
      <div className='container flex flex-col items-center justify-center py-10 '>
        <h1 className='h1  text-center'>Our Products</h1>
        <p className='body-2 text-center lg:w-[50rem] py-3 '>
          Every product has a story; we help you discover it. Quality is not an
          act, but a habit we embrace in every detail. Perfection is not
          attainable, but by chasing it, we achieve excellence.
        </p>

        {/* nav menu */}
        <div className='flex items-center justify-center flex-wrap gap-2  sm:gap-10 '>
          <Button
            className='h5 sm:py-3 text-red-500'
            text='Best Sellers'
            onClick={() => setCount(8)}
          />
          <Button
            className='h5 sm:py-3 text-red-500'
            text='New Arrivals'
            onClick={() => setCount(6)}
          />
          <Button
            className='h5 py-3 text-red-500'
            text='Hot Sales'
            onClick={() => setCount(4)}
          />
        </div>

        {/* display */}
        <Box
          className=' w-full rounded-3xl flex items-center justify-center py-2'
          background='bg-n-1'
        >
          <div className='grid  md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-6 '>
            {products.slice(0, count).map((item, i) => (
              <Gallery
                key={i}
                name={item.name}
                currentItem={isInWishLst(item)}
                imageUrl={"https://" + item.imageUrl}
                price={item.price}
                handleAddToCart={() => handleAddToCart(item, i)}
                onClickView={() => onClickView(item)}
                handleAddToWishList={() => handleAddToWishList(item)}
                path={`/shop/${i}`}
              />
            ))}
          </div>
        </Box>
      </div>
    </section>
  );
};

export default Products;
