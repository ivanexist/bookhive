import { Link } from "react-router-dom";
import Notification from "./Notification";

const Navbar = () => (
  <nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
      <Link
        to="/"
        href="#"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <span className="self-center text-2xl font-semibold whitespace-nowrap font-sans dark:text-white">
          {/* Book Hive. */}
        </span>
      </Link>
      <div className="flex md:order-2">
        <button
          type="button"
          data-collapse-toggle="navbar-search"
          aria-controls="navbar-search"
          aria-expanded="false"
          className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
        <Notification />
        <div className="relative hidden md:block">
          {/* <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button> */}
        </div>

        <button
          type="button"
          data-collapse-toggle="navbar-search"
          aria-controls="navbar-search"
          aria-expanded="false"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div>
        <form className="flex flex-col md:flex-row ml-28 gap-3">
          <select
            id="pricingType"
            name="pricingType"
            className="w-full h-10 border-2 font-semibold cursor-pointer border-slate-800 focus:outline-none focus:border-slate-800 text-slate-800 rounded px-2  md:px-3 py-0 md:py-1 tracking-wider"
          >
            <option value="All" selected="">
              All Categories
            </option>
            <option value="Freemium">Freemium</option>
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
          </select>
          <div className="flex">
            <input
              type="text"
              placeholder="Book Title or Keyword..."
              className="w-full md:w-96 px-3 h-10 rounded-l border-2 border-slate-800 focus:outline-none focus:border-slate-800"
            />
            <button
              type="submit"
              className="bg-slate-800 font-semibold text-white rounded-r px-2 md:px-3 py-0 md:py-1"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {/* <div
        id="navbar-search"
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      >
        <div className="relative mt-3 md:hidden">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="search-navbar"
            placeholder="Search..."
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
          <li>
            <Link
              to="/"
              href="#"
              className="lock py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              href="#"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              href="#"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              href="#"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
            >
              Contact
            </Link>
          </li>
        </ul>
      </div> */}
    </div>
  </nav>
);

export default Navbar;
