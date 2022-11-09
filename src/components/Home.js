import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";
import "./styles.css";

faker.seed(100);

const Home = () => {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    image: faker.image.business(),
  }));

  const [cart, setCart] = useState([]);

  const [products] = useState(productsArray);
  console.log(cart);
  return (
    <div className="productContainer">
      {products.map((prod, idx) => (
        <SingleProduct key={idx} prod={prod} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
};

export default Home;
