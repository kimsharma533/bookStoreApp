// cart.route.js
import express from "express";
import { addToCart, getCartItems } from "../controller/cart.controller.js";

const router = express.Router();

// Route to add item to cart
router.post("/", addToCart);

// Route to get all cart items
router.get("/", getCartItems);

export default router;
