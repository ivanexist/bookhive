import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Error = () => (
  <motion.div
    initial={{ y: 0, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 0, opacity: 0 }}
    transition={{ duration: 0.7 }}
  >
    <div>
      <div>
        <div className="grid h-screen place-content-center bg-white px-4">
          <h1 className="uppercase tracking-widest font-bold text-4xl text-gray-500">
            404 | Not Found
          </h1>
        </div>
        <Footer />
      </div>
    </div>
  </motion.div>
);
export default Error;
