const mongoose = require("mongoose");
const { Schema } = mongoose;
const OrderSchema = new Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String, required: true },
        quantity: { type: Number, default: 1 },
      },
    ],
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    orderStatus: { type: String, default: "pending", required: true },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("order", OrderSchema);
