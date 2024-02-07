import styled from "styled-components";

export const CartList = styled.div`
  display: grid;
  gap: 12px;
`;
export const CartItem = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  height: auto;
  align-items: center;
  overflow: hidden;
`;

export const CartImgWrapper = styled.div`
  height: 100%;
  overflow: hidden;

  background-color: white;
`;

export const QuantityInput = styled.input`
  width: 50px;
`;

export const CartContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  gap: 36px;

  & > :nth-child(2) {
    background-color: rgba(0, 0, 0, 0.11);
    display: grid;
    padding: 12px;
  }
`;
