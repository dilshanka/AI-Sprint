import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,  
  addDays,
  isSameDay,
} from "date-fns";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { events } from "@/constants/eventData";

const GoogleCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = new Date();

  const daysInMonth = () => {
    const startDate = startOfWeek(startOfMonth(currentMonth));
    const endDate = endOfWeek(endOfMonth(currentMonth));

    const days = [];
    let day = startDate;

    while (day <= endDate) {
      days.push(day);
      day = addDays(day, 1);
    }

    return days;
  };

  const handleNextMonth = () => setCurrentMonth(addDays(currentMonth, 30));
  const handlePrevMonth = () => setCurrentMonth(addDays(currentMonth, -30));

  const renderDays = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days.map((day, index) => (
      <div
        key={index}
        className="text-sm sm:text-base text-center font-bold p-2 border-b bg-gray-200"
      >
        {day}
      </div>
    ));
  };

  const renderCells = () => {
    const dates = daysInMonth();

    return dates.map((day, index) => {
      const dayKey = format(day, "yyyy-MM-dd");
      const event = events[dayKey] || {};
      const isToday = isSameDay(day, today);

      // Determine background color based on event type
      let bgColor = "bg-blue-200"; // Default
      let textColor = "text-black";

      if (event.holiday) {
        bgColor = "bg-red-500"; // Holiday
        textColor = "text-white";
      } else if (event.todo || event.calls || event.prospecting) {
        bgColor = "bg-yellow-500"; // Busy day
        textColor = "text-black";
      } else if (!event.todo && !event.calls && !event.prospecting) {
        bgColor = "bg-green-500"; // Free day
        textColor = "text-white";
      }

      if (isToday) {
        bgColor = "bg-blue-500"; // Highlight today
        textColor = "text-white";
      }

      return (
        <div
          key={index}
          className={`relative px-2 py-2 sm:px-6 sm:py-10 border rounded-xl text-center ${bgColor} ${textColor} hover:opacity-90 hover:text-white transition group`}
        >
          {/* Default View: Date */}
          <span className="block font-bold group-hover:hidden">{format(day, "d")}</span>

          {/* Hover View: Task Details */}
          {event.todo || event.calls || event.prospecting ? (
            <div className="hidden group-hover:block text-xs">
              {event.todo ? <p>To-Do: {event.todo}</p> : <p>No To-Do</p>}
              {event.calls ? <p>Calls: {event.calls}</p> : <p>No Calls</p>}
              {event.prospecting ? <p>Prospects: {event.prospecting}</p> : <p>No Prospects</p>}
            </div>
          ) : (
            <div className="hidden group-hover:block text-xs">
              <p>No Appoinments</p>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="container mx-auto p-4 border rounded-xl bg-gray-50">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          <FaChevronLeft />
        </button>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <div className="flex items-center gap-2">
          {/* <button
            onClick={() => alert("Add event clicked")}
            className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition flex items-center gap-2"
          >
            <FaPlus />
            Add Event
          </button> */}
          <button
            onClick={handleNextMonth}
            className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 xl:px-20">{renderDays()}{renderCells()}</div>
    </div>
  );
};

export default GoogleCalendar;
