
import React from 'react';
import { Bell, MessageCircle, Zap, Image } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Truth Pulse",
      description: "No filter.",
      icon: MessageCircle,
      color: "from-pulse-violet/20 to-pulse-violet/5",
      borderColor: "border-pulse-violet/20",
      textColor: "text-pulse-violet"
    },
    {
      title: "Neural Nudge",
      description: "Quick correction.",
      icon: Bell,
      color: "from-ice-blue/20 to-ice-blue/5",
      borderColor: "border-ice-blue/20",
      textColor: "text-ice-blue"
    },
    {
      title: "Hindi Protocol",
      description: "Native interface.",
      icon: MessageCircle,
      color: "from-pulse-violet/20 to-pulse-violet/5",
      borderColor: "border-pulse-violet/20",
      textColor: "text-pulse-violet"
    },
    {
      title: "Visual Matrix",
      description: "See truth.",
      icon: Image,
      color: "from-ice-blue/20 to-ice-blue/5",
      borderColor: "border-ice-blue/20",
      textColor: "text-ice-blue"
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-pulse-violet/5 to-transparent z-0"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Break <span className="gradient-text">Patterns</span></h2>
          <p className="text-lg text-foreground/70 max-w-lg mx-auto">
            No sugar coating.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card/30 backdrop-blur-md rounded-xl border border-pulse-violet/10 p-6 prismatic-border hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col items-center text-center"
            >
              <div className={`relative z-10 w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} ${feature.borderColor} border backdrop-blur-sm flex items-center justify-center mb-4 crystal-glow`}>
                <feature.icon className={`${feature.textColor}`} size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 relative z-10">{feature.title}</h3>
              <p className="text-foreground/70 relative z-10">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
