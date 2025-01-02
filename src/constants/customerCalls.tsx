export type Calls = {
  name: string;
  description: string;
  status: string;
  priority: string,
  endDate: string,
};

export const customerCalls = [
    { name: "Amayuru", description: "Call the client", status: "Pending", priority: "High", endDate: "2025-01-25" },
    { name: "Nisal", description: "Follow up with client", status: "Completed", priority: "Low", endDate: "2025-02-25" },
    { name: "Hiruna", description: "Call the client", status: "In Progress", priority: "Low", endDate: "2025-02-12" },
    { name: "Kavindu", description: "Follow up with client", status: "Completed", priority: "Medium", endDate: "2025-01-21" },
    { name: "Inupa", description: "Call the client", status: "Pending", priority: "High", endDate: "2025-01-12" },
  ];