import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./Routers";
import LocationProvider from "./LocationProvider";
import Navbar from "./components/Navbar";
import BookHiveProvider from "../src/context/BookHiveContext";

function App() {
  return (
    <>
      <Router>
        <BookHiveProvider>
          <LocationProvider>
            <div className="sticky top-0 z-20">
              <Navbar />
            </div>
            <Routers />
          </LocationProvider>
        </BookHiveProvider>
      </Router>
    </>
  );
}
export default App;
