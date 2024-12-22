import { useState } from "react";
import { MdDelete } from "react-icons/md";

type Task = {
  text: string;
  completed: boolean;
};

const ToDoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="mt-4 sm:mt-8">
      <h1 className="text-xl md:text-3xl font-bold mb-2 sm:mb-4">Today To-Do List</h1>

      {/* Input Field */}
      <div className="flex gap-2 mb-2 sm:mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="sm:flex-1 p-1 sm:p-2 border-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl sm:rounded-2xl hover:bg-blue-600"
        >
          +
        </button>
      </div>

      {/* Task List */}
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
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-2 border-y border-l border-gray-300">
                  <input
                    type="text"
                    value={task.text}
                    // onChange={(e) => handleEditTask(index, e.target.value)}
                    className="w-full bg-transparent outline-none"
                  />
                </td>
                <td className="p-2 border-y border-gray-300 text-center">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(index)}
                    className="w-5 h-5"
                  />
                </td>
                <td className="p-2 border-y border-r border-gray-300 flex justify-center gap-2">
                  <button
                    onClick={() => handleDeleteTask(index)}
                    className="hover:text-red-700 h-7 text-xl"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* No Tasks Message */}
      {tasks.length === 0 && (
        <p className="text-center text-gray-500 mt-2 sm:mt-4">No tasks for today!</p>
      )}
    </div>
  );
};

export default ToDoList;
