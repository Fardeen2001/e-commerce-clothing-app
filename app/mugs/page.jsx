import Card from "@/Components/Card";
import pic from "../../public/mugs.webp";

const Data = [
  {
    title: "full neck",
    id: 1,
    category: "mugs",
    price: "149",
    img: pic,
  },
  {
    title: "half neck",
    id: 2,
    category: "mugs",
    price: "149",
    img: pic,
  },
  {
    title: "polo",
    id: 3,
    category: "mugs",
    price: "149",
    img: pic,
  },
  {
    title: "catlyser",
    id: 4,
    category: "mugs",
    price: "149",
    img: pic,
  },
  {
    title: "catlyser",
    id: 5,
    category: "mugs",
    price: "149",
    img: pic,
  },
  {
    title: "catlyser",
    id: 6,
    category: "mugs",
    price: "149",
    img: pic,
  },
  {
    title: "catlyser",
    id: 7,
    category: "mugs",
    price: "149",
    img: pic,
  },
  {
    title: "catlyser",
    id: 8,
    category: "mugs",
    price: "149",
    img: pic,
  },
];
const Mugs = () => {
  return <Card Data={Data} />;
};

export default Mugs;
