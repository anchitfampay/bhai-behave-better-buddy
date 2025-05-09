
import React from 'react';
import { Button } from "@/components/ui/button";
import { Bell, Clock, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-bhai-purple/10 text-bhai-purple text-sm font-medium mb-2">
              Your Brutally Honest Digital Companion
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              Meet <span className="gradient-text">Bh.ai</span>, Your Digital Habits Coach
            </h1>
            <p className="text-lg text-foreground/80 md:text-xl mb-6 md:mb-8 max-w-[600px]">
              The AI companion that's not afraid to call you out when you're wasting time online. From gentle nudges to hilarious roasts—in Hindi or English—we help you build healthier digital habits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-gradient text-base py-6 px-8">
                Get Early Access
              </Button>
              <Button variant="outline" className="text-base py-6 px-8">
                Learn How It Works
              </Button>
            </div>
            
            <div className="flex items-center mt-6 text-sm text-foreground/60">
              <Clock size={16} className="mr-2" />
              <span>Join 2,000+ users already building better digital habits</span>
            </div>
          </div>
          
          <div className="relative mx-auto lg:mr-0 w-full max-w-[350px] h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-bhai-purple/20 to-bhai-orange/20 rounded-[40px] blur-2xl"></div>
            <div className="relative h-full w-full bg-card rounded-[30px] border border-border/50 shadow-xl overflow-hidden p-4 animate-float">
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-foreground/10 rounded-full"></div>
              
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-4 mb-4 shadow-sm border border-border/50">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-bhai-purple flex items-center justify-center text-white">
                    <Bell size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Bh.ai Alert</h4>
                    <p className="text-sm text-foreground/70">
                      अरे यार, 2 घंटे से सोशल मीडिया पे हो! कुछ काम भी कर लो। 😂
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-4 mb-4 shadow-sm border border-border/50">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-bhai-orange flex items-center justify-center text-white">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Bh.ai Motivation</h4>
                    <p className="text-sm text-foreground/70">
                      Morning workout complete! That's what I'm talking about! 💪
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-card rounded-xl border border-border p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-bhai-purple to-bhai-orange"></div>
                    <span className="font-medium text-sm">Bh.ai</span>
                  </div>
                  <div className="h-6 w-16 bg-bhai-purple/20 rounded-full"></div>
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
