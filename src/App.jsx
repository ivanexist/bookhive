import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./Routers";
import LocationProvider from "./LocationProvider";
import Navbar2 from "./components/Navbar2";
import CartProvider from "./components/shop/cart/context/CartContext";

function App() {
  return (
    <>
      <Router>
        <CartProvider>
          <LocationProvider>
            <div className="sticky top-0 z-20">
              <Navbar2 />
            </div>
            <Routers />
          </LocationProvider>
        </CartProvider>
      </Router>
    </>
  );
}
export default App;
