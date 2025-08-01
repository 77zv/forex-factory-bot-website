import { useState } from 'react';
import Image from 'next/image';

export type CommandCategory = 'admin' | 'public';

export type Command = {
  name: string;
  description: string;
  usage: string;
  category: CommandCategory;
  example?: string;
};

type FeatureHighlightsProps = {
  commands: Command[];
};

const FeatureHighlights = ({ commands }: FeatureHighlightsProps) => {
  const [hoveredCommand, setHoveredCommand] = useState<string | null>(null);

  // Group commands by category
  const publicCommands = commands.filter(cmd => cmd.category === 'public');
  const adminCommands = commands.filter(cmd => cmd.category === 'admin');

  const getCommandIcon = (commandName: string) => {
    switch (commandName) {
      case 'today':
        return '📅';
      case 'tomorrow':
        return '🔮';
      case 'week':
        return '📊';
      case 'create-schedule':
        return '⚙️';
      case 'delete-schedule':
        return '🗑️';
      case 'edit-schedule':
        return '✏️';
      case 'list-schedules':
        return '📋';
      case 'delete-all-schedules':
        return '💥';
      default:
        return '💬';
    }
  };

  const getCommandColor = (category: CommandCategory) => {
    return category === 'admin' ? 'from-red-500/20 to-red-600/20' : 'from-green-500/20 to-green-600/20';
  };

  const getCommandBorderColor = (category: CommandCategory) => {
    return category === 'admin' ? 'border-red-500/30' : 'border-green-500/30';
  };

  const getCommandTextColor = (category: CommandCategory) => {
    return category === 'admin' ? 'text-red-400' : 'text-green-400';
  };

  return (
    <div className="w-full space-y-12">
      {/* Public Commands Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Public Commands</h3>
          <p className="text-background-300">Essential commands for all users</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publicCommands.map((command) => (
            <div
              key={command.name}
              className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-[420px]`}
              onMouseEnter={() => setHoveredCommand(command.name)}
              onMouseLeave={() => setHoveredCommand(null)}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getCommandColor(command.category)} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Card content */}
              <div className="relative bg-background-800/80 backdrop-blur-lg rounded-2xl p-6 border border-background-700/50 group-hover:border-background-600/50 transition-all duration-500 shadow-lg group-hover:shadow-2xl h-full flex flex-col">
                {/* Icon and header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-background-700/80 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                    {getCommandIcon(command.name)}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCommandBorderColor(command.category)} ${getCommandTextColor(command.category)} bg-background-700/80`}>
                    {command.category}
                  </span>
                </div>

                {/* Command name */}
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  /{command.name}
                </h4>

                {/* Description */}
                <p className="text-background-300 mb-4 line-clamp-3 group-hover:text-background-200 transition-colors duration-300 flex-shrink-0">
                  {command.description}
                </p>

                {/* Usage preview */}
                <div className="bg-background-900/60 rounded-lg p-3 mb-4 border border-background-800/50 flex-shrink-0">
                  <code className="text-sm text-primary font-mono line-clamp-2">
                    {command.usage}
                  </code>
                </div>

                {/* CTA Button - positioned at bottom */}
                <div className="mt-auto">
                  <a
                    href="https://discord.com/oauth2/authorize?client_id=1083815375352901716&permissions=414464789568&integration_type=0&scope=bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg group-hover:shadow-xl inline-block text-center"
                  >
                    Try /{command.name}
                  </a>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Admin Commands Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Admin Commands</h3>
          <p className="text-background-300">Advanced scheduling and management tools</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminCommands.map((command) => (
            <div
              key={command.name}
              className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-[420px]`}
              onMouseEnter={() => setHoveredCommand(command.name)}
              onMouseLeave={() => setHoveredCommand(null)}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getCommandColor(command.category)} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Card content */}
              <div className="relative bg-background-800/80 backdrop-blur-lg rounded-2xl p-6 border border-background-700/50 group-hover:border-background-600/50 transition-all duration-500 shadow-lg group-hover:shadow-2xl h-full flex flex-col">
                {/* Icon and header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-background-700/80 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                    {getCommandIcon(command.name)}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCommandBorderColor(command.category)} ${getCommandTextColor(command.category)} bg-background-700/80`}>
                    {command.category}
                  </span>
                </div>

                {/* Command name */}
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  /{command.name}
                </h4>

                {/* Description */}
                <p className="text-background-300 mb-4 line-clamp-3 group-hover:text-background-200 transition-colors duration-300 flex-shrink-0">
                  {command.description}
                </p>

                {/* Usage preview */}
                <div className="bg-background-900/60 rounded-lg p-3 mb-4 border border-background-800/50 flex-shrink-0">
                  <code className="text-sm text-primary font-mono line-clamp-2">
                    {command.usage}
                  </code>
                </div>

                {/* CTA Button - positioned at bottom */}
                <div className="mt-auto">
                  <a
                    href="https://discord.com/oauth2/authorize?client_id=1083815375352901716&permissions=414464789568&integration_type=0&scope=bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg group-hover:shadow-xl inline-block text-center"
                  >
                    Manage /{command.name}
                  </a>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/20 via-background-800/80 to-primary/20 rounded-2xl p-8 border border-primary/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative text-center">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">🚀</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-background-300 mb-8 max-w-2xl mx-auto">
            Add our bot to your Discord server and start receiving real-time economic news and events
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.com/oauth2/authorize?client_id=1083815375352901716&permissions=414464789568&integration_type=0&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-center"
            >
              Add to Discord
            </a>
            {/* <button className="bg-background-700 hover:bg-background-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 border border-background-600">
              View Documentation
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlights; 