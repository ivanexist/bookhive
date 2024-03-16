import { Button, Image, Modal, Spin } from "antd";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { CartContext } from "../cart/context/CartContext";
import { CheckOutlined, LoadingOutlined } from "@ant-design/icons";

const WishlistCard = ({
  wishlist,
  // cartItem,
  onAddMultipleItemsToCart,
  onHandleRemoveWishlistItem,
  wishlistId,
}) => {
  const { cartItems, cartLoading, cartSuccess } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const availableStock = wishlist.stock[0].available;
  const minQuantity = 0;
  const { book_id, title } = wishlist;

  const isLoadingAddMultipleItemsToCart = (wishlistId) =>
    cartLoading === wishlistId;

  const isSuccessAddMultipleItemsToCart = (wishlistId) =>
    cartSuccess === wishlistId;

  const bookIndex = cartItems.findIndex(
    (cartItem) => cartItem.book_id === wishlist.book_id
  );

  const quantityManager = cartItems[bookIndex]?.quantity
    ? cartItems[bookIndex].quantity
    : 0;

  // Handle Modal antd
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [confirmSuccess, setConfirmSuccess] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);

    setTimeout(() => {
      setConfirmLoading(false);
      setConfirmSuccess(true);

      setTimeout(() => {
        handleRemoveWishlist();
        setOpen(false);
        setConfirmLoading(false);
      }, 2000);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  // if(wishlist.quantity === (cartItem.stock[0].available - cartItem.quantity))
  const handleQuantityChange = (e) => setQuantity(parseInt(e.target.value, 10));

  const handleIncrementQuantity = () =>
    quantity < availableStock - quantityManager && setQuantity(quantity + 1);

  const handleDecrementQuantity = () =>
    quantity > minQuantity && setQuantity(Math.max(quantity - 1, 0));

  const handleAddMultipleItemsToCart = () =>
    onAddMultipleItemsToCart(wishlist, quantity, wishlistId);

  const handleRemoveWishlist = () => onHandleRemoveWishlistItem(book_id);

  const notifyAddedToCart = (book) =>
    toast.success(
      <div>
        <span className="font-semibold">{book.title}</span> ({quantity} pcs)
        added to cart!
      </div>,
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
    <div>
      <Modal
        // title="Title"
        open={open}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={[
          <button
            key={book_id}
            onClick={handleCancel}
            className="px-4 py-2 mx-2 font-semibold text-blumine-500 bg-gray-100"
          >
            Cancel
          </button>,
          <button
            key={book_id}
            onClick={handleOk}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 mx-2 text-white font-semibold"
          >
            {confirmLoading ? (
              <span>
                <Spin
                  indicator={
                    <LoadingOutlined spin className="text-white mr-2" />
                  }
                />
                Removing
              </span>
            ) : confirmSuccess ? (
              <span className="mr-2">
                <CheckOutlined className="text-white mr-2" />
                Removed
              </span>
            ) : (
              "Remove"
            )}
          </button>,
        ]}
      >
        <p>
          Remove <span className="font-bold">{title}</span> from your wishlist?{" "}
        </p>
      </Modal>

      <div className="flex my-4 bg-white p-2 justify-between">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={`../../../../public/bookhive/${wishlist.book_cover}`}
            preview={true}
            width={100}
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col w-96 justify-between mx-4">
          <div className="flex flex-col">
            <div>
              <div>
                <Link
                  key={wishlist.book_id}
                  to={`/shop/${wishlist.book_id}`}
                  onClick={() => handleClickToTop(`/shop/${wishlist.book_id}`)}
                >
                  <h1 className="text-lg font-medium text-gray-950 hover:text-blumine-500">
                    {wishlist.title}{" "}
                    <span className="text-gray-500 ">
                      ({wishlist.publish[0].published_year})
                    </span>
                  </h1>
                </Link>
              </div>
              <div>
                <span className="text-gray-500 my-2">{wishlist.author[0]}</span>
              </div>
              <div className="flex my-2">
                <span className="font-bold text-gray-950">
                  ${wishlist.price}
                </span>
                <span className="text-roti-200 mx-2 md:block sm:hidden">|</span>
                <span className="md:block sm:hidden">
                  {wishlist.stock[0].available < 3 ? (
                    <span
                      className={`mt-1 text-base ${
                        wishlist.stock[0].available <= 2
                          ? "text-red-500"
                          : "text-green-600"
                      }`}
                    >
                      <span className="font-bold">
                        {wishlist.stock[0].available}
                      </span>{" "}
                      left in stock
                    </span>
                  ) : (
                    <span className="mt-1 text-base text-green-500">
                      {wishlist.stock[0].available} left in Stock
                    </span>
                  )}
                </span>
                <span className="mx-2 text-orange-500">
                  ({quantityManager} items in Cart)
                </span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex border border-blumine-200">
              <button
                onClick={handleDecrementQuantity}
                className={`py-1 px-3.5 font-semibold text-lg outline-none  ${
                  quantity === 0 ? "text-blumine-200" : "text-blumine-500"
                }
               `}
                disabled={quantity === 0}
              >
                -
              </button>
              <input
                className="h-9 w-8 text-gray-800 bg-white text-center items-center text-sm outline-none font-bold"
                type="number"
                value={quantity}
                min={0}
                onChange={(e) =>
                  handleQuantityChange(parseInt(e.target.value, 10))
                }
                disabled
              />

              <button
                onClick={handleIncrementQuantity}
                className={`py-1 px-3 font-semibold text-lg outline-none ${
                  quantity === availableStock - quantityManager
                    ? "text-blumine-200 "
                    : "text-blumine-500"
                }`}
                disabled={quantity === availableStock - quantityManager}
              >
                +
              </button>
            </div>
            <div className="flex mt-1 ">
              {/* remove item from wishlist */}
              <div className="flex text-blumine-500 hover:text-blumine-600 cursor-pointer ml-4"></div>
            </div>
          </div>
        </div>
        <div className="mx-4 sm:flex sm:justify-end w-40">
          <div className="flex flex-col justify-between items-end ">
            {/* {isHovering && ()} */}
            <div
              className="flex text-blumine-500 cursor-pointer ml-4"
              onClick={showModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="h-6 w-6 hover:text-red-500"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1M6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"
                />
              </svg>
            </div>
            <div
              className="border-2 font-semibold border-blumine-500 bg-blumine-500 px-4 py-2 cursor-pointer hover:bg-blumine-600 hover:border-blumine-600  text-white transition duration-300"
              onClick={() => {
                if (quantity === 0) {
                  notifyMinimumAddItem();
                } else {
                  setTimeout(() => {
                    handleAddMultipleItemsToCart();
                    setTimeout(() => {
                      notifyAddedToCart(wishlist);
                    }, 1500);
                    setTimeout(() => {
                      handleRemoveWishlist();
                    }, 3000);
                  }, 0);
                }
              }}
            >
              <button className="flex justify-center items-center text-sm">
                {/* {console.log(wishlistId)} */}

                {isLoadingAddMultipleItemsToCart(wishlistId) ? (
                  <LoadingOutlined spin className="mx-12 my-1" />
                ) : isSuccessAddMultipleItemsToCart(wishlistId) ? (
                  <CheckOutlined className="mx-12 my-1" />
                ) : (
                  <span className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="sm:w-4 sm:h-4 md:w-6 md:h-6 mx-2"
                    >
                      <g fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5"
                        ></path>
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"></path>
                      </g>
                    </svg>
                    <span className="sm:hidden md:block mt-1">Add to Cart</span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className=" ml-2 mr-6 border-t border-t-blumine-200" />
    </div>
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
    className: "bg-blumine-50",
  });

export default WishlistCard;
