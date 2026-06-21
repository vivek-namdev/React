import { useContext } from "react";
import { CartContext } from "./components/CartContext";

function Product() {
  const { addItem } = useContext(CartContext);

  const product = {
    id: 1,
    name: "Laptop",
  };

  return (
    <button onClick={() => addItem(product)}>
      Add to Cart
    </button>
  );
}

export default Product;