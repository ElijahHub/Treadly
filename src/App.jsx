import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Shop,
  PageNotFound,
  Cart,
  Checkout,
  Confirmation,
  Wishlist,
  ProductDetail,
  Blog,
} from "./pages";
import { Footer, Loader, Navbar, ScrollToTop } from "./components";
import { StateProvider } from "./context/StateContext";

const App = () => {
  return (
    <ScrollToTop>
      <StateProvider>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/shop/cart' element={<Cart />} />
            <Route path='/shop/checkout' element={<Checkout />} />
            <Route path='/shop/confirmation' element={<Confirmation />} />
            <Route path='/shop/wishlist' element={<Wishlist />} />
            <Route path='/shop/:id' element={<ProductDetail />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </StateProvider>
    </ScrollToTop>
  );
};

export default App;
