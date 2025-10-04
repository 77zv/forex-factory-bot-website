"use client";

import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Dashboard() {
  return (
    <>
      <Nav />
      <div className="min-h-screen bg-background-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="mt-4 text-xl text-background-300">
            Welcome to your dashboard. This page is under construction.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
} 