
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Settings2, Target, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Download,
      title: "Install",
      description: "One tap.",
      color: "from-pulse-violet/20 to-pulse-violet/5"
    },
    {
      number: "02",
      icon: Settings2,
      title: "Set Intensity",
      description: "Choose impact.",
      color: "from-pulse-violet/15 to-pulse-violet/5"
    },
    {
      number: "03",
      icon: Target,
      title: "Define Bounds",
      description: "Your rules.",
      color: "from-ice-blue/20 to-ice-blue/5"
    },
    {
      number: "04",
      icon: Zap,
      title: "Neural Shock",
      description: "Feel reality.",
      color: "from-ice-blue/15 to-ice-blue/5"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-pulse-violet/5 via-ice-blue/5 to-transparent z-0"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Neural <span className="gradient-text">Path</span></h2>
          <p className="text-lg text-foreground/70 max-w-lg mx-auto">
            Four steps. Freedom.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative">
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${step.color} border border-pulse-violet/10 flex items-center justify-center mb-6 relative`}>
                <span className="absolute -top-2 -right-2 bg-card px-2 py-0.5 text-xs rounded-full border border-pulse-violet/30">{step.number}</span>
                <step.icon size={28} className="text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-foreground/70">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block w-full h-px bg-gradient-to-r from-transparent via-pulse-violet/20 to-transparent relative my-4">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-pulse-violet rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-blue-500/25 px-8 py-5 text-lg font-bold relative">
            <span className="relative z-10">Access Neural Link</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
