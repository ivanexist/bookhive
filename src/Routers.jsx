import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import ProductDetails from "./components/shop/ProductDetails";
import Error from "./components/error/Error";
import Cart from "./components/shop/cart/Cart";
import Checkout from "./components/shop/cart/checkout/Checkout";
import Wishlist from "./components/shop/wishlist/Wishlist";
import CartProvider from "./components/shop/cart/context/CartContext";

const Routers = () => {
  // const location = useLocation();

  return (
    // location={location} key={location.key}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop/:bookId?" element={<ProductDetails />} />
      <Route path="/shop/cart" element={<Cart />} />
      <Route path="/shop/cart/checkout/:bookId?" element={<Checkout />} />
      <Route path="/shop/wishlist" element={<Wishlist />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default Routers;
