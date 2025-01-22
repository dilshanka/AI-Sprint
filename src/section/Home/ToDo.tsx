import EditTask from "@/components/Home/TaskEdit";
import SearchBar from "@/components/SearchBar";
import { inQueueTasks, Task, todayTasks } from "@/constants/todoTask";
import { useState } from "react";
import { MdEdit } from "react-icons/md";

const ToDoList = () => {
  const [tasks, setTasks] = useState<Task[]>(todayTasks);
  const [queueTasks, setQueueTasks] = useState<Task[]>(inQueueTasks);
  const [popupTask, setPopupTask] = useState<Task | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [taskToMoveIndex, setTaskToMoveIndex] = useState<number | null>(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [searchQueryToday, setSearchQueryToday] = useState("");
  const [searchQueryQueue, setSearchQueryQueue] = useState("");
  const [selectedColumnToday, setSelectedColumnToday] = useState("Description");
  const [selectedColumnQueue, setSelectedColumnQueue] = useState("Description");

  const filteredTodayTasks = searchQueryToday
    ? tasks.filter((task) => {
        const columnKey = selectedColumnToday.toLowerCase();
        const columnValue = task[columnKey as keyof Task];
        return (
          columnValue &&
          columnValue
            .toString()
            .toLowerCase()
            .includes(searchQueryToday.toLowerCase())
        );
      })
    : tasks;

  const filteredQueueTasks = searchQueryQueue
    ? queueTasks.filter((task) => {
        const columnKey = selectedColumnQueue.toLowerCase();
        const columnValue = task[columnKey as keyof Task];
        return (
          columnValue &&
          columnValue
            .toString()
            .toLowerCase()
            .includes(searchQueryQueue.toLowerCase())
        );
      })
    : queueTasks;

  const handleEditClick = (task: Task) => {
    setCurrentTask(task);
    setEditModalOpen(true);
  };

  const handleEditSave = (updatedTask: Task) => {
    const updatedTasks = tasks.map((task) =>
      task.description === currentTask?.description ? updatedTask : task
    );
    setTasks(updatedTasks); // Update the task list with the edited task
    setEditModalOpen(false);
  };

  const openAddPopup = () => {
    setPopupTask({
      id: "",
      description: "",
      status: "Pending",
      priority: "Low",
      endDate: "",
    });
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupTask(null);
  };

  const openConfirmPopup = (index: number) => {
    setTaskToMoveIndex(index);
    setShowConfirmPopup(true);
  };

  const closeConfirmPopup = () => {
    setShowConfirmPopup(false);
    setTaskToMoveIndex(null);
  };

  const handleSaveTask = () => {
    if (popupTask) {
      setTasks([...tasks, popupTask]);
      closePopup();
    }
  };

  const moveTaskToToday = () => {
    if (taskToMoveIndex !== null) {
      const taskToMove = queueTasks[taskToMoveIndex];
      const updatedQueueTasks = queueTasks.filter(
        (_, index) => index !== taskToMoveIndex
      );

      setQueueTasks(updatedQueueTasks);
      setTasks([...tasks, taskToMove]);
      closeConfirmPopup();
    }
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

  const renderTable = (
    title: string,
    tasks: Task[],
    searchQuery: string,
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
    selectedColumn: string,
    setSelectedColumn: React.Dispatch<React.SetStateAction<string>>,
    isQueue = false
  ) => (
    <div className="mb-8">
      <div className="flex justify-between">
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2">
          {title}
        </h2>
        <SearchBar
          placeholder={`Search by ${selectedColumn}`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          columns={["Description", "Status", "Priority", "End Date"]}
          selectedColumn={selectedColumn}
          onColumnChange={(e) => setSelectedColumn(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border border-gray-300">
          <thead>
            <tr className="bg-gray-200 font-semibold text-xs xsm:text-sm sm:text-base sm:text-center">
              <th className="p-2 border-gray-300 text-start">Description</th>
              <th className="p-2 border-gray-300">Status</th>
              <th className="p-2 border-gray-300">Priority</th>
              <th className="p-2 border-gray-300">End Date</th>
              <th className="p-2 border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 text-[10px] xsm:text-sm sm:text-base odd:bg-white even:bg-gray-50"
              >
                <td className="p-2 border-y border-l border-gray-300">
                  {task.description}
                </td>
                <td className="p-2 border-y border-gray-300 text-center text-nowrap">
                  <span
                    className={`px-1 xsm:px-2 py-1 rounded xsm:rounded-xl border ${getStatusStyles(
                      task.status
                    )}`}
                  >
                    {task.status}
                  </span>
                </td>
                <td className="p-2 border-y border-gray-300 text-center">
                  <span
                    className={`px-1 xsm:px-2 py-1 rounded xsm:rounded-xl border ${getPriorityStyles(
                      task.priority
                    )}`}
                  >
                    {task.priority}
                  </span>
                </td>
                <td className="p-2 border-y border-gray-300 text-center">
                  {task.endDate}
                </td>
                <td className="p-2 border-y border-gray-300 text-center">
                  {isQueue ? (
                    <button
                      onClick={() => openConfirmPopup(index)}
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                    >
                      Move
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEditClick(task)}
                      disabled={task.status === "Completed"}
                      className={`mr-2 px-2 py-1 rounded ${
                        task.status === "Completed"
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-gray-300 text-blue-500 hover:bg-gray-500 hover:text-blue-300"
                      }`}
                    >
                      <MdEdit />
                    </button>
                  )}
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
    </div>
  );

  return (
    <div className="mt-4 sm:mt-8">
      <div className="flex justify-between items-center pb-2">
        <h1 className="capitalize font-inter font-semibold text-xl md:text-4xl mb-2 sm:mb-4 text-[#008cd2] xsm:text-black">
          Task Management
        </h1>
        <button
          onClick={openAddPopup}
          className="bg-blue-500 xsm:bg-white text-white xsm:text-blue-500 text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 rounded hover:bg-blue-600 hover:text-white"
        >
          Add Task
        </button>
      </div>
      {renderTable(
        "Today To-Do List",
        filteredTodayTasks,
        searchQueryToday,
        setSearchQueryToday,
        selectedColumnToday,
        setSelectedColumnToday
      )}
      {renderTable(
        "In Queue",
        filteredQueueTasks,
        searchQueryQueue,
        setSearchQueryQueue,
        selectedColumnQueue,
        setSelectedColumnQueue,
        true
      )}

      {/* Task Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg w-full md:w-1/2">
            <h2 className="text-lg font-bold mb-4">Add Task</h2>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Description</label>
              <input
                type="text"
                value={popupTask?.description || ""}
                onChange={(e) =>
                  setPopupTask({ ...popupTask!, description: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <label className="block my-2 font-medium">Status</label>
              <select
                value={popupTask?.status || ""}
                onChange={(e) =>
                  setPopupTask({ ...popupTask!, status: e.target.value })
                }
                className="w-full p-2 border rounded"
              >
                {["To Do", "In Progress", "Completed"].map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <label className="block my-2 font-medium">Priority</label>
              <select
                value={popupTask?.priority || ""}
                onChange={(e) =>
                  setPopupTask({ ...popupTask!, priority: e.target.value })
                }
                className="w-full p-2 border rounded"
              >
                {["Low", "Medium", "High"].map((priority) => (
                  <option key={priority} value={priority}>
                    {priority}
                  </option>
                ))}
              </select>
              <label className="block my-2 font-medium">End Date</label>
              <input
                type="date"
                value={popupTask?.endDate || ""}
                onChange={(e) =>
                  setPopupTask({ ...popupTask!, endDate: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
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

      {/* Confirm Move Popup */}
      {showConfirmPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Confirm Move</h2>
            <p className="mb-4">Are you sure you want to move this task?</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={closeConfirmPopup}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={moveTaskToToday}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <EditTask
        isOpen={isEditModalOpen}
        task={currentTask}
        onSave={handleEditSave}
        onClose={() => setEditModalOpen(false)}
      />
    </div>
  );
};

export default ToDoList;
