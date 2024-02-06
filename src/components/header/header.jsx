import styled from "@emotion/styled";
import Cart from "./cart/Cart";

const Header = () => {
  return (
    <StyledHeader>
      <p>Logo</p>
      <Cart />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export default Header;
