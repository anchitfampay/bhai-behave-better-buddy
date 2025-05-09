
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Features = () => {
  const [showBentos, setShowBentos] = useState(false);

  const toggleBentos = () => {
    setShowBentos(!showBentos);
  };

  return (
    <section id="features" className="py-16 md:py-24 min-h-screen flex flex-col justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 relative z-10 mx-auto bg-black flex flex-col h-full">
        <div className="text-center mb-8 flex-grow flex flex-col justify-center items-center bg-black py-16">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-white leading-tight">
            Not Your <span className="text-amber-500">Gentle</span> Reminder App
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            When you&apos;re doom-scrolling at 3AM, YoBh.ai doesn&apos;t &quot;suggest&quot; better habits. 
            It says &quot;Band kar ke so ja chutiye&quot; – and somehow, it works.
          </p>
          
          <Button
            onClick={toggleBentos}
            variant="ghost"
            className="flex items-center gap-2 text-amber-500 hover:text-amber-400 hover:bg-transparent mt-8"
          >
            See Features <ChevronDown className={`transition-transform duration-300 ${showBentos ? 'rotate-180' : ''}`} />
          </Button>
        </div>
        
        {/* Feature cards stacked vertically - only shown when toggled */}
        <div className={`flex flex-col gap-16 max-w-6xl mx-auto bg-black transition-all duration-500 ease-in-out ${showBentos ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          {/* First bento: Unfiltered and shameful - text on left, image on right */}
          <div className="rounded-3xl p-8 border border-gray-800/50 shadow-lg backdrop-blur-xl bg-gray-900/60">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">Unfiltered and shameful</h3>
                <p className="text-lg text-gray-300">
                  We keep it real with desi slangs that will hit different. From "Mukkad Saala, Fat Jayega!" to "Ameeri Aayi BC!" - our AI understands the cultural nuances that make Hindi slangs so effective.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/public/lovable-uploads/e553a807-f363-4bb3-b80f-4fe08e0cdbb9.png" 
                  alt="Ameeri Aayi and Mukkad Saala" 
                  className="w-full max-w-md rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
          
          {/* Second bento: Wallpapers, overlays and many more - text on right, image on left */}
          <div className="rounded-3xl p-8 border border-gray-800/50 shadow-lg backdrop-blur-xl bg-gray-900/60">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center order-1 md:order-none">
                <img 
                  src="/public/lovable-uploads/cdc2bd95-f167-42d0-b007-005bca04b0df.png" 
                  alt="Wallpapers and Overlays" 
                  className="w-full max-w-md rounded-2xl shadow-xl"
                />
              </div>
              <div className="space-y-6 order-none md:order-1">
                <h3 className="text-3xl font-bold text-white">Wallpapers, overlays and many more</h3>
                <p className="text-lg text-gray-300">
                  We celebrate wins with the same energy we roast your falls. Choose Standard for straightforward nudges or Extreme for the full desi roommate experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
