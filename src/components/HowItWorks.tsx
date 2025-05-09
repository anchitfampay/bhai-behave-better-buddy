
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Settings2, Target, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Download,
      title: "Install",
      description: "One tap. Done.",
      color: "from-bhai-purple/20 to-bhai-purple/10"
    },
    {
      number: "02",
      icon: Settings2,
      title: "Set Sass Level",
      description: "Choose your pain.",
      color: "from-bhai-purple-light/20 to-bhai-purple-light/10"
    },
    {
      number: "03",
      icon: Target,
      title: "Define Limits",
      description: "Your rules. Our enforcement.",
      color: "from-bhai-orange-light/20 to-bhai-orange-light/10"
    },
    {
      number: "04",
      icon: Zap,
      title: "Experience Reality",
      description: "Feel the intervention.",
      color: "from-bhai-orange/20 to-bhai-orange/10"
    }
  ];

  return (
    <section id="how-it-works" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/30 to-transparent z-0"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Digital <span className="gradient-text">Detox</span></h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Four steps to freedom.
          </p>
        </div>
        
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative">
              <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} backdrop-blur-sm border border-white/10 flex items-center justify-center text-white text-xl font-bold mb-8 relative group`}>
                <span className="absolute -top-3 -right-3 bg-background px-2 py-1 text-xs rounded-full border border-border/50">{step.number}</span>
                <step.icon size={36} className="text-foreground" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-foreground/70 text-lg">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block w-full h-0.5 bg-gradient-to-r from-transparent via-border to-transparent relative mt-8">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 border-t border-r border-border"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Button className="btn-gradient px-10 py-7 text-lg font-bold relative overflow-hidden group">
            <span className="relative z-10">Join Waitlist</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
