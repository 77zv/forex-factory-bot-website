import Link from "next/link";
import FeatureCard from "./components/feature-card";
import { type CardProps } from "./components/feature-card";
import Nav from "./components/nav";
import Footer from "./components/footer";

export default function Home() {
    const features: CardProps[] = [
        {
            title: "Economic News",
            description: "Get the latest economic news and events straight to your discord server. Users have access to slash commands to get the latest news for today or tomorrow.",
            icon: "M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
        },
        {
            title: "News Alerts (Coming Soon)",
            description: "Get notified before a new economic news is released.",
            icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        },
        {
            title: "Automatic News Posting (Coming Soon)",
            description: "Automatically post the economic news and events to your discord server every night and morning.",
            icon: "M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
        }
    ];

    return (
        <>
            <Nav />
            <div className={"relative overflow-hidden"}>
                <main>
                    {/* Banner */}
                    <div className={"bg-gray-800 pt-10 sm:pt-16 lg:overflow-hidden mb-0 lg:pt-8 pb-14"}>
                        <div className={"mx-auto max-w-7xl lg:px-8"}>
                            <div className={"lg:grid lg:grid-cols-2 lg:gap-20"}>
                                <div className={"mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left"}>
                                   <div className={"lg:py-24"}>
                                       <h1 className={"text-4xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-6xl"}>
                                           <span className={"block"}>Be Informed About</span>
                                           <span className={"block text-blue-500"}>Economic News</span>
                                           <span className={"block"}>With ForexFactory
                                               <span className={"text-white"}>.</span>
                                           </span>
                                       </h1>
                                       <p className={"mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"}>
                                             ForexFactory is a discord bot that provides you with the latest economic news and events straight to your discord server.
                                       </p>
                                       <div className={"mt-10 sm:mt-12"}>
                                           <Link href={"https://discord.com/api/oauth2/authorize?client_id=1083815375352901716&permissions=274877910016&scope=bot"}
                                                 className={"font-semibold text-lg text-center w-full block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 m-auto dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}>
                                               Get the Latest News Now
                                           </Link>
                                       </div>
                                   </div>
                                </div>
                                <div className={"hidden lg:flex items-center justify-center"}>
                                    <img className={"w-3/5"} src={"/forexfactory-logo.png"} alt={"ForexFactory Logo"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* more stuff */}
                    <div className={"relative bg-gray-900 py-20 sm:py-24 lg:py-28"}>
                        <div className={"mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8"}>
                            <h2 className={"text-2xl font-semibold text-blue-500"}>
                                Start getting alerts now.
                            </h2>
                            <p className={"mx-auto mt-5 max-w-prose text-xl text-gray-400"}>
                                ForexFactory is the only bot you will need to get the latest economic news and events straight to your discord server.
                            </p>
                            <div className={"mt-20"}>
                                <div className={"grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3"}>
                                    {features.length > 0 && features.map((feature) => (
                                        <FeatureCard key={feature.title} title={feature.title} description={feature.description} icon={feature.icon} />
                                    ))}
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