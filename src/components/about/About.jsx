import Breadcrumb from "../Breadcrumb";
import Footer from "../Footer";
import ScrollUpButton from "../ScrollUpButton";
import AboutContent from "./AboutContent";
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
