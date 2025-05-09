
import React from 'react';
import { MessageCircle, Image, BarChart, Star } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Unfiltered Hindi Slang",
      description: "Choose Standard for straightforward nudges or Extreme for the full desi roommate experience.",
      icon: MessageCircle,
      color: "bg-[#FF4D4D]",
      borderColor: "border-[#FF4D4D]",
      textColor: "text-[#FF4D4D]"
    },
    {
      title: "Dynamic Wallpapers",
      description: "Order junk food? Your wallpaper shows your growing belly. Money hits your account? \"Ameeri bc!\" takes over your screen.",
      icon: Image,
      color: "bg-[#3CDFFF]",
      borderColor: "border-[#3CDFFF]",
      textColor: "text-[#3CDFFF]"
    },
    {
      title: "App Monitoring That Matters",
      description: "Social, food delivery, shopping – we watch where you're weakest.",
      icon: BarChart,
      color: "bg-[#FFA726]",
      borderColor: "border-[#FFA726]",
      textColor: "text-[#FFA726]"
    },
    {
      title: "Positive Reinforcement",
      description: "Complete a workout? Receive money? We celebrate wins with the same energy we roast your fails.",
      icon: Star,
      color: "bg-[#4CAF50]",
      borderColor: "border-[#4CAF50]",
      textColor: "text-[#4CAF50]"
    }
  ];

  return (
    <section id="features" className="py-32 relative overflow-hidden bg-white">
      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-gray-800">Not Your <span className="text-[#FF4D4D]">Gentle</span> Reminder App</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            When you're doom-scrolling at 3AM, YoBh.ai doesn't "suggest" better habits. It says "Band kar ke so ja chutiye" – and somehow, it works.
          </p>
        </div>
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center bg-white rounded-2xl p-6 border-4 border-white shadow-lg hover:-translate-y-1 transition-transform"
              style={{ boxShadow: `0 10px 25px -5px ${feature.color.replace('bg-', '').replace('[', '').replace(']', '')}30` }}
            >
              <div className={`relative w-20 h-20 rounded-full ${feature.color} flex items-center justify-center mb-8 border-4 border-white`}>
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
