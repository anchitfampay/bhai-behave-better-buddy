
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-40 pb-32 bg-black min-h-screen relative overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-amber-950/30 pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="font-black tracking-tight text-5xl md:text-7xl lg:text-8xl mb-8 text-white">
          Yo <span className="text-amber-500">Bh.ai</span>
        </h1>
        
        {/* Character image with white border */}
        <div className="relative w-48 h-48 mx-auto mb-8">
          <img 
            src="/lovable-uploads/efd04eea-709d-4ce3-942b-146e0888cd38.png" 
            alt="Brutally Honest AI Character" 
            className="w-full h-full object-cover rounded-full border-4 border-white"
          />
        </div>
        
        <h2 className="text-xl md:text-2xl font-medium mb-12 text-white">
          Your Own Brutally Honest AI
        </h2>
        
        <Button className="bg-white hover:bg-gray-100 text-black font-bold text-lg px-8 py-6 rounded-lg border-2 border-white shadow-lg mx-auto">
          Get app now
        </Button>
      </div>
    </section>
  );
};

export default Hero;
