import React from "react";
import "./PriceCard.css";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";

const PriceCard = ({ price }) => {
  return (
    <div className="mt-6 mx-4  text-center bg-sky-500 m-3 rounded-lg">
      <h3 className="mt-2">
        <span className="text-3xl text-purple-600 font-extrabold ">
          {price.price}
        </span>
        <span className="font-bold text-xl">/month</span>
      </h3>
      <h4 className="text-3xl text-red-900 font-bold">{price.type}</h4>

      <ul>
        {price.features.map((feature) => (
          <li className="flex justify-center">
            <HandThumbUpIcon className="h-6 w-6 text-purple-500" />

            <h3>{feature}</h3>
          </li>
        ))}
      </ul>
      <button className="bg-yellow-400 my-3 w-3/4 px-2 rounded-md hover:bg-red-400 text-white font-bold">
        buy now
      </button>
    </div>
  );
};

export default PriceCard;
