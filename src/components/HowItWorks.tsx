
import React from 'react';
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Install the App",
      description: "Download Bh.ai and grant the necessary permissions for monitoring your digital activity.",
      color: "from-bhai-purple to-bhai-purple-dark"
    },
    {
      number: "2",
      title: "Personalize Your Experience",
      description: "Choose your preferred language, intervention style, and notification frequency.",
      color: "from-bhai-purple-light to-bhai-purple"
    },
    {
      number: "3",
      title: "Set Your Goals",
      description: "Define which apps you want to limit and set your daily usage targets.",
      color: "from-bhai-orange-light to-bhai-orange"
    },
    {
      number: "4",
      title: "Experience Bh.ai Interventions",
      description: "Receive contextually relevant nudges, roasts, and encouragement based on your activity.",
      color: "from-bhai-orange to-bhai-orange-dark"
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Steps to Digital Wellbeing</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Getting started with Bh.ai is easy. Here's how you can begin your journey toward healthier digital habits.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xl font-bold mb-4`}>
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-foreground/70">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block w-full h-0.5 bg-border relative mt-8">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 border-t-2 border-r-2 border-border"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="btn-gradient px-8 py-6 text-lg">Join the Waitlist</Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
