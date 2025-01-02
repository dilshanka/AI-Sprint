export interface EventData {
  id: string,
  todo?: number;
  calls?: number;
  prospecting?: number;
  holiday?: boolean;
}

export const events: Record<string, EventData> = {
  "2024-12-01": { id: "1", todo: 2, calls: 1, prospecting: 3 }, // Busy day
  "2024-12-05": { id: "2", holiday: true }, // Holiday
  "2024-12-08": { id: "3", todo: 0, calls: 0, prospecting: 0 }, // Free day
  "2024-12-11": { id: "4", todo: 3, calls: 0, prospecting: 3 },
  "2024-12-25": { id: "5", holiday: true },
  "2024-12-29": { id: "6", todo: 0, calls: 0, prospecting: 0 },
  "2024-12-31": { id: "7", todo: 2, calls: 2, prospecting: 0 },
  "2025-01-01": { id: "8", todo: 3, calls: 1, prospecting: 1 },
  "2025-01-04": { id: "9", holiday: true },
  "2025-01-11": { id: "10", todo: 0, calls: 0, prospecting: 0 },
  "2025-01-15": { id: "11", todo: 0, calls: 1, prospecting: 3 },
  "2025-01-21": { id: "12", todo: 2, calls: 1, prospecting: 3 },
  "2025-01-25": { id: "13", holiday: true },
  "2025-01-31": { id: "14", todo: 1, calls: 1, prospecting: 1 },
};
