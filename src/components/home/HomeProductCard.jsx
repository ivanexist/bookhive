import { useContext } from "react";
import { Link } from "react-router-dom";
import { BookHiveContext } from "../../context/BookHiveContext";

const HomeProductCard = ({ book }) => {
  const { scrollToTop } = useContext(BookHiveContext);

  return (
    <div className="flex border border-blumine-200 gap-4 p-6 sm:my-8 lg:my-12 bg-white shadow-main">
      <Link key={book.book_id} to={`/shop/${book.book_id}`}>
        <a href="#">
          <img
            className="w-24 h-32 transition duration-300 ease-in-out"
            src={`https://raw.githubusercontent.com/ivanexist/bookhive/main/public/bookhive/${book.book_cover}`}
            onClick={scrollToTop}
          />
        </a>
      </Link>
      <div className="flex flex-col text-left items-start">
        <Link key={book.book_id} to={`/shop/${book.book_id}`}>
          <a
            className="text-base text-gray-950 hover:text-blumine-600"
            onClick={scrollToTop}
          >
            {book.title.length > 25
              ? `${book.title.substring(0, 25)}...`
              : book.title}
          </a>
        </Link>
        <span href="#" className="text-base text-gray-500 my-1">
          {book.author[0]}
        </span>
        <div className="flex flex-col items-start mt-4">
          <div className="flex">
            <span className="ml-1 font-bold">${book.price}</span>
          </div>
          <div className="flex items-center">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-yellow-300"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <span className="ml-1 my-1 text-gray-500">
              {book.average_rating} |
            </span>
            <span className="ml-1 text-gray-500">
              {" "}
              {book.stock[0].sold} Sold
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeProductCard;
