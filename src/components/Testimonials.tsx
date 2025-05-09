
import React from 'react';
import { MessageCircle, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "Bh.ai's Hindi roasts hit different. It called me out for scrolling at 2AM with 'अरे भाई, सो जा! तेरी रील्स कल भी यहीं रहेंगी।' I actually put my phone down!",
      author: "Rajesh K.",
      role: "Sleep-deprived student",
      image: "https://randomuser.me/api/portraits/men/36.jpg"
    },
    {
      content: "I never realized how much time I wasted until this app started counting. From 6 hours daily to just 2. My promotion is probably thanks to Bh.ai's reality checks.",
      author: "Priya S.",
      role: "Recovering doom-scroller",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      content: "Finally an app that speaks my language! The Hindi roasts hit harder than my mom's slippers when I used to sneak out. Way more effective than those generic 'take a break' reminders.",
      author: "Vikram M.",
      role: "Digital detox enthusiast",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-transparent z-0"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-foreground/5 backdrop-blur-sm text-foreground/70 text-sm font-medium border border-border mb-4">
            USER STORIES
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">Reality Checks from <span className="gradient-text">Real Users</span></h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            These people touched grass after Bh.ai reminded them there's life beyond the screen.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-md rounded-xl border border-white/10 p-6 shadow-lg relative group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <Quote size={40} className="text-bhai-purple/10" />
              </div>
              <div className="mb-6 text-bhai-purple">
                <MessageCircle size={28} />
              </div>
              <p className="text-foreground/80 mb-6 italic relative">{testimonial.content}</p>
              <div className="flex items-center relative">
                <div className="w-12 h-12 rounded-xl overflow-hidden mr-4 border border-white/10 shadow-inner">
                  <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-bhai-purple/0 via-bhai-purple/30 to-bhai-orange/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
