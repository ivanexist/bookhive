import { useContext, useState } from "react";
import { CartContext } from "../cart/context/CartContext";
import WishlistCard from "./WishlistCard";
import { useParams } from "react-router-dom";

const WishlistContent = () => {
  // const { bookId } = useParams();
  const {
    cartItems,
    wishlists,
    setCartItems,
    setWishlists,
    setCartLoading,
    setCartSuccess,
  } = useContext(CartContext);

  const addMultipleItemsToCart = (wishlist, quantity, wishlistId) => {
    const bookIndex = cartItems.findIndex(
      (cartItem) => cartItem.book_id === wishlist.book_id
    );
    // console.log(`wishlistId: ${wishlistId}`);
    setCartLoading(wishlistId);
    if (bookIndex !== -1) {
      setTimeout(() => {
        // update existing items in cartItems array
        const updatedCartItems = [...cartItems];

        updatedCartItems[bookIndex] = {
          ...wishlist,
          quantity: updatedCartItems[bookIndex].quantity + quantity,
          isChecked: false,
        };

        setCartItems(updatedCartItems);
        setCartLoading(null);
        setCartSuccess(wishlistId);

        setTimeout(() => {
          setCartSuccess(null);
        }, 1500);
      }, 1500);
    } else {
      // Add new item to cartItems array
      setTimeout(() => {
        setCartItems([
          ...cartItems,
          { ...wishlist, quantity: quantity, isChecked: false },
        ]);
        setCartLoading(null);
        setCartSuccess(wishlistId);

        setTimeout(() => {
          setCartSuccess(null);
        }, 1500);
      }, 1500);
    }
  };

  const handleRemoveWishlistItem = (bookId) => {
    const updatedWishlist = wishlists.filter(
      (wishlist) => wishlist.book_id !== bookId
    );
    setWishlists(updatedWishlist);
  };
  return (
    <div>
      <h1 className="font-bold ml-2 text-blumine-500 uppercase">Wishlist</h1>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-6">
          <div className="col-span-4">
            <hr className="mx-2 my-4 border-t-2 border-blumine-200" />
            {wishlists.length > 0 ? (
              wishlists.map((wishlist) => (
                <WishlistCard
                  wishlist={wishlist}
                  cartItem={cartItems}
                  key={wishlist.book_id}
                  wishlistId={wishlist.book_id}
                  onAddMultipleItemsToCart={addMultipleItemsToCart}
                  onHandleRemoveWishlistItem={handleRemoveWishlistItem}
                />
              ))
            ) : (
              <div className="grid h-screen place-content-center bg-white px-4">
                <h1 className="uppercase tracking-widest font-bold text-4xl text-roti-900">
                  No Items in your Wishlist
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WishlistContent;
