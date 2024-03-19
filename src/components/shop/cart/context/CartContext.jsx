import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const bookId = useParams();
  const [loading, setLoading] = useState(true);
  const [cartLoading, setCartLoading] = useState(null);
  const [cartSuccess, setCartSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleShowSearchBar = () => setShowSearchBar((show) => !show);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const [bookData, setBookData] = useState(
    localStorage.getItem("bookData")
      ? JSON.parse(localStorage.getItem("bookData"))
      : []
  );

  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  const [wishlists, setWishlists] = useState(
    localStorage.getItem("wishlists")
      ? JSON.parse(localStorage.getItem("wishlists"))
      : []
  );

  const addToCart = (book) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.book_id === book.book_id
    );

    if (book.stock[0].available > 0) {
      setCartLoading(book.book_id);
      if (isItemInCart) {
        // check if adding the item would exceed the available stock
        if (isItemInCart.quantity < book.stock[0].available) {
          // Increment quantity
          setTimeout(() => {
            setCartItems(
              cartItems.map((cartItem) =>
                cartItem.book_id === book.book_id
                  ? {
                      ...cartItem,
                      quantity:
                        cartItem.quantity < cartItem.stock[0].available
                          ? cartItem.quantity + 1
                          : cartItem.quantity,
                      isChecked: false,
                    }
                  : cartItem
              )
            );
            setCartLoading(null);
            setCartSuccess(book.book_id);
            notifyAddedToCart(book);

            setTimeout(() => {
              setCartSuccess(null);
            }, 1500);
          }, 1500);
        } else {
          // Notify maximun stock reached
          setCartLoading(null);
          notifyMaximumStock(book);
        }
      } else {
        // Add new item to cart
        setTimeout(() => {
          setCartItems([
            ...cartItems,
            { ...book, quantity: 1, isChecked: false },
          ]);

          notifyAddedToCart(book);
          setCartLoading(null);
          setCartSuccess(book.book_id);

          setTimeout(() => {
            setCartSuccess(null);
          }, 1500);
        }, 1500);
      }
    } else {
      // Notify out ofstock
      notifyOutOfStock(book);
    }
  };

  const removeFromCart = (book) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.book_id === book.book_id
    );

    if (isItemInCart.quantity === 1) {
      setCartItems(
        cartItems.filter((cartItem) => cartItem.book_id !== book.book_id)
      );
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.book_id === book.book_id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => setCartItems([]);

  const getCartTotal = () =>
    cartItems.reduce(
      (total, book) => (total = total + book.price * book.quantity),
      0
    );

  // Wishlist
  const addToWishlist = (book) => {
    const isItemInWishlists = wishlists.find(
      (wishlist) => wishlist.book_id === book.book_id
    );

    console.log(isItemInWishlists);
    if (isItemInWishlists) {
      // check if adding the item would exceed the available stock
      // the product is already in wishlist
      setWishlists(
        wishlists.map((wishlist) =>
          wishlist.book_id === book.book_id
            ? {
                ...wishlist,
                quantity: 0,
              }
            : wishlist
        )
      );
      notifyBookInWishlist(book);
      // notifyAddedToCart(book);
    } else {
      // Add new item to cart
      setWishlists([...wishlists, { ...book }]);
      notifyAddedToWishlist(book);
    }
  };

  const removeFromWishlist = (book) =>
    setWishlists(
      wishlists.filter((wishlist) => wishlist.book_id !== book.book_id)
    );

  const clearWishlist = () => setWishlists([]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    const wishlists = localStorage.getItem("wishlists");
    const bookData = localStorage.getItem("bookData");

    if (cartItems) setCartItems(JSON.parse(cartItems));
    if (wishlists) setWishlists(JSON.parse(wishlists));
    if (bookData) setBookData(JSON.parse(bookData));
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("wishlists", JSON.stringify(wishlists));
    localStorage.setItem("bookData", JSON.stringify(bookData));
  }, [cartItems, wishlists, bookData]);

  useEffect(() => {
    const fetchBookData = async () => {
      // Till the data is fetch using API
      // the Loading page will show.

      // Await make wait until that
      // promise settles and return its result
      try {
        setTimeout(async () => {
          const response = await axios.get(
            "https://raw.githubusercontent.com/ivanexist/bookhive/main/src/components/json/book.json"
          );

          // After fetching data stored it in bookData state.
          setBookData(response.data);
          // console.log(bookData);
          // Closed the loading page
          setLoading(false);
        }, 1000);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    // Call the function
    fetchBookData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        bookId,
        bookData,
        loading,
        cartItems,
        error,
        setLoading,
        setError,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        setCartItems,
        wishlists,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        setWishlists,
        searchQuery,
        setSearchQuery,
        showSearchBar,
        handleShowSearchBar,
        scrollToTop,
        cartLoading,
        setCartLoading,
        cartSuccess,
        setCartSuccess,
        // addMultipleItemsToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const notifyAddedToCart = (item) =>
  toast.success(
    <div>
      <span className="font-semibold">{item.title}</span> added to your cart!
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

const notifyAddedToWishlist = (item) =>
  toast.success(
    <div>
      <span className="font-semibold">{item.title}</span> added to your
      wishlist!
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

const notifyBookInWishlist = (item) =>
  toast.warn(`${item.title} has already in your wishlist!`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    className: "text-gray-950 bg-blumine-50",
  });

const notifyMaximumStock = (item) =>
  toast.warn(
    <div>
      <span className="font-semibold">{item.title}</span> reaches maximum stock!
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

const notifyOutOfStock = (item) =>
  toast.warn(`${item.title} is out of stock!`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    className: "text-gray-950 bg-blumine-50",
  });

CartProvider.PropTypes = { children: PropTypes.node.isRequired };

export default CartProvider;
