import ProductsContainer from "./components/main/ProductsContainer/ProductsContainer";

export default function Home({ props }) {
  return (
    <div>
      <ProductsContainer addToCart={props.addToCart} />
    </div>
  );
}
