import Layout from "~/pages/components/layout";

const TermsOfService = () => {

    type Section = {
        title: string;
        paragraphs: string[];
    }

    const sections: Section[] = [
        {
            title: "Accepting the Terms",
            paragraphs: [
                "Thanks for checking out Invite Tracker! These Terms of Service ('Terms', 'ToS') are a legal agreement between Invite Tracker ('we', 'us', 'invite-tracker.com') and you ('you' or 'your'). By inviting or using Invite Tracker or our website collectively referred to as 'Invite Tracker' or the 'Service' you agree if you are the age of majority in your jurisdiction or over, that you have read, understood, and accept to be bound by the Terms, and if you are below the age of majority in your jurisdiction, that your legal guardian has reviewed and agrees to these Terms.",
                "At any time do we reserve the right to update these Terms with reasons including, but not limiting to adhering to new legal requirements, or improving your experience using Invite Tracker. If the aforementioned changes affect your usage of Invite Tracker or your legal rights, we will notify you no less than seven days before the changes take effect. Unless we state otherwise, your continued use of the Service after we post modifications will constitute your acceptance of and agreement to those changes. If you object to the changes, your recourse shall be to cease using the Service."
            ]
        },
        {
            title: "Your Rights to use The Service",
            paragraphs: [
                "The Service mainly acts as an automated application for chat and social platforms. The Service may allow you to gather or modify information or files and communicate with other users. Subject to your compliance with these Terms, invite-tracker.com grants you a limited, revocable, non-exclusive, non-transferable, non-sublicensable license to use and access the Service solely for your personal, non-commercial use, unless we agree to your commercial use in writing. You agree not to (and not to attempt to)",
                "(i) use the Service for any use or purpose other than as expressly permitted by these Terms;",
                "(ii) copy, adapt, modify, prepare derivative works based upon, distribute, license, sell, transfer, publicly display, publicly perform, transmit, stream, broadcast, attempt to discover any source code, reverse engineer, decompile, disassemble, or otherwise exploit the Service or any portion of the Service, except as expressly permitted in these Terms or the included License; or",
                "(iii) use data mining, robots, spiders, or similar data gathering and extraction tools on the Service. No licenses or rights are granted to you by implication or otherwise under any intellectual property rights owned or controlled by invite-tracker.com or its licensors, except for the permissions and rights expressly granted in these Terms. invite-tracker.com reserves the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. invite-tracker.com reserves the right to refuse any user access to the Services without notice for any reason, including but not limited to a violation of the Terms. If you violate these Terms, invite-tracker.com reserves the right to issue you a warning regarding the violation or immediately terminate or suspend any or all Accounts you have created using the Service. You agree that invite-tracker.com need not provide you notice before terminating or suspending your Account(s), but it may do so.",
            ],
        },
        {
            title: "Your Account",
            paragraphs: [
                "You are responsible for your log-in credentials and for any activity resulting from the use of your log-in credentials or other activity on your account (“Account”) on the Service. You represent and warrant that the information you provide to us upon registration and at all other times will be true, accurate, current, and complete. You are responsible for maintaining the confidentiality of your log-in credentials and are fully responsible for all activities that occur through the use of your credentials or otherwise on your Account. You agree to notify us immediately if you believe the confidentiality of your log-in credentials has been compromised or if you suspect unauthorized use of your Account. You agree that we will not be liable for any loss or damage arising from unauthorized use of your credentials.",
            ],
        },
        {
            title: "Communications",
            paragraphs: [
                "(i) You agree to receive communications from us electronically, such as email, or messages on a chat or social platform. By using the Service or providing information to us, you agree that we may communicate with you electronically regarding security, privacy, and administrative issues relating to your use of the Service, and that all agreements, notices, disclosures, and other communications that invite-tracker.com provides to you electronically satisfy any legal requirements that such communications be in writing.",
                "(ii) You agree that your use of the Service will not include sending unsolicited marketing messages or broadcasts (i.e., spam) or infract the Terms of Service of any chat or social platform.",
            ],
        },
        {
            title: "Intellectual Property",
            paragraphs: [
                "All rights, title and interest in and to all materials that are part of the Service (including, but not limited to, designs, text, graphics, pictures, video, information, applications, software, music, sound and other files, and their selection and arrangement), collectively referred to as the 'Materials' are, as between invite-tracker.com and you, owned by invite-tracker.com and/or its third party licensors.",
                "(i) You agree that you shall not modify, copy, distribute, frame, reproduce, republish, download, scrape, display, post, transmit, or sell in any form or by any means, in whole or in part, or otherwise exploit the Materials without our express prior written permission.",
                "(ii) You acknowledge that you do not acquire any ownership rights by using the Service or by accessing any Materials posted on the Service by invite-tracker.com or by users, or any derivative works thereof. All rights not expressly granted by these Terms are reserved by invite-tracker.com and its licensors, and no license is granted hereunder by estoppel, implication or otherwise.",
            ],
        },
        {
            title: "Your Content",
            paragraphs: [
                "Any data, text, graphics, photographs and their selection and arrangement, and any other materials uploaded to the Service by you is 'Your Content'.",
                "(i) You represent and warrant that Your Content is original to you and that you exclusively own the rights to such content, including the right to grant all of the rights and licenses in these Terms without invite-tracker.com incurring any third party obligations or liability arising out of its exercise of such rights and licenses.",
                "(ii) All of Your Content is your sole responsibility and invite-tracker.com is not responsible for any material that you upload, post, or otherwise make available. By uploading, distributing, transmitting or otherwise using Your Content with the Service, you grant to us a perpetual, nonexclusive, transferable, royalty-free, sublicensable, and worldwide license to use, host, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display Your Content in connection with operating and providing the Service. invite-tracker.com does not guarantee the accuracy, quality, or integrity of any user content posted.",
                "(iii) By using the Service, you acknowledge and accept that you may be exposed to material you find offensive or objectionable. You agree that invite-tracker.com will not under any circumstances be liable for any user content, including, but not limited to, errors in any user content, or any loss or damage incurred by use of user content.",
                "(iv) invite-tracker.com reserves the right to remove and permanently delete Your Content from the Service with or without notice for any reason or no reason.",
            ],
        },
        {
            title: "Rules of Conduct and Usage Guidelines",
            paragraphs: [
                "(i) invite-tracker.com has no obligation to monitor any means of communicating using the Service but it may do so in connection with providing the Service. invite-tracker.com may also terminate or suspend your access to any communications using the Service at any time, without notice, for any reason.",
                "(ii) You acknowledge that any user content (including without limitation chats, postings, or materials posted by users) on the Service is neither endorsed nor controlled by us. invite-tracker.com will not under any circumstances be liable for any activity on the Service. invite-tracker.com is not responsible for information that you choose to share on the Service, or for the actions of other users.",
                "(iii) As a condition of your use of the Service, and without limiting your other obligations under these Terms, you agree to comply with the restrictions and rules of use set forth in these Terms Usage Guidelines as well as any additional restrictions or rules set forth in the Service. You agree not to use the Service in order to infract the Terms or Guidelines set by any chat or social platform.",
                "(iv) We reserve the right to determine what conduct we consider to be a violation of the Terms or improper use of the Service and to take action including termination of your Account and exclusion from further participation in the Service.",
            ],
        },
        {
            title: "Disclaimer of Warranty",
            paragraphs: [
                "THE SERVICES AND THE MATERIALS ARE PROVIDED 'AS IS' AND 'AS AVAILABLE' WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. YOUR USE OF THE SERVICES IS AT YOUR SOLE RISK. IN ADDITION, WHILE INVITE-TRACKER.COM ATTEMPTS TO PROVIDE A GOOD USER EXPERIENCE, WE CANNOT AND DO NOT REPRESENT OR WARRANT THAT THE SERVICES WILL ALWAYS BE SECURE OR ERROR-FREE OR THAT THE SERVICES WILL ALWAYS FUNCTION WITHOUT DELAYS, DISRUPTIONS, OR IMPERFECTIONS. THE FOREGOING DISCLAIMERS SHALL APPLY TO THE EXTENT PERMITTED BY APPLICABLE LAW.",
            ],
        },
        {
            title: "Limitation of Liability",
            paragraphs: [
                "TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL INVITE-TRACKER.COM, BE LIABLE TO YOU OR TO ANY THIRD PERSON FOR ANY CONSEQUENTIAL, INCIDENTAL, SPECIAL, PUNITIVE OR OTHER INDIRECT DAMAGES, INCLUDING ANY LOST PROFITS OR LOST DATA, ARISING FROM YOUR USE OF THE SERVICE OR OTHER MATERIALS ON, ACCESSED THROUGH OR DOWNLOADED FROM THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT INVITE-TRACKER.COM HAS BEEN ADVISED OF THE POSSIBILITY OF THESE DAMAGES. THE LIMITATIONS AND DISCLAIMERS IN THESE TERMS DO NOT PURPORT TO LIMIT LIABILITY OR ALTER RIGHTS THAT CANNOT BE EXCLUDED UNDER APPLICABLE LAW. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES OR LIMITATION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, WHICH MEANS THAT SOME OF THE ABOVE DISCLAIMERS AND LIMITATIONS MAY NOT APPLY TO YOU. IN THESE JURISDICTIONS, INVITE TRACKER'S LIABILITY WILL BE LIMITED TO THE GREATEST EXTENT PERMITTED BY LAW. YOU SPECIFICALLY ACKNOWLEDGE THAT INVITE-TRACKER.COM SHALL NOT BE LIABLE FOR USER CONTENT, INCLUDING WITHOUT LIMITATION YOUR CONTENT, OR THE DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF ANY THIRD PARTY AND THAT THE RISK OF HARM OR DAMAGE FROM THE FOREGOING RESTS ENTIRELY WITH YOU.",
            ],
        },
        {
            title: "Indemnification Clause",
            paragraphs: [
                "YOU AGREE TO INDEMNIFY AND HOLD INVITE-TRACKER.COM, HARMLESS FROM AND AGAINST ANY LOSS, LIABILITY, CLAIM, DEMAND, DAMAGES, COSTS AND EXPENSES, INCLUDING REASONABLE ATTORNEY'S FEES, ARISING OUT OF OR IN CONNECTION WITH",
                "(i) YOUR USE OF AND ACCESS TO THE SERVICE;",
                "(ii) YOUR VIOLATION OF ANY TERM OF THESE TERMS;",
                "(iii) YOUR VIOLATION OF ANY THIRD PARTY RIGHT, INCLUDING WITHOUT LIMITATION ANY COPYRIGHT, PROPERTY, OR PRIVACY RIGHT OR ANY THIRD PARTY AGREEMENT; OR",
                "(iv) ANY OF YOUR CONTENT OR INFORMATION IN YOUR ACCOUNT OR ANY OTHER INFORMATION YOU POST OR SHARE ON OR THROUGH THE SERVICE. AS USED IN THIS SECTION, 'YOU' SHALL INCLUDE ANYONE ACCESSING THE SERVICE USING YOUR CREDENTIALS.",
            ],
        },
    ];


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

export default TermsOfService;