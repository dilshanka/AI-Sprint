import React from "react";
import { Bar } from "react-chartjs-2";

const SalesByRegionReport: React.FC = () => {
  const regionData = [
    { region: "North", sales: 300 },
    { region: "South", sales: 250 },
    { region: "East", sales: 400 },
    { region: "West", sales: 350 },
  ];

  const chartData = {
    labels: regionData.map((data) => data.region),
    datasets: [
      {
        label: "Sales",
        data: regionData.map((data) => data.sales),
        backgroundColor: "#FFCD56",
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Sales by Region</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">Region</th>
            <th className="px-4 py-2 border">Sales</th>
          </tr>
        </thead>
        <tbody>
          {regionData.map((row, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border">{row.region}</td>
              <td className="px-4 py-2 border">{row.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Bar data={chartData} /> */}

        <div style={{ height: "300px", width: "100%" }} className="mt-8">
            <Bar data={chartData} />

            </div>
    </div>
  );
};

export default SalesByRegionReport;
