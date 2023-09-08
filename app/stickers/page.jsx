import Card from "@/Components/Card";
import pic from "../../public/Stickers.webp";

const Data = [
  {
    title: "full neck",
    id: 1,
    category: "Stickers",
    price: "249",
    img: pic,
  },
  {
    title: "half neck",
    id: 2,
    category: "Stickers",
    price: "249",
    img: pic,
  },
  {
    title: "polo",
    id: 3,
    category: "Stickers",
    price: "249",
    img: pic,
  },
  {
    title: "catlyser",
    id: 4,
    category: "Stickers",
    price: "249",
    img: pic,
  },
  {
    title: "catlyser",
    id: 5,
    category: "Stickers",
    price: "249",
    img: pic,
  },
  {
    title: "catlyser",
    id: 6,
    category: "Stickers",
    price: "249",
    img: pic,
  },
  {
    title: "catlyser",
    id: 7,
    category: "Stickers",
    price: "249",
    img: pic,
  },
  {
    title: "catlyser",
    id: 8,
    category: "Stickers",
    price: "249",
    img: pic,
  },
];
const Stickers = () => {
  return <Card Data={Data} />;
};

export default Stickers;
