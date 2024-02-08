import ProductsContainer from "../template/main/ProductsContainer/ProductsContainer";

export default function HomePage({ props }) {
  return (
    <>
      <h1>Home</h1>
      <ProductsContainer
        setIsAdded={props.setIsAdded}
        addToCart={props.addToCart}
      />
    </>
  );
}
