import ProductsContainer from "./components/main/ProductsContainer/ProductsContainer";

export default function Home({ props }) {
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
