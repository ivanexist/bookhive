import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Shop from "../src/pages/shop/Shop";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import ProductDetails from "../src/pages/shop/ProductDetails";
import Error from "./pages/Error";
import Cart from "../src/pages/shop/Cart";
import Checkout from "../src/pages/shop/Checkout";
import Wishlist from "../src/pages/shop/Wishlist";

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
