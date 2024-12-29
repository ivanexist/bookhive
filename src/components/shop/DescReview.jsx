import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReviewCustomer from "./ReviewCustomer";

const DescReview = ({ selectedBook }) => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-screen-xl mx-auto w-full my-4">
      <div className="flex justify-center items-center mx-auto ">
        <motion.button
          onClick={() => handleTabClick("description")}
          className={` p-4 ${
            activeTab === "description"
              ? "border-b-2 border-b-blumine-500 text-blumine-500 font-semibold"
              : "border-b border-b-gray-400 text-gray-400 font-semibold"
          } focus:outline-none`}
        >
          <span className=" uppercase">Description</span>
        </motion.button>
        <motion.button
          onClick={() => handleTabClick("reviews")}
          className={` p-4 ${
            activeTab === "reviews"
              ? "border-b-2 border-b-blumine-500 text-blumine-500 font-semibold"
              : "border-b border-b-gray-400 text-gray-400 font-semibold"
          } focus:outline-none`}
        >
          <span className=" uppercase">Reviews (3)</span>
        </motion.button>
      </div>

      <AnimatePresence>
        {activeTab === "description" && (
          <motion.div
            key={activeTab}
            className="mt-4 p-4 text-blumine-950"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500 leading-relaxed">
              {selectedBook.descriptions[0].description_1}
            </p>
            <p className="text-gray-500 leading-relaxed mt-1">
              {selectedBook.descriptions[0].description_2}
            </p>
            <p className="text-gray-500 leading-relaxed mt-1">
              {selectedBook.descriptions[0].description_3}
            </p>
          </motion.div>
        )}

        {activeTab === "reviews" && (
          <motion.div
            key={activeTab}
            className="mt-4 p-4 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
          >
            {/* Display reviews here */}
            <div>
              <ReviewCustomer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DescReview;
