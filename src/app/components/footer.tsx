import { type Tab } from "./nav";
import Link from "next/link";

export const Footer = () => {
    const tabs: Tab[] = [
        {name: "Home", href: "/"},
        {name: "Invite", href: "https://discord.com/api/oauth2/authorize?client_id=1083815375352901716&permissions=68608&scope=bot"},
        {name: "Terms of Service", href: "/terms-of-service"},
        {name: "Privacy Policy", href: "/privacy-policy"},
        {name: "Support", href: "https://discord.gg/TKrhSG3Fg4"},
    ];

    return (
        <footer className="p-4 shadow bg-background-900">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-background-500 sm:text-center" suppressHydrationWarning>
                    © {new Date().getFullYear()} All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-background-500 sm:mt-0">
                    {tabs.map((tab) => {
                        return(
                            <Link key={tab.name} href={tab.href} className="mr-4 hover:underline md:mr-6">{tab.name}</Link>
                        )})
                    }
                </ul>
            </div>
        </footer>
    );
}

export default Footer; 