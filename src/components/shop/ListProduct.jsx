import { motion } from "framer-motion";
import ListProductCard from "./ListProductCard";
import ReactPaginate from "react-paginate";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ListProduct = ({
  currentItems,
  totalPages,
  currentPage,
  onHandlePageChange,
}) => {
  const showNextButton = currentPage !== totalPages - 1;
  const showPrevButton = currentPage !== 0;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col"
        >
          <br />
          {currentItems.map((book, key, idx) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={book.book_id}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1 + idx / 10,
                duration: 0.2,
              }}
            >
              <ListProductCard book={book} key={key} bookId={book.book_id} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        // variants={paginationVariants}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {totalPages > 1 && (
          <ReactPaginate
            // onClick={handleClickToTop}
            pageCount={totalPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={onHandlePageChange}
            containerClassName="flex items-center justify-center mt-12 mb-4 text-gray-950"
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
            breakLabel={<span className="mr-4">...</span>}
            pageClassName="block hover:border hover:border-solid hover:border-blumine-200 hover:bg-blumine-500 w-10 h-10 flex justify-center items-center hover:text-white cursor-pointer mx-1"
          />
        )}
      </motion.div>
    </div>
  );
};
export default ListProduct;
