import { useContext } from "react";
import { CartContext } from "./components/CartContext";

function Header() {
  const { items } = useContext(CartContext);

  return (
    <header>
      <h2>My Store</h2>
      <p>Cart ({items.length})</p>
    </header>
  );
}

export default Header;