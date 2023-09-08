import Card from "@/Components/Card";
import pic from "../../public/hoodie.webp";
const Data = [
  {
    title: "full neck",
    id: 1,
    category: "Hoodies",
    price: "499",
    img: pic,
  },
  {
    title: "half neck",
    id: 2,
    category: "Hoodies",
    price: "499",
    img: pic,
  },
  {
    title: "polo",
    id: 3,
    category: "Hoodies",
    price: "499",
    img: pic,
  },
  {
    title: "catlyser",
    id: 4,
    category: "Hoodies",
    price: "499",
    img: pic,
  },
  {
    title: "catlyser",
    id: 5,
    category: "Hoodies",
    price: "499",
    img: pic,
  },
  {
    title: "catlyser",
    id: 6,
    category: "Hoodies",
    price: "499",
    img: pic,
  },
  {
    title: "catlyser",
    id: 7,
    category: "Hoodies",
    price: "499",
    img: pic,
  },
  {
    title: "catlyser",
    id: 8,
    category: "Hoodies",
    price: "499",
    img: pic,
  },
];

const Hoodies = () => {
  return <Card Data={Data} />;
};

export default Hoodies;
