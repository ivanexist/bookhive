import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { CheckOutlined, LoadingOutlined } from "@ant-design/icons";
import { BookHiveContext } from "../../context/BookHiveContext";

const ListProductCard = ({ book, bookId }) => {
  const {
    wishlists,
    addToCart,
    addToWishlist,
    removeFromWishlist,
    cartLoading,
    cartSuccess,
    scrollToTop,
  } = useContext(BookHiveContext);
  const [isHovering, setIsHovering] = useState(false);
  const isLoadingAddToCart = (bookId) => cartLoading === bookId;
  const isSuccessAddToCart = (bookId) => cartSuccess === bookId;

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  const isItemInWishlists = wishlists.find(
    (wishlist) => wishlist.book_id === book.book_id
  );

  const handleToggleWishlist = () =>
    isItemInWishlists ? removeFromWishlist(book) : addToWishlist(book);

  return (
    <motion.div
    // key={book.book_id}
    // initial={{ x: 200, opacity: 0 }}
    // animate={{ x: 0, opacity: 1 }}
    // exit={{ x: "-100%", opacity: 0 }}
    // transition={{ duration: 0.7 }}
    >
      <div className="flex my-4 p-2 w-full bg-blumine-50">
        <div className="lg:h-full lg:w-52 rounded-md object-center object-cover transition duration-300 ease-in-out hover:rounded-none hover:scale-105 hover:opacity-80 sm:py-2 lg:py-0">
          <Link key={book.book_id} to={`/shop/${book.book_id}`}>
            <img
              src={`https://raw.githubusercontent.com/ivanexist/bookhive/main/public/bookhive/${book.book_cover}`}
              alt={book.caption}
              onClick={scrollToTop}
            />
          </Link>
        </div>
        <div className="px-4 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap flex-col justify-start items-start">
              <h3 className="text-base font-bold text-gray-950 mb-1">
                <Link key={book.book_id} to={`/shop/${book.book_id}`}>
                  {book.title}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                fuga impedit delectus qui ipsa atque, odit similique rerum quis
                sed!
              </p>
            </div>
            <div className="flex flex-row my-4">
              <div>
                <span className="text-base font-bold text-gray-950 my-4 pr-2 border-r-2">
                  ${book.price}
                </span>
              </div>
              <div
                className={`text-base font-bold mx-2 ${
                  book.stock[0].available < 3
                    ? `text-red-500`
                    : `text-green-600`
                }   `}
              >
                <span className="flex">
                  {book.stock[0].available} left in stock
                </span>
              </div>
            </div>
            <div className="flex items-center gap-0 ">
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
              <span className="ml-1 text-gray-500">
                {book.average_rating} |
              </span>
              <span className="ml-1 text-gray-500">
                {book.stock[0].sold} Sold
              </span>
            </div>
          </div>
          <div>
            <div className="">
              <div className="flex sm:mt-4">
                <div className="mb-4 mr-2 lg:mb-0">
                  {/* Cart */}
                  <button
                    className="flex items-center justify-center w-full h-10 p-2  border border-blumine-500 lg:w-11 text-blumine-500 hover:text-blumine-50 hover:bg-blumine-500 hover:border-blumine-500 "
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
                        className="w-6 h-6"
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
                <div className="mb-4 mr-2 lg:mb-0">
                  {/* Wishlist */}
                  <button
                    className="flex items-center justify-center w-full h-10 p-2 text-blumine-500 hover:text-blumine-600 border border-blumine-500 lg:w-11 "
                    onClick={handleToggleWishlist}
                    onMouseEnter={handleMouseOver}
                    onMouseLeave={handleMouseOut}
                  >
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
                        className="h-6 w-6"
                      >
                        <path
                          fill="currentColor"
                          d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"
                        ></path>
                      </svg>
                    )}
                  </button>
                </div>
                <div className="mb-4 mr-2 lg:mb-0">
                  {/* Share */}
                  <button className="flex items-center justify-center w-full h-10 p-2 border border-blumine-500 lg:w-11 text-blumine-500 hover:text-blumine-50 hover:bg-blumine-500 hover:border-blumine-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4" />
    </motion.div>
  );
};

export default ListProductCard;
