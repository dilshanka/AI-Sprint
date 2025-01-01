import React, { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa"; 
import { SiProbot } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";
import chatbot from "../assets/images/bot1.png";

const ChatbotPage: React.FC = () => {
  const [showMeetingForm, setShowMeetingForm] = useState(false);

  const toggleMeetingForm = () => {
    setShowMeetingForm(!showMeetingForm);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white grid grid-cols-1 md:grid-cols-4">
      {/* Sidebar */}
      <div className="bg-gray-800 p-6 space-y-6 border-b md:border-b-0 md:border-r border-gray-700">
        <h2 className="text-xl font-bold">Customer Options</h2>
        <button
          onClick={toggleMeetingForm}
          className="w-full bg-blue-600 hover:bg-blue-500 py-2 px-4 rounded-xl font-medium transition"
        >
          Schedule a Meeting
        </button>
        {showMeetingForm && (
          <form className="space-y-4 mt-4 bg-gray-700 p-4 rounded-xl">
            <h3 className="text-lg font-semibold">Schedule a Meeting</h3>
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                className="w-full bg-gray-800 border border-gray-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full bg-gray-800 border border-gray-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1">Address</label>
              <input
                type="text"
                className="w-full bg-gray-800 border border-gray-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1">Product Name</label>
              <input
                type="text"
                className="w-full bg-gray-800 border border-gray-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1">Product ID</label>
              <input
                type="text"
                className="w-full bg-gray-800 border border-gray-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1">Description about Problem</label>
              <textarea
                className="w-full bg-gray-800 border border-gray-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              ></textarea>
            </div>
            <div>
              <label className="block mb-1">Preferred Dates</label>
              <input
                type="date"
                className="w-full bg-gray-800 border border-gray-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
              />
              <input
                type="date"
                className="w-full bg-gray-800 border border-gray-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
              />
              <input
                type="date"
                className="w-full bg-gray-800 border border-gray-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-500 py-2 px-4 rounded-xl font-medium transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>

      {/* Chatbot */}
      <div className="md:col-span-3 p-6 ">
        <div className="flex justify-between items-center">
            <span> <h2 className="text-xl font-bold mb-6">Chat with Us</h2></span>
            <span> <img
                src={chatbot}
                alt="AI Sprint Chatbot"
                className="w-16 h-16 rounded-full"
              /></span>
        </div>
       
        <div className="bg-gray-800 p-4 rounded-xl shadow-md h-[90vh] flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4">
       
            <div className="flex items-start space-x-3">
            
              <div className=" py-2 px-4 rounded-lg max-w-md flex items-center space-x-3">
                <span><SiProbot /></span>
                <span> Hello! How can I help you today?</span>
               
              </div>
            </div>
            <div className="flex items-start space-x-3 justify-end">
              <div className=" py-2 px-4 rounded-lg max-w-md flex items-center space-x-3">
                <span><FaRegUser /></span>
                <span>  I need assistance with Product X.</span>
              
              </div>
            </div>
          </div>
          {/* Chat input */}
          <div className="mt-4 flex items-center space-x-3">
            <input
              type="text"
              className="flex-1 bg-gray-700 border border-gray-600 rounded-xl py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
            />
            <button className="bg-blue-600 hover:bg-blue-500 py-2 px-4 rounded-xl font-medium">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
