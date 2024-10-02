import React, { useContext, useEffect, useState } from "react";
import { Box } from "./common/Others";
import { Gallery, Input, Pagination } from "./common";
import { FaFilter } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import Accordion from "./Accordion";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import { getData } from "../constant/data";
import { StateContext } from "../context/StateContext";
import Loader from "./Loader";

const ProductCat = ({ handleAddToCart, handleAddToWishList, onClickView }) => {
  const { wishlist } = useContext(StateContext);

  const stateObj = {
    allProduct: [],
    currentPage: 1,
    pageSize: 12,
    selectedBrand: [],
    selectedPrice: [],
    sortColumn: "desc",
    searchState: "",
    selectedColor: null,
  };

  const [state, setState] = useState(stateObj);
  const [loading, setLoading] = useState(true);

  const {
    allProduct,
    currentPage,
    pageSize,
    selectedBrand,
    selectedPrice,
    sortColumn,
    searchState,
  } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setState({ ...state, allProduct: [...data] });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error); // Gracefully handle the error
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearchChange = ({ currentTarget: target }) => {
    const searchState = target.value;
    setState({
      ...state,
      searchState,
      selectedBrand: [],
      selectedPrice: [],
      currentPage: 1,
    });
  };

  const handlePageChange = (page) => {
    setState({ ...state, currentPage: page });
  };

  const handleSort = (sortColumn) => {
    setState({ ...state, sortColumn, currentPage: 1 });
  };

  const handleChecked = (title) => (event) => {
    const { name, checked } = event.target;

    let brandChecked =
      title.toLowerCase() === "branding" ? selectedBrand : selectedPrice;

    if (checked) {
      brandChecked = [...brandChecked, name];
    } else {
      brandChecked = brandChecked.filter((item) => item !== name);
    }

    title.toLowerCase() === "branding"
      ? setState({ ...state, selectedBrand: brandChecked })
      : setState({ ...state, selectedPrice: brandChecked });
  };

  const handleColorSelection = (color) => {
    setState({ ...state, selectedColor: color });
  };

  const getPageData = () => {
    const searchValue = searchState.toLowerCase();

    const searchedProducts = allProduct.filter((p) =>
      p.name.toLowerCase().includes(searchValue)
    );

    const filterBrand =
      selectedBrand.length !== 0
        ? searchedProducts.filter((product) =>
            selectedBrand.includes(product?.brandName.toLowerCase())
          )
        : searchedProducts;

    const filterPrice =
      selectedPrice.length !== 0
        ? filterBrand.filter(
            (brand) =>
              Number(brand?.price.replace("$", 0)) >=
                Math.max(selectedPrice) - 50 &&
              Number(brand?.price.replace("$", 0)) <= Math.max(selectedPrice)
          )
        : filterBrand;

    const sorted = _.orderBy(filterPrice, "price", sortColumn);
    const products = paginate(sorted, currentPage, pageSize);

    return {
      totalCount: filterPrice.length,
      displayCount: filterPrice.length < 12 ? filterPrice.length : pageSize,
      data: products,
    };
  };

  const isInWishLst = (item) => {
    const value = wishlist.map((el) => el.name);

    return value.includes(item.name);
  };

  const { totalCount, displayCount, data } = getPageData();

  if (loading) return <Loader />;

  return (
    <section className=' my-20 lg:my-32'>
      <div className='container flex flex-col items-center lg:flex-row lg:justify-between lg:items-start '>
        {/* Categories */}
        <div className=' w-full md:w-[37rem] lg:w-[22rem] flex flex-col items-start mb-10 lg:mb-0 lg:pl-5'>
          {/*  */}
          <div className=' w-full relative mb-8'>
            <Input
              type='search'
              placeholder='Search here...'
              value={searchState}
              onChange={handleSearchChange}
            />

            <BiSearch className='absolute text-xl right-3 top-3.5 text-n-4' />
          </div>

          <Accordion
            className='w-full'
            handleChecked={handleChecked}
            handleColorSelection={handleColorSelection}
          />
        </div>
        {/* Main shop */}
        <div id='start'>
          <Box
            className='w-full flex flex-col justify-center'
            background='bg-n-1'
          >
            <div className='flex justify-between items-start mb-10'>
              <p className='body-2'>
                Showing {displayCount} of {totalCount} results
              </p>
              <div className='relative group'>
                <Box
                  className='p-4 rounded-lg shadow-md cursor-pointer '
                  background='bg-n-1'
                  title='Sort by Price'
                >
                  <FaFilter />
                </Box>

                <Box
                  className='hidden w-[15rem] absolute shadow-md -right-0 sm:-right-44 lg:-right-56 -bottom-20 z-2 group-hover:block '
                  background='bg-n-1'
                >
                  <ul className=' list-none '>
                    <li
                      className='py-2 px-3 hover:bg-n-8/10 cursor-pointer'
                      onClick={() => handleSort("desc")}
                    >
                      <p className='body-2'>High to Low</p>
                    </li>
                    <li
                      className='py-2 px-3 hover:bg-n-8/10 cursor-pointer'
                      onClick={() => handleSort("asc")}
                    >
                      <p className='body-2'>Low to High</p>
                    </li>
                  </ul>
                </Box>
              </div>
            </div>
            {data.length === 0 ? (
              <div className=''>
                <p className='body-1 text-center'>Item Not Found</p>
              </div>
            ) : (
              <>
                <div className='grid gap-8 grid-cols-1 md:grid-cols-2  lg:grid-cols-3'>
                  {data.map((item, i) => (
                    <Gallery
                      key={i}
                      currentItem={isInWishLst(item)}
                      imageUrl={"https://" + item.imageUrl}
                      name={item.name}
                      price={item.price}
                      width={item.width}
                      handleAddToCart={() => handleAddToCart(item, i)}
                      onClickView={() => onClickView(item)}
                      handleAddToWishList={() => handleAddToWishList(item)}
                      path={`/shop/${i}`}
                    />
                  ))}
                </div>
                <Pagination
                  itemsCount={totalCount}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </>
            )}
          </Box>
        </div>
        {/* Shops ends */}
      </div>
    </section>
  );
};

export default ProductCat;
