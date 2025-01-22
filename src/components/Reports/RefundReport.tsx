import React from "react";
import { Doughnut } from "react-chartjs-2";

const ReturnRefundReport: React.FC = () => {
  const returnData = [
    { category: "Returns", count: 30 },
    { category: "Refunds", count: 20 },
  ];

  const chartData = {
    labels: returnData.map((data) => data.category),
    datasets: [
      {
        data: returnData.map((data) => data.count),
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  return (
    <div className="bg-white p-4">
      <h2 className="text-2xl font-semibold mb-4">Return and Refund</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">Category</th>
            <th className="px-4 py-2 border">Count</th>
          </tr>
        </thead>
        <tbody>
          {returnData.map((row, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border">{row.category}</td>
              <td className="px-4 py-2 border">{row.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Doughnut data={chartData} /> */}
        <div style={{ height: "300px", width: "100%" }} className="mt-8">
            <Doughnut data={chartData} />
            </div>
    </div>
  );
};

export default ReturnRefundReport;
