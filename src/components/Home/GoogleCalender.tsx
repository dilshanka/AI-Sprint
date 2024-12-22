import { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays } from "date-fns";

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
      <div key={index} className="text-center font-bold p-2 border-b">
        {day}
      </div>
    ));
  };

  const renderCells = () => {
    const dates = daysInMonth();
    return dates.map((day, index) => (
      <div key={index} className="p-4 border">
        <span className="text-gray-600">{format(day, "d")}</span>
        {/* Add events display here */}
      </div>
    ));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="px-4 py-2 bg-gray-300 rounded">
          Previous
        </button>
        <h2 className="text-lg font-bold">{format(currentMonth, "MMMM yyyy")}</h2>
        <button onClick={handleNextMonth} className="px-4 py-2 bg-gray-300 rounded">
          Next
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
