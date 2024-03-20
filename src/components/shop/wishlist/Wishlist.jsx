import { motion } from "framer-motion";
import Footer from "../../Footer";
import ScrollUpButton from "../../ScrollUpButton";
import WishlistContent from "./WishlistContent";
import Breadcrumb from "../../Breadcrumb";
import { ToastContainer } from "react-toastify";

const Wishlist = () => (
  <div>
    <ToastContainer />
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 0, opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Breadcrumb />
      <main className="mx-auto max-w-screen-xl">
        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <WishlistContent />
        </section>
      </main>
      <Footer />
      <ScrollUpButton />
    </motion.div>
  </div>
);
export default Wishlist;
