import HomeProductCard from "./HomeProductCard";
import { motion } from "framer-motion";
import { useContext } from "react";
import { BookHiveContext } from "../context/BookHiveContext";

const BestProduct = () => {
  const { bookData } = useContext(BookHiveContext);
  return (
    <div className="text-center text-blumine-950 lg:text-left px-4 pt-8 max-w-screen-xl">
      <div className="grid-1 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center sm:mb-12 sm:ml-4 lg:ml-0">
            <h6 className="inline-block before:mr-2 before:border-r-4 text-blumine-600 before:border-r-blumine-200 font-bold uppercase md:justify-start">
              New Arrival
            </h6>
            <hr className="flex-grow mx-2 border-b border-blumine-200 sm:mr-6" />
          </div>
          <div className="my-8 sm:mr-6 sm:ml-4 lg:ml-0">
            {bookData
              .sort(
                (a, b) =>
                  b.publish[0].published_year - a.publish[0].published_year
              )
              .slice(0, 3)
              .map((book) => (
                <HomeProductCard book={book} key={book.book_id} />
              ))}
          </div>
        </div>
        {/* Products Section */}
        <div>
          <div className="flex items-center sm:mb-12 sm:ml-4 lg:ml-0">
            <h6 className="inline-block before:mr-2 before:border-r-4 text-blumine-600 before:border-r-blumine-200 font-bold uppercase md:justify-start">
              Feature Product
            </h6>
            <hr className="flex-grow mx-2 border-b border-blumine-200 sm:mr-6" />
          </div>
          <div className="my-8 sm:mr-6 sm:ml-4 lg:ml-0">
            {bookData
              .sort((a, b) => b.average_rating - a.average_rating)
              .slice(0, 3)
              .map((book) => (
                <HomeProductCard book={book} key={book.book_id} />
              ))}
          </div>
        </div>
        {/* <!-- Useful links section --> */}
        <div className="">
          <div className="flex items-center sm:mb-12 sm:ml-4 lg:ml-0">
            <h6 className="inline-block before:mr-2 before:border-r-4 text-blumine-600 before:border-r-blumine-200 font-bold uppercase md:inline md:justify-start">
              Best Seller
            </h6>
            <hr className="flex-grow mx-2 border-b border-blumine-200 sm:mr-6" />
          </div>
          <div className="mb-8 sm:mr-6 sm:ml-4 lg:ml-0">
            {bookData
              .sort((a, b) => b.stock[0].sold - a.stock[0].sold)
              .slice(0, 3)
              .map((book) => (
                <HomeProductCard book={book} key={book.book_id} />
              ))}
          </div>
        </div>

        {/* <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-4"
        >
          <img
            src="https://cdn.pixabay.com/photo/2017/08/28/16/10/autumn-2690176_1280.jpg"
            alt=""
            className="sm:h-52 md:h-[32rem] w-full pr-8 mr-6 sm:ml-4 lg:ml-0"
          />
        </motion.div> */}
      </div>

      {/* <hr className="mr-6 my-8" /> */}
    </div>
  );
};
export default BestProduct;
