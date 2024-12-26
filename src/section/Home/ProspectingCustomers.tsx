import React, { useState } from "react";

const ProspectingCustomers = () => {
  const [prospects, setProspects] = useState([
    { description: "Send email to prospect A", status: "In Progress" },
    { description: "Schedule meeting with prospect B", status: "Pending" },
  ]);

  const handleDelete = (index) => {
    setProspects(prospects.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const newDescription = prompt("Enter new description:");
    if (newDescription) {
      const updatedProspects = [...prospects];
      updatedProspects[index].description = newDescription;
      setProspects(updatedProspects);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Prospecting Customers</h2>
      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {prospects.map((prospect, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{prospect.description}</td>
              <td className="border px-4 py-2">{prospect.status}</td>
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

export default ProspectingCustomers;
