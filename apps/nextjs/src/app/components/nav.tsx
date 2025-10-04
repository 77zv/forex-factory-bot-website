"use client";
// @TODO: Hydration error is caused by something in here

import Link from "next/link";
import { signOut, useSession, signInDiscord } from "../../lib/auth-client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export type Tab = {
    name: string;
    href: string;
    requiresAuth?: boolean;
    onClick?: () => void;
}

const tabs: Tab[] = [
    {name: "Home", href: "/"},
    {
        name: "Invite",
        href: "https://discord.com/oauth2/authorize?client_id=1083815375352901716&permissions=414464789568&integration_type=0&scope=bot"
    },
    {name: "Support", href: "https://discord.com/invite/TKrhSG3Fg4"},
    {name: "Dashboard", href: "/dashboard", requiresAuth: true,},
];

const Nav = () => {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    async function handleLogin() {
        if (session) {
            await signOut();
        } else {
            await signInDiscord();
        }
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
            <div className={`transition-all duration-300 ${scrolled ? 'bg-background-900/95 backdrop-blur-lg shadow-lg' : 'bg-background-900/90 backdrop-blur-md'}`}>
                <nav className={"relative mx-auto flex max-w-7xl items-center justify-between px-6"}>
                    {/* Logo section - left aligned */}
                    <div className={"w-1/4 flex justify-start"}>
                        <Link href={"/"} className="group">
                            <span className={"sr-only"}>Forex Factory</span>
                            <div className="relative overflow-hidden">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <Image 
                                        src={"/forexfactory-logo.png"} 
                                        className={"h-10 w-auto sm:h-14 transition-all duration-300"} 
                                        alt={"ForexFactory Logo"}
                                        width={100}
                                        height={40}
                                    />
                                </motion.div>
                            </div>
                        </Link>
                    </div>
                    
                    {/* Center navigation items */}
                    <div className="hidden lg:flex lg:w-2/4 lg:items-center lg:justify-center">
                        <div className="flex items-center justify-center space-x-2">
                            {tabs.map((tab) => {
                                if (tab.requiresAuth && !session) return null;
                                return (
                                    <div 
                                        key={tab.name} 
                                        className="relative"
                                    >
                                        <Link 
                                            href={tab.href} 
                                            aria-current="page"
                                            className="relative px-4 py-2 text-base font-medium text-white hover:text-primary transition-colors duration-200 rounded-lg group"
                                        >
                                            <span className="relative z-10">{tab.name}</span>
                                            <span className="absolute inset-0 bg-background-800/0 group-hover:bg-background-800/80 rounded-lg transition-all duration-300"></span>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    
                    {/* Auth button on right */}
                    <div className="hidden lg:flex lg:w-1/4 lg:justify-end">
                        <div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                key={session ? "logout" : "login"}
                                type="button"
                                className="px-5 py-2 text-base font-medium text-white bg-primary hover:bg-primary-600 rounded-lg transition-all duration-200 shadow-md hover:shadow-primary/30"
                                onClick={() => void handleLogin()}
                            >
                                {session ? "Logout" : "Login with Discord"}
                                {!session && (
                                    <svg className="w-5 h-5 ml-2 inline-block" viewBox="0 -28.5 256 256" preserveAspectRatio="xMidYMid" aria-hidden="true">
                                        <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#ffffff" fillRule="nonzero"></path>
                                    </svg>
                                )}
                            </motion.button>
                        </div>
                    </div>
                    
                    {/* Mobile menu button */}
                    <div className={"lg:hidden flex justify-end"}>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-background-800/80 p-2 text-background-300 hover:text-white hover:bg-background-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                            type="button"
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={"1.5"} stroke="currentColor" className="h-7 w-7">
                                <path strokeLinecap={"round"} strokeLinejoin={"round"}
                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>
                        </motion.button>
                    </div>
                </nav>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300">
                    <motion.div 
                        className="absolute inset-x-0 top-0 origin-top p-2 lg:hidden"
                    >
                        <div
                            className="overflow-hidden rounded-xl bg-background-800/95 backdrop-blur-lg shadow-2xl ring-1 ring-background-700 border border-background-700/50">
                            <div className="flex items-center justify-between px-5 pt-4">
                                <div>
                                    {/* Keep the logo size consistent with the header */}
                                    <Image 
                                        src="/forexfactory-logo.png" 
                                        className="h-10 w-auto sm:h-14" 
                                        alt="ForexFactory Logo"
                                        width={100}
                                        height={40}
                                    />
                                </div>
                                <div className="-mr-2">
                                    <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center justify-center rounded-md p-2 text-background-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-600 transition-colors duration-200"
                                        onClick={() => {
                                            setIsOpen(!isOpen);
                                        }}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-7 w-7"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </motion.button>
                                </div>
                            </div>
                            {/* tabs in mobile view */}
                            <div className="pt-5 pb-6">
                                <div className="space-y-1 px-4">
                                    {tabs.map((tab) => {
                                        if (tab.requiresAuth && !session) return null;
                                        return (
                                            <div
                                                key={tab.name}
                                            >
                                                <Link
                                                    href={tab.href}
                                                    aria-current="page"
                                                    className="block rounded-lg px-4 py-3 text-base font-medium text-white hover:bg-background-700/80 transition-colors duration-200"
                                                >
                                                    {tab.name}
                                                </Link>
                                            </div>
                                        );
                                    })}
                                    <div
                                        className="pt-2"
                                    >
                                        <button
                                            key={session ? "logout-mobile" : "login-mobile"}
                                            className="w-full mt-3 flex items-center justify-center rounded-lg px-4 py-3 text-base font-medium text-white bg-primary hover:bg-primary-600 transition-colors duration-200"
                                            onClick={() => {
                                                void handleLogin();
                                                setIsOpen(false);
                                            }}
                                        >
                                            {session ? "Logout" : "Login with Discord"}
                                            {!session && (
                                                <svg className="w-5 h-5 ml-2" viewBox="0 -28.5 256 256" preserveAspectRatio="xMidYMid" aria-hidden="true">
                                                    <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#ffffff" fillRule="nonzero"></path>
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </header>
    );
}

export default Nav; 