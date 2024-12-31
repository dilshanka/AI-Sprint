import React from "react";
import { Line } from "react-chartjs-2";

const ProductPerformanceReport: React.FC = () => {
  const productData = [
    { product: "Product A", sales: 120 },
    { product: "Product B", sales: 80 },
    { product: "Product C", sales: 150 },
  ];

  const chartData = {
    labels: productData.map((data) => data.product),
    datasets: [
      {
        label: "Sales",
        data: productData.map((data) => data.sales),
        borderColor: "#42A5F5",
        backgroundColor: "rgba(66, 165, 245, 0.2)",
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Product Performance</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">Product</th>
            <th className="px-4 py-2 border">Sales</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="px-4 py-2 border">{row.product}</td>
              <td className="px-4 py-2 border">{row.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Line data={chartData} /> */}
      <div style={{ height: "300px", width: "100%" }} className="mt-8">
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default ProductPerformanceReport;
