
import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import InterventionShowcase from "@/components/InterventionShowcase";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-void-black overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="max-w-[90%] mx-auto my-10 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <Features />
        <div className="max-w-[90%] mx-auto my-10 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
        <InterventionShowcase />
        <div className="max-w-[90%] mx-auto my-10 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <HowItWorks />
        <div className="max-w-[90%] mx-auto my-10 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
        <Testimonials />
        <div className="max-w-[90%] mx-auto my-10 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
