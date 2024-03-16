import FilterMobile from "../filter/FilterMobile";
import { motion } from "framer-motion";
import CartContent from "./CartContent";
import Footer from "../../Footer";
import ScrollUpButton from "../../ScrollUpButton";
import { ToastContainer } from "react-toastify";
import Breadcrumb from "../../BreadCrumb";
const Cart = () => {
  return (
    <div>
      <ToastContainer />
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <FilterMobile />
        <Breadcrumb />
        <main className="mx-auto max-w-screen-xl">
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <CartContent />
          </section>
        </main>
        <Footer />
        <ScrollUpButton />
      </motion.div>
    </div>
  );
};
export default Cart;
