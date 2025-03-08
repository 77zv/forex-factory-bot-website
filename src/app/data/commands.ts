import type { Command } from "../components/command-showcase";

export const botCommands: Command[] = [
  // Public Commands
  {
    name: "today",
    description: "Get today's news and events",
    usage: "/today [market] [currency] [impact] [timezone] [time_display]",
    category: "public",
    example: "/today market:Forex currency:USD,EUR impact:High timezone:GMT+1"
  },
  {
    name: "tomorrow",
    description: "Get tomorrow's news and events",
    usage: "/tomorrow [market] [currency] [impact] [timezone] [time_display]",
    category: "public",
    example: "/tomorrow market:Forex currency:USD,EUR impact:High timezone:GMT+1"
  },
  {
    name: "week",
    description: "Get economic news and events for the current week",
    usage: "/week [market] [currency] [impact] [timezone] [time_display]",
    category: "public",
    example: "/week market:Forex currency:USD,EUR impact:High timezone:GMT+1"
  },
  
  // Admin Commands
  {
    name: "create-schedule",
    description: "Create a new schedule for automatic news posting",
    usage: "/create-schedule [hour] [minute] [timezone] [newsscope] [frequency] [impact] [currency] [market] [time_display]",
    category: "admin",
    example: "/create-schedule hour:08 minute:00 timezone:GMT+1 newsscope:Daily frequency:Weekdays"
  },
  {
    name: "delete-schedule",
    description: "Delete a specific schedule by ID",
    usage: "/delete-schedule [id]",
    category: "admin",
    example: "/delete-schedule id:12345"
  },
  {
    name: "delete-all-schedules",
    description: "Delete all schedules for this server",
    usage: "/delete-all-schedules",
    category: "admin",
    example: "/delete-all-schedules"
  },
  {
    name: "edit-schedule",
    description: "Edit an existing schedule",
    usage: "/edit-schedule [id] [hour] [minute] [timezone] [newsscope] [frequency] [impact] [currency] [market] [time_display]",
    category: "admin",
    example: "/edit-schedule id:12345 hour:09 minute:30 timezone:GMT-8"
  },
  {
    name: "list-schedules",
    description: "List all active schedules for this server",
    usage: "/list-schedules",
    category: "admin",
    example: "/list-schedules"
  }
]; 