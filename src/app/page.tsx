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

                    {/* Discord Preview Section - Redesigned */}
                    <div className="bg-background-900 py-16 sm:py-24">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    See the Bot in Action
                                </h2>
                                <p className="mt-4 text-lg text-background-300">
                                    Seamlessly integrate economic news into your Discord community
                                </p>
                            </div>
                            
                            {/* Interactive Discord Experience */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                {/* Left side: Bot image */}
                                <div className="relative">
                                    <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/10 blur-xl animate-pulse"></div>
                                    <div className="relative bg-[#36393f] p-4 rounded-lg border border-background-700 shadow-2xl">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary animate-shimmer"></div>
                                        <Image 
                                            src="/bot-example.png" 
                                            alt="Discord Bot Example" 
                                            width={600} 
                                            height={800} 
                                            className="rounded-md mx-auto"
                                            priority
                                        />
                                    </div>
                                </div>
                                
                                {/* Right side: User journey */}
                                <div className="space-y-8">
                                    <h3 className="text-2xl font-bold text-white">How It Works</h3>
                                    
                                    {/* Step 1 */}
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                                            <span className="text-primary font-bold">1</span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-white">Invite the Bot</h4>
                                            <p className="mt-1 text-background-300">
                                                Add the Economic Calendar Bot to your Discord server with a single click. No complex setup required.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Step 2 */}
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                                            <span className="text-primary font-bold">2</span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-white">Use Simple Commands</h4>
                                            <p className="mt-1 text-background-300">
                                                Type <code className="bg-background-800 px-1.5 py-0.5 rounded text-primary">/today</code>, <code className="bg-background-800 px-1.5 py-0.5 rounded text-primary">/tomorrow</code>, or <code className="bg-background-800 px-1.5 py-0.5 rounded text-primary">/week</code> to instantly get economic news.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Step 3 */}
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                                            <span className="text-primary font-bold">3</span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-white">Set Up Automated Delivery</h4>
                                            <p className="mt-1 text-background-300">
                                                Configure the bot to automatically post updates at specific times with <code className="bg-background-800 px-1.5 py-0.5 rounded text-primary">/create-schedule</code>.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* CTA Button */}
                                    <div className="pt-4">
                                        <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-background-900 bg-primary hover:bg-primary/90 transition-colors">
                                            Add to Discord
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Testimonials/Use Cases */}
                            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Use Case 1 */}
                                <div className="bg-background-800 p-6 rounded-lg border border-background-700 transition-all hover:border-primary/50 hover:shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center mr-3">
                                            <span className="text-white font-bold">T</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium">Trading Communities</h4>
                                            <p className="text-background-400 text-sm">Discord Server</p>
                                        </div>
                                    </div>
                                    <p className="text-background-300">
                                        &quot;Our members rely on timely economic news to make trading decisions. This bot delivers exactly what we need, when we need it.&quot;
                                    </p>
                                </div>
                                
                                {/* Use Case 2 */}
                                <div className="bg-background-800 p-6 rounded-lg border border-background-700 transition-all hover:border-primary/50 hover:shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center mr-3">
                                            <span className="text-white font-bold">E</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium">Economics Students</h4>
                                            <p className="text-background-400 text-sm">Study Group</p>
                                        </div>
                                    </div>
                                    <p className="text-background-300">
                                        &quot;We set up daily briefings that keep our study group informed about real-world economic events. Perfect for discussions.&quot;
                                    </p>
                                </div>
                                
                                {/* Use Case 3 */}
                                <div className="bg-background-800 p-6 rounded-lg border border-background-700 transition-all hover:border-primary/50 hover:shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center mr-3">
                                            <span className="text-white font-bold">F</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium">Financial Analysts</h4>
                                            <p className="text-background-400 text-sm">Professional Network</p>
                                        </div>
                                    </div>
                                    <p className="text-background-300">
                                        &quot;The ability to filter by impact level and currency helps us focus on the news that matters most to our clients.&quot;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Command Showcase Section */}
                    <div className="bg-background-800 py-16 sm:py-24">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <CommandShowcase commands={botCommands} />
                        </div>
                    </div>

                    {/* Features Section with refined 3D animations */}
                    <div className="bg-background-900 py-16 sm:py-24 overflow-hidden">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="text-center animate-fade-in">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    Why Choose Our Bot?
                                </h2>
                                <p className="mt-4 text-lg text-background-300">
                                    Powerful features designed to keep your Discord community informed
                                </p>
                            </div>

                            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                                {/* Feature 1: Real-Time Economic News */}
                                <div className="feature-card group">
                                    <div className="card-content">
                                        <div className="card-front bg-background-800 rounded-xl p-8 border border-background-700 h-full flex flex-col items-center justify-center">
                                            <div className="relative w-32 h-32 mb-6">
                                                {/* Smaller News Feed Animation */}
                                                <div className="news-feed-3d">
                                                    {/* Discord-like message container */}
                                                    <div className="discord-message bg-[#36393f] p-3 rounded-md border-l-4 border-primary shadow-lg transform rotate-y-10 rotate-x-10 translate-z-8">
                                                        <div className="message-header flex items-center mb-2">
                                                            <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center mr-2">
                                                                <span className="text-[10px] text-white">B</span>
                                                            </div>
                                                            <div className="text-white text-[10px] font-medium">Forex Bot</div>
                                                        </div>
                                                        <div className="message-title text-white text-[10px] font-medium mb-1">Economic News</div>
                                                        <div className="message-content">
                                                            <div className="news-item flex items-center mb-1">
                                                                <div className="w-3 h-3 mr-1 text-[8px]">USD</div>
                                                                <div className="h-2 bg-background-700 rounded w-full animate-shimmer"></div>
                                                            </div>
                                                            <div className="news-item flex items-center mb-1">
                                                                <div className="w-3 h-3 mr-1 text-[8px]">EUR</div>
                                                                <div className="h-2 bg-background-700 rounded w-full animate-shimmer" style={{ animationDelay: '0.2s' }}></div>
                                                            </div>
                                                            <div className="news-item flex items-center">
                                                                <div className="w-3 h-3 mr-1 text-[8px]">GBP</div>
                                                                <div className="h-2 bg-background-700 rounded w-full animate-shimmer" style={{ animationDelay: '0.4s' }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Live indicator */}
                                                    <div className="absolute -top-2 -right-2 flex items-center bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded-full animate-pulse">
                                                        <span className="w-1.5 h-1.5 bg-white rounded-full mr-1"></span>
                                                        LIVE
                                                    </div>
                                                </div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">Real-Time Economic News</h3>
                                    <p className="text-background-300">
                                                Get the latest economic news and events straight to your Discord server with simple slash commands.
                                            </p>
                                        </div>
                                        <div className="card-back bg-primary/10 backdrop-blur-sm rounded-xl p-8 border border-primary/30 h-full flex flex-col items-center justify-center">
                                            <h3 className="text-xl font-semibold text-white mb-3">Real-Time Economic News</h3>
                                            <ul className="text-background-300 text-left space-y-2">
                                                <li className="flex items-center">
                                                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Up-to-the-minute economic data
                                                </li>
                                                <li className="flex items-center">
                                                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Forecasts and previous values
                                                </li>
                                                <li className="flex items-center">
                                                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Impact indicators for each event
                                                </li>
                                            </ul>
                                            <button className="mt-4 px-4 py-2 bg-primary text-background-900 rounded-md font-medium hover:bg-primary/80 transition-colors">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature 2: Customizable Filters */}
                                <div className="feature-card group">
                                    <div className="card-content">
                                        <div className="card-front bg-background-800 rounded-xl p-8 border border-background-700 h-full flex flex-col items-center justify-center">
                                            <div className="relative w-32 h-32 mb-6">
                                                {/* Smaller Filter Control Panel */}
                                                <div className="filter-control-panel">
                                                    {/* Main panel */}
                                                    <div className="panel bg-background-700 rounded-lg p-2 shadow-lg transform rotate-y-5 rotate-x-5 translate-z-4">
                                                        {/* Panel header */}
                                                        <div className="panel-header text-white text-[10px] font-medium mb-2 text-center">
                                                            Filter Controls
                                                        </div>
                                                        
                                                        {/* Currency filter */}
                                                        <div className="filter-section mb-2">
                                                            <div className="filter-label text-background-300 text-[8px] mb-1">Currency</div>
                                                            <div className="filter-options flex gap-1">
                                                                <div className="option bg-primary/30 px-1 py-0.5 rounded text-[8px] text-white flex items-center justify-center">
                                                                    USD
                                                                </div>
                                                                <div className="option bg-background-600 px-1 py-0.5 rounded text-[8px] text-white flex items-center justify-center">
                                                                    EUR
                                                                </div>
                                                                <div className="option bg-background-600 px-1 py-0.5 rounded text-[8px] text-white flex items-center justify-center">
                                                                    GBP
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        {/* Impact filter */}
                                                        <div className="filter-section mb-2">
                                                            <div className="filter-label text-background-300 text-[8px] mb-1">Impact</div>
                                                            <div className="filter-options flex gap-1">
                                                                <div className="option bg-primary/30 px-1 py-0.5 rounded text-[8px] text-white flex items-center justify-center">
                                                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-0.5"></span>High
                                                                </div>
                                                                <div className="option bg-primary/30 px-1 py-0.5 rounded text-[8px] text-white flex items-center justify-center">
                                                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-0.5"></span>Med
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        {/* Market filter */}
                                                        <div className="filter-section">
                                                            <div className="filter-label text-background-300 text-[8px] mb-1">Market</div>
                                                            <div className="filter-options flex gap-1">
                                                                <div className="option bg-primary/30 px-1 py-0.5 rounded text-[8px] text-white flex items-center justify-center">
                                                                    Forex
                                                                </div>
                                                                <div className="option bg-background-600 px-1 py-0.5 rounded text-[8px] text-white flex items-center justify-center">
                                                                    Crypto
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Animated cursor */}
                                                    <div className="cursor absolute w-2 h-2 bg-white rounded-full opacity-70 animate-cursor-move"></div>
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-semibold text-white mb-3">Customizable Filters</h3>
                                            <p className="text-background-300">
                                                Filter news by currency, impact level, and market type to get exactly what you need.
                                            </p>
                                        </div>
                                        <div className="card-back bg-primary/10 backdrop-blur-sm rounded-xl p-8 border border-primary/30 h-full flex flex-col items-center justify-center">
                                            <h3 className="text-xl font-semibold text-white mb-3">Customizable Filters</h3>
                                            <ul className="text-background-300 text-left space-y-2">
                                                <li className="flex items-center">
                                                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Filter by currency (USD, EUR, GBP, etc.)
                                                </li>
                                                <li className="flex items-center">
                                                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Filter by impact level (High, Medium, Low)
                                                </li>
                                                <li className="flex items-center">
                                                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                                    Filter by market type (Forex, Crypto, etc.)
                                                </li>
                                            </ul>
                                            <button className="mt-4 px-4 py-2 bg-primary text-background-900 rounded-md font-medium hover:bg-primary/80 transition-colors">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature 3: Automated Schedules - Fixed Clock */}
                                <div className="feature-card group">
                                    <div className="card-content">
                                        <div className="card-front bg-background-800 rounded-xl p-8 border border-background-700 h-full flex flex-col items-center justify-center">
                                            <div className="relative w-32 h-32 mb-6">
                                                {/* Fixed Clock Animation */}
                                                <div className="clock-container">
                                                    {/* Clock face */}
                                                    <div className="clock-face bg-[#2d2f36] rounded-full w-28 h-28 mx-auto relative border-4 border-background-700 shadow-lg">
                                                        {/* Clock markings */}
                                                        <div className="clock-markings">
                                                            <div className="marking marking-12 absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-white"></div>
                                                            <div className="marking marking-3 absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-1 bg-white"></div>
                                                            <div className="marking marking-6 absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-white"></div>
                                                            <div className="marking marking-9 absolute left-2 top-1/2 transform -translate-y-1/2 w-2 h-1 bg-white"></div>
                                                        </div>
                                                        
                                                        {/* Clock hands */}
                                                        <div className="clock-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full z-10"></div>
                                                        <div className="clock-hour absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-center w-1 h-8 bg-white rounded-full animate-clock-hour"></div>
                                                        <div className="clock-minute absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-center w-0.5 h-10 bg-primary rounded-full animate-clock-minute"></div>
                                                        <div className="clock-second absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-center w-0.5 h-12 bg-red-500 rounded-full animate-clock-second"></div>
                                                    </div>
                                                    
                                                    {/* Schedule notification */}
                                                    <div className="schedule-notification absolute -top-2 -right-2 bg-background-800 text-white text-[8px] p-1.5 rounded border border-primary animate-float shadow-lg">
                                                        <div className="flex items-center gap-1 mb-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                            </svg>
                                                            <span>Daily Update</span>
                                                        </div>
                                                        <div className="text-primary font-medium">08:00 AM</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-semibold text-white mb-3">Automated Schedules</h3>
                                            <p className="text-background-300">
                                                Set up automated news delivery on your preferred schedule to keep your server informed.
                                            </p>
                                        </div>
                                        <div className="card-back bg-primary/10 backdrop-blur-sm rounded-xl p-8 border border-primary/30 h-full flex flex-col items-center justify-center">
                                            <h3 className="text-xl font-semibold text-white mb-3">Automated Schedules</h3>
                                            <ul className="text-background-300 text-left space-y-2">
                                                <li className="flex items-center">
                                                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Daily, weekday, or weekend schedules
                                                </li>
                                                <li className="flex items-center">
                                                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Customizable delivery times
                                                </li>
                                                <li className="flex items-center">
                                                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                                    Multiple schedules per server
                                                </li>
                                            </ul>
                                            <button className="mt-4 px-4 py-2 bg-primary text-background-900 rounded-md font-medium hover:bg-primary/80 transition-colors">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
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