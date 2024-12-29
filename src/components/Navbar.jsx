import { Link, useNavigate, useParams } from "react-router-dom";
import Notification from "./Notification";
import NavbarMobile from "./NavbarMobile";
import { useContext, useEffect, useRef, useState } from "react";
import { BookHiveContext } from "../context/BookHiveContext";

const Navbar2 = () => {
  const {
    searchQuery,
    setSearchQuery,
    showSearchBar,
    handleShowSearchBar,
    scrollToTop,
  } = useContext(BookHiveContext);
  const { bookId } = useParams();
  const textboxRef = useRef(null);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    navigate(`/shop?q=${query}`);
  };

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky bg-white border-blumine-100 pt-1 ${
        scroll ? "opacity-100" : "opacity-95"
      } transition-colors duration-300 ease-in-out top-0 z-10`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto py-2">
        <div className="flex">
          <div className="flex">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse mx-2"
              c
            >
              <span className="self-center text-2xl font-BrunoAce font-semibold whitespace-nowrap text-blumine-500">
                Book Hive.
              </span>
            </Link>
          </div>
          <div className="items-center justify-between sm:hidden sm:w-full mx-12 md:flex md:w-auto">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-blumine-100 rounded-lg bg-blumine-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className={`py-2 px-4 rounded hover:text-blumine-500 md:hover:bg-transparent md:p-0 ${
                    location.pathname === "/"
                      ? "font-bold text-blumine-500"
                      : "text-gray-400"
                  }`}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  onClick={scrollToTop}
                  className={`py-2 px-4 rounded hover:text-blumine-500 md:hover:bg-transparent md:p-0 ${
                    location.pathname === "/shop" ||
                    location.pathname === `/shop/${bookId}` ||
                    location.pathname === "/shop/cart" ||
                    location.pathname === "/shop/cart/checkout" ||
                    location.pathname === "/shop/wishlist" ||
                    location.pathname === `/shop/cart/checkout/${bookId}`
                      ? "font-bold text-blumine-500"
                      : "text-gray-400"
                  }`}
                >
                  SHOP
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={scrollToTop}
                  className={`py-2 px-4  rounded hover:text-blumine-500 md:hover:bg-transparent md:p-0 ${
                    location.pathname === "/about"
                      ? "font-bold text-blumine-500"
                      : "text-gray-400"
                  }`}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className={`py-2 px-4  rounded hover:text-blumine-500 md:p-0 ${
                    location.pathname === "/contact"
                      ? "font-bold text-blumine-500"
                      : "text-gray-400"
                  }`}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end items-center">
          <div className="relative mx-12">
            <button
              onClick={() => {
                handleShowSearchBar();
                setTimeout(() => {
                  textboxRef.current.focus();
                }, 0);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-y-0 my-auto h-8 w-12 border-transparent text-blumine-500 px-3 hover:text-blumine-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <Notification />
          <NavbarMobile />
        </div>
      </div>
      {showSearchBar && (
        <div className="relative space-x-4 mx-auto max-w-screen-xl rounded">
          <div className="absolute w-full z-40 flex p-2 transform duration-500 transition-all bg-white">
            <div className=" flex bg-blumine-200 w-full space-x-2 items-center ">
              <div className="flex bg-blumine-50 w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 opacity-75 m-2 text-blumine-800 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                {/* input your search product query */}
                <input
                  className="w-full bg-blumine-50 p-2 outline-none border-transparent focus:border-transparent focus:ring-0  text-sm sm:text-base placeholder:text-gray-400"
                  ref={textboxRef}
                  type="search"
                  placeholder="Book Title or Author..."
                  value={searchQuery}
                  onChange={(e) => {
                    handleSearchChange(e);
                    scrollToTop();
                  }}
                  maxLength={50}
                />
                {/* close search bar */}
                <button
                  onClick={() => {
                    handleShowSearchBar();
                    // setSearchQuery("");
                    // navigate(`/shop`);
                  }}
                  className="mx-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 32 32"
                    className="text-blumine-400 hover:text-blumine-500 h-6 w-6"
                  >
                    <path
                      fill="currentColor"
                      d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar2;
