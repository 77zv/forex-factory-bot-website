import Link from "next/link";
import {useSession, signIn, signOut} from "next-auth/react";
import {useState} from "react";

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
        href: "https://discord.com/api/oauth2/authorize?client_id=1083815375352901716&permissions=274877910016&scope=bot"
    },
    // {name: "Documentation", href: "/commands"},
    {name: "Support", href: "https://discord.gg/exgDv6nv"},
    {name: "Premium (Coming Soon)", href: "/Premium"},
    {name: "Dashboard", href: "/dashboard", requiresAuth: true,},
];

const Nav = () => {

    const {data: session} = useSession();
    const [isOpen, setIsOpen] = useState(false);

     async function handleLogin() {
        console.log('handle login')
        if (session) {
            await signOut();
        } else {
            await signIn("discord");
        }
    }

    return (
        <header className={"relative"}>
            <div className={"bg-gray-900 py-7"}>
                <nav className={"relative mx-auto flex max-w-7xl items-center justify-between px-6"}>
                    <div className={"flex flex-1 items-center"}>
                        <div className={"flex w-full items-center justify-between lg:w-auto"}>
                            <Link href={"/"}>
                                <span className={"sr-only"}>Forex Factory</span>
                                <img src={"./forexfactory-logo.png"} className={"h-10 w-auto sm:h-14"}
                                     alt={"ForexFactory Logo"}/>
                            </Link>
                            <div className={"-mr-2 ml-auto flex items-center lg:hidden"}>
                                {/* Mobile menu button */}
                                <button
                                    className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                                    type="button"
                                    onClick={() => {
                                        setIsOpen(!isOpen)
                                    }}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={"1.5"} stroke="currentColor" className="h-8 w-8">
                                        <path strokeLinecap={"round"} strokeLinejoin={"round"}
                                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {tabs.map((tab) => {
                        if (tab.requiresAuth && !session) return null;
                        return (
                            <div key={tab.name} className={"hidden space-x-8 lg:ml-10 lg:flex"}>
                                <Link href={tab.href} aria-current="page"
                                      className={"text-base font-medium text-white hover:text-gray-300"}>
                                    {tab.name}
                                </Link>
                            </div>
                        );
                    })};
                    <div className={"hidden space-x-8 lg:ml-10 lg:flex"}>
                        <button
                            type="button"
                            className={"text-base font-medium text-white hover:text-gray-300"}
                            onClick={() => void handleLogin()}
                        >
                            {session ? "Logout" : "Login"}
                        </button>
                    </div>
                </nav>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300">
                    <div className="absolute inset-x-0 origin-top p-2 lg:hidden">
                        <div
                            className="overflow-hidden rounded-lg bg-gray-800 shadow-md ring-1 ring-black ring-opacity-5">
                            <div className="flex items-center justify-between px-5 pt-4">
                                <div>
                                    {/* Keep the logo size consistent with the header */}
                                    <img src="./forexfactory-logo.png" className="h-10 w-auto sm:h-14" alt=""/>
                                </div>
                                <div className="-mr-2">
                                    <button
                                        className="inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
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
                                            className="h-8 w-8"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {/* tabs in mobile view */}
                            <div className="pt-5 pb-6">
                                <div className="space-y-1 px-2">
                                    {tabs.map((tab) => {
                                        if (tab.requiresAuth && !session) return null;
                                        return (
                                            <Link
                                                key={tab.name}
                                                href={tab.href}
                                                aria-current="page"
                                                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-900"
                                            >
                                                {tab.name}
                                            </Link>
                                        );
                                    })}
                                    <button
                                        className={"block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-900"}
                                        onClick={() => void handleLogin()}
                                    >
                                        {session ? "Logout" : "Login"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
export default Nav;