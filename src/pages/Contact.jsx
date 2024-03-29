import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import ScrollUpButton from "../components/ScrollUpButton";
import ContactForm from "../components/contact/ContactForm";
import { motion } from "framer-motion";

const Contact = () => (
  <div>
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 0, opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Breadcrumb />
      <ContactForm />
      {/* <ContactMap /> */}
      <h1>MAP</h1>
      <Footer />
      <ScrollUpButton />
    </motion.div>
  </div>
);
export default Contact;
