import React, { useState } from 'react';

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
    title: '',
    description: '',
    date: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <div className="modal">
      <div className="modal-content">
        <h2>Create Event</h2>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={eventDetails.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={eventDetails.description}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="date"
          value={eventDetails.date}
          onChange={handleInputChange}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EventModal;
