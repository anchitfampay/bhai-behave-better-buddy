
import React from 'react';
import { Button } from "@/components/ui/button";
import { Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        {/* Neural spire background effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-pulse-violet/30 to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 transform translate-x-20 w-[1px] h-3/4 bg-gradient-to-b from-transparent via-ice-blue/20 to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 transform -translate-x-20 w-[1px] h-3/4 bg-gradient-to-b from-transparent via-pulse-violet/20 to-transparent"></div>
        
        <div className="absolute top-20 left-1/3 w-32 h-32 rounded-full bg-pulse-violet/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-48 h-48 rounded-full bg-ice-blue/5 blur-3xl"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-black tracking-tight text-5xl md:text-7xl mb-4 relative">
            <span className="gradient-text">Yo Bh.ai</span>
          </h1>
          
          <h2 className="text-lg md:text-2xl font-medium mb-10 max-w-xl mx-auto text-foreground/80">
            your own brutally honest AI
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Button className="btn-gradient py-6 px-8 font-bold relative overflow-hidden group text-lg prismatic-border">
              <span className="relative z-10">Access Neural Link</span>
            </Button>
          </div>
          
          <div className="relative h-[500px] w-full max-w-[300px] mx-auto perspective-1000">
            {/* Crystalline spire visualization */}
            <div className="spire-container">
              <div className="spire"></div>
              
              <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 transform -translate-y-1/2 w-5 h-5 bg-pulse-violet rounded-full blur-sm animate-pulse"></div>
              
              <div className="absolute bottom-2/4 left-1/2 -translate-x-1/2 transform -translate-y-1/2 w-4 h-4 bg-ice-blue rounded-full blur-sm animate-pulse" style={{animationDelay: "1s"}}></div>
              
              <div className="absolute bottom-3/4 left-1/2 -translate-x-1/2 transform -translate-y-1/2 w-3 h-3 bg-pulse-violet rounded-full blur-sm animate-pulse" style={{animationDelay: "2s"}}></div>
            </div>
            
            {/* Neural message example floating above spire */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 crystal-glow">
              <div className="bg-card/80 backdrop-blur-md border border-pulse-violet/20 p-4 rounded-lg data-pulse">
                <p className="text-ice-blue text-sm font-semibold">Neural Alert</p>
                <p className="text-foreground/90 text-xs mt-1">Truth hits hard.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
