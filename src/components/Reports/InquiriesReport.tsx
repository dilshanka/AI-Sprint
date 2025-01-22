import React from "react";
import { Pie } from "react-chartjs-2";

const CustomerInquiriesReport: React.FC = () => {
  const inquiriesData = [
    { status: "Resolved", count: 60 },
    { status: "Pending", count: 40 },
  ];

  const chartData = {
    labels: inquiriesData.map((data) => data.status),
    datasets: [
      {
        label: "Inquiries Status",
        data: inquiriesData.map((data) => data.count),
        backgroundColor: ["#4CAF50", "#FF9800"],
      },
    ],
  };

  return (
    <div className="bg-white p-4">
      <h2 className="text-2xl font-semibold mb-4">Customer Inquiries</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Count</th>
          </tr>
        </thead>
        <tbody>
          {inquiriesData.map((row, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border">{row.status}</td>
              <td className="px-4 py-2 border">{row.count}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ height: "300px", width: "100%" }} className="mt-8"> {/* Adjust the height and width */}
      <Pie data={chartData} />
      </div>
   
    </div>
  );
};

export default CustomerInquiriesReport;
