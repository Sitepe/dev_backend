const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: String,
  cartId: String,
  cartItems: [
    {
      productId: String,
      title: String,
      image: String,
      price: String,
      quantity: Number,
    },
  ],
  addressInfo: {
    addressId: String,
    address: String,
    city: String,
    pincode: String,
    phone: String,
    notes: String,
  },
  orderStatus: {
    type: String,
    default: "pending", // Default status for new orders
  },
  paymentMethod: {
    type: String,
    default: "CashOnDelivery", // Default payment method
  },
  paymentStatus: {
    type: String,
    default: "pending", // Payment will be collected on delivery
  },
  totalAmount: Number,
  orderDate: {
    type: Date,
    default: Date.now, // Automatically set to the current date
  },
  orderUpdateDate: {
    type: Date,
    default: Date.now, // Automatically set to the current date
  },
  paymentId: String, // Optional: Can be removed if not needed
  payerId: String, // Optional: Can be removed if not needed
});
module.exports = mongoose.model("Order", OrderSchema);
