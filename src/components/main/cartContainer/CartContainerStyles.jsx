import styled from "styled-components";

export const CartList = styled.div`
  display: grid;
  gap: 12px;
`;
export const CartItem = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  height: 100px;
  align-items: center;
  overflow: hidden;
`;

export const CartImgWrapper = styled.div`
  height: 100%;
  overflow: hidden;

  background-color: white;
`;

export const QuantityInput = styled.input`
  width: auto;
`;
