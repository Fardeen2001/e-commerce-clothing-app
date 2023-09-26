const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    slug: { type: String, require: true, unique: true },
    description: { type: String, require: true },
    image: { type: String, require: true },
    category: { type: String, require: true },
    size: { type: String, require: true },
    varient: { type: String, require: true },
    price: { type: Number, require: true },
    availableQty: { type: Number, require: true },
  },
  { timestamps: true }
);
export default mongoose.models.product ||
  mongoose.model("product", productSchema);
