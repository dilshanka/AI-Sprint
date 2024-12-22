import React, { useState } from "react";

const CustomerCalls = () => {
  const [calls, setCalls] = useState([
    { description: "Call client A", status: "Pending" },
    { description: "Follow up with client B", status: "Completed" },
  ]);

  const handleDelete = (index) => {
    setCalls(calls.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const newDescription = prompt("Enter new description:");
    if (newDescription) {
      const updatedCalls = [...calls];
      updatedCalls[index].description = newDescription;
      setCalls(updatedCalls);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Customer Calls</h2>
      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {calls.map((call, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{call.description}</td>
              <td className="border px-4 py-2">{call.status}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="mr-2 px-2 py-1 bg-blue-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerCalls;
