import type { Command } from "../components/command-showcase";

export const botCommands: Command[] = [
  // Public Commands
  {
    name: "today",
    description: "Get economic news and events for today",
    usage: "/today",
    category: "public",
    example: "/today"
  },
  {
    name: "tomorrow",
    description: "Get economic news and events for tomorrow",
    usage: "/tomorrow",
    category: "public",
    example: "/tomorrow"
  },
  {
    name: "week",
    description: "Get economic news and events for the current week",
    usage: "/week",
    category: "public",
    example: "/week"
  },
  
  // Admin Commands
  {
    name: "createSchedule",
    description: "Create a new schedule for automatic news posting",
    usage: "/createSchedule [channel] [time] [timezone]",
    category: "admin",
    example: "/createSchedule #economic-news 08:00 EST"
  },
  {
    name: "deleteSchedule",
    description: "Delete a specific schedule by ID",
    usage: "/deleteSchedule [scheduleId]",
    category: "admin",
    example: "/deleteSchedule 12345"
  },
  {
    name: "deleteAllSchedules",
    description: "Delete all schedules for this server",
    usage: "/deleteAllSchedules",
    category: "admin",
    example: "/deleteAllSchedules"
  },
  {
    name: "editSchedule",
    description: "Edit an existing schedule",
    usage: "/editSchedule [scheduleId] [channel] [time] [timezone]",
    category: "admin",
    example: "/editSchedule 12345 #news 09:30 PST"
  },
  {
    name: "listSchedules",
    description: "List all active schedules for this server",
    usage: "/listSchedules",
    category: "admin",
    example: "/listSchedules"
  }
]; 