// src/pages/SalesRepDashboard.tsx
import React from 'react';

const SalesRepDashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Sales Representative Dashboard</h1>

      {/* Customer Inquiries Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Customer Inquiries</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          <ul className="space-y-4">
            <li className="border-b pb-4">
              <p className="text-gray-800 font-medium">Customer 1</p>
              <p className="text-gray-600">Looking for more details about Product A.</p>
            </li>
            <li className="border-b pb-4">
              <p className="text-gray-800 font-medium">Customer 2</p>
              <p className="text-gray-600">Interested in bulk purchase discounts for Product C.</p>
            </li>
            <li>
              <p className="text-gray-800 font-medium">Customer 3</p>
              <p className="text-gray-600">Requested a demo for Product B.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Sales Reporting Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Sales Reporting</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="text-left px-4 py-2">Month</th>
                <th className="text-left px-4 py-2">Sales</th>
                <th className="text-left px-4 py-2">Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">January</td>
                <td className="px-4 py-2">150</td>
                <td className="px-4 py-2">$15,000</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">February</td>
                <td className="px-4 py-2">200</td>
                <td className="px-4 py-2">$20,000</td>
              </tr>
              <tr>
                <td className="px-4 py-2">March</td>
                <td className="px-4 py-2">175</td>
                <td className="px-4 py-2">$18,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Professional Development Suggestions */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Professional Development</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          <ul className="space-y-4">
            <li className="border-b pb-4">
              <p className="font-medium">Improve Communication Skills</p>
              <p className="text-gray-600">Enroll in online courses like "Effective Communication for Sales Professionals."</p>
            </li>
            <li className="border-b pb-4">
              <p className="font-medium">Stay Updated with Industry Trends</p>
              <p className="text-gray-600">Attend webinars or follow industry leaders on LinkedIn.</p>
            </li>
            <li>
              <p className="font-medium">Time Management</p>
              <p className="text-gray-600">Use tools like Trello or Asana to prioritize tasks efficiently.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SalesRepDashboard;
