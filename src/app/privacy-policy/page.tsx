import Nav from "../components/nav";
import Footer from "../components/footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
          <div className="mt-6 text-gray-300 space-y-6">
            {sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-3">
                  {index + 1}. {section.title}
                </h2>
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-3">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

type Section = {
  title: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    title: "Why and How We Collect Your Data",
    paragraphs: [
      "Forex News Discord Bot primarily provides an automated application for chat and social platforms, referred to as the 'Service,' and is operated by Forex News Discord Bot (referred to as 'we,' 'us,' or 'noediscord.xylex.cloud') for users of the Service ('you'). This Privacy Policy outlines our policy concerning information collected from users of the Service. According to applicable law, noediscord.xylex.cloud acts as the 'data controller' for personal data collected during your use of the Service.",
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
      "noediscord.xylex.cloud is based in France. Regardless of your location, you consent to the processing and transfer of your information to France and other countries. The data collection and use laws in France and other countries may not be as comprehensive or protective as the laws in your country.",
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
      "To access the exact data we store, please contact us via Discord at support.noediscord.xylex.cloud by creating a ticket. You have the right to request us to stop storing any data related to you or to ask us to retrieve the data we store about you. Both processes may take up to 30 days.",
    ],
  },
  {
    title: "Final",
    paragraphs: [
      "We reserve the right to update or modify this Privacy Policy at any time and without prior notice. Please review this policy periodically, especially before providing any information. This Privacy Policy was last updated on the date indicated above. Your continued use of the Service following changes or revisions to this Privacy Policy indicates your agreement with the terms of the revised Privacy Policy."
    ],
  },
];