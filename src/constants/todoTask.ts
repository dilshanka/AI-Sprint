export type Task = {
    description: string;
    status: string;
    priority: string,
    endDate: string,
  };
  
  export const todayTasks: Task[] = [
    { description: "Call existing customer to discuss needs", status: "Pending", priority: "High", endDate: "Aug 03, 2025" },
    { description: "Prepare sales proposal for new prospect", status: "Completed", priority: "Low", endDate: "Jan 31, 2025" },
    { description: "Attend industry webinar on foodservice trends", status: "In Progress", priority: "Medium", endDate: "Apr 13, 2025" },
  ];
  
  export const inQueueTasks: Task[] = [
    { description: "Follow up on missed appointment with supplier", status: "Pending", priority: "Low", endDate: "Jan 21, 2025" },
    { description: "Submit last week's sales report", status: "In Progress", priority: "High", endDate: "Jan 12, 2025" },
    { description: "Plan next month's sales goals", status: "Pending", priority: "Medium", endDate: "Feb 23, 2025" },
  ];
  