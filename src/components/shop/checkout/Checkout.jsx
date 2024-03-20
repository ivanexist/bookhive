import { motion } from "framer-motion";
import Footer from "../../Footer";
import ScrollUpButton from "../../ScrollUpButton";
import CheckoutContent from "./CheckoutContent";
import Breadcrumb from "../../Breadcrumb";

const Checkout = () => {
  return (
    <div>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Breadcrumb />
        <main className="mx-auto max-w-screen-xl">
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <CheckoutContent />
          </section>
        </main>
        <Footer />
        <ScrollUpButton />
      </motion.div>
    </div>
  );
};
export default Checkout;