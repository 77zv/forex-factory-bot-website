import {type Tab} from "~/pages/components/nav";
import Link from "next/link";

export const Footer = () => {

    const tabs: Tab[] = [
        {name: "Home", href: "/"},
        {name: "Invite", href: "https://discord.gg/exgDv6nv"},
        // {name: "Privacy Policy", href: "/privacy-policy"},
        {name: "Terms of Service", href: "/terms-of-service"},
        {name: "Privacy Policy", href: "/privacy-policy"},
        {name: "Support", href: "https://discord.gg/exgDv6nv"},
        ];

    return (
        <footer className="p-4 shadow dark:bg-gray-900">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/"
                                                                                          className="hover:underline"></a>All Rights Reserved.
    </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
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