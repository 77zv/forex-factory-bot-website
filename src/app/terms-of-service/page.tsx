import Nav from "../components/nav";
import Footer from "../components/footer";

export default function TermsOfService() {
  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
          <div className="mt-6 text-gray-300 space-y-6">
            <p>
              These Terms of Service govern your use of the Forex Factory Bot website and Discord bot.
            </p>
            <p>
              By using our services, you agree to these terms. Please read them carefully.
            </p>
            {/* Add more terms of service content here */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 