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
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        {/* <h1 className="capitalize font-inter font-semibold text-xl md:text-4xl text-[#008cd2]"> */}
        <h1 className="capitalize font-inter font-semibold text-xl md:text-4xl text-[#008cd2] xsm:text-black">
          calender
        </h1>
        {/* <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-900 text-white bottom-4 right-4 rounded-full shadow-lg"
        >
          +
        </button> */}
      </div>
      <div>
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
