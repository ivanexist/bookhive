import Breadcrumb from "../BreadCrumb";
import Footer from "../Footer";
import ScrollUpButton from "../ScrollUpButton";
import ContactForm from "./ContactForm";
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
