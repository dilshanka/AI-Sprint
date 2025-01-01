export type Task = {
    description: string;
    status: string;
    priority: string,
    endDate: string,
  };
  
  export const todayTasks: Task[] = [
    { description: "Call existing customer to discuss needs", status: "Pending", priority: "High", endDate: "2025-01-25" },
    { description: "Prepare sales proposal for new prospect", status: "Completed", priority: "Low", endDate: "2025-11-14" },
    { description: "Attend industry webinar on foodservice trends", status: "In Progress", priority: "Medium", endDate: "2025-01-23" },
    { description: "Call existing customer to discuss needs", status: "Pending", priority: "High", endDate: "2025-02-14" },
    { description: "Prepare sales proposal for new prospect", status: "Completed", priority: "Low", endDate: "2025-01-04" },
    { description: "Attend industry webinar on foodservice trends", status: "In Progress", priority: "Medium", endDate: "2025-01-24" },
  ];
  
  export const inQueueTasks: Task[] = [
    { description: "Follow up on missed appointment with supplier", status: "Pending", priority: "Low", endDate: "2025-03-14" },
    { description: "Submit last week's sales report", status: "In Progress", priority: "High", endDate: "2025-02-13" },
    { description: "Plan next month's sales goals", status: "Pending", priority: "Medium", endDate: "2025-01-17" },
    { description: "Follow up on missed appointment with supplier", status: "Pending", priority: "Low", endDate: "2025-02-09" },
    { description: "Submit last week's sales report", status: "In Progress", priority: "High", endDate: "2025-04-14" },
    { description: "Plan next month's sales goals", status: "Pending", priority: "Medium", endDate: "2025-01-22" },
  ];
  