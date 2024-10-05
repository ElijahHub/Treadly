import { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
  About,
  Login,
  SignUp,
  Contact,
} from "./pages";
import { Footer, Loader, Navbar, ScrollToTop } from "./components";
import { StateProvider } from "./context/StateContext";

const App = () => {
  const location = useLocation();

  const noNavbar = ["/login", "/sign-up"];

  return (
    <ScrollToTop>
      <StateProvider>
        {!noNavbar.includes(location.pathname) && <Navbar />}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contacts' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/shop/cart' element={<Cart />} />
            <Route path='/shop/checkout' element={<Checkout />} />
            <Route path='/shop/confirmation' element={<Confirmation />} />
            <Route path='/shop/wishlist' element={<Wishlist />} />
            <Route path='/shop/*' element={<ProductDetail />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Suspense>
        {!noNavbar.includes(location.pathname) && <Footer />}
      </StateProvider>
    </ScrollToTop>
  );
};

export default App;
