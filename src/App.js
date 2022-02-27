import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import RandomMeal from "./Components/RandomMeal/Randomeal";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/random" element={<RandomMeal />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
