/* eslint-disable no-unused-vars */
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Contacts from "./contacts/Contacts";
import Abouts from "./about/Abouts";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import { CartProvider } from "./context/CartContext"; // Import the CartProvider

function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Toaster />
    </CartProvider>
  );
}
export default App;
