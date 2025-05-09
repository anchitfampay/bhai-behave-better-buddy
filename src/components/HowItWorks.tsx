
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Settings2, Target, Zap } from "lucide-react";
const HowItWorks = () => {
  const steps = [{
    number: "01",
    icon: Download,
    title: "Install",
    description: "Download. Enable. Choose your roast level.",
    color: "from-amber-500 to-amber-600"
  }, {
    number: "02",
    icon: Settings2,
    title: "Select Weak Spots",
    description: "Tell us which bad habits need the most attention.",
    color: "from-amber-400 to-amber-500"
  }, {
    number: "03",
    icon: Target,
    title: "Meet Your Digital Roommate",
    description: "As you mess up, we step in with zero filter.",
    color: "from-amber-300 to-amber-400"
  }, {
    number: "04",
    icon: Zap,
    title: "Actually Change",
    description: "Turns out, brutal honesty works better than gentle reminders.",
    color: "from-amber-200 to-amber-300"
  }];
  return <section id="how-it-works" className="py-24 relative bg-black">
      <div className="container px-4 md:px-6 relative z-10 py-0">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black mb-4 text-white md:text-5xl">Brutally <span className="text-amber-500">Simple</span></h2>
        </div>
        
        <div className="flex flex-col md:flex-row flex-wrap max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4 text-center">
              <div className={`bg-gradient-to-b ${step.color} rounded-3xl p-6 h-full backdrop-blur-xl bg-opacity-20 border border-amber-500/10`}>
                <div className="text-lg font-bold mb-2 text-white">{step.number}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center my-0">
          <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-6 text-lg rounded-full border-4 border-black shadow-lg">
            <span className="relative z-10">Get Your Digital Reality Check</span>
          </Button>
        </div>
      </div>
    </section>;
};
export default HowItWorks;
