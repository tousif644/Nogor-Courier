import React from "react";
import Card from "./Card";
import { useQuery } from "react-query";

//fetch services
const fetchServices = async () => {
  const res = await fetch("services.json");
  return res.json();
};

function Service() {
  const { data, status } = useQuery("cards", fetchServices);
  return (
    <div className="mt-24">
      <h1 className="text-6xl font-bold text-center">আমাদের সার্ভিস সমূহ</h1>
      {status === "error" && (
        <div>
          <h1>Error Fetching Data</h1>
        </div>
      )}
      {status === "loading" && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {status === "success" && (
        <div className="flex gap-14 pl-4 pr-4 mt-4 items-center">
          {data.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Service;
