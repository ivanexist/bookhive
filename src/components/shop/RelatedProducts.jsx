import { useContext } from "react";
import RelatedProductCard from "./RelatedProductCard";
import { BookHiveContext } from "../context/BookHiveContext";

const RelatedProducts = ({ selectedBook }) => {
  const { bookData } = useContext(BookHiveContext);
  return (
    <div className="my-12">
      <div className="flex justify-center items-center font-bold text-lg uppercase text-blumine-500 ">
        <span className="border-b-2 border-b-blumine-500 pb-2">
          Related Products
        </span>
      </div>
      {/* filter category based on selected product card category, except selected book */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 ">
        {bookData
          .filter(
            (book) =>
              book.categories[1] === selectedBook.categories[1] &&
              book.book_id !== selectedBook.book_id
          )
          .map((book) => (
            <RelatedProductCard
              book={book}
              key={book.book_id}
              bookId={book.book_id}
            />
          ))}
      </div>
    </div>
  );
};
export default RelatedProducts;
