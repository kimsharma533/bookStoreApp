import { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch books from the database
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  // Fetch cart items from the database
  useEffect(() => {
    const getCartItems = async () => {
      try {
        const res = await axios.get("http://localhost:4001/cart");
        setCart(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCartItems();
  }, []);

  // Add to Cart function to send an item to the backend
  const addToCart = async (bookId) => {
    try {
      const res = await axios.post("http://localhost:4001/cart", { bookId });
      setCart((prevCart) => [...prevCart, res.data]); // Update cart state with new item
    } catch (error) {
      console.log("Error adding to cart:", error);
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center text-center justify-center">
        <h1 className="text-2xl md:text-4xl">
          Were delighted to have you{" "}
          <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-12">
          Unlock the magic of literature with our extensive library. Browse
          through thousands of titles, create your reading list, and share your
          thoughts with our community. Together, let’s celebrate the joy of
          reading!
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
        {book.map((item) => (
          <Cards key={item._id} item={item} addToCart={addToCart} />
        ))}
      </div>

      {/* Display Cart */}
      <div className="mt-12">
        <h2 className="text-2xl">Cart</h2>
        <ul>
          {cart.map((cartItem, index) => (
            <li key={index}>
              {cartItem.book.name} - ${cartItem.book.price} (Quantity:{" "}
              {cartItem.quantity})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Course;
