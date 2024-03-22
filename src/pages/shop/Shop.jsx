import GridProduct from "../../components/shop/GridProduct";
import ListProduct from "../../components/shop/ListProduct";
import Category from "../../components/shop/filter/Category";
import FilterNavbar from "../../components/shop/filter/FilterNavbar";
import Footer from "../../components/Footer";
import ScrollUpButton from "../../components/ScrollUpButton";
import { motion } from "framer-motion";
import Breadcrumb from "../../components/Breadcrumb";
import { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BookHiveContext } from "../../context/BookHiveContext";

const Shop = () => {
  const { bookData, searchQuery, showSearchBar, scrollToTop } =
    useContext(BookHiveContext);

  // console.log(searchQuery);

  const [list, setList] = useState(false);
  const itemsPerPageOptions = [20, 30, 40];
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);
  const [totalPages, setTotalPages] = useState(0);
  // const [totalItems, setTotalItems] = useState(bookData.length);
  const [currentItems, setCurrentItems] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  // const [searchProduct, setSearchProduct] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 500]);
  const [stockAvailability, setStockAvailability] = useState({
    available: true,
    emptyStock: true,
  });
  const [sortingMethod, setSortingMethod] = useState("bestSeller");
  const [sortedBookData, setSortedBookData] = useState([]);

  useEffect(() => {
    let updatedBookData = [...bookData];

    // sorting bookData
    switch (sortingMethod) {
      case "bestSeller":
        updatedBookData = updatedBookData.sort(
          (a, b) => b.stock[0].sold - a.stock[0].sold
        );
        break;
      case "highRate":
        updatedBookData = updatedBookData.sort(
          (a, b) => b.average_rating - a.average_rating
        );
        break;
      case "newest":
        updatedBookData = updatedBookData.sort(
          (a, b) => b.publish[0].published_year - a.publish[0].published_year
        );
        break;
      case "priceHighLow":
        updatedBookData = updatedBookData = updatedBookData.sort(
          (a, b) => b.price - a.price
        );
        break;
      case "priceLowHigh":
        updatedBookData = updatedBookData.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    // filtered by category
    const filterProductByCategory = (books) => {
      // search based on books title
      // console.log(query);

      const searchMatch =
        books.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        books.author[0].toLowerCase().includes(searchQuery.toLowerCase());

      // Show all nodes if no category is selected
      // Check if any selected category matches the product's categories
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.some((category) =>
          books.categories.includes(category)
        );

      // filter base on range price
      const priceMatch =
        books.price >= selectedPriceRange[0] &&
        books.price <= selectedPriceRange[1];

      // availability stock
      const availabilityStockMatch =
        (stockAvailability.available && books.stock[0].available > 0) ||
        (stockAvailability.emptyStock && books.stock[0].available === 0);
      return (
        categoryMatch && priceMatch && searchMatch && availabilityStockMatch
      );
    };

    const sortZeroStockInLastOrder = (a, b) => {
      if (a.stock[0].available === 0 && b.stock[0].available !== 0) return 1;
      else if (a.stock[0].available !== 0 && b.stock[0].available === 0)
        return -1;
    };
    // Apply filtering
    const filteredProducts = updatedBookData
      .filter(filterProductByCategory)
      .sort(sortZeroStockInLastOrder);

    setTotalPages(Math.ceil(filteredProducts.length / itemsPerPage));

    setSortedBookData(filteredProducts);

    // apply pagination to the filtered products
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // oncurrentitems.filter
    setCurrentItems(filteredProducts.slice(startIndex, endIndex)); // filter dynamic react-paginate
  }, [
    searchQuery,
    selectedCategories,
    selectedPriceRange,
    stockAvailability,
    currentPage,
    itemsPerPage,
    sortingMethod,
  ]);

  // handle page changing
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    scrollToTop();
  };

  // handle items per page
  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(0); // Reset to the first page when changing items per page
  };

  // handle sorting change
  const handleSelectSortingChange = (selectedSortingValue) =>
    setSortingMethod(selectedSortingValue);

  // handle stock availability change
  const handleStockAvailabilityChange = (stockFilter) => {
    setStockAvailability((prevFilters) => ({
      ...prevFilters,
      [stockFilter]: !prevFilters[stockFilter],
    }));
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <div className="bg-white">
          <div>
            {/* Mobile filter dialog */}
            <motion.div
            // initial={{ y: 0, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // viewport={{ once: true }}
            // transition={{ duration: 0.7 }}
            >
              <Breadcrumb />
            </motion.div>
            <main className="mx-auto max-w-screen-xl">
              <div
                className={`sticky ${
                  showSearchBar === true ? "top-32" : "top-16"
                } z-10 bg-inherit`}
              >
                <FilterNavbar
                  onList={list}
                  onSetList={setList}
                  onSelectSortingChange={handleSelectSortingChange}
                  onItemsPerPageOptions={itemsPerPageOptions}
                  onHandleItemsPerPageChange={handleItemsPerPageChange}
                  onItemsPerPage={itemsPerPage}
                  onCurrentItems={currentItems}
                  onSelectedCategories={selectedCategories}
                  onSetSelectedCategories={setSelectedCategories}
                  onSelectedPriceRange={selectedPriceRange}
                  onSetSelectedPriceRange={setSelectedPriceRange}
                  onStockAvailability={stockAvailability}
                  onHandleStockAvailabilityChange={
                    handleStockAvailabilityChange
                  }
                />
              </div>
              {/* Slice here for filter navbar */}
              <section
                aria-labelledby="products-heading"
                className="pb-24 sm:pt-0 md:pt-6"
              >
                <h2 id="products-heading" className="sr-only">
                  Products
                </h2>
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                  {/* Filters */}
                  <div>
                    <Category
                      onSelectedCategories={selectedCategories}
                      onSetSelectedCategories={setSelectedCategories}
                      onSelectedPriceRange={selectedPriceRange}
                      onSetSelectedPriceRange={setSelectedPriceRange}
                      onStockAvailability={stockAvailability}
                      onHandleStockAvailabilityChange={
                        handleStockAvailabilityChange
                      }
                    />
                  </div>
                  {/* Product grid */}
                  <motion.div
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 0, opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="lg:col-span-3"
                  >
                    {/* {console.log(bookData)} */}
                    {list ? (
                      <ListProduct
                        currentItems={currentItems}
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onHandlePageChange={handlePageChange}
                      />
                    ) : (
                      <GridProduct
                        currentItems={currentItems}
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onHandlePageChange={handlePageChange}
                      />
                    )}
                  </motion.div>
                </div>
              </section>
            </main>
          </div>
        </div>
        <Footer />
        <ScrollUpButton />
      </div>
    </div>
  );
};
export default Shop;
