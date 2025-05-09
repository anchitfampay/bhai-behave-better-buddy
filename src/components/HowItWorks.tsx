
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Settings2, Target, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Download,
      title: "Install",
      description: "Download. Enable. Choose your roast level.",
      color: "from-[#FF6B00] to-[#FF9D00]"
    },
    {
      number: "02",
      icon: Settings2,
      title: "Select Weak Spots",
      description: "Tell us which bad habits need the most attention.",
      color: "from-[#FF9D00] to-[#FFB700]"
    },
    {
      number: "03",
      icon: Target,
      title: "Meet Your Digital Roommate",
      description: "As you mess up, we step in with zero filter.",
      color: "from-[#FFB700] to-[#FFCF00]"
    },
    {
      number: "04",
      icon: Zap,
      title: "Actually Change",
      description: "Turns out, brutal honesty works better than gentle reminders.",
      color: "from-[#FFCF00] to-[#FF6B00]"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative bg-white">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Brutally <span className="text-[#FF4D4D]">Simple</span></h2>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            Four steps to digital discipline.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative group">
              <div className={`w-20 h-20 rounded-full bg-white border-4 border-[#FF4D4D] flex items-center justify-center mb-6 relative overflow-hidden shadow-lg`}>
                <span className="absolute -top-2 -right-2 bg-[#FF4D4D] px-2 py-0.5 text-xs rounded-full text-white">{step.number}</span>
                <step.icon size={32} className="text-[#FF4D4D]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block w-full h-px bg-gradient-to-r from-transparent via-[#FF4D4D]/20 to-transparent relative my-4">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#FF4D4D] rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-[#FF4D4D] hover:bg-[#FF2525] text-white font-bold px-8 py-6 text-lg rounded-full border-4 border-white shadow-lg">
            <span className="relative z-10">Get Your Digital Reality Check</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
