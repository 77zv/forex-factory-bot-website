import Image from 'next/image';

type DiscordPreviewProps = {
  commandExample: string;
  responseExample: React.ReactNode;
};

const DiscordPreview = ({ commandExample, responseExample }: DiscordPreviewProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-[#36393f] rounded-lg overflow-hidden shadow-xl border border-[#202225]">
      {/* Discord Header */}
      <div className="bg-[#202225] px-4 py-3 flex items-center">
        <div className="flex items-center">
          <div className="w-5 h-5 rounded-full bg-[#72767d] flex items-center justify-center mr-2">
            <span className="text-xs text-white">#</span>
          </div>
          <span className="text-white font-medium">economic-news</span>
        </div>
      </div>
      
      {/* Discord Messages */}
      <div className="p-4 space-y-4">
        {/* User Command */}
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-3">
            <div className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center">
              <span className="text-white font-bold">U</span>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <span className="text-white font-medium mr-2">User</span>
              <span className="text-[#72767d] text-xs">Today at 12:34 PM</span>
            </div>
            <div className="mt-1 bg-[#2f3136] text-white px-3 py-2 rounded-md">
              <code>{commandExample}</code>
            </div>
          </div>
        </div>
        
        {/* Bot Response */}
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-3">
            <div className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center overflow-hidden">
              {/* Placeholder for bot avatar */}
              <div className="text-white font-bold">B</div>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <span className="text-white font-medium mr-2">Forex Factory Bot</span>
              <span className="bg-[#5865F2] text-white text-xs px-1 rounded">BOT</span>
              <span className="text-[#72767d] text-xs ml-2">Today at 12:34 PM</span>
            </div>
            <div className="mt-1">
              {responseExample}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscordPreview;

// Example of a Discord embed component for the bot responses
export const DiscordEmbed = ({ 
  title, 
  description, 
  fields = [],
  color = '#5865F2',
  footer
}: { 
  title: string; 
  description?: string; 
  fields?: Array<{name: string; value: string; inline?: boolean}>;
  color?: string;
  footer?: string;
}) => {
  return (
    <div className="max-w-2xl rounded-lg overflow-hidden border-l-4" style={{ borderLeftColor: color }}>
      <div className="bg-[#2f3136] p-4">
        {title && <div className="text-white font-medium mb-2">{title}</div>}
        {description && <div className="text-[#dcddde] text-sm mb-4">{description}</div>}
        
        {fields.length > 0 && (
          <div className="grid grid-cols-1 gap-3 mb-3">
            {fields.map((field, index) => (
              <div key={index} className={field.inline ? "col-span-1" : "col-span-full"}>
                <div className="text-white text-xs font-medium mb-1">{field.name}</div>
                <div className="text-[#dcddde] text-sm">{field.value}</div>
              </div>
            ))}
          </div>
        )}
        
        {footer && (
          <div className="text-[#72767d] text-xs mt-2 pt-2 border-t border-[#40444b]">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}; 