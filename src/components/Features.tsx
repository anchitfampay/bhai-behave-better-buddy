
import React from 'react';

const Features = () => {
  const features = [{
    title: "Hindi Slangs on Dynamic Nudges",
    description: "When you're doom-scrolling at 3AM, YoBh.ai doesn't \"suggest\" better habits. It says \"Band kar ke so ja chutiye\" – and somehow, it works.",
    color: "bg-gray-800/60",
    borderColor: "border-gray-700",
    textColor: "text-white"
  }];

  return (
    <section id="features" className="py-32 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900/20 pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">Not Your <span className="text-amber-500">Gentle</span> Reminder App</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            When you're doom-scrolling at 3AM, YoBh.ai doesn't "suggest" better habits. It says "Band kar ke so ja chutiye" – and somehow, it works.
          </p>
        </div>
        
        <div className="flex justify-center mb-16">
          <img 
            src="/public/lovable-uploads/e6f4b622-2bd0-4b50-9ddb-da5493ed1610.png" 
            alt="Mukkad Saala" 
            className="w-48 h-48 object-contain"
          />
        </div>
        
        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* First feature card for Hindi Slangs */}
          <div className="rounded-3xl p-8 border border-gray-800/50 shadow-lg backdrop-blur-xl bg-gray-900/60">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Hindi Slangs on Dynamic Nudges</h3>
              <p className="text-lg text-gray-300">
                Choose Standard for straightforward nudges or Extreme for the full desi roommate experience. Complete a workout? Receive money? We celebrate wins with the same energy we roast your fails.
              </p>
              <div className="flex justify-center">
                <img 
                  src="/public/lovable-uploads/cdc2bd95-f167-42d0-b007-005bca04b0df.png" 
                  alt="Hindi Slang Examples" 
                  className="w-full max-w-md rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
          
          {/* Second feature card for Unfiltered Hindi Slangs */}
          <div className="rounded-3xl p-8 border border-gray-800/50 shadow-lg backdrop-blur-xl bg-gray-900/60">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Unfiltered Hindi Slangs</h3>
              <p className="text-lg text-gray-300">
                From "Mukkad Saala, Fat Jayega!" to "Ameeri Aayi BC!" - we keep it real with desi slangs that hit different. Our AI understands the cultural nuances that make Hindi slangs so effective.
              </p>
              <div className="flex justify-center gap-6">
                <img 
                  src="/public/lovable-uploads/489a8f06-c8c6-42f8-bc90-692c2d1bfe7a.png" 
                  alt="Mukkad Saala" 
                  className="w-36 h-36 object-contain"
                />
                <img 
                  src="/public/lovable-uploads/7588d892-25ce-4065-8190-71bb32019561.png" 
                  alt="Ameeri Aayi" 
                  className="w-36 h-36 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
