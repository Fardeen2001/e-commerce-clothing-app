const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, require: true },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
    address: { type: String, require: true },
    amount: { type: Number, require: true },
    orderStatus: { type: String, default: "pending", require: true },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.models.orders || mongoose.model("order", orderSchema);
