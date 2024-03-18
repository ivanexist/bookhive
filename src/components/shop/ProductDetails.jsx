import { motion } from "framer-motion";
import ProductDetailsCard from "./ProductDetailsCard";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./cart/context/CartContext";
import Footer from "../Footer";
import Breadcrumb from "../Breadcrumb";
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {
  const { bookId } = useParams();
  const {
    // bookId,
    bookData,
    cartItems,
    setCartItems,
    setCartSuccess,
    setCartLoading,
  } = useContext(CartContext);

  const selectedBook = bookData.find(
    (book) => book.book_id === parseInt(bookId, 10)
  );

  const addMultipleItemsToCart = (book, quantity) => {
    const bookIndex = cartItems.findIndex(
      (cartItem) => cartItem.book_id === book.book_id
    );
    setCartLoading(book.book_id);
    if (bookIndex !== -1) {
      setTimeout(() => {
        // update existing items in cartItems array
        const updatedCartItems = [...cartItems];
        updatedCartItems[bookIndex] = {
          ...book,
          quantity: updatedCartItems[bookIndex].quantity + quantity,
          isChecked: false,
        };
        setCartItems(updatedCartItems);
        setCartLoading(null);
        setCartSuccess(book.book_id);

        setTimeout(() => {
          setCartSuccess(null);
        }, 1500);
      }, 1500);
    } else {
      // Add new item to cartItems array
      setTimeout(() => {
        setCartItems([
          ...cartItems,
          { ...book, quantity: quantity, isChecked: false },
        ]);
        setCartLoading(null);
        setCartSuccess(book.book_id);

        setTimeout(() => {
          setCartSuccess(null);
        }, 1500);
      }, 1500);
    }
  };
  return (
    <div>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Breadcrumb />
        <main className="mx-auto max-w-screen-xl">
          {console.log(`selectedBook: ${selectedBook} & bookId: ${bookId}`)}
          {selectedBook ? (
            <ProductDetailsCard
              selectedBook={selectedBook}
              onAddMultipleItemsToCart={addMultipleItemsToCart}
              selectedBookId={selectedBook.book_id}
            />
          ) : (
            <div className="grid h-screen place-content-center bg-white px-4">
              <h1 className="uppercase tracking-widest font-bold text-4xl text-roti-500">
                Product Not Found
              </h1>
            </div>
          )}
          <section>
            <RelatedProducts
              selectedBook={selectedBook}
              selectedBookId={selectedBook.book_id}
            />
          </section>
        </main>
        <Footer />
      </motion.div>
    </div>
  );
};
export default ProductDetails;
