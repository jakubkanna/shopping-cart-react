import styled from "styled-components";

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  color: grey;
`;
export const ProductTitle = styled.p`
  font-weight: bold;
`;
export const Product = styled.div`
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 10px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  align-items: center;
  background: white;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: auto;
  padding: 12px;
  box-sizing: border-box;
`;
