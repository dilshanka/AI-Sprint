export type Calls = {
  id: string,
  name: string;
  description: string;
  status: string;
  priority: string;
  endDate: string;
  autoAction?: "Auto Call" | "Auto Voice" | null;
};

export const customerCalls: Calls[] = [
  {
    id: "1",
    name: "Amayuru",
    description: "Call the client",
    status: "Pending",
    priority: "High",
    endDate: "2025-01-25",
  },
  {
    id: "2",
    name: "Nisal",
    description: "Follow up with client",
    status: "Completed",
    priority: "Low",
    endDate: "2025-02-25",
    autoAction: "Auto Call",
  },
  {
    id: "3",
    name: "Hiruna",
    description: "Call the client",
    status: "In Progress",
    priority: "Low",
    endDate: "2025-02-12",
  },
  {
    id: "4",
    name: "Kavindu",
    description: "Follow up with client",
    status: "Completed",
    priority: "Medium",
    endDate: "2025-01-21",
    autoAction: "Auto Voice",
  },
  {
    id: "5",
    name: "Inupa",
    description: "Call the client",
    status: "Pending",
    priority: "High",
    endDate: "2025-01-12",
  },
];
