
import React from "react";
import ChooseText from "./ChooseText";
import { useQuery } from "react-query";

// fetching chooseus text
const fetchChooseText = async () => {
  const res = await fetch("chooseText.json");
  return res.json();
};
function WhyChooseUs() {
  //TODO: React Query
  const { data, status } = useQuery("chooseText", fetchChooseText);
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <div className="flex flex-col w-full">
          <ul className="items-center pt-9">
            {status === "error" && (
              <div>
                <h1>Error Fetching data</h1>
              </div>
            )}
            {status === "loading" && (
              <div>
                <h1>Loading....</h1>
              </div>
            )}

            {status === "success" && (
              <div>
                {data.map(text => <ChooseText key={text.id} text={text} />)}
              </div>
            )}
          </ul>
        </div>
        <div>
          <h1 className="text-6xl font-bold leading-[1.4]">
            কেন আমাদেরকে বেঁছে নিবেন ?
          </h1>
          <p className="py-6">
            নগর কুরিয়ার হতে পারে আপনার পরবর্তী বিশ্বস্ত প্রতিষ্ঠান । তাই বেঁছে
            নিতে দ্বিধা বোধ নয় । আপনার পরবর্তী পার্সেল আমাদের দায়িত্ব
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
