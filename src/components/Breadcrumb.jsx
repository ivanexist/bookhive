import { FaAngleRight, FaHome } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { useContext } from "react";
import { CartContext } from "./shop/cart/context/CartContext";

const Breadcrumb = () => {
  const { bookData } = useContext(CartContext);
  const { bookId } = useParams();
  // console.log(bookId);
  const selectedBook = bookData.find(
    (book) => book.book_id === parseInt(bookId, 10)
  );
  console.log(`bookId: ${bookId}`);
  console.log(selectedBook);
  if (!selectedBook) <div>Product Not Found</div>;

  const routes = [
    {
      path: "/",
      breadcrumb: "Home",
    },
    {
      path: "/shop",
      breadcrumb: "Shop",
    },
    {
      path: "/about",
      breadcrumb: "About",
    },
    {
      path: "/contact",
      breadcrumb: "Contact",
    },
    {
      path: "/shop/cart",
      breadcrumb: "Cart",
    },
    {
      path: "/shop/wishlist",
      breadcrumb: "Wishlist",
    },
    {
      path: `/shop/:${bookId}`,
      breadcrumb: `${selectedBook ? selectedBook.title : "Product not found"} `,
    },
    {
      path: `/shop/cart/checkout/:${bookId}`,
      breadcrumb: `${selectedBook ? selectedBook.title : "Product not found"} `,
    },
  ];

  const breadcrumbs = useBreadcrumbs(routes);
  const location = useLocation();

  return (
    <section className="bg-[linear-gradient(to_right,rgba(255,255,255,0.5),rgba(255,255,255,0.05)),url('https://images.unsplash.com/photo-1527176930608-09cb256ab504?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
      <div className=" mx-auto max-w-screen-xl px-4 sm:py-16 lg:py-24 sm:px-6 justify-center sm:justify-center flex sm:h-16 lg:h-20 lg:px-8 ">
        <nav
          className="flex flex-col justify-center items-center"
          aria-label="Breadcrumb"
        >
          {/* Title page based on Breadcrumb */}
          {breadcrumbs.slice(-1).map(({ match, breadcrumb }) => (
            <h1
              className="font-semibold text-lg mb-4 -mt-4 text-blumine-500 uppercase tracking-wider"
              key={match.url}
            >
              {breadcrumb}
            </h1>
          ))}
          {/* {console.log(bookId)} */}
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse ">
            <li className="inline-flex items-center">
              {/* Place code dynamic breadcrumb here */}
              {breadcrumbs.map(({ match, breadcrumb }) => (
                <Link
                  key={match.url}
                  to={match.pathname}
                  className={
                    match.pathname === location.pathname
                      ? "text-gray-950 inline-flex items-center text-base font-semibold mr-1"
                      : "text-gray-400  inline-flex items-center text-base font-medium hover:text-gray-950  mr-2"
                  }
                >
                  {breadcrumb.key === "/" ? (
                    <div className="flex">
                      <FaHome className="mt-1 mr-2" /> Home
                    </div>
                  ) : (
                    <div className="flex">
                      <FaAngleRight className="mr-2 mt-[5px]" />
                      {breadcrumb}
                    </div>
                  )}
                </Link>
              ))}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};
export default Breadcrumb;
