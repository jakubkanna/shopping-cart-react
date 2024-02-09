import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

const Header = ({ itemCount }) => {
  return (
    <StyledHeader>
      <Link to="/">
        <p>Logo</p>
      </Link>
      <Link to="/cart">
        <CartIcon /> {itemCount}
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
