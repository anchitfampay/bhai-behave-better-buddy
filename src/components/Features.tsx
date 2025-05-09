
import React from 'react';
import { Bell, MessageCircle, Zap, Clock, Smile, AlarmClock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Real-time Nudges",
      description: "Smart alerts when your thumb's getting too comfortable scrolling nowhere.",
      icon: Bell,
      color: "from-bhai-purple/20 to-bhai-purple/5",
      borderColor: "border-bhai-purple/20",
      textColor: "text-bhai-purple"
    },
    {
      title: "Savage Roasts",
      description: "When subtlety fails, our AI delivers burns so hot they'd make your phone overheat.",
      icon: MessageCircle,
      color: "from-bhai-orange/20 to-bhai-orange/5",
      borderColor: "border-bhai-orange/20",
      textColor: "text-bhai-orange"
    },
    {
      title: "Victory Vibes",
      description: "Put down the phone, pick up a book? That's worth celebrating with digital confetti.",
      icon: Zap,
      color: "from-green-500/20 to-green-500/5",
      borderColor: "border-green-500/20",
      textColor: "text-green-500"
    },
    {
      title: "Habit Analytics",
      description: "See exactly how many hours you've wasted watching cat videos instead of adulting.",
      icon: Clock,
      color: "from-blue-500/20 to-blue-500/5",
      borderColor: "border-blue-500/20",
      textColor: "text-blue-500"
    },
    {
      title: "Digital Personality",
      description: "Adjust tone from 'gentle friend' to 'that brutally honest cousin who doesn't sugarcoat'.",
      icon: Smile,
      color: "from-purple-500/20 to-purple-500/5",
      borderColor: "border-purple-500/20",
      textColor: "text-purple-500"
    },
    {
      title: "Goal Enforcement",
      description: "Set limits for your future self, let Bh.ai be the bad guy when you try to cheat.",
      icon: AlarmClock,
      color: "from-amber-500/20 to-amber-500/5",
      borderColor: "border-amber-500/20",
      textColor: "text-amber-500"
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/40 to-accent/0 z-0"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-foreground/5 backdrop-blur-sm text-foreground/70 text-sm font-medium border border-border mb-4">
            DIGITAL DISCIPLINE
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">How Bh.ai <span className="gradient-text">Hacks Your Habits</span></h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Not just another screen time monitor—an AI personality that intervenes with cultural context and just the right amount of sass.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-md rounded-xl border border-white/10 p-6 shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className={`relative z-10 w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} ${feature.borderColor} border backdrop-blur-sm flex items-center justify-center mb-4`}>
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
