import React, { useState } from "react";

const Inquiries: React.FC = () => {
  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      customer: "Customer 1",
      inquiry: "Looking for details about Product A.",
      status: "Pending",
    },
    {
      id: 2,
      customer: "Customer 2",
      inquiry: "Interested in bulk discounts for Product C.",
      status: "Pending",
    },
    {
      id: 3,
      customer: "Customer 3",
      inquiry: "Requested a demo for Product B.",
      status: "Pending",
    },
    {
        id: 4,
        customer: "Customer 4",
        inquiry: "Looking for details about Product A.",
        status: "Pending",
      },
      {
        id: 5,
        customer: "Customer 5",
        inquiry: "Interested in bulk discounts for Product C.",
        status: "Pending",
      },
      {
        id: 6,
        customer: "Customer 6",
        inquiry: "Requested a demo for Product B.",
        status: "Pending",
      },
  ]);

  const handleMarkAsDone = (id: number) => {
    setInquiries((prevInquiries) =>
      prevInquiries.map((inq) =>
        inq.id === id ? { ...inq, status: "Done" } : inq
      )
    );
  };

  const pendingCount = inquiries.filter(
    (inq) => inq.status === "Pending"
  ).length;
  const doneCount = inquiries.filter((inq) => inq.status === "Done").length;

  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <div className="flex justify-center items-center  space-x-10">
        <h1 className="text-4xl font-extrabold  text-center text-gray-800">
          Customer Inquiries
        </h1>
        <div className="bg-gray-100  shadow-md w-64 flex flex-row space-x-5 p-1 border border-gray rounded-xl justify-center">
          <h2 className=" font-semibold text-gray-800 ">Status</h2>
          <p className="text-gray-700">Pending: {pendingCount}</p>
          <p className="text-gray-700">Done: {doneCount}</p>
        </div>
      </div>

      {/* Status Counters */}
      <div className="flex mb-6">
        {/* Inquiries List */}
        <div className="w-full ml-4">
          <section>
         
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {inquiries.map((item) => (
                <div
                  key={item.id}
                  className={`p-4 rounded-lg shadow-md border hover:bg-gray-200 ${
                    item.status === "Done" ? "bg-green-100" : "bg-white"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.customer}
                  </h3>
                  <p className="text-gray-700 mb-4">{item.inquiry}</p>
                  <p
                    className={`text-sm font-medium ${
                      item.status === "Done"
                        ? "text-green-600"
                        : "text-gray-600"
                    }`}
                  >
                    Status: {item.status}
                  </p>
                  {item.status === "Pending" && (
                    <button
                      onClick={() => handleMarkAsDone(item.id)}
                      className="mt-4 px-4 py-1 bg-white text-black hover:bg-black hover:text-white text-sm font-medium  shadow border border-gray-300 rounded-xl" 
                    >
                      Mark as Done
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Inquiries;
