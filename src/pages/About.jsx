import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import ScrollUpButton from "../components/ScrollUpButton";
import AboutContent from "../components/about/AboutContent";
import { motion } from "framer-motion";

const About = () => (
  <div>
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 0, opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Breadcrumb />
      <AboutContent />
      <Footer />
      <ScrollUpButton />
    </motion.div>
  </div>
);
export default About;
