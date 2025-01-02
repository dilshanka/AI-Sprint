import EditCalls from "@/components/Home/EditCalls";
import SearchBar from "@/components/SearchBar";
import { Calls, customerCalls } from "@/constants/customerCalls";
import { useState } from "react";
import { MdEdit } from "react-icons/md";

const CustomerCalls = () => {
  const [calls, setCalls] = useState<Calls[]>(customerCalls);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("Name");
  const [currentCall, setCurrentCall] = useState<Calls | null>(null);

  const filteredCalls = calls.filter((call) => {
    const columnValue = call[selectedColumn.toLowerCase() as keyof typeof call];
    return columnValue
      ? columnValue.toString().toLowerCase().includes(searchQuery.toLowerCase())
      : false;
  });

  const handleEditClick = (call: Calls) => {
    setCurrentCall(call);
    setEditModalOpen(true);
  };

  // const handleDeleteClick = (index: number) => {
  //   setCurrentIndex(index);
  //   setDeleteModalOpen(true);
  // };

  const handleEditSave = (updateCall: Calls) => {
    const updatedCalls = calls.map((call) =>
      call.id === currentCall?.id ? updateCall : call
    );
    setCalls(updatedCalls); // Update the task list with the edited task
    setEditModalOpen(false);
  };

  // const handleDeleteConfirm = () => {
  //   if (currentCall !== null) {
  //     setCalls(calls.filter((_, i) => i !== currentCall));
  //   }
  //   setDeleteModalOpen(false);
  // };

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

  const getPriorityStyles = (status: string) => {
    switch (status) {
      case "Low":
        return "bg-green-100 text-green-700 border-green-500";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-500";
      case "High":
        return "bg-red-100 text-red-700 border-red-500";
      default:
        return "bg-gray-100 text-gray-700 border-gray-500";
    }
  };

  return (
    <div className="mt-4 sm:mt-8">
      <div className="flex justify-between">
        <h2 className="capitalize font-inter font-semibold text-xl md:text-3xl mb-2 sm:mb-4">
          Customer Calls
        </h2>
        {/* Search Bar */}
        <SearchBar
          placeholder={`Search by ${selectedColumn}`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          columns={["Name", "Description", "Status", "Priority"]}
          selectedColumn={selectedColumn}
          onColumnChange={(e) => setSelectedColumn(e.target.value)}
        />
      </div>
      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200 font-inter text-sm sm:text-center">
            <th className="p-2 border-gray-300 text-start">Customer Name</th>
            <th className="p-2 border-gray-300 text-start">Description</th>
            <th className="p-2 border-gray-300">Status</th>
            <th className="p-2 border-gray-300">Priority</th>
            <th className="p-2 border-gray-300">Date</th>
            <th className="p-2 border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCalls.map((call, index) => (
            <tr
              key={index}
              className="hover:bg-gray-100 font-medium text-xs xsm:text-sm even:bg-gray-50"
            >
              <td className="p-2 border-y border-l border-gray-300">
                {call.name}
              </td>
              <td className="p-2 border-y border-gray-300">
                {call.description}
                {call.autoAction && (
                  <span className="ml-2 text-red-500 bg-red-200 text-[10px] border p-1 rounded">
                    {call.autoAction}
                  </span>
                )}
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
              <td className="p-2 border-y border-gray-300 text-center text-[10px] xsm:text-xs sm:text-sm">
                <span
                  className={`px-1 xsm:px-2 py-1 rounded-xl border ${getPriorityStyles(
                    call.priority
                  )}`}
                >
                  {call.priority}
                </span>
              </td>
              <td className="p-2 border-y border-gray-300 text-center">
                {call.endDate}
              </td>
              <td className="p-2 border-y border-gray-300 text-center">
                <button
                  onClick={() => handleEditClick(call)}
                  disabled={call.status === "Completed"}
                  className={`mr-2 px-2 py-1 rounded ${
                    call.status === "Completed"
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-gray-300 text-blue-500 hover:bg-gray-500 hover:text-blue-300"
                  }`}
                >
                  <MdEdit />
                </button>
                {/* <button
                  onClick={() => handleDeleteClick(index)}
                  className="px-2 py-1 bg-gray-300 text-red-500 hover:bg-gray-500 hover:text-red-300 rounded"
                >
                  <MdDelete />
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modals */}
      <EditCalls
        isOpen={isEditModalOpen}
        call={currentCall}
        title="Update Customer Calls"
        onSave={handleEditSave}
        onClose={() => setEditModalOpen(false)}
      />
      {/* <DeleteModal
        isOpen={isDeleteModalOpen}
        onConfirm={handleDeleteConfirm}
        onClose={() => setDeleteModalOpen(false)}
      /> */}
    </div>
  );
};

export default CustomerCalls;
