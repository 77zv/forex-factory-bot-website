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

type CommandShowcaseProps = {
  commands: Command[];
};

const CommandShowcase = ({ commands }: CommandShowcaseProps) => {
  const [activeCategory, setActiveCategory] = useState<CommandCategory | 'all'>('all');
  const [activeCommand, setActiveCommand] = useState<Command | null>(null);

  const filteredCommands = activeCategory === 'all' 
    ? commands 
    : commands.filter(cmd => cmd.category === activeCategory);

  return (
    <div className="w-full py-12 bg-gradient-to-b from-background-900 to-background-800 rounded-xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Powerful Discord Commands</h2>
          <p className="text-xl text-background-300 max-w-3xl mx-auto">
            Control economic news delivery with these simple commands
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-background-700 rounded-lg">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeCategory === 'all' ? 'bg-primary text-white' : 'text-background-300 hover:text-white'
              }`}
            >
              All Commands
            </button>
            <button
              onClick={() => setActiveCategory('public')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeCategory === 'public' ? 'bg-primary text-white' : 'text-background-300 hover:text-white'
              }`}
            >
              Public
            </button>
            <button
              onClick={() => setActiveCategory('admin')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeCategory === 'admin' ? 'bg-primary text-white' : 'text-background-300 hover:text-white'
              }`}
            >
              Admin
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Command List */}
          <div className="lg:col-span-1 bg-background-800 rounded-xl p-4 h-[500px] overflow-y-auto">
            <h3 className="text-lg font-medium text-white mb-4">Available Commands</h3>
            <div className="space-y-2">
              {filteredCommands.map((cmd) => (
                <div
                  key={cmd.name}
                  onClick={() => setActiveCommand(cmd)}
                  className={`p-3 rounded-lg cursor-pointer transition-all ${
                    activeCommand?.name === cmd.name
                      ? 'bg-primary bg-opacity-20 border border-primary'
                      : 'bg-background-700 hover:bg-background-600'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-2 ${
                      cmd.category === 'admin' ? 'bg-red-500' : 'bg-green-500'
                    }`} />
                    <h4 className="text-white font-medium">/{cmd.name}</h4>
                  </div>
                  <p className="text-sm text-background-300 mt-1 truncate">
                    {cmd.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Command Preview */}
          <div className="lg:col-span-2">
            {activeCommand ? (
              <div className="bg-background-800 rounded-xl p-6 h-[500px] flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">/{activeCommand.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    activeCommand.category === 'admin' 
                      ? 'bg-red-500 bg-opacity-20 text-red-400' 
                      : 'bg-green-500 bg-opacity-20 text-green-400'
                  }`}>
                    {activeCommand.category}
                  </span>
                </div>
                
                <div className="flex-grow">
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-background-300 mb-1">Description</h4>
                    <p className="text-white">{activeCommand.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-background-300 mb-1">Usage</h4>
                    <div className="bg-background-900 p-3 rounded-md">
                      <code className="text-primary">{activeCommand.usage}</code>
                    </div>
                  </div>
                  
                  {activeCommand.example && (
                    <div>
                      <h4 className="text-sm font-medium text-background-300 mb-1">Example</h4>
                      <div className="bg-background-900 p-3 rounded-md">
                        <code className="text-green-400">{activeCommand.example}</code>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-auto pt-4 border-t border-background-700">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-background-700 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <p className="text-sm text-background-300">Try it out in your Discord server</p>
                      <p className="text-white font-medium">Just type <code className="bg-background-700 px-1 rounded">/{activeCommand.name}</code> in any channel</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-background-800 rounded-xl p-6 h-[500px] flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 bg-background-700 rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl">👈</span>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Select a command</h3>
                <p className="text-background-300 max-w-md">
                  Click on any command from the list to see detailed information and examples
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile-friendly command list (visible on small screens) */}
        <div className="lg:hidden mt-8">
          <div className="bg-background-800 rounded-xl p-4">
            <h3 className="text-lg font-medium text-white mb-4">Command Details</h3>
            <div className="space-y-6">
              {filteredCommands.map((cmd) => (
                <div key={cmd.name} className="border-b border-background-700 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium">/{cmd.name}</h4>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      cmd.category === 'admin' ? 'bg-red-500 bg-opacity-20 text-red-400' : 'bg-green-500 bg-opacity-20 text-green-400'
                    }`}>
                      {cmd.category}
                    </span>
                  </div>
                  <p className="text-sm text-background-300 mb-3">{cmd.description}</p>
                  <div className="bg-background-900 p-2 rounded-md">
                    <code className="text-sm text-primary">{cmd.usage}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandShowcase; 