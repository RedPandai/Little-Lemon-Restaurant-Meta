import { Route, Routes } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import BookingPage from "./components/pages/BookingPage";
import BookingConfirmation from "./components/pages/BookingConfirmation";
import ContactUsPage from "./components/pages/ContactUsPage";
import MenuPage from "./components/pages/MenuPage";
import Footer from "./layout/Footer";

import "./Pages.css";
import "./App.css";
import Navbar from "./layout/NavBar";

function App() {
  const images = [
    "Bread",
    "Chicken",
    "Cream",
    "Noodle",
    "Rice Noodle",
    "Salad",
    "Seafood",
  ];

  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route
            path="/booking/confirmation"
            element={<BookingConfirmation />}
          ></Route>
          <Route path="/menu" element={<MenuPage images={images} />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
