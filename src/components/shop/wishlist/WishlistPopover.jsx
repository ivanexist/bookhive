import { useContext } from "react";
import { CartContext } from "../cart/context/CartContext";
import { Link } from "react-router-dom";

const WishlistPopover = () => {
  const { wishlists, scrollToTop } = useContext(CartContext);
  return (
    <Link to="/shop/wishlist" onClick={scrollToTop}>
      <button
        className="py-4 px-2 relative border-2 border-transparent text-blumine-500 rounded-full hover:text-blumine-600 focus:outline-none transition duration-150 ease-in-out"
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
      >
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
        {wishlists.length > 0 ? (
          <span className="absolute inset-0 object-right-top -mr-6">
            <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-green-500 text-white">
              {wishlists.length}
            </div>
          </span>
        ) : (
          ""
        )}
      </button>
    </Link>
  );
};
export default WishlistPopover;
