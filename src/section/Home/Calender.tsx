import EventModal from "@/components/Home/EventModal";
import GoogleCalender from "@/components/Home/GoogleCalender";
import { useState } from "react";

interface EventDetails {
    title: string;
    description: string;
    date: string; // You could also use Date if you're using actual Date objects
  }
  

function Calender() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState<EventDetails[]>([]);

  const handleSaveEvent = (eventDetails: EventDetails) => {
    setEvents([...events, eventDetails]);
    setModalOpen(false);
  };

  return (
    <div>
      <div>
        <h1 className="capitalize font-inter font-semibold text-xl">
          calender
        </h1>
      </div>
      <div>
        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white fixed bottom-4 right-4 rounded-full shadow-lg"
        >
          +
        </button>
        <GoogleCalender />
        <EventModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSave={handleSaveEvent}
        />
      </div>
    </div>
  );
}

export default Calender;
