import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const RenderLine = () => {
  const data = [
    {
      year: 2016,
      investment: 50000,
      name : "Starting",
      peoplereached: 10000,
    },
    {
      year: 2017,
      investment: 30000,
      peoplereached: 15000,
    },
    {
      year: 2018,
      investment: 40000,
      peoplereached: 20000,
    },
    {
      year: 2019,
      investment: 45000,
      peoplereached: 25000,
    },
    {
      year: 2020,
      investment: 50000,
      peoplereached: 0,
      name : "Loss"
    },
    {
      year: 2021,
      investment: 65000,
      peoplereached: 30000,
    },
    {
      year: 2022,
      investment: 50000,
      peoplereached: 50000,
    },
    {
      year: 2023,
      investment: 40000,
      peoplereached: 70000,
      name : "Ongoing"
    },
  ];

  const data2 = [
    {
      name: "Dhaka",
      year: 2016,
      investment: 30000,
      agent: 4,
    },
    {
      name: "Faridpur",
      year: 2017,
      investment: 40000,
      agent: 8,
    },
    {
      name: "Gaibandha",
      year: 2018,
      investment: 45000,
      agent: 12,
    },
    {
      name: "Chittagong",
      year: 2019,
      agent: 16,
    },
  ];
  return (
    <div className="mt-24 items-center mb-12">
      <h1 className="text-center text-6xl pb-24 font-bold">
        আমাদের জনপ্রিয়তা সাল অনুযায়ী
      </h1>

      <div className="flex justify-center">
        <div>
          <LineChart
            width={700}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="year"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />

            <Line dataKey="peoplereached" stroke="#82ca9d" />

            <Line
              type="monotone"
              dataKey="investment"
              stroke="#876890"
              activeDot={{ r: 10 }}
            />
          </LineChart>
          <p className="text-center text-lg">আমাদের বিনিয়োগ ব্যবসাতে</p>
        </div>

        <div>
          <BarChart
            width={700}
            height={400}
            data={data2}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="year" fill="#8884d8" />
            <Bar dataKey="agent" fill="#82ca9d" />
            <Bar dataKey="investment" fill="#ffc658" />
          </BarChart>
          <p className="text-center text-lg">আমাদের এজেন্ট এর কার্যাবলী</p>
        </div>
      </div>
    </div>
  );
};

export default RenderLine;
