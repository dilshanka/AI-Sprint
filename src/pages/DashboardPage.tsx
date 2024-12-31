// src/pages/SalesRepDashboard.tsx
import React from "react";
import Chatbot from "@/components/Chatbot";
import { FaCommentDots, FaGlobe, FaClock } from "react-icons/fa";

const SalesRepDashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Professional Development
      </h1>

      {/* Professional Development Suggestions */}
      <section>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <ul className="space-y-6">
            <li className="flex items-start space-x-4 border-b pb-6">
              <FaCommentDots className="text-blue-500 w-6 h-6" />
              <div>
                <p className="font-semibold text-gray-800">
                  Improve Communication Skills
                </p>
                <p className="text-gray-600">
                  Enroll in online courses like "Effective Communication for
                  Sales Professionals."
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4 border-b pb-6">
              <FaGlobe className="text-green-500 w-6 h-6" />
              <div>
                <p className="font-semibold text-gray-800">
                  Stay Updated with Industry Trends
                </p>
                <p className="text-gray-600">
                  Attend webinars or follow industry leaders on LinkedIn.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <FaClock className="text-purple-500 w-6 h-6" />
              <div>
                <p className="font-semibold text-gray-800">Time Management</p>
                <p className="text-gray-600">
                  Use tools like Trello or Asana to prioritize tasks efficiently.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Chatbot */}
      <div className="fixed right-4 bottom-20">
        <div className="bg-white rounded-full shadow-lg p-3">
          <Chatbot />
        </div>
      </div>
    </div>
  );
};

export default SalesRepDashboard;
