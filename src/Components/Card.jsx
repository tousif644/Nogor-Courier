import React from "react";

function Card({ data }) {
  const { title, description } = data;
  return (
      <div className="card  shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
  );
}

export default Card;
