import Footer from "../Footer";
import Testimonial from "./Testimonial";
import Feature from "./Feature";
import ScrollUpButton from "../ScrollUpButton";
import { motion } from "framer-motion";
import BestProduct from "./BestProduct";
import Subscribe from "./Subscribe";
import HeroMain from "./hero/HeroMain";
const Home = () => {
  return (
    <>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <HeroMain />
        <main className="mx-auto text-center max-w-screen-xl">
          <Feature />
          <BestProduct />
        </main>
        <Testimonial />
        <Subscribe />
        <Footer />
        <ScrollUpButton />
      </motion.div>
    </>
  );
};
export default Home;
