import { useEffect, useState } from "react";
import { Calls } from "@/constants/customerCalls";

interface EditCallsProps {
  isOpen: boolean;
  call: Calls | null;
  title: string;
  onSave: (updatedCall: Calls) => void;
  onClose: () => void;
}

const EditCalls: React.FC<EditCallsProps> = ({
  isOpen,
  call,
  onSave,
  onClose,
}) => {
  const [updatedCall, setUpdatedCall] = useState<Calls | null>(call);

  useEffect(() => {
    setUpdatedCall(call);
  }, [call]);
  if (!isOpen || !updatedCall) return null;

  return (
    <div className="fixed top-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white m-6 sm:m-0 p-6 rounded shadow-lg w-full md:w-1/2">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-4">
          Edit Calls
        </h3>
        <div className="flex justify-between gap-8 mb-4">
          <div className="w-full">
            <label className="block mb-2 font-medium">Customer Name</label>
            <input
              type="text"
              value={updatedCall?.name}
              onChange={(e) =>
                setUpdatedCall({ ...updatedCall, name: e.target.value })
              }
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 font-medium">Description</label>
            <input
              type="text"
              value={updatedCall?.description}
              onChange={(e) =>
                setUpdatedCall({ ...updatedCall, description: e.target.value })
              }
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="flex justify-between gap-8 mb-4">
          <div className="w-full">
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
          </div>
          <div className="w-full">
            <label className="block mb-2 font-medium">Status</label>
            <select
              value={updatedCall.status}
              onChange={(e) =>
                setUpdatedCall({ ...updatedCall, status: e.target.value })
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
            value={updatedCall.priority}
            onChange={(e) =>
              setUpdatedCall({ ...updatedCall, priority: e.target.value })
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
            value={updatedCall.endDate}
            onChange={(e) =>
              setUpdatedCall({ ...updatedCall, endDate: e.target.value })
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
            onClick={() => onSave(updatedCall)}
            className="px-4 sm:px-4 py-1 sm:py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCalls;
