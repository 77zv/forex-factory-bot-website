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
            <p>
              This Privacy Policy explains how we collect, use, and protect your personal information.
            </p>
            <p>
              We are committed to ensuring the privacy and security of your data.
            </p>
            {/* Add more privacy policy content here */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 