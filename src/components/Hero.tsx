
import React from 'react';
import { Button } from "@/components/ui/button";
import { Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        {/* Neural spire background effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 transform translate-x-20 w-[1px] h-3/4 bg-gradient-to-b from-transparent via-ice-blue/20 to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 transform -translate-x-20 w-[1px] h-3/4 bg-gradient-to-b from-transparent via-pulse-violet/20 to-transparent"></div>
        
        <div className="absolute top-20 left-1/3 w-64 h-64 rounded-full bg-blue-500/5 blur-[100px]"></div>
        <div className="absolute bottom-20 right-1/3 w-80 h-80 rounded-full bg-indigo-500/5 blur-[100px]"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-foreground/5 text-blue-400 text-xs font-medium border border-blue-500/20 mb-6">
            <Zap size={12} className="mr-2" />
            <span>TRUTH INTEGRATION ACTIVATED</span>
          </div>
          
          <h1 className="font-black tracking-tight text-5xl md:text-7xl lg:text-8xl mb-4 relative">
            <span className="gradient-text">Yo Bh.ai</span>
          </h1>
          
          <h2 className="text-lg md:text-2xl font-medium mb-10 max-w-3xl mx-auto text-foreground/80">
            your own brutally honest AI that breaks bad digital habits with real-time interventions
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Button className="btn-gradient py-6 px-8 font-bold relative overflow-hidden group text-lg prismatic-border">
              <span className="relative z-10">Access Neural Link</span>
            </Button>
          </div>
          
          <div className="relative mt-20 w-full max-w-5xl mx-auto">
            <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-blue-900/20 to-indigo-900/10 rounded-xl overflow-hidden border border-blue-500/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative h-32">
                    <div className="w-1 h-32 bg-gradient-to-t from-blue-400/30 to-indigo-500/30 mx-auto"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full blur-sm animate-pulse"></div>
                  </div>
                  <p className="mt-4 text-blue-400 font-medium">Neural Link Visualizer</p>
                </div>
              </div>
              
              {/* UI Overlay elements */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="h-6 w-32 bg-blue-900/30 rounded-md border border-blue-500/20"></div>
              </div>
              
              {/* Floating UI elements */}
              <div className="absolute bottom-8 left-8 w-48 bg-card/40 backdrop-blur-md p-3 rounded-lg border border-blue-500/20">
                <div className="text-xs text-blue-400 mb-1">USAGE PATTERN</div>
                <div className="text-2xl font-bold">10.5%</div>
                <div className="text-xs text-foreground/60">Digital intervention effective</div>
              </div>
              
              <div className="absolute bottom-8 right-8 w-48 bg-card/40 backdrop-blur-md p-3 rounded-lg border border-blue-500/20">
                <div className="text-xs text-indigo-400 mb-1">NEURAL ALERTS</div>
                <div className="text-2xl font-bold">35.8K</div>
                <div className="text-xs text-foreground/60">Reality checks delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
