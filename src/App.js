import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Details from "./components/details/Details";
import Customer from "./components/customer/Customer";
import Login from "./components/details/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<Details />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
