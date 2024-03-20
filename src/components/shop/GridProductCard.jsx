import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SkeletonImage from "antd/es/skeleton/Image";
import { Skeleton } from "antd";
import { CheckOutlined, LoadingOutlined } from "@ant-design/icons";
import { BookHiveContext } from "../context/BookHiveContext";

const GridProductCard = ({ book, bookId }) => {
  const {
    wishlists,
    addToCart,
    addToWishlist,
    removeFromWishlist,
    loading,
    scrollToTop,
    cartSuccess,
    cartLoading,
  } = useContext(BookHiveContext);

  const [isHovering, setIsHovering] = useState(false);

  const isLoadingAddToCart = (bookId) => cartLoading === bookId;
  const isSuccessAddToCart = (bookId) => cartSuccess === bookId;

  const isItemInWishlists = wishlists.find(
    (wishlist) => wishlist.book_id === book.book_id
  );

  const handleToggleWishlist = () =>
    isItemInWishlists ? removeFromWishlist(book) : addToWishlist(book);

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 0, opacity: 0 }}
      transition={{ duration: 0.7 }}
      key={book.book_id}
      className={`relative rounded-md hover:shadow-md hover:rounded-t-none md:ml-2 sm:ml-0 sm:mx-4 md:mx-0`}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <div className="w-full overflow-hidden border-b-black bg-blumine-200 transition duration-300 ease-in-out hover:opacity-80 lg:h-56">
        {book.stock[0].available === 0 && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <span className="text-red-500 text-2xl font-bold bg-white px-4 py-2 rounded">
              Sold Out
            </span>
          </div>
        )}
        {isHovering && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute flex justify-end items-end flex-col top-4 ml-4"
          >
            {/* add to cart */}
            <div className="flex items-center border border-transparent justify-center md:p-3 md:mb-3 sm:p-4 sm:mb-4 transition-all  bg-white text-blumine-500 hover:text-white hover:bg-blumine-600 hover:border-blumine-600 cursor-pointer">
              {console.log(bookId)}
              <button
                className="cursor-pointer"
                disabled={cartLoading || cartSuccess}
                onClick={() => {
                  addToCart(book);
                }}
              >
                {isLoadingAddToCart(bookId) ? (
                  <LoadingOutlined spin className="mx-1" />
                ) : isSuccessAddToCart(bookId) ? (
                  <CheckOutlined className="font-extrabold mx-1" />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
            {/* add to wishlist */}
            <div className=" flex items-center border border-transparent md:p-3 md:mb-3 sm:p-4 sm:mb-4 transition-all  bg-white duration-300 cursor-pointer">
              <button className="cursor-pointer" onClick={handleToggleWishlist}>
                {isItemInWishlists ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path
                      fill="#ed1212"
                      d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-blumine-500 hover:text-blumine-600"
                  >
                    <path
                      fill="currentColor"
                      d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </motion.div>
        )}
        <Link key={book.book_id} to={`/shop/${book.book_id}`} className={``}>
          {loading ? (
            <div className="h-full w-full object-center lg:h-full lg:w-full flex justify-center items-center">
              <SkeletonImage active />
            </div>
          ) : (
            <img
              src={`https://raw.githubusercontent.com/ivanexist/bookhive/main/public/bookhive/${book.book_cover}`}
              alt={book.caption}
              onClick={scrollToTop}
              className={` h-full w-full object-center border border-blumine-100 lg:h-full lg:w-full transition duration-300 ease-in-out ${
                book.stock[0].available === 0 && "opacity-50"
              }`}
            />
          )}
        </Link>
      </div>
      {loading ? (
        <Skeleton
          active
          title={false}
          paragraph={{ rows: 3, width: ["60%", "40%", "65%"] }}
          className="my-2"
        />
      ) : (
        <div className="mt-1 p-2 flex flex-col justify-between">
          <div>
            <h3
              className="text-sm font-medium mb-2 text-gray-800"
              title={book.title}
            >
              {book.title.length > 20
                ? `${book.title.substring(0, 20)}...`
                : book.title}
            </h3>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-base font-semibold text-gray-800">
              ${book.price}
            </p>
            <div className="flex items-center text-sm text-gray-400 mt-2 -ml-1">
              {/* Star Rating */}
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <span className="ml-1">{book.average_rating} |</span>
              <span className="ml-1"> {book.stock[0].sold} Sold</span>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};
export default GridProductCard;
