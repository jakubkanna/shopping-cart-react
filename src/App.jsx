import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { Link } from "react-router-dom";
export default function App({ isAdded, setIsAdded, itemCount }) {
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
