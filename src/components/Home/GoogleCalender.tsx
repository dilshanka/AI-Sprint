import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
} from "date-fns";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const GoogleCalender = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

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
      <div key={index} className="text-sm sm:text-base text-center font-bold p-2 border-b">
        {day}
      </div>
    ));
  };

  const renderCells = () => {
    const dates = daysInMonth();
    return dates.map((day, index) => (
      <div key={index} className="p-1 sm:p-4 border text-center bg-blue-200 hover:bg-blue-500">
        <span className="text-black">{format(day, "d")}</span>
        {/* Add events display here */}
      </div>
    ));
  };

  return (
    <div className="container mx-auto p-4 border rounded-xl bg-gray-50 hover:bg-gray-100">
      <div className="flex justify-between items-center mb-2 sm:mb-4">
        <button
          onClick={handlePrevMonth}
          className="px-2 sm:px-4 py-1 sm:py-2 bg-gray-200 rounded"
        >
          <FaChevronLeft />
        </button>
        <h2 className="sm:text-xl lg:text-2xl font-bold">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <button
          onClick={handleNextMonth}
          className="px-2 sm:px-4 py-1 sm:py-2 bg-gray-200 rounded"
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {renderDays()}
        {renderCells()}
      </div>
    </div>
  );
};

export default GoogleCalender;
