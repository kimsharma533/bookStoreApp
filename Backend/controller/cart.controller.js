// cart.controller.js
import Cart from "../model/cart.model.js";
import Book from "../model/book.model.js";

// Add item to cart
export const addToCart = async (req, res) => {
  try {
    const { bookId } = req.body;
    const existingCartItem = await Cart.findOne({ book: bookId });

    if (existingCartItem) {
      // If item is already in cart, increase quantity
      existingCartItem.quantity += 1;
      const updatedCartItem = await existingCartItem.save();
      return res.status(200).json(updatedCartItem);
    } else {
      // Otherwise, create a new cart item
      const newCartItem = new Cart({ book: bookId });
      const savedCartItem = await newCartItem.save();
      return res.status(201).json(savedCartItem);
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json(error);
  }
};

// Get all cart items with book details
export const getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find().populate("book"); // Populate book details
    res.status(200).json(cartItems);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json(error);
  }
};
