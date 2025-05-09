
import React from 'react';
import { Bell, MessageCircle, Clock, ThumbsUp, Smile, AlarmClock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Real-time Nudges",
      description: "Get gentle reminders when you've spent too much time on distracting apps.",
      icon: Bell,
      color: "bg-bhai-purple/10",
      textColor: "text-bhai-purple"
    },
    {
      title: "Hilarious Roasts",
      description: "When subtlety fails, our AI will deliver brutally honest feedback that actually makes you laugh.",
      icon: MessageCircle,
      color: "bg-bhai-orange/10",
      textColor: "text-bhai-orange"
    },
    {
      title: "Positive Reinforcement",
      description: "We celebrate your wins and healthy digital habits to keep you motivated.",
      icon: ThumbsUp,
      color: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      title: "Usage Insights",
      description: "Track your progress with in-depth analytics and see how your digital health improves.",
      icon: Clock,
      color: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      title: "Personalized Approach",
      description: "Adjust tone, language, and intervention frequency to match your preferences.",
      icon: Smile,
      color: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      title: "Goal Setting",
      description: "Set healthy usage goals and let Bh.ai help you stay accountable.",
      icon: AlarmClock,
      color: "bg-amber-100",
      textColor: "text-amber-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-accent/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Bh.ai Helps You</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Our AI doesn't just monitor your usage—it intervenes with personality,
            humor, and cultural relevance to actually change your habits.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border/50 card-hover">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg ${feature.color} ${feature.textColor} flex items-center justify-center mb-4`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
