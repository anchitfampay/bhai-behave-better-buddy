
import React from 'react';
import { Button } from "@/components/ui/button";
import { Zap, AlertTriangle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative bg-white">
      <div className="absolute inset-0 z-0">
        {/* Desi Pop background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#FF4D4D]/10"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#3CDFFF]/10"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-[#FFA726]/10"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FF4D4D]/10 text-[#FF4D4D] text-sm font-bold border-2 border-[#FF4D4D] mb-6">
            <Zap size={16} className="mr-2" />
            <span>FINALLY AN APP WITH ATTITUDE</span>
          </div>
          
          <h1 className="font-black tracking-tight text-5xl md:text-7xl lg:text-8xl mb-4 text-gray-800">
            Yo <span className="text-[#FF4D4D]">Bh.ai</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Your Phone Finally Has The Balls To Call You Out
          </h2>
          
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-600">
            Your Own Brutally Honest AI that breaks bad digital habits with real-time interventions in Hindi slang that somehow works better than any mindfulness app.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Button className="bg-[#FF4D4D] hover:bg-[#FF2525] text-white font-bold text-lg px-8 py-6 rounded-full border-4 border-white shadow-lg">
              <span className="relative z-10">Get Your Digital Reality Check</span>
            </Button>
          </div>
          
          <div className="relative mt-20 w-full max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl border-4 border-gray-200 p-6 shadow-2xl overflow-hidden">
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#FF4D4D]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFA726]"></div>
                <div className="w-3 h-3 rounded-full bg-[#4CAF50]"></div>
              </div>
              
              <div className="relative rounded-2xl bg-gray-100 p-8 mb-6">
                <div className="absolute top-4 right-4 bg-[#FF4D4D] text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  <AlertTriangle size={14} className="mr-1" />
                  REALITY CHECK
                </div>
                
                <div className="flex justify-between items-start mt-8">
                  <div className="bg-white p-4 rounded-xl shadow-md max-w-xs">
                    <p className="text-gray-800 font-bold">Scrolling for 2 hours now...</p>
                  </div>
                  
                  <div className="bg-[#FF4D4D] p-4 rounded-xl shadow-md max-w-xs text-white">
                    <p className="font-bold">Abhi bhi jaga hua hai bkl?</p>
                    <p className="text-sm mt-1">2:34 AM</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">USAGE PATTERN</p>
                  <p className="text-2xl font-bold text-gray-800">-37%</p>
                  <p className="text-xs text-gray-600">Bad habits in 2 weeks</p>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">REALITY CHECKS</p>
                  <p className="text-2xl font-bold text-gray-800">42%</p>
                  <p className="text-xs text-gray-600">More productive focus time</p>
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
