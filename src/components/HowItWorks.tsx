
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
      color: "from-amber-500 to-amber-600"
    },
    {
      number: "02",
      icon: Settings2,
      title: "Select Weak Spots",
      description: "Tell us which bad habits need the most attention.",
      color: "from-amber-400 to-amber-500"
    },
    {
      number: "03",
      icon: Target,
      title: "Meet Your Digital Roommate",
      description: "As you mess up, we step in with zero filter.",
      color: "from-amber-300 to-amber-400"
    },
    {
      number: "04",
      icon: Zap,
      title: "Actually Change",
      description: "Turns out, brutal honesty works better than gentle reminders.",
      color: "from-amber-200 to-amber-300"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">Brutally <span className="text-amber-500">Simple</span></h2>
          <p className="text-lg text-gray-400 max-w-lg mx-auto">
            Four steps to digital discipline.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row flex-wrap max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative group w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className={`w-20 h-20 rounded-full bg-black border-4 border-amber-500 flex items-center justify-center mb-6 relative overflow-hidden shadow-lg`}>
                <span className="absolute -top-2 -right-2 bg-amber-500 px-2 py-0.5 text-xs rounded-full text-black font-bold">{step.number}</span>
                <step.icon size={32} className="text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent relative my-4">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-amber-500 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-6 text-lg rounded-full border-4 border-black shadow-lg">
            <span className="relative z-10">Get Your Digital Reality Check</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
