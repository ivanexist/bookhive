import { Popover, List, Image, Space, Modal } from "antd";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const CartPopover = () => {
  const { cartItems, scrollToTop } = useContext(CartContext);

  const popoverTitle = (
    <div>
      <div className="flex justify-between items-start mx-2 text-gray-950">
        <span>
          Shopping Cart{" "}
          <span className="text-gray-500 font-semibold">
            (
            {cartItems.reduce(
              (total, cartItem) => total + cartItem.quantity,
              0
            )}
            )
          </span>
        </span>
        <Space wrap>
          <Link onClick={scrollToTop} to="/shop/cart">
            <span>
              <a className="mr-2 ml-8 text-blumine-500 hover:text-blumine-600 ">
                View Cart
              </a>
            </span>
          </Link>
        </Space>
      </div>
      <hr className="my-2" />
    </div>
  );

  const content = (
    <div>
      <div className="max-h-80 overflow-y-auto cursor-pointer mb-4">
        <List
          dataSource={cartItems}
          renderItem={(cartItem) => (
            <List.Item key={cartItem.book_id} className="flex items-center">
              <div className="flex mx-2 my-1">
                <Image
                  width={50}
                  src={`https://raw.githubusercontent.com/ivanexist/bookhive/main/public/bookhive/${cartItem.book_cover}`}
                  preview={true}
                />
                <div className="flex flex-col justify-center items-center px-2 text-gray-950">
                  <ul>
                    <Link
                      key={cartItem.book_id}
                      to={`/shop/${cartItem.book_id}`}
                      onClick={scrollToTop}
                    >
                      <li className="font-semibold text-gray-950 hover:text-blumine-600">
                        {cartItem.title.length > 30
                          ? `${cartItem.title.substring(0, 30)}...`
                          : cartItem.title}
                      </li>
                    </Link>
                    <li className="text-gray-500">({cartItem.quantity} pcs)</li>
                  </ul>
                </div>
              </div>
              <span className="font-semibold pr-2 text-gray-950">
                $ {(cartItem.price * cartItem.quantity).toFixed(2)}
              </span>
              {/* <p>Quantity: {item.quantity}</p> */}
            </List.Item>
          )}
        />
      </div>
      <div className="flex justify-end font-semibold text-gray-500 my-2 mx-6">
        Total Payment:{" "}
        <span className="text-gray-950 ml-2">
          $
          {cartItems
            .reduce(
              (total, cartItem) => total + cartItem.quantity * cartItem.price,
              0
            )
            .toFixed(2)}
        </span>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile View */}
      <Link to="/shop/cart" onClick={scrollToTop}>
        <button className="px-2 pt-4 relative border-2 border-transparent text-blumine-500 rounded-full hover:text-blumine-600 sm:block md:hidden focus:outline-none focus:text-blumine-600 transition duration-150 ease-in-out">
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
          {cartItems.length > 0 ? (
            <span className="absolute inset-0 object-right-top -mr-6">
              <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                {cartItems.reduce(
                  (total, cartItem) => total + cartItem.quantity,
                  0
                )}
              </div>
            </span>
          ) : (
            ""
          )}
        </button>
      </Link>
      {/* // Desktop View */}
      <Popover
        content={content}
        title={popoverTitle}
        trigger="hover"
        className="sm:hidden md:block"
      >
        <button
          className="px-2 relative border-2 border-transparent text-blumine-500 rounded-full hover:text-blumine-600 focus:outline-none focus:text-blumine-600 transition duration-150 ease-in-out"
          aria-label="Cart"
        >
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
          {cartItems.length > 0 ? (
            <span className="absolute inset-0 object-right-top -mr-6">
              <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-orange-500 text-white">
                {cartItems.reduce(
                  (total, cartItem) => total + cartItem.quantity,
                  0
                )}
              </div>
            </span>
          ) : (
            ""
          )}
        </button>
      </Popover>
    </>
  );
};

export default CartPopover;
