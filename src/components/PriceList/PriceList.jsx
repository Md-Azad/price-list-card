import React, { useEffect, useState } from "react";
import "./Pricelist.css";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrice] = useState([]);

  useEffect(() => {
    fetch("Price.json")
      .then((res) => res.json())
      .then((data) => setPrice(data));
  }, []);

  return (
    <div>
      <h4 className="text-purple-600 text-4xl ml-12">
        Gym's membership price list
      </h4>
      <div className="grid md:grid-cols-3 gap-4 ">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
