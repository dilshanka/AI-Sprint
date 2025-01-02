import { Task } from "@/constants/todoTask";
import { useEffect, useState } from "react";

interface EditTaskProps {
  isOpen: boolean;
  task: Task | null;
  onSave: (updatedTask: Task) => void;
  onClose: () => void;
}

const EditTask: React.FC<EditTaskProps> = ({
  isOpen,
  task,
  onSave,
  onClose,
}) => {
  const [updatedTask, setUpdatedTask] = useState<Task | null>(task);

  useEffect(() => {
    setUpdatedTask(task);
  }, [task]);

  if (!isOpen || !updatedTask) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white m-6 sm:m-0 p-6 rounded shadow-lg w-full md:w-1/2">
        <h3 className="text-lg font-semibold mb-4">Edit Task</h3>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Description</label>
          <input
            type="text"
            value={updatedTask.description}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, description: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Status</label>
          <select
            value={updatedTask.status}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, status: e.target.value })
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
        <div className="mb-4">
          <label className="block mb-2 font-medium">Priority</label>
          <select
            value={updatedTask.priority}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, priority: e.target.value })
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
        <div className="mb-4">
          <label className="block mb-2 font-medium">End Date</label>
          <input
            type="date"
            value={updatedTask.endDate}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, endDate: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(updatedTask)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
