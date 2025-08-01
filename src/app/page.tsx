"use client";

import Link from "next/link";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Image from "next/image";
import FeatureHighlights from "./components/feature-highlights";
import { botCommands } from "./data/commands";
import DiscordPreview, { DiscordEmbed } from "./components/discord-preview";

export default function Home() {
  return (
    <>
      <Nav />
      <div className={"relative overflow-hidden"}>
        <main>
          {/* Enhanced Hero Banner */}
          <div className="relative isolate overflow-hidden bg-background-900">
            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute left-1/4 top-1/4 h-64 w-64 animate-pulse rounded-full bg-primary/5 blur-3xl"></div>
              <div
                className="absolute bottom-1/3 right-1/4 h-80 w-80 animate-pulse rounded-full bg-primary/10 blur-3xl"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Animated grid pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid-pattern"></div>
              </div>

              {/* Floating economic symbols */}
              <div className="economic-symbols">
                <div className="symbol symbol-usd">$</div>
                <div className="symbol symbol-eur">€</div>
                <div className="symbol symbol-gbp">£</div>
                <div className="symbol symbol-jpy">¥</div>
                <div className="symbol symbol-chart">📈</div>
                <div className="symbol symbol-chart-down">📉</div>
              </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
              <div className="z-10 mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                {/* Animated badge */}
                <div className="flex">
                  <div className="relative mb-6 flex animate-fade-in items-center gap-x-2 rounded-full bg-background-800 px-4 py-1 text-sm leading-6 text-white ring-1 ring-primary/20 hover:ring-primary/50">
                    <span className="animate-ping-slow absolute inset-0 rounded-full bg-primary/10"></span>
                    <span className="font-semibold text-primary">New</span>
                    <span className="text-background-300">
                      Discord Bot v1.0 Released
                    </span>
                    <svg
                      viewBox="0 0 2 2"
                      className="h-0.5 w-0.5 fill-current text-primary"
                    >
                      <circle cx="1" cy="1" r="1" />
                    </svg>
                    <a href="#" className="font-medium text-primary">
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>

                {/* Enhanced headline with improved gradient text */}
                <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  <span
                    className="inline-block animate-slide-up"
                    style={{ animationDelay: "0.1s" }}
                  >
                    Stay
                  </span>{" "}
                  <span
                    className="inline-block animate-slide-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    informed
                  </span>{" "}
                  <span
                    className="inline-block animate-slide-up"
                    style={{ animationDelay: "0.3s" }}
                  >
                    with
                  </span>{" "}
                  <span
                    className="inline-block animate-slide-up"
                    style={{ animationDelay: "0.4s" }}
                  >
                    {/* Option 1: Teal to Blue gradient (similar to your original) */}
                    <span className="bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Economic
                    </span>
                  </span>{" "}
                  <span
                    className="inline-block animate-slide-up"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-primary bg-clip-text text-transparent">
                      News
                    </span>
                  </span>
                </h1>

                {/* Enhanced description with text on separate lines to prevent cutoff */}
                <div className="mt-6 max-w-xl">
                  <p className="text-lg leading-8 text-background-300">
                    Get real-time economic updates delivered directly to your
                    Discord server. Stay ahead of market-moving events with our
                    powerful bot.
                  </p>
                </div>

                {/* Enhanced CTA buttons with hover effects */}
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="https://discord.com/oauth2/authorize?client_id=1083815375352901716&permissions=414464789568&integration_type=0&scope=bot"
                    className="group relative overflow-hidden rounded-md bg-primary px-6 py-3 text-sm font-semibold text-background-900 shadow-sm transition-all duration-300 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
                    <span className="relative">Add to Discord</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-sm font-semibold leading-6 text-white transition-colors duration-300 hover:text-primary"
                  >
                    Learn more{" "}
                    <span
                      aria-hidden="true"
                      className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </div>

                {/* Social proof - Updated to 6000+ servers */}
                <div
                  className="mt-12 flex animate-fade-in items-center gap-x-6 text-sm text-background-400"
                  style={{ animationDelay: "0.8s" }}
                >
                  <div className="flex -space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background-900 bg-background-800 text-[10px] text-white">
                      S1
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background-900 bg-background-800 text-[10px] text-white">
                      S2
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background-900 bg-background-800 text-[10px] text-white">
                      S3
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background-900 bg-background-800 text-[10px] text-white">
                      +
                    </div>
                  </div>
                  <div>Trusted by 6000+ Discord servers</div>
                </div>
              </div>

              {/* 3D Discord Bot Mockup with example image */}
              <div className="z-10 mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                <div
                  className="perspective-container relative mx-auto w-[350px] animate-fade-in text-white"
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="discord-bot-mockup">
                    {/* Discord window frame with Mac-style tabs */}
                    <div className="discord-window rotate-y-6 rotate-x-12 translate-z-12 transform rounded-lg bg-[#36393f] shadow-2xl">
                      {/* Mac-style header */}
                      <div className="discord-header flex items-center rounded-t-lg bg-[#202225] px-4 py-2">
                        <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
                        <div className="ml-4 text-xs text-white">
                          Economic News Bot
                        </div>
                      </div>

                      {/* Discord content */}
                      <div className="discord-content p-4">
                        {/* User command */}
                        <div className="mb-4 flex items-start">
                          <div className="mr-2 flex-shrink-0">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5865F2]">
                              <span className="text-xs text-white">U</span>
                            </div>
                          </div>
                          <div>
                            <div className="mb-1 text-xs text-white">
                              User{" "}
                              <span className="text-[10px] text-[#72767d]">
                                Today at 12:34
                              </span>
                            </div>
                            <div className="rounded bg-[#2f3136] px-2 py-1 text-xs text-white">
                              /today
                            </div>
                          </div>
                        </div>

                        {/* Bot response using only half of the example image */}
                        <div className="bot-response-container">
                          <div className="image-crop-container">
                            <Image
                              src="/bot-example.png"
                              alt="Discord Bot Example"
                              width={300}
                              height={200}
                              className="rounded-md"
                              priority
                              style={{
                                objectFit: "cover",
                                objectPosition: "top",
                                maxHeight: "200px",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Discord Preview Section - Redesigned */}
          <div className="bg-background-900 py-5 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  See the Bot in Action
                </h2>
                <p className="mt-4 text-lg text-background-300">
                  Seamlessly integrate economic news into your Discord community
                </p>
              </div>

              {/* Interactive Discord Experience */}
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                {/* Left side: Bot image */}
                <div className="relative">
                  <div className="absolute -left-6 -top-6 h-24 w-24 animate-pulse rounded-full bg-primary/10 blur-xl"></div>
                  <div className="relative rounded-lg border border-background-700 bg-[#36393f] p-4 shadow-2xl">
                    <div className="absolute left-0 top-0 h-1 w-full animate-shimmer bg-gradient-to-r from-primary/50 to-primary"></div>
                    <Image
                      src="/bot-example.png"
                      alt="Discord Bot Example"
                      width={600}
                      height={800}
                      className="mx-auto rounded-md"
                      priority
                    />
                  </div>
                </div>

                {/* Right side: User journey */}
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-white">
                    How It Works
                  </h3>

                  {/* Step 1 */}
                  <div className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <span className="font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">
                        Invite the Bot
                      </h4>
                      <p className="mt-1 text-background-300">
                        Add the Economic Calendar Bot to your Discord server
                        with a single click. No complex setup required.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <span className="font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">
                        Use Simple Commands
                      </h4>
                      <p className="mt-1 text-background-300">
                        Type{" "}
                        <code className="rounded bg-background-800 px-1.5 py-0.5 text-primary">
                          /today
                        </code>
                        ,{" "}
                        <code className="rounded bg-background-800 px-1.5 py-0.5 text-primary">
                          /tomorrow
                        </code>
                        , or{" "}
                        <code className="rounded bg-background-800 px-1.5 py-0.5 text-primary">
                          /week
                        </code>{" "}
                        to instantly get economic news.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <span className="font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">
                        Set Up Automated Delivery
                      </h4>
                      <p className="mt-1 text-background-300">
                        Configure the bot to automatically post updates at
                        specific times with{" "}
                        <code className="rounded bg-background-800 px-1.5 py-0.5 text-primary">
                          /create-schedule
                        </code>
                        .
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <a
                      href="#"
                      className="inline-flex items-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-background-900 shadow-sm transition-colors hover:bg-primary/90"
                    >
                      Add to Discord
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Testimonials/Use Cases */}
              <div className="mt-20">
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Trusted by Communities
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-lg text-background-300">
                    See how different communities are leveraging our bot to stay
                    informed
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {/* Use Case 1 */}
                  <div className="group relative overflow-hidden rounded-xl border border-background-700 bg-gradient-to-br from-background-800 to-background-900 p-8 transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
                    {/* Decorative element */}
                    <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-primary/10 blur-xl transition-all duration-500 group-hover:bg-primary/20"></div>

                    <div className="relative mb-6 flex items-center">
                      <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#5865F2] shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <span className="text-lg font-bold text-white">T</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          Trading Communities
                        </h4>
                        <p className="flex items-center text-sm text-background-400">
                          <svg
                            className="mr-1 h-3 w-3 text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Discord Server
                        </p>
                      </div>
                    </div>
                    <div className="mb-4 rounded-lg border-l-2 border-primary bg-background-800/50 p-4">
                      <p className="italic text-background-200">
                        &quot;Our members rely on timely economic news to make
                        trading decisions. This bot delivers exactly what we
                        need, when we need it.&quot;
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-sm text-background-400">
                      <span>500+ members</span>
                      <span className="flex items-center">
                        <svg
                          className="mr-1 h-4 w-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        5.0/5
                      </span>
                    </div>
                  </div>

                  {/* Use Case 2 */}
                  <div className="group relative overflow-hidden rounded-xl border border-background-700 bg-gradient-to-br from-background-800 to-background-900 p-8 transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
                    {/* Decorative element */}
                    <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-primary/10 blur-xl transition-all duration-500 group-hover:bg-primary/20"></div>

                    <div className="relative mb-6 flex items-center">
                      <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#5865F2] shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <span className="text-lg font-bold text-white">E</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          Economics Students
                        </h4>
                        <p className="flex items-center text-sm text-background-400">
                          <svg
                            className="mr-1 h-3 w-3 text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Study Group
                        </p>
                      </div>
                    </div>
                    <div className="mb-4 rounded-lg border-l-2 border-primary bg-background-800/50 p-4">
                      <p className="italic text-background-200">
                        &quot;We set up daily briefings that keep our study
                        group informed about real-world economic events. Perfect
                        for discussions.&quot;
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-sm text-background-400">
                      <span>200+ members</span>
                      <span className="flex items-center">
                        <svg
                          className="mr-1 h-4 w-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        4.9/5
                      </span>
                    </div>
                  </div>

                  {/* Use Case 3 */}
                  <div className="group relative overflow-hidden rounded-xl border border-background-700 bg-gradient-to-br from-background-800 to-background-900 p-8 transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
                    {/* Decorative element */}
                    <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-primary/10 blur-xl transition-all duration-500 group-hover:bg-primary/20"></div>

                    <div className="relative mb-6 flex items-center">
                      <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#5865F2] shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <span className="text-lg font-bold text-white">F</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          Financial Analysts
                        </h4>
                        <p className="flex items-center text-sm text-background-400">
                          <svg
                            className="mr-1 h-3 w-3 text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Professional Network
                        </p>
                      </div>
                    </div>
                    <div className="mb-4 rounded-lg border-l-2 border-primary bg-background-800/50 p-4">
                      <p className="italic text-background-200">
                        &quot;The ability to filter by impact level and currency
                        helps us focus on the news that matters most to our
                        clients.&quot;
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-sm text-background-400">
                      <span>350+ members</span>
                      <span className="flex items-center">
                        <svg
                          className="mr-1 h-4 w-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        4.8/5
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Command Showcase Section */}
          <div className="relative overflow-hidden py-20 sm:py-28">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-background-900 via-background-800 to-background-900">
              <div className="grid-pattern absolute inset-0 opacity-20"></div>

            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              {/* Section header with animation */}
              <div className="mb-12 animate-fade-in text-center">
                <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="animated-gradient-text">
                    Powerful Discord Commands
                  </span>
                </h2>
                <p className="mx-auto max-w-3xl text-xl text-background-300">
                  Control economic news delivery with these simple commands
                </p>
              </div>

              {/* Feature highlights with enhanced styling */}
              <div className="relative">
                <FeatureHighlights commands={botCommands} />

                {/* Decorative elements */}
                <div
                  className="animate-spin-slow absolute -left-10 -top-10 h-20 w-20 rounded-full border border-primary/20 opacity-30"
                  style={{ animationDuration: "15s" }}
                ></div>
                <div
                  className="animate-spin-slow absolute -bottom-10 -right-10 h-32 w-32 rounded-full border border-primary/20 opacity-30"
                  style={{
                    animationDuration: "20s",
                    animationDirection: "reverse",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Features Section with refined 3D animations */}
          <div className="overflow-hidden bg-background-900 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="animate-fade-in text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Why Choose Our Bot?
                </h2>
                <p className="mt-4 text-lg text-background-300">
                  Powerful features designed to keep your Discord community
                  informed
                </p>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {/* Feature 1: Real-Time Economic News */}
                <div className="feature-card group">
                  <div className="card-content">
                    <div className="card-front flex h-full flex-col items-center justify-center rounded-xl border border-background-700 bg-background-800 p-8">
                      <div className="relative mb-6 h-32 w-32">
                        {/* Smaller News Feed Animation */}
                        <div className="news-feed-3d">
                          {/* Discord-like message container */}
                          <div className="discord-message rotate-y-10 rotate-x-10 translate-z-8 transform rounded-md border-l-4 border-primary bg-[#36393f] p-3 shadow-lg">
                            <div className="message-header mb-2 flex items-center">
                              <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary/30">
                                <span className="text-[10px] text-white">
                                  B
                                </span>
                              </div>
                              <div className="text-[10px] font-medium text-white">
                                Forex Bot
                              </div>
                            </div>
                            <div className="message-title mb-1 text-[10px] font-medium text-white">
                              Economic News
                            </div>
                            <div className="message-content">
                              <div className="news-item mb-1 flex items-center">
                                <div className="mr-1 h-3 w-3 text-[8px]">
                                  USD
                                </div>
                                <div className="h-2 w-full animate-shimmer rounded bg-background-700"></div>
                              </div>
                              <div className="news-item mb-1 flex items-center">
                                <div className="mr-1 h-3 w-3 text-[8px]">
                                  EUR
                                </div>
                                <div
                                  className="h-2 w-full animate-shimmer rounded bg-background-700"
                                  style={{ animationDelay: "0.2s" }}
                                ></div>
                              </div>
                              <div className="news-item flex items-center">
                                <div className="mr-1 h-3 w-3 text-[8px]">
                                  GBP
                                </div>
                                <div
                                  className="h-2 w-full animate-shimmer rounded bg-background-700"
                                  style={{ animationDelay: "0.4s" }}
                                ></div>
                              </div>
                            </div>
                          </div>

                          {/* Live indicator */}
                          <div className="absolute -right-2 -top-2 flex animate-pulse items-center rounded-full bg-red-500 px-1.5 py-0.5 text-[8px] text-white">
                            <span className="mr-1 h-1.5 w-1.5 rounded-full bg-white"></span>
                            LIVE
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-3 text-xl font-semibold text-white">
                        Real-Time Economic News
                      </h3>
                      <p className="text-background-300">
                        Get the latest economic news and events straight to your
                        Discord server with simple slash commands.
                      </p>
                    </div>
                    <div className="card-back flex h-full flex-col items-center justify-center rounded-xl border border-primary/30 bg-primary/10 p-8 backdrop-blur-sm">
                      <h3 className="mb-3 text-xl font-semibold text-white">
                        Real-Time Economic News
                      </h3>
                      <ul className="space-y-2 text-left text-background-300">
                        <li className="flex items-center">
                          <svg
                            className="mr-2 h-5 w-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Up-to-the-minute economic data
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="mr-2 h-5 w-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Forecasts and previous values
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="mr-2 h-5 w-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Impact indicators for each event
                        </li>
                      </ul>
                      <button className="mt-4 rounded-md bg-primary px-4 py-2 font-medium text-background-900 transition-colors hover:bg-primary/80">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>

                {/* Feature 2: Customizable Filters */}
                <div className="feature-card group">
                  <div className="card-content">
                    <div className="card-front flex h-full flex-col items-center justify-center rounded-xl border border-background-700 bg-background-800 p-8">
                      <div className="relative mb-6 h-32 w-32">
                        {/* Smaller Filter Control Panel */}
                        <div className="filter-control-panel">
                          {/* Main panel */}
                          <div className="panel rotate-y-5 rotate-x-5 translate-z-4 transform rounded-lg bg-background-700 p-2 shadow-lg">
                            {/* Panel header */}
                            <div className="panel-header mb-2 text-center text-[10px] font-medium text-white">
                              Filter Controls
                            </div>

                            {/* Currency filter */}
                            <div className="filter-section mb-2">
                              <div className="filter-label mb-1 text-[8px] text-background-300">
                                Currency
                              </div>
                              <div className="filter-options flex gap-1">
                                <div className="option flex items-center justify-center rounded bg-primary/30 px-1 py-0.5 text-[8px] text-white">
                                  USD
                                </div>
                                <div className="option flex items-center justify-center rounded bg-background-600 px-1 py-0.5 text-[8px] text-white">
                                  EUR
                                </div>
                                <div className="option flex items-center justify-center rounded bg-background-600 px-1 py-0.5 text-[8px] text-white">
                                  GBP
                                </div>
                              </div>
                            </div>

                            {/* Impact filter */}
                            <div className="filter-section mb-2">
                              <div className="filter-label mb-1 text-[8px] text-background-300">
                                Impact
                              </div>
                              <div className="filter-options flex gap-1">
                                <div className="option flex items-center justify-center rounded bg-primary/30 px-1 py-0.5 text-[8px] text-white">
                                  <span className="mr-0.5 h-2 w-2 rounded-full bg-red-500"></span>
                                  High
                                </div>
                                <div className="option flex items-center justify-center rounded bg-primary/30 px-1 py-0.5 text-[8px] text-white">
                                  <span className="mr-0.5 h-2 w-2 rounded-full bg-orange-500"></span>
                                  Med
                                </div>
                              </div>
                            </div>

                            {/* Market filter */}
                            <div className="filter-section">
                              <div className="filter-label mb-1 text-[8px] text-background-300">
                                Market
                              </div>
                              <div className="filter-options flex gap-1">
                                <div className="option flex items-center justify-center rounded bg-primary/30 px-1 py-0.5 text-[8px] text-white">
                                  Forex
                                </div>
                                <div className="option flex items-center justify-center rounded bg-background-600 px-1 py-0.5 text-[8px] text-white">
                                  Crypto
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Animated cursor */}
                          <div className="cursor animate-cursor-move absolute h-2 w-2 rounded-full bg-white opacity-70"></div>
                        </div>
                      </div>
                      <h3 className="mb-3 text-xl font-semibold text-white">
                        Customizable Filters
                      </h3>
                      <p className="text-background-300">
                        Filter news by currency, impact level, and market type
                        to get exactly what you need.
                      </p>
                    </div>
                    <div className="card-back flex h-full flex-col items-center justify-center rounded-xl border border-primary/30 bg-primary/10 p-8 backdrop-blur-sm">
                      <h3 className="mb-3 text-xl font-semibold text-white">
                        Customizable Filters
                      </h3>
                      <ul className="space-y-2 text-left text-background-300">
                        <li className="flex items-center">
                          <svg
                            className="mr-2 h-5 w-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Filter by currency (USD, EUR, GBP, etc.)
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="mr-2 h-5 w-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Filter by impact level (High, Medium, Low)
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="mr-2 h-5 w-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Filter by market type (Forex, Crypto, etc.)
                        </li>
                      </ul>
                      <button className="mt-4 rounded-md bg-primary px-4 py-2 font-medium text-background-900 transition-colors hover:bg-primary/80">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>

                {/* Feature 3: Automated Schedules - Fixed Clock */}
                <div className="feature-card group">
                  <div className="card-content">
                    <div className="card-front flex h-full flex-col items-center justify-center rounded-xl border border-background-700 bg-background-800 p-8">
                      <div className="relative mb-6 h-32 w-32">
                        {/* Fixed Clock Animation */}
                        <div className="clock-container">
                          {/* Clock face */}
                          <div className="clock-face relative mx-auto h-28 w-28 rounded-full border-4 border-background-700 bg-[#2d2f36] shadow-lg">
                            {/* Clock markings */}
                            <div className="clock-markings">
                              <div className="marking marking-12 absolute left-1/2 top-2 h-2 w-1 -translate-x-1/2 transform bg-white"></div>
                              <div className="marking marking-3 absolute right-2 top-1/2 h-1 w-2 -translate-y-1/2 transform bg-white"></div>
                              <div className="marking marking-6 absolute bottom-2 left-1/2 h-2 w-1 -translate-x-1/2 transform bg-white"></div>
                              <div className="marking marking-9 absolute left-2 top-1/2 h-1 w-2 -translate-y-1/2 transform bg-white"></div>
                            </div>

                            {/* Clock hands */}
                            <div className="clock-center absolute left-1/2 top-1/2 z-10 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary"></div>
                            <div className="clock-hour animate-clock-hour absolute left-1/2 top-1/2 h-8 w-1 origin-center -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white"></div>
                            <div className="clock-minute animate-clock-minute absolute left-1/2 top-1/2 h-10 w-0.5 origin-center -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary"></div>
                            <div className="clock-second animate-clock-second absolute left-1/2 top-1/2 h-12 w-0.5 origin-center -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-red-500"></div>
                          </div>

                          {/* Schedule notification */}
                          <div className="schedule-notification absolute -right-2 -top-2 animate-float rounded border border-primary bg-background-800 p-1.5 text-[8px] text-white shadow-lg">
                            <div className="mb-1 flex items-center gap-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-2 w-2 text-primary"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>Daily Update</span>
                            </div>
                            <div className="font-medium text-primary">
                              08:00 AM
                            </div>
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-3 text-xl font-semibold text-white">
                        Automated Schedules
                      </h3>
                      <p className="text-background-300">
                        Set up automated news delivery on your preferred
                        schedule to keep your server informed.
                      </p>
                    </div>
                    <div className="card-back flex h-full flex-col items-center justify-center rounded-xl border border-primary/30 bg-primary/10 p-8 backdrop-blur-sm">
                      <h3 className="mb-3 text-xl font-semibold text-white">
                        Automated Schedules
                      </h3>
                      <ul className="space-y-2 text-left text-background-300">
                        <li className="flex items-center">
                          <svg
                            className="mr-2 h-5 w-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Daily, weekday, or weekend schedules
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="mr-2 h-5 w-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Customizable delivery times
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="mr-2 h-5 w-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Multiple schedules per server
                        </li>
                      </ul>
                      <button className="mt-4 rounded-md bg-primary px-4 py-2 font-medium text-background-900 transition-colors hover:bg-primary/80">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative overflow-hidden py-20">
            {/* Animated background with gradient and particles */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-background-900 via-background-800 to-primary/20">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                }}
              ></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
              <div className="transform rounded-3xl border border-background-700/50 bg-background-800/40 px-8 py-12 shadow-[0_10px_50px_rgba(0,0,0,0.3)] backdrop-blur-lg transition-all duration-500 hover:shadow-[0_15px_60px_rgba(var(--primary-rgb),0.2)] sm:px-14 sm:py-20 lg:flex lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    <span className="animate-fade-in-up block">
                      Ready to stay informed?
                    </span>
                    <span
                      className="animate-fade-in-up mt-2 block text-primary-300"
                      style={{ animationDelay: "0.3s" }}
                    >
                      Add the bot to your server today.
                    </span>
                  </h2>
                  <p
                    className="animate-fade-in-up mt-4 text-lg text-gray-300"
                    style={{ animationDelay: "0.5s" }}
                  >
                    Get real-time forex updates and market insights directly in
                    your Discord server.
                  </p>
                </div>
                <div
                  className="animate-fade-in-up mt-10 lg:ml-8 lg:mt-0 lg:flex-shrink-0"
                  style={{ animationDelay: "0.7s" }}
                >
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Link
                      href="https://discord.com/oauth2/authorize?client_id=1083815375352901716&permissions=414464789568&integration_type=0&scope=bot"
                      className="inline-flex transform items-center justify-center rounded-xl border border-transparent bg-primary px-6 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary-600 hover:shadow-primary/30"
                    >
                      <svg
                        className="mr-2 h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                      </svg>
                      Add to Discord
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex transform items-center justify-center rounded-xl border border-background-600 bg-background-700/80 px-6 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-background-600"
                    >
                      Learn More
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
