import { useContext, useState } from "react";
import CheckoutItem from "./CheckoutItem";
// import bookData from "../../../json/book.json";
import { CartContext } from "../context/CartContext";

import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";

const CheckoutContent = () => {
  const { bookData, cartItems } = useContext(CartContext);

  const { bookId } = useParams();
  let itemsToCheckout = [];
  // function to get product details by ID
  const getBookById = (id) => bookData.find((book) => book.book_id === id);

  console.log(
    "isChecked " + cartItems.filter((cartItem) => cartItem.isChecked === true)
  );

  // Buy Now
  if (bookId) {
    const selectedBook = getBookById(parseInt(bookId));
    itemsToCheckout = [{ ...selectedBook, quantity: 1, isChecked: true }];
  } else {
    itemsToCheckout = cartItems.filter((cartItem) => cartItem.isChecked);
  }

  console.log(itemsToCheckout);

  const calculateTotalPayment = () => {
    return itemsToCheckout
      .reduce((total, cartItem) => {
        return (
          total + (cartItem.isChecked ? cartItem.price * cartItem.quantity : 0)
        );
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-5 ">
      <CheckoutForm />
      {/* Receipt */}
      <div className="col-span-2 border border-blumine-200 p-8 my-4">
        <h1 className="text-lg font-bold text-blumine-500">YOUR ORDER</h1>
        <hr className="mt-4 mb-8 border-t border-t-blumine-200" />
        <div>
          {itemsToCheckout.map((cartItem) => (
            <CheckoutItem cartItem={cartItem} key={cartItem.book_id} />
          ))}
        </div>
        <div className="flex justify-between border-y border-y-blumine-200 py-4 mt-8 text-gray-950">
          <span className="font-medium mx-2 text-blumine-500">Subtotal</span>
          <span className="font-medium mx-2">${calculateTotalPayment()}</span>
        </div>
        <div className="flex justify-between border-b border-b-blumine-200 py-4 text-gray-950">
          <div className="font-medium mx-2 text-blumine-500">Shipping Fee</div>
          <div className="font-medium mx-2">FREE</div>
        </div>
        <div className="flex justify-between border-b border-b-blumine-200 pt-4 pb-6 bg-blumine-200 text-gray-950">
          <div className="font-bold mx-2 text-blumine-600">Grand Total</div>
          <div className="font-bold mx-2">${calculateTotalPayment()}</div>
        </div>
        <hr className="font-bold" />
        <div className="px-2 py-8 mt-8 bg-blumine-100">
          <div className="flex flex-col justify-center items-center text-blumine-500">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="h-12 w-12"
              >
                <path
                  fill="currentColor"
                  d="M12 12.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M10.5 16a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"
                ></path>
                <path
                  fill="currentColor"
                  d="M17.526 5.116L14.347.659L2.658 9.997L2.01 9.99V10H1.5v12h21V10h-.962l-1.914-5.599zM19.425 10H9.397l7.469-2.546l1.522-.487zM15.55 5.79L7.84 8.418l6.106-4.878zM3.5 18.169v-4.34A3.008 3.008 0 0 0 5.33 12h13.34a3.009 3.009 0 0 0 1.83 1.83v4.34A3.009 3.009 0 0 0 18.67 20H5.332A3.01 3.01 0 0 0 3.5 18.169"
                ></path>
              </svg>
            </span>
            <span className="my-2">
              This store can’t accept payments right now.
            </span>
          </div>
        </div>
        {/* <div>
          <div className="mt-2">
            <input type="checkbox" className="mx-2 my-4" />
            I’ve read and accept the terms & conditions
          </div>
        </div> */}
        <div>
          <button className="w-full border py-4 my-4 border-blumine-200 bg-blumine-100 font-semibold text-blumine-500 cursor-default">
            Checkout (
            {itemsToCheckout.reduce((total, cartItem) => {
              return total + (cartItem.isChecked ? cartItem.quantity : 0);
            }, 0)}
            )
          </button>
        </div>
      </div>
    </div>
  );
};
export default CheckoutContent;
