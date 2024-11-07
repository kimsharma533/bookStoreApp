import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import useCart

const Cart = () => {
  const { cart } = useCart(); // Retrieve cart data from context

  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-xl text-gray-600">Nothing in the cart yet!</h2>
          <p className="mt-2 text-gray-500">
            Start adding some books to your cart.
          </p>
          <Link to="/course">
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 duration-300">
              Browse Books
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cart.map((item, index) => (
            <div key={index} className="flex border-b pb-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover"
              />
              <div className="ml-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">{item.category}</p>
                  <p className="text-pink-500 font-bold">${item.price}</p>
                </div>
                <p className="text-gray-500">Quantity: {item.quantity || 1}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="text-right mt-8">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 duration-300 flex justify-center">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
