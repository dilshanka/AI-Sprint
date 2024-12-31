import { inQueueTasks, Task, todayTasks } from "@/constants/todoTask";
import { useState } from "react";
import { MdEdit } from "react-icons/md";

const ToDoList = () => {
  const [tasks, setTasks] = useState<Task[]>(todayTasks);
  const [queueTasks, setQueueTasks] = useState<Task[]>(inQueueTasks);
  const [popupTask, setPopupTask] = useState<Task | null>(null);
  const [isQueue, setIsQueue] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const openAddPopup = (queue: boolean) => {
    setPopupTask({ description: "", status: "Pending" });
    setIsQueue(queue);
    setIsEditMode(false);
    setShowPopup(true);
  };

  const openEditPopup = (task: Task, index: number, queue: boolean) => {
    setPopupTask(task);
    setEditIndex(index);
    setIsQueue(queue);
    setIsEditMode(true);
    setShowPopup(true);
  };

  const handleSaveTask = () => {
    if (popupTask) {
      const targetTasks = isQueue ? queueTasks : tasks;

      if (isEditMode && editIndex !== null) {
        const updatedTasks = targetTasks.map((task, i) =>
          i === editIndex ? popupTask : task
        );
        isQueue ? setQueueTasks(updatedTasks) : setTasks(updatedTasks);
      } else {
        const updatedTasks = [...targetTasks, popupTask];
        isQueue ? setQueueTasks(updatedTasks) : setTasks(updatedTasks);
      }

      closePopup();
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupTask(null);
    setEditIndex(null);
    setIsQueue(false);
    setIsEditMode(false);
  };

  const renderTable = (title: string, tasks: Task[], isQueue = false) => (
    <div className="mb-8">
      <h2 className="text-lg sm:text-xl font-bold mb-2">{title}</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border border-gray-300">
          <thead>
            <tr className="bg-gray-200 font-inter text-sm sm:text-center">
              <th className="p-2 border-gray-300">Description</th>
              <th className="p-2 border-gray-300">Status</th>
              <th className="p-2 border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 font-medium text-xs xsm:text-sm md:text-base"
              >
                <td className="p-2 border-y border-l border-gray-300">
                  <input
                    type="text"
                    value={task.description}
                    className="w-full bg-transparent outline-none"
                    readOnly
                  />
                </td>
                <td className="p-2 border-y border-gray-300 text-center">
                  {task.status}
                </td>
                <td className="p-2 border-y border-r border-gray-300 flex justify-center gap-2">
                  <button
                    onClick={() => openEditPopup(task, index, isQueue)}
                    className="hover:text-blue-600 h-7 text-xl"
                  >
                    <MdEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {tasks.length === 0 && (
        <p className="text-center text-gray-500 mt-2 sm:mt-4">
          No tasks found in this list!
        </p>
      )}
      <button
        onClick={() => openAddPopup(isQueue)}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Task
      </button>
    </div>
  );

  return (
    <div className="mt-4 sm:mt-8">
      <h1 className="text-xl md:text-3xl font-bold mb-2 sm:mb-4">
        Task Management
      </h1>

      {/* Render Tables */}
      {renderTable("Today To-Do List", tasks)}
      {renderTable("In Queue", queueTasks, true)}

      {/* Task Popup */}
      {showPopup && popupTask && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">
              {isEditMode ? "Edit Task" : "Add Task"}
            </h2>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Description</label>
              <input
                type="text"
                value={popupTask.description}
                onChange={(e) =>
                  setPopupTask({ ...popupTask, description: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Status</label>
              <select
                value={popupTask.status}
                onChange={(e) =>
                  setPopupTask({ ...popupTask, status: e.target.value })
                }
                className="w-full p-2 border rounded"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={closePopup}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveTask}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDoList;
