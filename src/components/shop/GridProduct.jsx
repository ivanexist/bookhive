import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
import GridProductCard from "./GridProductCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "./cart/context/CartContext";

const GridProduct = ({
  currentItems,
  totalPages,
  currentPage,
  onHandlePageChange,
}) => {
  const { cartItems, wishlists } = useContext(CartContext);

  const showNextButton = currentPage !== totalPages - 1;
  const showPrevButton = currentPage !== 0;

  return (
    <div className="bg-white ">
      {/* <ToastContainer /> */}
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="grid grid-cols-1 gap-x-1 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-4">
          {currentItems.length > 0 ? (
            currentItems.map((book) => (
              <GridProductCard
                book={book}
                key={book.book_id}
                cartItem={cartItems}
                wishlist={wishlists}
                bookId={book.book_id}
              />
            ))
          ) : (
            <div className="grid col-span-5 h-screen place-content-center bg-white px-4">
              <h1 className="uppercase tracking-widest font-bold text-4xl text-blumine-900">
                Product Not Found
              </h1>
            </div>
          )}
        </div>
      </div>
      <motion.div
        variants={paginationVariants}
        initial="hidden"
        animate="visible"
      >
        {totalPages > 1 && (
          <ReactPaginate
            // onClick={handleClickToTop}
            pageCount={totalPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={onHandlePageChange}
            containerClassName="flex items-center justify-center mt-12 mb-4 text-gray-600"
            activeClassName="bg-blumine-500 text-white"
            nextLabel={
              showNextButton ? (
                <button className="w-10 h-10 flex justify-center items-center hover:bg-blumine-500  text-blumine-500 hover:text-white mr-4 cursor-pointer">
                  <FaAngleRight className="w-6 h-8 " />
                </button>
              ) : null
            }
            previousLabel={
              showPrevButton ? (
                <button className="w-10 h-10 flex justify-center items-center hover:bg-blumine-500 text-blumine-500 hover:text-white mr-4 cursor-pointer">
                  <FaAngleLeft className="w-6 h-8 " />
                </button>
              ) : null
            }
            breakLabel={<span className="mr-4 text-gray-600s">...</span>}
            pageClassName="block hover:border hover:border-solid hover:border-blumine-200 hover:bg-blumine-500 w-10 h-10 flex justify-center items-center hover:text-white cursor-pointer mx-1"
          />
        )}
      </motion.div>
    </div>
  );
};

const paginationVariants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      duration: 2,
    },
  },
};

export default GridProduct;
