import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./Routers";
import LocationProvider from "./LocationProvider";
import Navbar2 from "./components/Navbar2";
import BookHiveProvider from "./components/context/BookHiveContext";

function App() {
  return (
    <>
      <Router>
        <BookHiveProvider>
          <LocationProvider>
            <div className="sticky top-0 z-20">
              <Navbar2 />
            </div>
            <Routers />
          </LocationProvider>
        </BookHiveProvider>
      </Router>
    </>
  );
}
export default App;
