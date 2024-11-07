import { useState, useEffect } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Course() {
  const { addToCart } = useCart();
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:4001/books");
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center text-center justify-center">
        <h1 className="text-2xl md:text-4xl">
          We’re delighted to have you{" "}
          <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-12">
          Unlock the magic of literature with our extensive library.
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
        {book.map((item) => (
          <Cards key={item._id} item={item} addToCart={() => addToCart(item)} />
        ))}
      </div>
    </div>
  );
}

export default Course;
