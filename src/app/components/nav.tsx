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
    {name: "Support", href: "https://discord.gg/exgDv6nv"},
    {name: "Premium (Coming Soon)", href: "/Premium"},
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
            <div className={`transition-all duration-300 ${scrolled ? 'bg-background-900/80 backdrop-blur-lg shadow-lg' : 'bg-background-900/60 backdrop-blur-sm'}`}>
                <nav className={"relative mx-auto flex max-w-7xl items-center justify-between px-6"}>
                    <div className={"flex flex-1 items-center"}>
                        <div className={"flex w-full items-center justify-between lg:w-auto"}>
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
                            <div className={"-mr-2 ml-auto flex items-center lg:hidden"}>
                                {/* Mobile menu button */}
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
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:space-x-1">
                        {tabs.map((tab, index) => {
                            if (tab.requiresAuth && !session) return null;
                            return (
                                <motion.div 
                                    key={tab.name} 
                                    className="relative"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link 
                                        href={tab.href} 
                                        aria-current="page"
                                        className="relative px-4 py-2 text-base font-medium text-white hover:text-primary transition-colors duration-200 rounded-lg group"
                                    >
                                        <span className="relative z-10">{tab.name}</span>
                                        <span className="absolute inset-0 bg-background-800/0 group-hover:bg-background-800/50 rounded-lg transition-all duration-300"></span>
                                    </Link>
                                </motion.div>
                            );
                        })}
                        <motion.div 
                            className="ml-4"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: tabs.length * 0.1 }}
                        >
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
                                    <svg className="w-5 h-5 ml-2 inline-block" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                                    </svg>
                                )}
                            </motion.button>
                        </motion.div>
                    </div>
                </nav>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300">
                    <motion.div 
                        className="absolute inset-x-0 top-0 origin-top p-2 lg:hidden"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div
                            className="overflow-hidden rounded-xl bg-background-800/90 backdrop-blur-lg shadow-2xl ring-1 ring-background-700 border border-background-700/50">
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
                                    {tabs.map((tab, index) => {
                                        if (tab.requiresAuth && !session) return null;
                                        return (
                                            <motion.div
                                                key={tab.name}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <Link
                                                    href={tab.href}
                                                    aria-current="page"
                                                    className="block rounded-lg px-4 py-3 text-base font-medium text-white hover:bg-background-700/50 transition-colors duration-200"
                                                >
                                                    {tab.name}
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: tabs.length * 0.1 }}
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
                                                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                                                </svg>
                                            )}
                                        </button>
                                    </motion.div>
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