export interface EventData {
    todo?: number;
    calls?: number;
    prospecting?: number;
    holiday?: boolean;
  }
  
  export const events: Record<string, EventData> = {
    "2024-12-01": { todo: 2, calls: 1, prospecting: 3 }, // Busy day
    "2024-12-05": { holiday: true }, // Holiday
    "2024-12-08": { todo: 0, calls: 0, prospecting: 0 }, // Free day
    "2024-12-11": { todo: 3, calls: 0, prospecting: 3 },
    "2024-12-25": { holiday: true },
    "2024-12-29": { todo: 0, calls: 0, prospecting: 0 },
    "2024-12-31": { todo: 2, calls: 2, prospecting: 0 },
    "2025-01-01": { todo: 3, calls: 1, prospecting: 1 },
    "2025-01-04": { holiday: true },
    "2025-01-11": { todo: 0, calls: 0, prospecting: 0 },
    "2025-01-15": { todo: 0, calls: 1, prospecting: 3 },
    "2025-01-21": { todo: 2, calls: 1, prospecting: 3 },
    "2025-01-25": { holiday: true },
    "2025-01-31": { todo: 1, calls: 1, prospecting: 1 },
  };
  