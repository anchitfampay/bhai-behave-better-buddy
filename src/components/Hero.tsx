
import React from 'react';
import { Button } from "@/components/ui/button";
import { Bell, Clock, MessageCircle, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-bhai-purple/10 to-transparent"></div>
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-bhai-purple/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-bhai-orange/20 blur-3xl"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-bhai-purple/10 text-bhai-purple text-sm font-bold mb-2 border border-bhai-purple/20 backdrop-blur-sm">
              <span className="mr-1">⚡</span> Digital Detox Done Right
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 relative">
              Meet <span className="gradient-text relative">Bh.ai</span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-bhai-purple to-bhai-orange"></span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              The Digital Habits Coach That <span className="text-bhai-orange">Calls You Out</span>
            </h2>
            <p className="text-lg text-foreground/80 md:text-xl mb-6 md:mb-8 max-w-[600px] font-medium">
              When your screen time hits <span className="text-bhai-purple font-bold">rock bottom</span>, Bh.ai hits back with AI-powered reality checks—from gentle nudges to savage Hindi roasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-gradient text-base py-6 px-8 font-bold relative overflow-hidden group">
                <span className="relative z-10">Get Early Access</span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
              <Button variant="outline" className="text-base py-6 px-8 backdrop-blur-sm bg-background/50 border-bhai-purple/30 hover:bg-bhai-purple/5">
                See How It Works
              </Button>
            </div>
            
            <div className="flex items-center mt-6 text-sm text-foreground/60 border border-border/40 rounded-lg px-4 py-2 backdrop-blur-sm bg-background/30 w-fit">
              <Zap size={16} className="mr-2 text-bhai-purple" />
              <span><span className="font-bold">2,000+</span> users already building better digital habits</span>
            </div>
          </div>
          
          <div className="relative mx-auto lg:mr-0 w-full max-w-[400px] h-[600px] perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-bhai-purple/30 to-bhai-orange/30 rounded-[40px] blur-3xl"></div>
            <div className="relative h-full w-full bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-md rounded-[30px] border border-white/10 shadow-xl overflow-hidden p-6 cyber-scan">
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-foreground/5 rounded-full backdrop-blur-sm border border-white/10"></div>
              
              <div className="bg-gradient-to-br from-bhai-purple/10 to-bhai-purple/5 backdrop-blur-sm rounded-2xl p-5 mb-6 shadow-sm border border-bhai-purple/20 transform hover:scale-[1.02] transition-transform">
                <div className="flex items-start gap-3">
                  <div className="h-12 w-12 rounded-xl bg-bhai-purple flex items-center justify-center text-white relative">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-bhai-orange border-2 border-background"></span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Bh.ai Alert</h4>
                    <div className="text-sm text-foreground/90 font-medium mt-1 bg-bhai-purple/5 p-2 rounded-lg border border-bhai-purple/10">
                      <p>अरे यार, 2 घंटे से सोशल मीडिया पे हो! कुछ काम भी कर लो। 😂</p>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs bg-bhai-purple/20 text-bhai-purple px-2 py-1 rounded-full">00:05s ago</span>
                      <span className="text-xs bg-background/50 backdrop-blur-sm px-2 py-1 rounded-full border border-border/30">Instagram</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 backdrop-blur-sm rounded-2xl p-5 mb-6 shadow-sm border border-red-500/20 transform hover:scale-[1.02] transition-transform">
                <div className="flex items-start gap-3">
                  <div className="h-12 w-12 rounded-xl bg-red-500 flex items-center justify-center text-white">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-red-500">Critical Intervention</h4>
                    <div className="text-sm text-foreground/90 font-medium mt-1 bg-red-500/5 p-2 rounded-lg border border-red-500/10">
                      <p>Abhi bhi jaga hua hai? Subah pachtayega! 😴</p>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs bg-red-500/20 text-red-500 px-2 py-1 rounded-full animate-pulse">LIVE</span>
                      <span className="text-xs bg-background/50 backdrop-blur-sm px-2 py-1 rounded-full border border-border/30">12:38 AM</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 backdrop-blur-sm rounded-2xl p-5 mb-6 shadow-sm border border-green-500/20 transform hover:scale-[1.02] transition-transform">
                <div className="flex items-start gap-3">
                  <div className="h-12 w-12 rounded-xl bg-green-500 flex items-center justify-center text-white">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-green-500">Positive Reinforcement</h4>
                    <div className="text-sm text-foreground/90 font-medium mt-1 bg-green-500/5 p-2 rounded-lg border border-green-500/10">
                      <p>Morning workout complete! That's what I'm talking about! 💪</p>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded-full">Fitness</span>
                      <span className="text-xs bg-background/50 backdrop-blur-sm px-2 py-1 rounded-full border border-border/30">07:15 AM</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-md rounded-xl border border-white/10 p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-bhai-purple to-bhai-orange"></div>
                    <span className="font-bold text-sm">Bh.ai</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-bhai-purple animate-pulse"></div>
                    <div className="h-2 w-2 rounded-full bg-bhai-orange animate-pulse" style={{animationDelay: "0.2s"}}></div>
                    <div className="h-2 w-2 rounded-full bg-bhai-purple animate-pulse" style={{animationDelay: "0.4s"}}></div>
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
