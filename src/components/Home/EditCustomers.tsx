import { useEffect, useState } from "react";
import { Customers } from "@/constants/prospectingCustomers";

interface EditCustomersProps {
  isOpen: boolean;
  customer: Customers | null;
  title: string;
  onSave: (updatedCustomer: Customers) => void;
  onClose: () => void;
}

const EditCustomers: React.FC<EditCustomersProps> = ({
  isOpen,
  customer,
  onSave,
  onClose,
}) => {
  const [updatedCustomer, setUpdatedCustomer] = useState<Customers | null>(customer);

  useEffect(() => {
    setUpdatedCustomer(customer);
  }, [customer]);
  if (!isOpen || !updatedCustomer) return null;

  return (
    <div className="fixed top-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white m-6 sm:m-0 p-6 rounded shadow-lg w-1/2">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-4">
          Edit Customer
        </h3>
        <div className="flex justify-between gap-8 mb-4">
          <div className="w-full">
            <label className="block mb-2 font-medium">Customer Name</label>
            <input
              type="text"
              value={updatedCustomer?.name}
              onChange={(e) =>
                setUpdatedCustomer({ ...updatedCustomer, name: e.target.value })
              }
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 font-medium">Description</label>
            <input
              type="text"
              value={updatedCustomer?.description}
              onChange={(e) =>
                setUpdatedCustomer({ ...updatedCustomer, description: e.target.value })
              }
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="flex justify-between gap-8 mb-4">
          {/* <div className="w-full">
            <label className="block mb-2 font-medium">Auto Action</label>
            <select
              value={updatedCall?.autoAction || ""}
              onChange={(e) =>
                setUpdatedCall({
                  ...updatedCall,
                  autoAction: e.target.value as
                    | "Auto Call"
                    | "Auto Voice"
                    | null,
                })
              }
              className="w-full p-2 border rounded"
            >
              <option value="">None</option>
              <option value="Auto Call">Auto Call</option>
              <option value="Auto Voice">Auto Voice</option>
            </select>
          </div> */}
          <div className="w-full">
            <label className="block mb-2 font-medium">Status</label>
            <select
              value={updatedCustomer.status}
              onChange={(e) =>
                setUpdatedCustomer({ ...updatedCustomer, status: e.target.value })
              }
              className="w-full p-2 border rounded"
            >
              {["To Do", "In Progress", "Completed"].map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-between gap-8 mb-4">
        <div className="w-full">
          <label className="block mb-2 font-medium">Priority</label>
          <select
            value={updatedCustomer.priority}
            onChange={(e) =>
              setUpdatedCustomer({ ...updatedCustomer, priority: e.target.value })
            }
            className="w-full p-2 border rounded"
          >
            {["Low", "Medium", "High"].map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <label className="block mb-2 font-medium">Date</label>
          <input
            type="date"
            value={updatedCustomer.date}
            onChange={(e) =>
              setUpdatedCustomer({ ...updatedCustomer, date: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
        </div>
        </div>
        <div className="flex justify-end space-x-1 sm:space-x-2 text-sm sm:text-base">
          <button
            onClick={onClose}
            className="px-2 sm:px-4 py-1 sm:py-2 bg-gray-300 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(updatedCustomer)}
            className="px-4 sm:px-4 py-1 sm:py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCustomers;
