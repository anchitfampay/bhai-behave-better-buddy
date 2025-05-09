
import React from 'react';
import { Button } from "@/components/ui/button";
import { Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-40 pb-28 md:pt-52 md:pb-40 overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-bhai-purple/10 to-transparent"></div>
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-bhai-purple/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-bhai-orange/20 blur-3xl"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-black tracking-tight text-5xl md:text-7xl mb-6">
            <span className="gradient-text">Bh.ai</span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-12 max-w-3xl mx-auto">
            Your Digital Reality Check.
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
            <Button className="btn-gradient text-base py-7 px-10 font-bold relative overflow-hidden group text-lg">
              <span className="relative z-10">Get Early Access</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </div>
          
          <div className="relative h-[600px] w-full max-w-[400px] mx-auto perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-bhai-purple/30 to-bhai-orange/30 rounded-[40px] blur-3xl"></div>
            <div className="relative h-full w-full bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-md rounded-[30px] border border-white/10 shadow-xl overflow-hidden p-6 cyber-scan">
              <div className="bg-gradient-to-br from-bhai-purple/10 to-bhai-purple/5 backdrop-blur-sm rounded-2xl p-5 mb-6 shadow-sm border border-bhai-purple/20 transform hover:scale-[1.02] transition-transform">
                <div className="flex items-start gap-3">
                  <div className="h-12 w-12 rounded-xl bg-bhai-purple flex items-center justify-center text-white relative">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Bh.ai Alert</h4>
                    <div className="text-sm text-foreground/90 font-medium mt-1 bg-bhai-purple/5 p-2 rounded-lg border border-bhai-purple/10">
                      <p>Abhi bhi jaga hua hai? Subah pachtayega! 😴</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
