import React from "react";
import "./Link.css";

const Link = ({ route }) => {
  return (
    <div className="ml-6 hover:bg-yellow-600">
      <a href={route.path}>{route.name}</a>
    </div>
  );
};

export default Link;
