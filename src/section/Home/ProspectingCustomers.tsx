// import { useState } from "react";

// const ProspectingCustomers = () => {
//   const [prospects, setProspects] = useState([
//     { description: "Send email to prospect A", status: "In Progress" },
//     { description: "Schedule meeting with prospect B", status: "Pending" },
//   ]);

//   const handleDelete = (index: number) => {
//     setProspects(prospects.filter((_, i) => i !== index));
//   };

//   const handleEdit = (index: number) => {
//     const newDescription = prompt("Enter new description:");
//     if (newDescription) {
//       const updatedProspects = [...prospects];
//       updatedProspects[index].description = newDescription;
//       setProspects(updatedProspects);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Prospecting Customers</h2>
//       <table className="table-auto w-full border border-gray-300">
//         <thead>
//           <tr>
//             <th className="border px-4 py-2">Description</th>
//             <th className="border px-4 py-2">Status</th>
//             <th className="border px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {prospects.map((prospect, index) => (
//             <tr key={index}>
//               <td className="border px-4 py-2">{prospect.description}</td>
//               <td className="border px-4 py-2">{prospect.status}</td>
//               <td className="border px-4 py-2">
//                 <button
//                   onClick={() => handleEdit(index)}
//                   className="mr-2 px-2 py-1 bg-blue-500 text-white rounded"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(index)}
//                   className="px-2 py-1 bg-red-500 text-white rounded"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProspectingCustomers;

import DeleteModal from "@/components/Home/DeleteModal";
import EditModal from "@/components/Home/EditModal";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const ProspectingCustomers = () => {
  const [prospects, setProspects] = useState([
    { description: "Call client A", status: "Pending" },
    { description: "Follow up with client B", status: "Completed" },
    { description: "Call client C", status: "In Progress" },
    { description: "Follow up with client D", status: "Completed" },
    { description: "Call client E", status: "Pending" },
  ]);

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleEditClick = (index: number) => {
    setCurrentIndex(index);
    setEditModalOpen(true);
  };

  const handleDeleteClick = (index: number) => {
    setCurrentIndex(index);
    setDeleteModalOpen(true);
  };

  const handleEditSave = (newDescription: string) => {
    if (currentIndex !== null) {
      const updatedProspects = [...prospects];
      updatedProspects[currentIndex].description = newDescription;
      setProspects(updatedProspects);
    }
    setEditModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    if (currentIndex !== null) {
      setProspects(prospects.filter((_, i) => i !== currentIndex));
    }
    setDeleteModalOpen(false);
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-500";
      case "Completed":
        return "bg-green-100 text-green-700 border-green-500";
      case "In Progress":
        return "bg-blue-100 text-blue-700 border-blue-500";
      default:
        return "bg-gray-100 text-gray-700 border-gray-500";
    }
  };

  return (
    <div className="mt-4 sm:mt-8">
      <h2 className="capitalize font-inter font-semibold text-xl md:text-3xl mb-2 sm:mb-4">
        Prospecting Calls
      </h2>
      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200 font-inter text-sm sm:text-center">
            <th className="p-2 border-gray-300">Description</th>
            <th className="p-2 border-gray-300">Status</th>
            <th className="p-2 border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {prospects.map((prospect, index) => (
            <tr key={index} className="hover:bg-gray-100 font-medium text-xs xsm:text-sm md:text-base">
              <td className="p-2 border-y border-l border-gray-300">
                {prospect.description}
              </td>
              <td className="p-2 border-y border-gray-300 text-center text-[10px] xsm:text-xs sm:text-sm">
                <span
                  className={`px-1 xsm:px-2 py-1 rounded-xl border ${getStatusStyles(
                    prospect.status
                  )}`}
                >
                  {prospect.status}
                </span>
              </td>
              <td className="p-2 border-y border-gray-300 text-center">
                <button
                  onClick={() => handleEditClick(index)}
                  disabled={prospect.status === "Completed"}
                  className={`mr-2 px-2 py-1 rounded ${
                    prospect.status === "Completed"
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-gray-300 text-blue-500 hover:bg-gray-500 hover:text-blue-300"
                  }`}
                >
                  <MdEdit />
                </button>

                <button
                  onClick={() => handleDeleteClick(index)}
                  className="px-2 py-1 bg-gray-300 text-red-500 hover:bg-gray-500 hover:text-red-300 rounded"
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modals */}
      <EditModal
        isOpen={isEditModalOpen}
        description={currentIndex !== null ? prospects[currentIndex].description : ""}
        title="Update Prospecting Calls"
        onSave={handleEditSave}
        onClose={() => setEditModalOpen(false)}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onConfirm={handleDeleteConfirm}
        onClose={() => setDeleteModalOpen(false)}
      />
    </div>
  );
};

export default ProspectingCustomers;
