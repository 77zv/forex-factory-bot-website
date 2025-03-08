import { useState, useEffect } from 'react';
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
  const [isAnimating, setIsAnimating] = useState(false);

  // Set the first command as active by default
  useEffect(() => {
    if (commands.length > 0 && !activeCommand) {
      setActiveCommand(commands[0]!);
    }
  }, [commands, activeCommand]);

  const filteredCommands = activeCategory === 'all' 
    ? commands 
    : commands.filter(cmd => cmd.category === activeCategory);

  const handleCommandClick = (cmd: Command) => {
    if (activeCommand?.name === cmd.name) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCommand(cmd);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="w-full py-12 bg-background-800/60 backdrop-blur-lg rounded-xl overflow-hidden border border-background-700/50 shadow-[0_0_25px_rgba(0,0,0,0.3)] transform hover:shadow-[0_0_35px_rgba(var(--primary-rgb),0.2)] transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-background-700/70 rounded-lg backdrop-blur-sm shadow-inner">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ${
                activeCategory === 'all' 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-background-300 hover:text-white hover:bg-background-600/50'
              }`}
            >
              All Commands
            </button>
            <button
              onClick={() => setActiveCategory('public')}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ${
                activeCategory === 'public' 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-background-300 hover:text-white hover:bg-background-600/50'
              }`}
            >
              Public
            </button>
            <button
              onClick={() => setActiveCategory('admin')}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ${
                activeCategory === 'admin' 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-background-300 hover:text-white hover:bg-background-600/50'
              }`}
            >
              Admin
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Command List */}
          <div className="lg:col-span-2 bg-background-800/80 backdrop-blur-sm rounded-xl p-5 h-[500px] overflow-y-auto border border-background-700/50 shadow-inner">
            <h3 className="text-lg font-medium text-white mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Available Commands
            </h3>
            <div className="space-y-3">
              {filteredCommands.map((cmd) => (
                <div
                  key={cmd.name}
                  onClick={() => handleCommandClick(cmd)}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 group ${
                    activeCommand?.name === cmd.name
                      ? 'bg-primary/20 border border-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)]'
                      : 'bg-background-700/70 hover:bg-background-600/70 border border-transparent hover:border-background-500/50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-2.5 h-2.5 rounded-full mr-2.5 transition-all duration-300 ${
                      cmd.category === 'admin' 
                        ? 'bg-red-500 group-hover:animate-pulse' 
                        : 'bg-green-500 group-hover:animate-pulse'
                    }`} />
                    <h4 className={`font-medium transition-all duration-300 ${
                      activeCommand?.name === cmd.name ? 'text-primary' : 'text-white group-hover:text-primary'
                    }`}>/{cmd.name}</h4>
                  </div>
                  <p className="text-sm text-background-300 mt-1.5 line-clamp-2 group-hover:text-background-200 transition-all duration-300">
                    {cmd.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Command Preview */}
          <div className="lg:col-span-3 bg-background-800/80 backdrop-blur-sm rounded-xl p-6 h-[500px] flex flex-col border border-background-700/50 relative overflow-hidden">
            <div className={`absolute inset-0 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-background-800/90 backdrop-blur-sm flex items-center justify-center">
                <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
            
            {activeCommand ? (
              <div className={`flex-1 flex flex-col transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-3">
                      <span className="text-primary text-lg font-mono">/</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{activeCommand.name}</h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    activeCommand.category === 'admin' 
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                      : 'bg-green-500/20 text-green-400 border border-green-500/30'
                  }`}>
                    {activeCommand.category}
                  </span>
                </div>
                
                <div className="flex-grow space-y-6">
                  <div className="bg-background-900/50 rounded-lg p-4 border border-background-700/50">
                    <h4 className="text-sm font-medium text-background-300 mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-1.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Description
                    </h4>
                    <p className="text-white">{activeCommand.description}</p>
                  </div>
                  
                  <div className="bg-background-900/50 rounded-lg p-4 border border-background-700/50">
                    <h4 className="text-sm font-medium text-background-300 mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-1.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Usage
                    </h4>
                    <div className="bg-background-900 p-3 rounded-md border border-background-800 font-mono">
                      <code className="text-primary">{activeCommand.usage}</code>
                    </div>
                  </div>
                  
                  {activeCommand.example && (
                    <div className="bg-background-900/50 rounded-lg p-4 border border-background-700/50">
                      <h4 className="text-sm font-medium text-background-300 mb-2 flex items-center">
                        <svg className="w-4 h-4 mr-1.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        Example
                      </h4>
                      <div className="bg-background-900 p-3 rounded-md border border-background-800 font-mono">
                        <code className="text-green-400">{activeCommand.example}</code>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-4 flex items-center p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="w-12 h-12 bg-background-700 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <p className="text-sm text-background-300">Try it out in your Discord server</p>
                    <p className="text-white font-medium">Just type <code className="bg-background-700 px-1.5 py-0.5 rounded text-primary">/{activeCommand.name}</code> in any channel</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 bg-background-700 rounded-full flex items-center justify-center mb-4 animate-pulse">
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
        <div className="mt-8 lg:hidden">
          <div className="bg-background-800/80 backdrop-blur-sm rounded-xl p-5 border border-background-700/50">
            <h3 className="text-lg font-medium text-white mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Command Details
            </h3>
            <div className="space-y-6">
              {filteredCommands.map((cmd) => (
                <div key={cmd.name} className="border-b border-background-700 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-medium flex items-center">
                      <span className={`w-2 h-2 rounded-full mr-2 ${
                        cmd.category === 'admin' ? 'bg-red-500' : 'bg-green-500'
                      }`}></span>
                      /{cmd.name}
                    </h4>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      cmd.category === 'admin' 
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                        : 'bg-green-500/20 text-green-400 border border-green-500/30'
                    }`}>
                      {cmd.category}
                    </span>
                  </div>
                  <p className="text-sm text-background-300 mb-3">{cmd.description}</p>
                  <div className="bg-background-900 p-3 rounded-md border border-background-800 font-mono">
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