"use client";

import Nav from "../components/nav";
import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";
import { botCommands } from "../data/commands";
import DiscordPreview from "../components/discord-preview";

export default function HowToUse() {
  return (
    <>
      <Nav />
      <div className="min-h-screen bg-background-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">How to Use the Forex Factory Bot</h1>
            <p className="text-xl text-background-300 max-w-3xl mx-auto">
              A comprehensive guide to help you get the most out of our Discord bot for tracking economic news and events.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-background-700 rounded-lg p-6 mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li>
                <a href="#installation" className="text-primary hover:text-primary-400 transition-colors">
                  1. Installation & Setup
                </a>
              </li>
              <li>
                <a href="#basic-commands" className="text-primary hover:text-primary-400 transition-colors">
                  2. Basic Commands
                </a>
              </li>
              <li>
                <a href="#scheduled-updates" className="text-primary hover:text-primary-400 transition-colors">
                  3. Setting Up Scheduled Updates
                </a>
              </li>
              <li>
                <a href="#customization" className="text-primary hover:text-primary-400 transition-colors">
                  4. Customization Options
                </a>
              </li>
              <li>
                <a href="#troubleshooting" className="text-primary hover:text-primary-400 transition-colors">
                  5. Troubleshooting
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary hover:text-primary-400 transition-colors">
                  6. Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="space-y-16 text-background-300">
            {/* Installation Section */}
            <section id="installation" className="scroll-mt-20">
              <div className="bg-background-700 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white mb-6">1. Installation & Setup</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Adding the Bot to Your Server</h3>
                    <ol className="list-decimal list-inside space-y-3 ml-4">
                      <li>Click the <a href="#" className="text-primary hover:underline">Invite to Discord</a> button on our homepage</li>
                      <li>Select the server where you want to add the bot</li>
                      <li>Review and approve the requested permissions</li>
                      <li>Complete the authorization process</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Required Permissions</h3>
                    <p>The bot requires the following permissions to function properly:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                      <li>Read Messages/View Channels</li>
                      <li>Send Messages</li>
                      <li>Embed Links</li>
                      <li>Attach Files</li>
                      <li>Use Slash Commands</li>
                    </ul>
                  </div>

                  <div className="bg-background-600 p-4 rounded-md">
                    <p className="text-sm"><strong>Note:</strong> Admin permissions are only required for users who want to set up scheduled updates.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Basic Commands Section */}
            <section id="basic-commands" className="scroll-mt-20">
              <div className="bg-background-700 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white mb-6">2. Basic Commands</h2>
                <p className="mb-6">
                  The Forex Factory Bot uses Discord&apos;s slash commands. Here are the main commands you can use:
                </p>

                <div className="space-y-8">
                  {botCommands
                    .filter(cmd => cmd.category === "public")
                    .map((command, index) => (
                      <div key={index} className="border border-background-600 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-2">/{command.name}</h3>
                        <p className="mb-3">{command.description}</p>
                        <div className="mb-3">
                          <h4 className="text-sm font-medium text-background-400">Usage:</h4>
                          <code className="bg-background-600 px-2 py-1 rounded text-sm">{command.usage}</code>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-background-400">Example:</h4>
                          <code className="bg-background-600 px-2 py-1 rounded text-sm">{command.example}</code>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Command Parameters Explained</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-background-600 p-4 rounded-md">
                      <h4 className="font-medium text-white">market</h4>
                      <p className="text-sm">Filter events by market type (Forex, Stocks, Crypto, etc.)</p>
                    </div>
                    <div className="bg-background-600 p-4 rounded-md">
                      <h4 className="font-medium text-white">currency</h4>
                      <p className="text-sm">Filter by currency (USD, EUR, GBP, etc.). Use commas for multiple.</p>
                    </div>
                    <div className="bg-background-600 p-4 rounded-md">
                      <h4 className="font-medium text-white">impact</h4>
                      <p className="text-sm">Filter by impact level (High, Medium, Low)</p>
                    </div>
                    <div className="bg-background-600 p-4 rounded-md">
                      <h4 className="font-medium text-white">timezone</h4>
                      <p className="text-sm">Set your preferred timezone (GMT+1, EST, etc.)</p>
                    </div>
                    <div className="bg-background-600 p-4 rounded-md">
                      <h4 className="font-medium text-white">time_display</h4>
                      <p className="text-sm">Choose between 12h or 24h time format</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Example Response</h3>
                  <DiscordPreview 
                    commandExample="/today market:Forex currency:USD,EUR impact:High timezone:GMT+1"
                    responseExample={
                      <div className="bg-[#36393f] p-4 rounded-md">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                              <Image src="/bot-avatar.png" alt="Bot Avatar" width={40} height={40} />
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center">
                              <span className="font-semibold text-white">Forex Factory Bot</span>
                              <span className="text-xs text-[#72767d] ml-2">Today at 07:00</span>
                            </div>
                            <div className="mt-2 border-l-4 border-[#5865F2] pl-3 bg-[#2f3136] rounded-sm p-3">
                              <div className="text-white font-semibold">Economic Calendar: Today (USD, EUR)</div>
                              <div className="text-[#dcddde] text-sm mt-1">High impact events for March 14, 2023 (GMT+1)</div>
                              <div className="mt-3 space-y-3">
                                <div>
                                  <div className="text-white font-medium">08:30 | 🇺🇸 USD | ⭐⭐⭐ High Impact</div>
                                  <div className="text-[#dcddde] text-sm">Core CPI (MoM) (Feb)<br/>Forecast: 0.4%<br/>Previous: 0.4%</div>
                                </div>
                                <div>
                                  <div className="text-white font-medium">08:30 | 🇺🇸 USD | ⭐⭐⭐ High Impact</div>
                                  <div className="text-[#dcddde] text-sm">CPI (YoY) (Feb)<br/>Forecast: 3.1%<br/>Previous: 3.1%</div>
                                </div>
                                <div>
                                  <div className="text-white font-medium">14:00 | 🇪🇺 EUR | ⭐⭐⭐ High Impact</div>
                                  <div className="text-[#dcddde] text-sm">ECB President Lagarde Speech</div>
                                </div>
                              </div>
                              <div className="mt-3 text-[#72767d] text-xs">Data from Forex Factory • Today at 07:00</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>
            </section>

            {/* Scheduled Updates Section */}
            <section id="scheduled-updates" className="scroll-mt-20">
              <div className="bg-background-700 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white mb-6">3. Setting Up Scheduled Updates</h2>
                <p className="mb-6">
                  One of the most powerful features of the Forex Factory Bot is the ability to set up automated, 
                  scheduled updates for your server. This allows your community to stay informed about upcoming 
                  economic events without manual intervention.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Admin Commands</h3>
                    <p className="mb-4">The following commands are available to server administrators:</p>

                    {botCommands
                      .filter(cmd => cmd.category === "admin")
                      .map((command, index) => (
                        <div key={index} className="border border-background-600 rounded-lg p-6 mb-4">
                          <h3 className="text-xl font-semibold text-white mb-2">/{command.name}</h3>
                          <p className="mb-3">{command.description}</p>
                          <div className="mb-3">
                            <h4 className="text-sm font-medium text-background-400">Usage:</h4>
                            <code className="bg-background-600 px-2 py-1 rounded text-sm">{command.usage}</code>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-background-400">Example:</h4>
                            <code className="bg-background-600 px-2 py-1 rounded text-sm">{command.example}</code>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Schedule Parameters Explained</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-background-600 p-4 rounded-md">
                        <h4 className="font-medium text-white">hour & minute</h4>
                        <p className="text-sm">The time when updates should be posted (in 24h format)</p>
                      </div>
                      <div className="bg-background-600 p-4 rounded-md">
                        <h4 className="font-medium text-white">timezone</h4>
                        <p className="text-sm">The timezone for the scheduled updates (GMT+1, EST, etc.)</p>
                      </div>
                      <div className="bg-background-600 p-4 rounded-md">
                        <h4 className="font-medium text-white">newsscope</h4>
                        <p className="text-sm">The time period to cover (Daily, Tomorrow, Week)</p>
                      </div>
                      <div className="bg-background-600 p-4 rounded-md">
                        <h4 className="font-medium text-white">frequency</h4>
                        <p className="text-sm">How often to post (Daily, Weekdays, Weekends)</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background-600 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-3">Best Practices for Scheduled Updates</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Set up daily updates before market open (e.g., 08:00 local time)</li>
                      <li>Consider setting up weekly updates on Sunday evening to prepare for the week ahead</li>
                      <li>Use the impact filter to focus on high-impact events only to avoid information overload</li>
                      <li>Create separate schedules for different currency pairs if your community follows multiple markets</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Customization Section */}
            <section id="customization" className="scroll-mt-20">
              <div className="bg-background-700 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white mb-6">4. Customization Options</h2>
                <p className="mb-6">
                  The Forex Factory Bot offers several customization options to tailor the experience to your community&apos;s needs.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Filtering Options</h3>
                    <p className="mb-3">All commands support the following filters:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Currency:</strong> Filter events by currency (USD, EUR, GBP, JPY, etc.)</li>
                      <li><strong>Impact:</strong> Filter by impact level (High, Medium, Low)</li>
                      <li><strong>Market:</strong> Filter by market type (Forex, Stocks, Crypto, etc.)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Display Options</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Timezone:</strong> Set your preferred timezone for event times</li>
                      <li><strong>Time Format:</strong> Choose between 12-hour or 24-hour time format</li>
                    </ul>
                  </div>

                  <div className="bg-background-600 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-3">Pro Tip: Channel-Specific Updates</h3>
                    <p>
                      Create dedicated channels for different types of economic news. For example:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                      <li>#usd-news for USD-related events</li>
                      <li>#eur-news for EUR-related events</li>
                      <li>#high-impact for only high-impact events across all currencies</li>
                    </ul>
                    <p className="mt-3">
                      Set up different scheduled updates for each channel with the appropriate filters.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Troubleshooting Section */}
            <section id="troubleshooting" className="scroll-mt-20">
              <div className="bg-background-700 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white mb-6">5. Troubleshooting</h2>
                <div className="space-y-6">
                  <div className="border border-background-600 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Bot Not Responding</h3>
                    <p className="mb-3">If the bot is not responding to commands:</p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li>Check if the bot is online in your server member list</li>
                      <li>Verify that the bot has the necessary permissions in the channel</li>
                      <li>Try using the command in a different channel</li>
                      <li>Check if Discord is experiencing any outages</li>
                    </ol>
                  </div>

                  <div className="border border-background-600 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Scheduled Updates Not Working</h3>
                    <p className="mb-3">If scheduled updates are not being posted:</p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li>Use <code className="bg-background-600 px-2 py-1 rounded text-sm">/list-schedules</code> to verify the schedule exists</li>
                      <li>Check that the bot has permission to post in the designated channel</li>
                      <li>Verify the timezone settings are correct</li>
                      <li>Try deleting and recreating the schedule</li>
                    </ol>
                  </div>

                  <div className="border border-background-600 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Missing Events</h3>
                    <p className="mb-3">If certain events are not showing up:</p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li>Check your filter settings (currency, impact, market)</li>
                      <li>Verify that the events exist on Forex Factory for the specified time period</li>
                      <li>Try broadening your filter criteria</li>
                    </ol>
                  </div>

                  <div className="bg-background-600 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-3">Still Having Issues?</h3>
                    <p>
                      If you&apos;re still experiencing problems, please join our <a href="#" className="text-primary hover:underline">support server</a> for assistance.
                      Our team is available to help troubleshoot any issues you may encounter.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="scroll-mt-20">
              <div className="bg-background-700 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white mb-6">6. Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="border-b border-background-600 pb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Is the bot free to use?</h3>
                    <p>
                      Yes, the basic features of the Forex Factory Bot are free to use. We also offer a premium tier with 
                      additional features for power users.
                    </p>
                  </div>

                  <div className="border-b border-background-600 pb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">How many scheduled updates can I create?</h3>
                    <p>
                      Free users can create up to 3 scheduled updates per server. Premium users can create unlimited scheduled updates.
                    </p>
                  </div>

                  <div className="border-b border-background-600 pb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Where does the economic data come from?</h3>
                    <p>
                      All economic data is sourced from Forex Factory, a trusted provider of financial market information.
                    </p>
                  </div>

                  <div className="border-b border-background-600 pb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Can I customize which channel the bot posts in?</h3>
                    <p>
                      Yes, when creating a scheduled update, the bot will post in the channel where you issue the command.
                      For manual commands, the response will appear in the channel where you use the command.
                    </p>
                  </div>

                  <div className="border-b border-background-600 pb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">How often is the economic data updated?</h3>
                    <p>
                      The economic data is updated in real-time from Forex Factory, ensuring you always have the latest information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Can I get notifications for specific events?</h3>
                    <p>
                      Currently, the bot doesn&apos;t support individual event notifications. However, you can set up scheduled updates 
                      with specific filters to focus on the events that matter most to your community.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to enhance your Discord server?</h2>
            <p className="text-background-300 mb-6 max-w-2xl mx-auto">
              Add the Forex Factory Bot to your server today and keep your community informed about important economic events.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              Add to Discord
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
