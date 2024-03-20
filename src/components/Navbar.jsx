import { Link, useNavigate, useParams } from "react-router-dom";
import Notification from "./Notification";
import NavbarMobile from "./NavbarMobile";
import { useContext, useEffect, useRef, useState } from "react";
import { BookHiveContext } from "./context/BookHiveContext";

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
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse mx-2"
              onClick={scrollToTop}
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap font-sans ">
                Book Hive.
              </span>
            </Link>
          </div>
          <div className="md:flex sm:hidden mx-12">
            <div className="items-center justify-between sm:hidden sm:w-full md:flex md:w-auto ">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-blumine-100 rounded-lg bg-blumine-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                <li>
                  <Link
                    to="/"
                    href="#"
                    onClick={scrollToTop}
                    className={`py-2 px-4 text-gray-400 rounded hover:text-blumine-500 md:hover:bg-transparent md:p-0 ${
                      location.pathname === "/"
                        ? "font-bold  text-blumine-500"
                        : ""
                    }`}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    href="#"
                    onClick={scrollToTop}
                    className={`py-2 px-4 text-gray-400 rounded hover:text-blumine-500 md:hover:bg-transparent md:p-0 ${
                      location.pathname === "/shop" ||
                      location.pathname === `/shop/${bookId}` ||
                      location.pathname === "/shop/cart" ||
                      location.pathname === "/shop/cart/checkout" ||
                      location.pathname === "/shop/wishlist" ||
                      location.pathname === `/shop/cart/checkout/${bookId}`
                        ? "font-bold text-blumine-500"
                        : ""
                    }`}
                  >
                    SHOP
                  </Link>
                  {/* {console.log(bookId)} */}
                </li>
                <li>
                  <Link
                    to="/about"
                    href="#"
                    onClick={scrollToTop}
                    className={`py-2 px-4 text-gray-400 rounded hover:text-blumine-500 md:hover:bg-transparent md:p-0 ${
                      location.pathname === "/about"
                        ? "font-bold text-blumine-500"
                        : ""
                    }`}
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    href="#"
                    onClick={scrollToTop}
                    className={`py-2 px-4 text-gray-400 rounded hover:text-blumine-500  md:p-0 ${
                      location.pathname === "/contact"
                        ? "font-semibold text-blumine-500"
                        : ""
                    }`}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
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
                    viewBox="0 0 24 24"
                    className="hover:text-red-500"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                      <path
                        fill="currentColor"
                        d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"
                      ></path>
                    </g>
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
