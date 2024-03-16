import Navbar2 from "../Navbar2";
import { motion } from "framer-motion";
import FilterMobile from "./filter/FilterMobile";
import Breadcrumb2 from "../Breadcrumb2";
import Footer from "../Footer";
import ScrollUpButton from "../ScrollUpButton";

const BuyNow = () => (
  <div>
    <div>
      <div className="sticky top-0 mt-1 z-20">
        <Navbar2 />
      </div>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <FilterMobile />
        <Breadcrumb2 />
        <main className="mx-auto max-w-screen-xl">
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            {/* <CheckoutContent /> */}
            Hello
          </section>
        </main>
        <Footer />
        <ScrollUpButton />
      </motion.div>
    </div>
  </div>
);
export default BuyNow;
