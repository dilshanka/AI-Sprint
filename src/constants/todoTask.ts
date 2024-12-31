export type Task = {
    description: string;
    status: string;
  };
  
  export const todayTasks: Task[] = [
    { description: "Call existing customer to discuss needs", status: "Pending" },
    { description: "Prepare sales proposal for new prospect", status: "Completed" },
    { description: "Attend industry webinar on foodservice trends", status: "In Progress" },
  ];
  
  export const inQueueTasks: Task[] = [
    { description: "Follow up on missed appointment with supplier", status: "Pending" },
    { description: "Submit last week's sales report", status: "In Progress" },
    { description: "Plan next month's sales goals", status: "Pending" },
  ];
  