import Footer from "../components/Footer";
import Testimonial from "../components/home/Testimonial";
import Feature from "../components/home/Feature";
import ScrollUpButton from "../components/ScrollUpButton";
import { motion } from "framer-motion";
import BestProduct from "../components/home/BestProduct";
import Subscribe from "../components/home/Subscribe";
import HeroMain from "../components/home/hero/HeroMain";
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
