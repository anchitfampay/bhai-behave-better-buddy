
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Settings2, Target, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Download,
      title: "Install Bh.ai",
      description: "Download the app that judges your screen time so your friends don't have to.",
      color: "from-bhai-purple/20 to-bhai-purple/10"
    },
    {
      number: "02",
      icon: Settings2,
      title: "Set Your Sass Level",
      description: "Choose your language and just how brutally honest you want your AI companion to be.",
      color: "from-bhai-purple-light/20 to-bhai-purple-light/10"
    },
    {
      number: "03",
      icon: Target,
      title: "Define Your Limits",
      description: "Tell us which apps you're addicted to. Don't worry, we already know it's Instagram.",
      color: "from-bhai-orange-light/20 to-bhai-orange-light/10"
    },
    {
      number: "04",
      icon: Zap,
      title: "Experience Reality Checks",
      description: "Get contextual roasts when you're doom-scrolling at 2 AM on a work night.",
      color: "from-bhai-orange/20 to-bhai-orange/10"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/30 to-transparent z-0"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-foreground/5 backdrop-blur-sm text-foreground/70 text-sm font-medium border border-border mb-4">
            THE PROCESS
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">Easy Steps to <span className="gradient-text">Digital Sanity</span></h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Four simple steps between you and a healthier relationship with your phone. No therapy required.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} backdrop-blur-sm border border-white/10 flex items-center justify-center text-white text-xl font-bold mb-6 relative group`}>
                <span className="absolute -top-3 -right-3 bg-background px-2 py-1 text-xs rounded-full border border-border/50">{step.number}</span>
                <step.icon size={32} className="text-foreground" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-foreground/70">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block w-full h-0.5 bg-gradient-to-r from-transparent via-border to-transparent relative mt-8">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 border-t border-r border-border"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="btn-gradient px-8 py-6 text-lg font-bold relative overflow-hidden group">
            <span className="relative z-10">Join the Waitlist</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
