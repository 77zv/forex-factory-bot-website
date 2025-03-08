"use client";

import Link from "next/link";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Image from "next/image";
import CommandShowcase from "./components/command-showcase";
import { botCommands } from "./data/commands";
import DiscordPreview, { DiscordEmbed } from "./components/discord-preview";

export default function Home() {
    return (
        <>
            <Nav />
            <div className={"relative overflow-hidden"}>
                <main>
                    {/* Banner */}
                    <div className={"bg-background-800 pt-10 sm:pt-16 lg:overflow-hidden mb-0 lg:pt-8 pb-14"}>
                        <div className={"mx-auto max-w-7xl lg:px-8"}>
                            <div className={"lg:grid lg:grid-cols-2 lg:gap-20"}>
                                <div className={"mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left"}>
                                   <div className={"lg:py-24"}>
                                       <h1 className={"text-4xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-6xl"}>
                                           <span className={"block"}>Be Informed About</span>
                                           <span className={"block bg-gradient-to-tr from-sky-500 from-20% to-sky-300 text-transparent bg-clip-text"}>Economic News</span>
                                           <span className={"block"}>With EconomicNewsBot
                                               <span className={"text-white"}>.</span>
                                           </span>
                                       </h1>
                                       <p className={"mt-3 text-base text-background-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"}>
                                             ForexFactory is a discord bot that provides you with the latest economic news and events straight to your discord server.
                                       </p>
                                       <div className={"mt-10 sm:mt-12"}>
                                           <Link href={"https://discord.com/api/oauth2/authorize?client_id=1083815375352901716&permissions=274877910016&scope=bot"}
                                                 className={"font-semibold text-lg text-center w-full block text-white bg-primary hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 rounded-lg px-5 py-2.5 m-auto focus:outline-none"}>
                                               Get the Latest News Now
                                           </Link>
                                       </div>
                                   </div>
                                </div>
                                <div className={"hidden lg:flex items-center justify-center"}>
                                    <Image 
                                        className={"w-3/5"} 
                                        src={"/forexfactory-logo.png"} 
                                        alt={"ForexFactory Logo"}
                                        width={500}
                                        height={300}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Discord Preview Section */}
                    <div className="bg-background-900 py-16 sm:py-24">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    See the Bot in Action
                                </h2>
                                <p className="mt-4 text-lg text-background-300">
                                    Get economic news delivered directly to your Discord server with simple commands
                                </p>
                            </div>
                            
                            <DiscordPreview 
                                commandExample="/today"
                                responseExample={
                                    <DiscordEmbed
                                        title="Economic News for Today"
                                        description="Here are the important economic events for today:"
                                        fields={[
                                            {
                                                name: "🇺🇸 USD - CPI m/m",
                                                value: "**Time**: 8:30 AM EST\n**Impact**: High\n**Forecast**: 0.2%\n**Previous**: 0.3%",
                                            },
                                            {
                                                name: "🇬🇧 GBP - GDP m/m",
                                                value: "**Time**: 2:00 AM EST\n**Impact**: High\n**Forecast**: 0.4%\n**Previous**: 0.2%",
                                            },
                                            {
                                                name: "🇪🇺 EUR - ECB Press Conference",
                                                value: "**Time**: 8:30 AM EST\n**Impact**: High",
                                            }
                                        ]}
                                        footer="Data from ForexFactory.com • Today at 12:00 AM"
                                    />
                                }
                            />
                        </div>
                    </div>

                    {/* Command Showcase Section */}
                    <div className="bg-background-800 py-16 sm:py-24">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <CommandShowcase commands={botCommands} />
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="bg-background-900 py-16 sm:py-24">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    Why Choose Our Bot?
                                </h2>
                                <p className="mt-4 text-lg text-background-300">
                                    Powerful features designed to keep your Discord community informed
                                </p>
                            </div>

                            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                                {/* Feature 1 */}
                                <div className="bg-background-800 rounded-xl p-8 border border-background-700 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                                    <div className="h-12 w-12 rounded-md bg-primary flex items-center justify-center mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">Real-Time Economic News</h3>
                                    <p className="text-background-300">
                                        Get the latest economic news and events straight to your Discord server with simple slash commands. Stay informed about market-moving events.
                                    </p>
                                </div>

                                {/* Feature 2 */}
                                <div className="bg-background-800 rounded-xl p-8 border border-background-700 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                                    <div className="h-12 w-12 rounded-md bg-primary flex items-center justify-center mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">News Alerts (Coming Soon)</h3>
                                    <p className="text-background-300">
                                        Get notified before important economic news is released. Set up custom alerts for specific currencies or high-impact events.
                                    </p>
                                </div>

                                {/* Feature 3 */}
                                <div className="bg-background-800 rounded-xl p-8 border border-background-700 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                                    <div className="h-12 w-12 rounded-md bg-primary flex items-center justify-center mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">Scheduled Updates</h3>
                                    <p className="text-background-300">
                                        Automatically post economic news and events to your Discord server on a schedule. Morning and evening summaries keep everyone informed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-background-800 py-16">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="bg-primary bg-opacity-10 rounded-2xl px-6 py-10 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    <span className="block">Ready to stay informed?</span>
                                    <span className="block text-primary-300">Add the bot to your server today.</span>
                                </h2>
                                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                                    <div className="inline-flex rounded-md shadow">
                                        <Link href="https://discord.com/api/oauth2/authorize?client_id=1083815375352901716&permissions=274877910016&scope=bot"
                                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-5 py-3 text-base font-medium text-white hover:bg-primary-600">
                                            Add to Discord
                                        </Link>
                                    </div>
                                    <div className="ml-3 inline-flex rounded-md shadow">
                                        <Link href="#"
                                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-background-700 px-5 py-3 text-base font-medium text-white hover:bg-background-600">
                                            Learn more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
} 