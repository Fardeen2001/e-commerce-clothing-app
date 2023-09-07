const Products = ({ params }) => {
  const id = params.productsId;
  return <div>slug : {id}</div>;
};

export default Products;
