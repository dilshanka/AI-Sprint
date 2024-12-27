import DeleteModal from "@/components/Home/DeleteModal";
import EditModal from "@/components/Home/EditModal";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const CustomerCalls = () => {
  const [calls, setCalls] = useState([
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
      const updatedCalls = [...calls];
      updatedCalls[currentIndex].description = newDescription;
      setCalls(updatedCalls);
    }
    setEditModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    if (currentIndex !== null) {
      setCalls(calls.filter((_, i) => i !== currentIndex));
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
        Customer Calls
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
          {calls.map((call, index) => (
            <tr key={index} className="hover:bg-gray-100 font-medium text-xs xsm:text-sm md:text-base">
              <td className="p-2 border-y border-l border-gray-300">
                {call.description}
              </td>
              <td className="p-2 border-y border-gray-300 text-center text-[10px] xsm:text-xs sm:text-sm">
                <span
                  className={`px-1 xsm:px-2 py-1 rounded-xl border ${getStatusStyles(
                    call.status
                  )}`}
                >
                  {call.status}
                </span>
              </td>
              <td className="p-2 border-y border-gray-300 text-center">
                <button
                  onClick={() => handleEditClick(index)}
                  disabled={call.status === "Completed"}
                  className={`mr-2 px-2 py-1 rounded ${
                    call.status === "Completed"
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
        description={currentIndex !== null ? calls[currentIndex].description : ""}
        title="Update Customer Calls"
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

export default CustomerCalls;
