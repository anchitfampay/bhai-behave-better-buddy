
import React from 'react';
import { Bell, MessageCircle, Zap, Image } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Brutally Honest",
      description: "No filter. Just truth.",
      icon: MessageCircle,
      color: "from-bhai-purple/20 to-bhai-purple/5",
      borderColor: "border-bhai-purple/20",
      textColor: "text-bhai-purple"
    },
    {
      title: "Real-time Nudges",
      description: "Intervenes when needed.",
      icon: Bell,
      color: "from-bhai-orange/20 to-bhai-orange/5",
      borderColor: "border-bhai-orange/20",
      textColor: "text-bhai-orange"
    },
    {
      title: "Hindi Roasts",
      description: "Cultural. Contextual. Cutting.",
      icon: MessageCircle,
      color: "from-green-500/20 to-green-500/5",
      borderColor: "border-green-500/20",
      textColor: "text-green-500"
    },
    {
      title: "Visual Interventions",
      description: "See it. Feel it.",
      icon: Image,
      color: "from-blue-500/20 to-blue-500/5",
      borderColor: "border-blue-500/20",
      textColor: "text-blue-500"
    }
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/40 to-accent/0 z-0"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Break Bad <span className="gradient-text">Habits</span></h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Digital intervention with attitude.
          </p>
        </div>
        
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-md rounded-xl border border-white/10 p-8 shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col items-center text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} ${feature.borderColor} border backdrop-blur-sm flex items-center justify-center mb-6`}>
                <feature.icon className={`${feature.textColor}`} size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-3 relative z-10">{feature.title}</h3>
              <p className="text-foreground/70 relative z-10 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
