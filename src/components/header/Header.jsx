import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Cart from "./cart/Cart";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <p>Logo</p>
      </Link>
      <Link to="/cart">
        <Cart />
      </Link>
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
