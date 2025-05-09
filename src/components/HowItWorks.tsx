
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
      color: "from-[#FF6B00] to-[#FF9D00]"
    },
    {
      number: "02",
      icon: Settings2,
      title: "Set Intensity",
      description: "Choose impact.",
      color: "from-[#FF9D00] to-[#FFB700]"
    },
    {
      number: "03",
      icon: Target,
      title: "Define Bounds",
      description: "Your rules.",
      color: "from-[#FFB700] to-[#FFCF00]"
    },
    {
      number: "04",
      icon: Zap,
      title: "Neural Shock",
      description: "Feel reality.",
      color: "from-[#FFCF00] to-[#FF6B00]"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 bg-black z-0"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Neural <span className="text-[#FF9D00]">Path</span></h2>
          <p className="text-lg text-foreground/70 max-w-lg mx-auto">
            Four steps. Freedom.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative group">
              <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${step.color} border border-white/10 flex items-center justify-center mb-6 relative overflow-hidden shadow-[0_0_15px_rgba(255,155,0,0.3)]`}>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
                <span className="absolute -top-2 -right-2 bg-black px-2 py-0.5 text-xs rounded-full border border-[#FF9D00]/40 text-[#FF9D00]">{step.number}</span>
                <step.icon size={32} className="text-white relative z-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-foreground/70">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block w-full h-px bg-gradient-to-r from-transparent via-[#FF9D00]/20 to-transparent relative my-4">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#FF9D00] rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-gradient-to-r from-[#FF6B00] to-[#FF9D00] hover:from-[#FF9D00] hover:to-[#FFB700] text-white font-semibold shadow-lg shadow-[#FF9D00]/25 px-8 py-5 text-lg font-bold relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
            <span className="relative z-10">Access Neural Link</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
