import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";
import "./styles.css";

const Home = () => {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    image: faker.image.business(),
  }));

  const [products, setProducts] = useState(productsArray);

  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct prod={prod} />
      ))}
    </div>
  );
};

export default Home;
