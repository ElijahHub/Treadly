import { lazy } from "react";

const Home = lazy(() => import('./Home'))
const Shop = lazy(() => import('./Shop'))
const PageNotFound = lazy(() => import('./PageNotFound'))
const Cart = lazy(() => import('./Cart'))
const Checkout = lazy(() => import('./Checkout'))
const Confirmation = lazy(() => import('./Confirmation'))
const Wishlist = lazy(() => import('./Wishlist'))
const ProductDetail = lazy(() => import('./ProductDetail'))
const Blog = lazy(() => import('./Blog'))


export {
  Home,
  PageNotFound,
  Shop, Blog,
  Cart,
  Checkout,
  Confirmation,
  Wishlist,
  ProductDetail
}