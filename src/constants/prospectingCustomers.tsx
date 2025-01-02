export type Customers = {
  id: string;
  name: string;
  description: string;
  status: string;
  priority: string;
  date: string;
};

export const prospectingCustomers: Customers[] = [
  {
    id: "1",
    name: "James",
    description: "Awaiting follow-up meeting",
    status: "Contacted",
    priority: "High",
    date: "2025-01-25",
  },
  {
    id: "2",
    name: "Alex",
    description: "Looking for a customized software solution",
    status: "Not Contacted",
    priority: "Low",
    date: "2025-02-25",
  },
  {
    id: "3",
    name: "Roy",
    description: "Interested in cloud storage solutions",
    status: "Meeting Scheduled",
    priority: "Low",
    date: "2025-02-12",
  },
  {
    id: "4",
    name: "Katty",
    description: "Prospect showed interest in pricing options",
    status: "Meeting Scheduled",
    priority: "Medium",
    date: "2025-01-21",
  },
  {
    id: "5",
    name: "Susan",
    description: "Awaiting follow-up meeting.",
    status: "Not Contacted",
    priority: "High",
    date: "2025-01-12",
  },
];
