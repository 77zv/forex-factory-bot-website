import Layout from "./components/layout";

    type Section = {
    title: string;
    paragraphs: string[];
}

const sections: Section[] = [
    {
        title: "Why and How We Collect Your Data",
        paragraphs: [
            "Forex News Discord Bot primarily provides an automated application for chat and social platforms, referred to as the 'Service,' and is operated by Forex News Discord Bot (referred to as 'we,' 'us,' or 'forex-news-discord-bot.vercel.app') for users of the Service ('you'). This Privacy Policy outlines our policy concerning information collected from users of the Service. According to applicable law, forex-news-discord-bot.vercel.app acts as the 'data controller' for personal data collected during your use of the Service.",
        ],
    },
    {
        title: "What Information Do We Collect",
        paragraphs: [
            "When you interact with us through the Service, we may collect information from you, as described below. We collect information when you voluntarily provide it, such as during registration for access to our Services. Information we collect from Discord may include, but is not limited to:",
            "(i) User data: We store your user id in our database and cache your user id, username, discriminator, and avatar.",
        ],
    },
    {
        title: "Where Your Data Is Processed",
        paragraphs: [
            "forex-news-discord-bot.vercel.app is based in France. Regardless of your location, you consent to the processing and transfer of your information to France and other countries. The data collection and use laws in France and other countries may not be as comprehensive or protective as the laws in your country.",
            "Our servers are located in Germany (Falkenstein).",
        ],
    },
    {
        title: "What We Do With Your Data",
        paragraphs: [
            "We use the information you provide in a manner consistent with this Privacy Policy. If you provide information for a specific reason, we may use it for that reason. Additionally, if you provide information to gain access to the Services, we will use your information to provide access and monitor your usage. We use your data to:",
            "(i) Monitor your compliance with our Terms of Service.",
            "(ii) Allow you to persistently store data and settings.",
            "(iii) Comply with legal requirements. We do not sell your data.",
        ],
    },
    {
        title: "How Long We Store Data",
        paragraphs: [
            "We strive to minimize the duration for which we store your data. At most, we store the following data from Discord:",
            "(i) Your user id in our database, with no time limit.",
            "(ii) Your user id, username, discriminator, and avatar, for no longer than 30 days. This data is only cached and is never saved to disk; typically, it is stored for a considerably shorter period.",
        ],
    },
    {
        title: "What Data We Store About You",
        paragraphs: [
            "To access the exact data we store, please contact us via Discord at support.forex-news-discord-bot.vercel.app by creating a ticket. You have the right to request us to stop storing any data related to you or to ask us to retrieve the data we store about you. Both processes may take up to 30 days.",
        ],
    },
    {
        title: "Final",
        paragraphs: [
            "We reserve the right to update or modify this Privacy Policy at any time and without prior notice. Please review this policy periodically, especially before providing any information. This Privacy Policy was last updated on the date indicated above. Your continued use of the Service following changes or revisions to this Privacy Policy indicates your agreement with the terms of the revised Privacy Policy."
        ],
    },
];

const PrivacyPolicy = () => {

    return (
        <Layout title={"Terms Of Service"} name={"Terms Of Service"} content={"Forex Factory Terms Of Service"}>
            <div className={"bg-gray-800 sm:pt-16 lg:overflow-hidden lg:mb-0 lg:pt-8 lg:pb-14"}>
                <div className={"mx-auto max-w-7xl lg:px-8"}>
                    <div className={"mx-auto max-w-md px-6 sm:max-w-2xl sm:text-left lg:flex lg:items-start lg:px-0 lg:text-left"}>
                        <div className={""}>
                            <h1 className={"sm:mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-6xl"}>
                                <span className={"block"}>Terms of Service</span>
                            </h1>
                            {sections.map((section, index) => {
                                return (
                                    <div key={index}>
                                        <br/>
                                        <h1 className={"text-2xl font-semibold tracking-tight text-white sm:text-2xl lg:mt-3 xl:text-3xl"}>
                                            <span className={"block"}>{index + 1}. {section.title}</span>
                                        </h1>
                                        {section.paragraphs.length > 0 && (
                                            <div>
                                                <br/>
                                                {section.paragraphs.map((paragraph, paragraphIndex) => (
                                                    <p
                                                        key={paragraphIndex} // Add a unique key for each paragraph
                                                        className={"mt-1 mb-3 text-base text-gray-300 sm:mt-1 sm:text-xl lg:text-lg xl:text-xl"}
                                                    >
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default PrivacyPolicy;