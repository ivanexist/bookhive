import { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import CartItemsCard from "./CartItemsCard";
import { Link } from "react-router-dom";
import { Image, List, Modal, Spin } from "antd";
import { CheckOutlined, LoadingOutlined } from "@ant-design/icons";

const CartContent = () => {
  const { cartItems, setCartItems, scrollToTop } = useContext(CartContext);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedDeleteItemsCount, setSelectedDeleteItemsCount] = useState(0);
  const [filteredCartItems, setFilteredCartItems] = useState([]);
  const [searchQueryCartItems, setSearchQueryCartItems] = useState("");
  // console.log(selectedDeleteItems);

  useEffect(() => {
    let updatedCartItems = [...cartItems];

    const searchCartitemsProducts = (cartItem) => {
      const searchMatch = cartItem.title
        .toLowerCase()
        .includes(searchQueryCartItems.toLowerCase());

      return searchMatch;
    };
    const filteredCartItemsProducts = updatedCartItems.filter(
      searchCartitemsProducts
    );
    setFilteredCartItems(filteredCartItemsProducts);
  }, [searchQueryCartItems]);

  const handleSearchCartItems = (searchQuery) => {
    const filteredCartItemsProducts = cartItems.filter((cartItem) =>
      cartItem.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCartItems(filteredCartItemsProducts);
  };

  const handleInputChangeCartItems = (event) => {
    setSearchQueryCartItems(event.target.value);
    handleSearchCartItems(event.target.value);
  };

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
        handleDeleteSelectedItems();
        setOpen(false);
        setConfirmSuccess(false);
      }, 2000);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  // Toggle allcheckboxes
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const updatedCartItems = cartItems.map((cartItem) => ({
      ...cartItem,
      isChecked: !selectAll,
    }));
    const selectedDeletedItems = updatedCartItems.filter(
      (cartItem) => cartItem.isChecked
    );
    setSelectedDeleteItemsCount(selectedDeletedItems.length);
    setCartItems(updatedCartItems);
  };

  // Toggle individual checkbox
  const toggleCheckbox = (index) => {
    // Update the isChecked property of the item at the given index
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].isChecked = !updatedCartItems[index].isChecked;
    setCartItems(updatedCartItems);
  };
  console.log(cartItems);

  const handleCartItemChange = (updatedCartItem) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.book_id === updatedCartItem.book_id ? updatedCartItem : cartItem
    );
    // update selected item count
    const selectedDeletedItems = updatedCartItems.filter(
      (cartItem) => cartItem.isChecked
    );

    setSelectedDeleteItemsCount(selectedDeletedItems.length);
    setCartItems(updatedCartItems);
    setSelectAll(updatedCartItems.every((cartItem) => cartItem.isChecked));
  };

  const handleRemoveItemCart = (bookId) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.book_id !== bookId
    );
    setCartItems(updatedCartItems);
  };

  const handleDeleteSelectedItems = () => {
    // FIlter out the selected items from the products list
    const updatedCartItems = cartItems.filter(
      (cartItem) => !cartItem.isChecked
    );
    setCartItems(updatedCartItems);
    setSelectedDeleteItemsCount(0);
  };

  // Calculate the total price of books in all cart
  const calculateTotalPayment = () => {
    // Calculate total paymentbased on fetched data
    return cartItems
      .reduce((total, cartItem) => {
        return (
          total + (cartItem.isChecked ? cartItem.price * cartItem.quantity : 0)
        );
      }, 0)
      .toFixed(2);
  };

  return (
    <div>
      <Modal
        // title="Title"
        open={open}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={[
          <button
            key={cartItems.book_id}
            onClick={handleCancel}
            className="px-4 py-2 mx-2 text-blumine-500 font-semibold bg-blumine-100"
          >
            Cancel
          </button>,
          <button
            key={cartItems.book_id}
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
          <p className="mb-2">
            Remove{" "}
            <span className="font-semibold">
              {selectedDeleteItemsCount}
              {selectedDeleteItemsCount > 1 ? " items" : " item"}
            </span>{" "}
            from your cart?{" "}
          </p>
          <div className="max-h-64 overflow-y-auto cursor-pointer mb-4">
            <List
              dataSource={cartItems.filter((cartItem) => cartItem.isChecked)}
              renderItem={(cartItem) => (
                <List.Item key={cartItem.book_id} className="flex items-center">
                  <div className="flex mx-2 my-1">
                    <Image
                      width={50}
                      src={`../../../../public/bookhive/${cartItem.book_cover}`}
                      preview={true}
                    />
                    <div className="flex flex-col justify-center items-center px-2 cursor-default">
                      <ul>
                        <li className="font-semibold ">
                          {cartItem.title.length > 30
                            ? `${cartItem.title.substring(0, 30)}...`
                            : cartItem.title}
                        </li>
                        <li> ({cartItem.quantity} pcs)</li>
                      </ul>
                    </div>
                  </div>
                </List.Item>
              )}
            />
          </div>
        </div>
      </Modal>
      <div className="grid sm:grid-cols-1 md:grid-cols-6">
        <div className="flex justify-between items-center col-span-4 border-b border-b-blumine-200 mx-4 pb-4">
          <div className="font-bold ml-2 mb-4">
            <h1 className="mt-4 text-blumine-500">Shopping Cart</h1>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-6">
        <div className="flex justify-between col-span-4">
          <div className="text-blumine-500">
            <label>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className="ml-6 mr-4 my-4 cursor-pointer"
              />
              <span className="font-semibold">
                Select All ({cartItems.length})
              </span>
            </label>
          </div>
          <div>
            {selectedDeleteItemsCount > 0 ? (
              <button
                onClick={showModal}
                className="text-red-600 font-bold sm:mt-2 mx-4"
              >
                Remove ({selectedDeleteItemsCount})
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-6">
          <div className="col-span-4">
            <hr className="mx-4" />
            {cartItems.length > 0 ? (
              cartItems.map((cartItem, book) => (
                <CartItemsCard
                  cartItem={cartItem}
                  book={book}
                  key={cartItems.book_id}
                  onCartItemChange={handleCartItemChange}
                  onRemoveItemCart={handleRemoveItemCart}
                />
              ))
            ) : (
              <div className="grid h-screen place-content-center bg-white px-4">
                <h1 className="uppercase tracking-widest font-bold text-4xl text-roti-500">
                  No Items in your cart
                </h1>
              </div>
            )}
          </div>
          <div className="col-span-2 bg-white p-6">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-950">Subtotal</p>
              <p className="text-gray-950">${calculateTotalPayment()}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-950">Shipping</p>
              <p className="text-gray-950">FREE</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold text-gray-950">Total Payment:</p>
              <div className="flex flex-col justify-end items-end">
                <p className="mb-1 text-lg font-bold text-gray-950">
                  ${calculateTotalPayment()}
                </p>
              </div>
            </div>
            <Link to={`/shop/cart/checkout`} onClick={scrollToTop}>
              <button className="sm:hidden lg:block mt-6 w-full bg-blumine-500 py-2 font-semibold text-blumine-50 hover:bg-blumine-600">
                Checkout (
                {cartItems.reduce((total, cartItem) => {
                  return total + (cartItem.isChecked ? cartItem.quantity : 0);
                }, 0)}
                )
              </button>
            </Link>
            <Link to={`/shop`}>
              <button className="sm:hidden lg:block w-full bg-blumine-50 my-4 py-2 font-semibold text-blumine-600 hover:bg-blumine-100">
                Continue to Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Bottom Navigation */}
      <div className="block lg:hidden fixed bottom-0 left-0 w-full bg-white p-4 z-20">
        <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <p className="text-lg font-bold text-gray-950">Total Payment:</p>
            <p className="mb-1 text-lg font-bold text-gray-950">
              ${calculateTotalPayment()}
            </p>
          </div>
          <Link to={`/shop/cart/checkout`} onClick={scrollToTop}>
            <button className="mt-4 w-full bg-blumine-500 py-2 font-semibold text-blumine-50 hover:bg-blumine-600">
              Checkout (
              {cartItems.reduce((total, cartItem) => {
                return total + (cartItem.isChecked ? cartItem.quantity : 0);
              }, 0)}
              )
            </button>
          </Link>
          <Link to={`/shop`}>
            <button className=" w-full bg-blumine-100 my-2 py-2 font-semibold text-blumine-600 hover:bg-blumine-100">
              Continue to Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CartContent;
