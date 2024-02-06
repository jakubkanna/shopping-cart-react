import { useEffect, useState } from "react";
import {
  ProductContainer,
  Product,
  ProductTitle,
  ProductImage,
} from "./ProductsContainerStyles";

export default function ProductsContainer({ addToCart }) {
  const [productList, setProductList] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=12")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Server error");
        }
        return response.json();
      })
      .then((data) => {
        setProductList(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <ProductContainer className="products">
      {productList.map((product) => (
        <Product key={product.id} className="product">
          <ProductTitle>{product.title}</ProductTitle>
          <ProductImage src={product.image} alt={product.title} />
          <button onClick={addToCart}>Add to cart</button>
        </Product>
      ))}
    </ProductContainer>
  );
}
