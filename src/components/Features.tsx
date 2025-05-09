
import React from 'react';
import { Brain, Zap, MessageCircle, Layers } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Truth Pulse",
      description: "Brutally honest feedback. No filter. Direct insights that force you to confront reality and make meaningful changes.",
      icon: Brain,
      color: "bg-gradient-to-br from-blue-400/40 to-blue-600/20",
      borderColor: "border-blue-400/30",
      textColor: "text-blue-400"
    },
    {
      title: "Neural Nudge",
      description: "Quick behavioral corrections that immediately redirect your habits. Subtle but powerful prompts.",
      icon: Zap,
      color: "bg-gradient-to-br from-indigo-400/40 to-indigo-600/20",
      borderColor: "border-indigo-400/30",
      textColor: "text-indigo-400"
    },
    {
      title: "Hindi Protocol",
      description: "Native language interface that connects culturally. Roasting you in your mother tongue hits differently.",
      icon: MessageCircle,
      color: "bg-gradient-to-br from-blue-400/40 to-blue-600/20",
      borderColor: "border-blue-400/30",
      textColor: "text-blue-400"
    },
    {
      title: "Visual Matrix",
      description: "See your time being wasted in real-time visualizations. Track progress with brutally honest metrics.",
      icon: Layers,
      color: "bg-gradient-to-br from-indigo-400/40 to-indigo-600/20",
      borderColor: "border-indigo-400/30",
      textColor: "text-indigo-400"
    }
  ];

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Background gradients inspired by provided design */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent z-0"></div>
      <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-600/5 blur-[120px]"></div>
      <div className="absolute -bottom-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-indigo-600/5 blur-[120px]"></div>
      
      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Break <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Patterns</span></h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Bh.ai understands when you're scrolling mindlessly. It interrupts habits with hard truths, not gentle nudges.
          </p>
        </div>
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group"
            >
              <div className={`relative w-20 h-20 rounded-xl ${feature.color} ${feature.borderColor} border backdrop-blur-sm flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-lg shadow-blue-900/10`}>
                <feature.icon className={`${feature.textColor}`} size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
