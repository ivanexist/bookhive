import { FaStar } from "react-icons/fa";
import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import DescReview from "./DescReview";
import ScrollUpButton from "../ScrollUpButton";
import { CheckOutlined, LoadingOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { BookHiveContext } from "../../context/BookHiveContext";
import SkeletonImage from "antd/es/skeleton/Image";
import { Skeleton } from "antd";
import SkeletonButton from "antd/es/skeleton/Button";

const ProductDetailsCard = ({
  selectedBook,
  selectedBookId,
  onAddMultipleItemsToCart,
}) => {
  const {
    cartItems,
    wishlists,
    addToWishlist,
    removeFromWishlist,
    addToCart,
    scrollToTop,
    cartLoading,
    cartSuccess,
    loading,
  } = useContext(BookHiveContext);
  const [quantity, setQuantity] = useState(0);
  const availableStock = selectedBook.stock[0].available;

  const minQuantity = 0;
  const [isHovering, setIsHovering] = useState(false);

  const isLoadingAddToCart = (bookId) => cartLoading === bookId;
  const isSuccessAddToCart = (bookId) => cartSuccess === bookId;

  const bookIndex = cartItems.findIndex(
    (cartItem) => cartItem.book_id === selectedBook.book_id
  );

  const quantityManager = cartItems[bookIndex]?.quantity
    ? cartItems[bookIndex].quantity
    : 0;

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);
  const isItemInWishlists = wishlists.find(
    (wishlist) => wishlist.book_id === selectedBook.book_id
  );

  const handleQuantityChange = (e) => setQuantity(parseInt(e.target.value, 10));

  const handleToggleWishlist = () =>
    isItemInWishlists
      ? removeFromWishlist(selectedBook)
      : addToWishlist(selectedBook);

  const handleIncrementQuantity = () =>
    quantity < availableStock - quantityManager && setQuantity(quantity + 1);

  const handleDecrementQuantity = () =>
    quantity > minQuantity && setQuantity(Math.max(quantity - 1, 0));

  const handleAddMultipleItemsToCart = () =>
    onAddMultipleItemsToCart(selectedBook, quantity);

  const notifyAddedToCart = (book) =>
    toast.success(
      <span>
        <b>
          {book.title} ({quantity} pcs)
        </b>{" "}
        added to cart!
      </span>,
      {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "text-gray-950 bg-blumine-50",
      }
    );

  return (
    <>
      <ToastContainer />
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="text-blumine-700 overflow-hidden"
      >
        <div className="px-4 py-8 mx-auto">
          <div className="sm:w-full lg:w-11/12 flex flex-wrap">
            {loading ? (
              <div className="lg:w-1/2 w-full object-center bg-blumine-100 flex justify-center items-center">
                <SkeletonImage active className="bg-blumine-100" />
              </div>
            ) : (
              <img
                src={`https://raw.githubusercontent.com/ivanexist/bookhive/main/public/bookhive/${selectedBook.book_cover}`}
                alt="ecommerce"
                className="lg:w-1/2 w-full object-center border border-blumine-100 p-8"
              />
            )}
            <div className="lg:w-1/2 w-full lg:pl-10">
              <div>
                {loading ? (
                  <Skeleton
                    active
                    title={false}
                    paragraph={{ rows: 1, width: ["15%"] }}
                    className="my-2"
                  />
                ) : availableStock > 0 ? (
                  <div className="bg-green-50 text-green-500 w-20 px-1 mb-2 sm:mt-4 lg:mt-0">
                    <span> IN STOCK</span>
                  </div>
                ) : (
                  <div className="bg-red-100 text-red-500 w-32 pl-2 mb-2 sm:mt-4 lg:mt-0">
                    <span> OUT OF STOCK</span>
                  </div>
                )}
              </div>
              {loading ? (
                <Skeleton
                  active
                  title={false}
                  paragraph={{ rows: 3, width: ["60%", "40%", "65%"] }}
                  className="my-2"
                />
              ) : (
                <div>
                  <h1 className="text-gray-800 text-3xl title-font font-medium mb-1 sm:my-4 lg:my-0 ">
                    {selectedBook.title}
                  </h1>
                  <div className="text-gray-400 my-1">
                    {selectedBook.caption}
                  </div>
                  <div className="flex mb-1 ">
                    <div className="flex items-center">
                      <span className="text-gray-400">
                        By
                        <span className="font-medium text-gray-800 ml-1">
                          {selectedBook.author[0]}{" "}
                        </span>
                      </span>
                    </div>
                    <div className="flex ml-4 pl-4 my-2 border-l-2 border-blumine-200">
                      <span className="flex items-center">
                        <FaStar className="w-4 h-4 text-yellow-400" />
                        <FaStar className="w-4 h-4 text-yellow-400" />
                        <FaStar className="w-4 h-4 text-yellow-400" />
                        <FaStar className="w-4 h-4 text-yellow-400" />
                        <FaStar className="w-4 h-4 text-yellow-400" />
                        <span className="ml-2 text-gray-800">
                          <b>{selectedBook.average_rating}</b>{" "}
                          <span className="text-gray-500">(24 Reviews)</span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex">
                {loading ? (
                  <Skeleton
                    active
                    title={false}
                    paragraph={{ rows: 1, width: ["15%"] }}
                    className="my-4 text-blumine-200"
                  />
                ) : (
                  <span className="title-font font-bold text-2xl text-gray-800 my-4">
                    ${selectedBook.price}
                  </span>
                )}
              </div>
              <div className="flex my-4 items-center border-b-2 border-blumine-200"></div>
              {loading ? (
                <Skeleton
                  active
                  title={false}
                  paragraph={{ rows: 6, width: ["100%"] }}
                  className="my-4 text-blumine-200"
                />
              ) : (
                <p className="leading-relaxed my-4 text-justify text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                  laboriosam voluptates magni nam cumque dolor repellendus saepe
                  animi voluptatem culpa quos, amet architecto vel facilis optio
                  tempore distinctio earum quae? Dolorem enim repellat omnis.
                  Necessitatibus hic odio beatae soluta maiores dolore itaque
                  tempore, quo ipsum nostrum iusto cum iure molestias dolores
                  explicabo nesciunt temporibus qui impedit, quis, ullam
                  perspiciatis vitae.
                </p>
              )}
              <div className="flex items-center pb-2 border-b-2 border-blumine-200 lg:my-4"></div>

              {/* Button quantity and add to cart */}
              <div className="sm:hidden md:block">
                {availableStock > 0 ? (
                  <div>
                    {/* border-b border-t */}
                    <div className="flex items-center">
                      <div className="flex justify-center items-center ">
                        <div className="w-28 my-4">
                          {loading ? (
                            <SkeletonButton
                              style={{ width: "7rem", height: "2.8rem" }}
                              active
                            />
                          ) : (
                            <div className="relative flex w-28 h-full bg-transparent border border-blumine-200">
                              <button
                                className={`p-2 w-20 outline-none ${
                                  quantity === 0
                                    ? "text-blumine-200 "
                                    : "text-blumine-500"
                                }`}
                                onClick={handleDecrementQuantity}
                                disabled={quantity === 0}
                              >
                                <span className="m-auto text-2xl font-semibold">
                                  -
                                </span>
                              </button>
                              <input
                                type="number"
                                className="flex items-center w-full font-semibold text-center text-gray-800 placeholder-gray-500 outline-none  focus:outline-none text-md hover:text-gray-700"
                                value={quantity}
                                min={0}
                                onChange={handleQuantityChange}
                                readOnly
                              />
                              <button
                                className={`p-2 w-20  outline-none ${
                                  quantity === availableStock - quantityManager
                                    ? "text-blumine-200 "
                                    : "text-blumine-500"
                                }`}
                                onClick={handleIncrementQuantity}
                                disabled={
                                  quantity === availableStock - quantityManager
                                }
                              >
                                <span className="m-auto text-2xl font-normal">
                                  +
                                </span>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-center items-center mx-8">
                        <div className="relative flex w-52 h-full bg-transparent">
                          {loading ? (
                            <SkeletonButton
                              style={{ width: "13rem", height: "2.8rem" }}
                              active
                            />
                          ) : (
                            <button
                              className="flex justify-center sm:w-full lg:w-52 bg-blumine-500  p-2 border-2 border-blumine-500 hover:border-blumine-600 py-2 px-4 focus:outline-none hover:bg-blumine-600 text-white hover:font-semibold"
                              onClick={() => {
                                if (quantity === 0) {
                                  notifyMinimumAddItem(selectedBook);
                                } else {
                                  setTimeout(() => {
                                    handleAddMultipleItemsToCart();
                                    setTimeout(() => {
                                      notifyAddedToCart(selectedBook);
                                      setQuantity(0);
                                    }, 1350);
                                  }, 0);
                                }
                              }}
                            >
                              {isLoadingAddToCart(selectedBookId) ? (
                                <LoadingOutlined spin className="mx-1 my-1" />
                              ) : isSuccessAddToCart(selectedBookId) ? (
                                <CheckOutlined className="font-extrabold mx-1 my-1" />
                              ) : (
                                <span className="flex">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 15 15"
                                    className="w-6 h-6 mr-2"
                                  >
                                    <path
                                      fill="none"
                                      stroke="currentColor"
                                      d="M4.5 4v-.5a3 3 0 0 1 6 0V4m-3 3v5M5 9.5h5M2.401 6.39l-.778 7a1 1 0 0 0 .994 1.11h9.766a1 1 0 0 0 .994-1.11l-.778-7a1 1 0 0 0-.994-.89h-8.21a1 1 0 0 0-.994.89Z"
                                    ></path>
                                  </svg>
                                  Add to Cart
                                </span>
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                      <div
                        onClick={handleToggleWishlist}
                        onMouseEnter={handleMouseOver}
                        onMouseLeave={handleMouseOut}
                      >
                        {loading ? (
                          <SkeletonButton
                            style={{ width: "2rem", height: "2.8rem" }}
                            active
                          />
                        ) : (
                          <button className="transition-all duration-300">
                            {isItemInWishlists ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                className="h-8 w-8"
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
                                className="h-8 w-8 text-blumine-500 hover:text-blumine-600"
                              >
                                <path
                                  fill="currentColor"
                                  d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"
                                ></path>
                              </svg>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="my-4 lg:mb-0">
                      {loading ? (
                        <SkeletonButton
                          style={{ width: "33rem", height: "2.8rem" }}
                          active
                        />
                      ) : (
                        <Link
                          key={selectedBook.book_id}
                          to={`/shop/cart/checkout/${selectedBook.book_id}`}
                          onClick={scrollToTop}
                        >
                          <button className="w-full h-10 p-2 bg-blumine-500 text-blumine-50 hover:bg-blumine-600">
                            Buy Now
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="my-4 mt-6 lg:mb-0">
                    <button
                      disabled
                      className="w-full h-10 p-2 my-2 mr-4 bg-blumine-100 text-blumine-400 font-semibold cursor-not-allowed dark:bg-blumine-400 dark:hover:bg-blumine-400"
                    >
                      SOLD OUT
                    </button>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center lg:pb-4 lg:border-b-2 lg:border-blumine-200 lg:my-4"></div>
              {loading ? (
                <Skeleton
                  active
                  title={false}
                  paragraph={{ rows: 2, width: ["100%", "100%"] }}
                  className="my-2"
                />
              ) : (
                <div className="grid grid-cols-3 gap-4 my-8">
                  <div className="flex flex-col border border-blumine-200 p-2 px-4 items-center">
                    <div className="text-gray-500">Publisher</div>
                    <div className="my-2 justify-center items-center font-semibold text-gray-800">
                      {selectedBook.publish[0].publisher_name}
                    </div>
                  </div>
                  <div className="flex flex-col border border-blumine-200 p-2 items-center text-gray-800">
                    <div className="text-gray-500">Published Year</div>
                    <div className="my-2 font-semibold">
                      {selectedBook.publish[0].published_year}
                    </div>
                  </div>
                  <div className="flex flex-col border border-blumine-200 p-2 items-center text-gray-700">
                    <div className="text-gray-500">Total pages</div>
                    <div className="my-2 font-semibold">
                      {selectedBook.total_page}
                    </div>
                  </div>
                </div>
              )}
              {loading ? (
                <Skeleton
                  active
                  title={false}
                  paragraph={{ rows: 1, width: "50%" }}
                  className="my-8"
                />
              ) : (
                <div className="flex ">
                  <span className="text-gray-500 mr-2">Category: </span>
                  <span className="text-gray-800 font-semibold">
                    {selectedBook.categories_title.join(", ")}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
      <DescReview />

      {/* Bottom Navigation */}

      <div className="block md:hidden fixed bottom-0 left-0 w-full bg-blumine-50 p-4 z-20">
        {availableStock > 0 ? (
          <div className="grid grid-cols-8 gap-x-4 justify-between items-center">
            {/* Your other navigation items */}
            <div
              className="col-span-1 flex items-center"
              onClick={handleToggleWishlist}
            >
              {/* Add to Wishlist button */}
              <button>
                {isItemInWishlists ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="h-8 w-8"
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
                    className="h-8 w-8 text-blumine-500"
                  >
                    <path
                      fill="currentColor"
                      d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
            <div className="col-span-3">
              {/* Add to BuyNow button */}
              <Link
                key={selectedBook.book_id}
                to={`/shop/cart/checkout/${selectedBook.book_id}`}
                onClick={scrollToTop}
              >
                <button className="text-sm bg-blumine-500 h-full w-full hover:bg-blumine-600 px-8 py-2 text-white ">
                  Buy now
                </button>
              </Link>
            </div>
            <div className="col-span-4">
              {/* Add to Cart button */}
              <button className="bg-blumine-500 text-sm h-full w-full hover:bg-blumine-600 px-6 py-2 text-white ">
                <div
                  className="flex justify-center items-center"
                  onClick={() => addToCart(selectedBook)}
                >
                  {isLoadingAddToCart(selectedBookId) ? (
                    <LoadingOutlined spin className="mx-1 my-1" />
                  ) : isSuccessAddToCart(selectedBookId) ? (
                    <CheckOutlined className="font-extrabold mx-1 my-1" />
                  ) : (
                    <span className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 15 15"
                        className="w-5 h-5 mr-2"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          d="M4.5 4v-.5a3 3 0 0 1 6 0V4m-3 3v5M5 9.5h5M2.401 6.39l-.778 7a1 1 0 0 0 .994 1.11h9.766a1 1 0 0 0 .994-1.11l-.778-7a1 1 0 0 0-.994-.89h-8.21a1 1 0 0 0-.994.89Z"
                        ></path>
                      </svg>
                      Add to Cart
                    </span>
                  )}
                </div>
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-8 gap-x-4 justify-between items-center">
            {/* Your other navigation items */}
            <div
              className="col-span-1 flex items-center"
              onClick={handleToggleWishlist}
            >
              {/* Add to Wishlist button */}
              <button>
                {isItemInWishlists ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="h-8 w-8"
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
                    className="h-8 w-8 text-blumine-500"
                  >
                    <path
                      fill="currentColor"
                      d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
            <div className="col-span-7">
              {/* Add to BuyNow button */}
              <button
                className="bg-red-100 h-full w-full px-8 py-2 text-red-500 font-bold uppercase"
                disabled
              >
                Sold Out
              </button>
            </div>
          </div>
        )}
      </div>
      <ScrollUpButton />
    </>
  );
};

const notifyMinimumAddItem = () =>
  toast.warn(`Insert at least 1 item!`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    className: "bg-blumine-50 text-gray-950",
  });
export default ProductDetailsCard;
