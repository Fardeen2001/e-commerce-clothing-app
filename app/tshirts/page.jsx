import pic from "../../public/tshirt.jpeg";
const Data = [
  {
    title: "full neck",
    id: 1,
    category: "T-shirt",
    price: "499",
    img: pic,
  },
  {
    title: "half neck",
    id: 2,
    category: "T-shirt",
    price: "499",
    img: pic,
  },
  {
    title: "polo",
    id: 3,
    category: "T-shirt",
    price: "499",
    img: pic,
  },
  {
    title: "catlyser",
    id: 4,
    category: "T-shirt",
    price: "499",
    img: pic,
  },
  {
    title: "catlyser",
    id: 5,
    category: "T-shirt",
    price: "499",
    img: pic,
  },
  {
    title: "catlyser",
    id: 6,
    category: "T-shirt",
    price: "499",
    img: pic,
  },
  {
    title: "catlyser",
    id: 7,
    category: "T-shirt",
    price: "499",
    img: pic,
  },
  {
    title: "catlyser",
    id: 8,
    category: "T-shirt",
    price: "499",
    img: pic,
  },
];
import Card from "@/Components/Card";

const Tshirts = () => {
  return <Card Data={Data} />;
};

export default Tshirts;
