import React from 'react';
const Features = () => {
  const features = [{
    title: "Unfiltered Hindi Slang",
    description: "Choose Standard for straightforward nudges or Extreme for the full desi roommate experience.",
    color: "bg-gray-800/60",
    borderColor: "border-gray-700",
    textColor: "text-white"
  }, {
    title: "Dynamic Wallpapers",
    description: "Order junk food? Your wallpaper shows your growing belly. Money hits your account? \"Ameeri bc!\" takes over your screen.",
    color: "bg-gray-800/60",
    borderColor: "border-gray-700",
    textColor: "text-white"
  }, {
    title: "App Monitoring That Matters",
    description: "Social, food delivery, shopping – we watch where you're weakest.",
    color: "bg-gray-800/60",
    borderColor: "border-gray-700",
    textColor: "text-white"
  }, {
    title: "Positive Reinforcement",
    description: "Complete a workout? Receive money? We celebrate wins with the same energy we roast your fails.",
    color: "bg-gray-800/60",
    borderColor: "border-gray-700",
    textColor: "text-white"
  }];
  return <section id="features" className="py-32 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900/20 pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">Not Your <span className="text-amber-500">Gentle</span> Reminder App</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            When you're doom-scrolling at 3AM, YoBh.ai doesn't "suggest" better habits. It says "Band kar ke so ja chutiye" – and somehow, it works.
          </p>
        </div>
        
        <div className="flex justify-center mb-16 text-6xl">
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => <div key={index} className="rounded-3xl p-6 md:p-8 border border-gray-800/50 shadow-lg hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl bg-gray-900/60 h-full">
              <div className={`w-16 h-16 rounded-2xl ${feature.color} mb-6 mx-auto`}></div>
              <h3 className="text-2xl font-bold text-white text-center">{feature.title}</h3>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Features;