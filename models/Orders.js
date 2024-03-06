const mongoose = require("mongoose");
const { Schema } = mongoose;
const OrderSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    orderId: { type: String, required: true },
    products: { type: Object, required: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true },
    pincode: { type: Number, required: true },
    amount: { type: Number, required: true },
    orderStatus: { type: String, default: "initiated", required: true },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("order", OrderSchema);
