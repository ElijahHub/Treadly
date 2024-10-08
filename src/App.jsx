import { Suspense, useEffect } from "react";
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
import { Toaster } from "react-hot-toast";

const App = () => {
  const location = useLocation();

  const noNavbar = ["/login", "/sign-up"];

  useEffect(() => {
    const pathname = location.pathname;

    switch (pathname) {
      case "/":
        document.title = "Treadly | Home";
        break;
      case "/about":
        document.title = "Treadly | About Us";
        break;
      case "/shop":
        document.title = "Treadly | Shop";
        break;
      case "/blog":
        document.title = "Treadly | Blog";
        break;
      case "/contacts":
        document.title = "Treadly | Contact Us";
        break;
      case "/login":
        document.title = "Treadly | Login";
        break;
      case "/sing-up":
        document.title = "Treadly | Sign Up";
        break;
      case "/shop/checkout":
        document.title = "Treadly | CheckOut";
        break;
      case "/shop/cart":
        document.title = "Treadly | Cart";
        break;
      case "/shop/wishlist":
        document.title = "Treadly | Wishlist";
        break;
      case "/shop/confirmation":
        document.title = "Treadly | Confirmation";
        break;
      default:
        document.title = "Treadly | Product Details";
        break;
    }
  }, [location.pathname]);

  return (
    <ScrollToTop>
      <StateProvider>
        <Toaster />
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
