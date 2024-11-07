// cart.model.js
import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" }, // Reference to Book model
  quantity: { type: Number, default: 1 },
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
