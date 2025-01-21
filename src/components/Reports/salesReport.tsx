import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const SalesReporting: React.FC = () => {
  const salesData = [
    { month: "January", sales: 150, revenue: 15000 },
    { month: "February", sales: 200, revenue: 20000 },
    { month: "March", sales: 175, revenue: 18000 },
  ];

  const chartData = {
    labels: salesData.map((data) => data.month),
    datasets: [
      {
        label: "Sales",
        data: salesData.map((data) => data.sales),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Revenue",
        data: salesData.map((data) => data.revenue / 1000),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Sales Reporting</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">Month</th>
            <th className="px-4 py-2 border">Sales</th>
            <th className="px-4 py-2 border">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((row, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border">{row.month}</td>
              <td className="px-4 py-2 border">{row.sales}</td>
              <td className="px-4 py-2 border">${row.revenue.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ height: "300px", width: "100%" }}  className="mt-8"> {/* Adjust the height and width */}
      <Bar data={chartData} />
      </div>
   
    </div>
  );
};

export default SalesReporting;
