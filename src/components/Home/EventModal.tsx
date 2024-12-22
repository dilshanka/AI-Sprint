import React, { useState } from "react";

interface EventDetails {
  title: string;
  description: string;
  date: string; // Can be a string (ISO date), or use Date if preferred
}

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (eventDetails: EventDetails) => void;
}

const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, onSave }) => {
  const [eventDetails, setEventDetails] = useState<EventDetails>({
    title: "",
    description: "",
    date: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Make sure the onSave function receives the eventDetails object, not a string
    onSave(eventDetails); // Pass the entire eventDetails object
  };

  if (!isOpen) return null; // Don't render modal if it's not open

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 lg:p-6 rounded shadow-lg w-5/6 md:w-1/2 lg:w-1/3">
        <h2 className="md:text-xl font-bold mb-1">Add Event</h2>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={eventDetails.title}
          onChange={handleInputChange}
          className="border rounded-xl p-1 md:p-2 w-full mb-2 md:mb-4"
        />
        <h2 className="md:text-xl font-bold mb-1">Add Description</h2>
        <textarea
          name="description"
          placeholder="Event Description"
          value={eventDetails.description}
          onChange={handleInputChange}
          className="border rounded-xl p-1 md:p-2 w-full mb-2 md:mb-4"
        />
        <h2 className="md:text-xl font-bold mb-1">Select Date</h2>
        <input
          type="date"
          name="date"
          value={eventDetails.date}
          onChange={handleInputChange}
          className="border rounded-xl p-1 md:p-2 w-full mb-2 md:mb-4"
        />
        <div className="flex text-sm md:text-base justify-end gap-2">
          <button
            className="border px-4 py-1 rounded-xl bg-blue-500 hover:bg-blue-900 hover:text-white"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="border px-4 py-1 rounded-xl bg-black opacity-70 hover:opacity-100 text-white"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
