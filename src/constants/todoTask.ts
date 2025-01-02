export type Task = {
  id: string;
  description: string;
  status: string;
  priority: string;
  endDate: string;
};

export const todayTasks: Task[] = [
  {
    id: "1", 
    description: "Call existing customer to discuss needs",
    status: "Pending",
    priority: "High",
    endDate: "2025-01-25",
  },
  {
    id: "2", 
    description: "Prepare sales proposal for new prospect",
    status: "Completed",
    priority: "Low",
    endDate: "2025-11-14",
  },
  {
    id: "3", 
    description: "Attend industry webinar on foodservice trends",
    status: "In Progress",
    priority: "Medium",
    endDate: "2025-01-23",
  },
  {
    id: "4", 
    description: "Call existing customer to discuss needs",
    status: "Pending",
    priority: "High",
    endDate: "2025-02-14",
  },
  {
    id: "5", 
    description: "Prepare sales proposal for new prospect",
    status: "Completed",
    priority: "Low",
    endDate: "2025-01-04",
  },
  {
    id: "6", 
    description: "Attend industry webinar on foodservice trends",
    status: "In Progress",
    priority: "Medium",
    endDate: "2025-01-24",
  },
];

export const inQueueTasks: Task[] = [
  {
    id: "7", 
    description: "Follow up on missed appointment with supplier",
    status: "Pending",
    priority: "Low",
    endDate: "2025-03-14",
  },
  {
    id: "8", 
    description: "Submit last week's sales report",
    status: "In Progress",
    priority: "High",
    endDate: "2025-02-13",
  },
  {
    id: "9", 
    description: "Plan next month's sales goals",
    status: "Pending",
    priority: "Medium",
    endDate: "2025-01-17",
  },
  {
    id: "10", 
    description: "Follow up on missed appointment with supplier",
    status: "Pending",
    priority: "Low",
    endDate: "2025-02-09",
  },
  {
    id: "11", 
    description: "Submit last week's sales report",
    status: "In Progress",
    priority: "High",
    endDate: "2025-04-14",
  },
  {
    id: "12", 
    description: "Plan next month's sales goals",
    status: "Pending",
    priority: "Medium",
    endDate: "2025-01-22",
  },
];
