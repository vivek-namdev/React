import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Card from "./Card";
import Navbar from "./Navbar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (query) => {
    const result = products.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredProducts(result);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Navbar onSearch={handleSearch} />

      {products.length === 0 ? (
        <Loader />
      ) : filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500 mt-6 text-lg">
          No products found 😢
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <Card
              key={item.id}
              name={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
