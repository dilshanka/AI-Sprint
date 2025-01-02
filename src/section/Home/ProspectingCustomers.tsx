import EditCustomers from "@/components/Home/EditCustomers";
import SearchBar from "@/components/SearchBar";
import {
  Customers,
  prospectingCustomers,
} from "@/constants/prospectingCustomers";
import { useState } from "react";
import { MdEdit } from "react-icons/md";

const ProspectingCustomers = () => {
  const [customers, setCustomers] = useState<Customers[]>(prospectingCustomers);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("Name");
  const [currentCustomer, setCurrentCustomer] = useState<Customers | null>(
    null
  );

  const filteredCustomers = customers.filter((customer) => {
    const columnValue =
      customer[selectedColumn.toLowerCase() as keyof typeof customer];
    return columnValue
      ? columnValue.toString().toLowerCase().includes(searchQuery.toLowerCase())
      : false;
  });

  const handleEditClick = (customer: Customers) => {
    setCurrentCustomer(customer);
    setEditModalOpen(true);
  };

  // const handleDeleteClick = (index: number) => {
  //   setCurrentIndex(index);
  //   setDeleteModalOpen(true);
  // };

  const handleEditSave = (updateCustomer: Customers) => {
    const updatedCustomers = customers.map((customer) =>
      customer.id === currentCustomer?.id ? updateCustomer : customer
    );
    setCustomers(updatedCustomers); // Update the task list with the edited task
    setEditModalOpen(false);
  };

  // const handleDeleteConfirm = () => {
  //   if (currentIndex !== null) {
  //     setProspects(prospects.filter((_, i) => i !== currentIndex));
  //   }
  //   setDeleteModalOpen(false);
  // };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Not Contacted":
        return "bg-yellow-100 text-yellow-700 border-yellow-500";
      case "Meeting Scheduled":
        return "bg-green-100 text-green-700 border-green-500";
      case "Contacted":
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
          Prospecting Customers
        </h2>
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
          {filteredCustomers.map((prospect, index) => (
            <tr
              key={index}
              className="hover:bg-gray-100 font-medium text-xs xsm:text-sm sm:text-base even:bg-gray-50"
            >
              <td className="p-2 border-y border-l border-gray-300">
                {prospect.name}
              </td>
              <td className="p-2 border-y border-gray-300">
                {prospect.description}
              </td>
              <td className="p-2 border-y border-gray-300 text-center text-[10px] xsm:text-xs sm:text-xs">
                <span
                  className={`px-1 xsm:px-2 py-1 rounded-xl border ${getStatusStyles(
                    prospect.status
                  )}`}
                >
                  {prospect.status}
                </span>
              </td>
              <td className="p-2 border-y border-gray-300 text-center text-[10px] xsm:text-xs sm:text-sm">
                <span
                  className={`px-1 xsm:px-2 py-1 rounded-xl border ${getPriorityStyles(
                    prospect.priority
                  )}`}
                >
                  {prospect.priority}
                </span>
              </td>
              <td className="p-2 border-y border-gray-300 text-center">
                {prospect.date}
              </td>
              <td className="p-2 border-y border-gray-300 text-center">
                <button
                  onClick={() => handleEditClick(prospect)}
                  disabled={prospect.status === "Completed"}
                  className={`mr-2 px-2 py-1 rounded ${
                    prospect.status === "Completed"
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
      <EditCustomers
        isOpen={isEditModalOpen}
        customer={currentCustomer}
        title="Update Customer Details"
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

export default ProspectingCustomers;
