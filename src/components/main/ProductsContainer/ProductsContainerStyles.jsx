import styled from "styled-components";

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const Product = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  align-items: center;
  background: white;
`;

export const ProductTitle = styled.div`
  font-weight: bold;
`;

export const ProductImage = styled.img`
  max-width: 100%;
`;
