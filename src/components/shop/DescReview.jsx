import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReviewCustomer from "./ReviewCustomer";

const DescReview = () => {
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
            <p className="text-gray-500 text-justify">
              Product description goes here. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Amet blanditiis sapiente quia
              exercitationem, ratione eius aliquam dolore delectus assumenda
              modi sed sunt, consectetur, minima maxime temporibus. Obcaecati
              sint deleniti molestias ex ut. Corporis laborum sunt rem nobis id,
              nisi numquam neque fuga omnis corrupti similique deleniti velit
              sed saepe ab at accusamus et quam ipsa explicabo architecto eum,
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              itaque odit ullam dolores. Et tempore expedita minus explicabo
              distinctio. Ducimus incidunt ut eum. Vel similique voluptates, ab
              iste placeat amet officia ipsum at veniam ipsa. Illum quasi
              delectus ipsum incidunt ullam quaerat quae nesciunt placeat!
              Ratione quibusdam accusantium cupiditate veniam itaque! Alias
              exercitationem, pariatur quaerat quia voluptates laudantium
              aliquid, eligendi dicta aperiam ea nobis ipsum commodi accusamus?
              Nam necessitatibus hic, distinctio error accusantium ducimus
              adipisci. Maxime fugiat id, reprehenderit saepe ea earum
              praesentium repudiandae mollitia, sunt blanditiis qui totam
              voluptate debitis hic nemo, natus excepturi dicta quidem? Quis
              voluptate, saepe at alias similique rem molestias laudantium
              itaque. Vero porro veritatis molestiae molestias? Esse veritatis,
              quisquam nobis libero natus pariatur laborum nostrum saepe ratione
              nihil qui earum excepturi, velit sint totam.
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
