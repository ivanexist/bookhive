import { useContext, useEffect, useState } from "react";
import { Image, List, Modal, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { CheckOutlined, LoadingOutlined } from "@ant-design/icons";

const CartItemsCard = ({ cartItem, onCartItemChange, onRemoveItemCart }) => {
  const navigate = useNavigate();

  const { book_id, title, price, quantity, isChecked } = cartItem;
  const { cartItems, wishlists, addToWishlist, removeFromWishlist } =
    useContext(CartContext);
  const minQuantity = 1;
  const maxQuantity = cartItem.stock[0].available;
  const [isHovering, setIsHovering] = useState(false);

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
        handleRemoveItemCart();
        setOpen(false);
        setConfirmSuccess(false);
      }, 2000);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  const isItemInWishlists = wishlists.find(
    (wishlist) => wishlist.book_id === cartItem.book_id
  );

  const handleClickToTop = (to) => {
    navigate(to);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleCheckboxChange = () =>
    onCartItemChange({ ...cartItem, isChecked: !isChecked });

  const handleIncrementQuantityBookInCart = () =>
    quantity < maxQuantity && handleQuantityChange(quantity + 1);

  const handleDecrementQuantityBookInCart = () => {
    if (quantity > minQuantity) {
      handleQuantityChange(Math.max(quantity - 1, 1));
    }
  };

  const handleQuantityChange = (newQuantity) => {
    // Check if the value is within the specified range
    if (
      !isNaN(newQuantity) &&
      newQuantity >= minQuantity &&
      newQuantity <= maxQuantity
    )
      onCartItemChange({ ...cartItem, quantity: newQuantity });
  };

  const handleRemoveItemCart = () => onRemoveItemCart(book_id);

  const handleToggleWishlist = () =>
    isItemInWishlists ? removeFromWishlist(cartItem) : addToWishlist(cartItem);

  const totalPaymentPerItems = () =>
    (cartItem.price * cartItem.quantity).toFixed(2);

  return (
    <div>
      <Modal
        open={open}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={[
          <button
            key={book_id}
            onClick={handleCancel}
            className="px-4 py-2 mx-2 text-blumine-500 font-semibold bg-blumine-100"
          >
            Cancel
          </button>,
          <button
            key={book_id}
            onClick={handleOk}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 mx-2 text-white focus:bg-red-600"
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
        <div>
          <p>
            Remove <span className="font-semibold">{title}</span> from your
            cart?
          </p>
        </div>
      </Modal>
      <div className="flex my-4 bg-white p-2 justify-between">
        <div className="flex flex-col justify-center items-center mx-4">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={`../../../../public/bookhive/${cartItem.book_cover}`}
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
                  key={cartItem.book_id}
                  to={`/shop/${cartItem.book_id}`}
                  onClick={() => handleClickToTop(`/shop/${cartItem.book_id}`)}
                >
                  <h1 className="text-lg font-medium text-gray-950 hover:text-blumine-500">
                    {cartItem.title}
                  </h1>
                </Link>
              </div>
              <div className="flex my-2">
                <span className="font-bold text-gray-950">
                  ${cartItem.price}
                </span>
                <span className="text-blumine-200 mx-2 md:block sm:hidden">
                  |
                </span>
                <span className="md:block sm:hidden">
                  {cartItem.stock[0].available < 3 ? (
                    <span
                      className={`mt-1 text-base ${
                        cartItem.stock[0].available <= 2
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      <span className="font-bold">
                        {cartItem.stock[0].available}
                      </span>{" "}
                      left in stock
                    </span>
                  ) : (
                    <span className="mt-1 text-base text-green-500">
                      In Stock
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex border border-blumine-200">
              <button
                onClick={handleDecrementQuantityBookInCart}
                className={`py-1 px-3.5 outline-none font-semibold ${
                  cartItem.quantity === 1
                    ? "text-blumine-200"
                    : "text-blumine-500"
                }`}
                disabled={cartItem.quantity === 1}
              >
                -
              </button>
              <input
                className="h-8 w-8 bg-white text-center text-xs outline-none font-bold"
                type="number"
                value={quantity}
                onChange={(e) =>
                  handleQuantityChange(parseInt(e.target.value, 10))
                }
                disabled
              />

              <button
                onClick={handleIncrementQuantityBookInCart}
                className={`py-1 px-3 font-semibold outline-none ${
                  cartItem.quantity === cartItem.stock[0].available
                    ? "text-blumine-200"
                    : "text-blumine-500"
                }`}
                disabled={cartItem.quantity === cartItem.stock[0].available}
              >
                +
              </button>
            </div>
            <div className="flex mt-1 ">
              <div className="text-blumine-500 hover:text-blumine-600 cursor-pointer ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path
                    fill="currentColor"
                    d="M5 2h16v12h-2V4H5v16h8v2H3V2zm2 4h10v2H7zm10 4H7v2h10zM7 14h7v2H7zm13 5h3v2h-3v3h-2v-3h-3v-2h3v-3h2z"
                  />
                </svg>
              </div>
              {/* add to wishlist */}
              <div
                className="flex text-blumine-500 hover:text-blumine-600 cursor-pointer ml-4"
                onClick={handleToggleWishlist}
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOut}
              >
                <button>
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
                {/* <span className="sm:hidden md:block">Save</span> */}
              </div>

              {/* remove item from cart */}
              <div
                // className="text-roti-500"
                className="flex text-blumine-500 cursor-pointer ml-4"
                onClick={showModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 hover:text-red-500 "
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
                {/* <span className="sm:hidden md:block">Delete</span> */}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4 sm:flex sm:justify-end w-40">
          <div className="flex flex-col justify-between ">
            <div className="flex justify-end text-blumine-500 font-semibold">
              <span>${totalPaymentPerItems()}</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-6 border-t border-t-blumine-200" />
    </div>
  );
};
export default CartItemsCard;
