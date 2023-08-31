import {signIn, signOut, useSession} from "next-auth/react";
import Link from "next/link";

import {api} from "~/utils/api";
import Layout from "~/pages/components/layout";

export default function Home() {
    const hello = api.example.hello.useQuery({text: "from tRPC"});

    return (
        <Layout name={"HomePage"} title={"Home"} content={"HomePage for ForexFactory discord bot website."}>
            <div className={"relative overflow-hidden"}>
                <main>
                    {/* Banner */}
                    <div className={"bg-gray-800 pt-10 mb-10 sm:pt-16 lg:overflow-hidden lg:mb-0 lg:pt-8 lg:pb-14"}>
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
                                    <img className={"w-3/5"} src={"./forexfactory-logo.png"} alt={"ForexFactory Logo"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* more stuff */}
                </main>
            </div>
        </Layout>
    );
}