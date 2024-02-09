import "../../styles/App.css";

import PropTypes from "prop-types";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

import { Link } from "react-router-dom";

function App({ isAdded, setIsAdded, itemCount }) {
  return (
    <>
      <Header itemCount={itemCount} />
      {isAdded && (
        <div className="addedToCartMessage">
          <p>Item successfully added to cart.</p>
          <Link to="cart">
            <button type="button" onClick={() => setIsAdded(false)}>
              Show Cart
            </button>
          </Link>
        </div>
      )}
      <Main></Main>
      <Footer />
    </>
  );
}

App.propTypes = {
  isAdded: PropTypes.bool.isRequired,
  setIsAdded: PropTypes.func.isRequired,
  itemCount: PropTypes.number.isRequired,
};

export default App;
