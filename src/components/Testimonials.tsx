
import React from 'react';
import { MessageCircle, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "Getting called 'chutiye' by my phone at midnight finally broke my Instagram addiction.",
      author: "Rahul S.",
      role: "24, Recovering Doom-Scroller",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
      color: "#FF4D4D"
    },
    {
      content: "I never realized how much time I wasted until this app started counting. From 6 hours daily to just 2. My promotion is probably thanks to Bh.ai's reality checks.",
      author: "Priya S.",
      role: "27, Software Engineer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      color: "#3CDFFF"
    },
    {
      content: "Finally an app that speaks my language! The Hindi roasts hit harder than my mom's slippers when I used to sneak out. Way more effective than those generic 'take a break' reminders.",
      author: "Vikram M.",
      role: "32, Digital detox enthusiast",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      color: "#FFA726"
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-amber-950/20 pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">The Numbers <span className="text-amber-500">Don't Lie</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            These people touched grass after Bh.ai reminded them there's life beyond the screen.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-900/70 rounded-2xl p-6 shadow-xl border border-gray-800 relative group"
            >
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <Quote size={40} className="text-amber-500/20" />
              </div>
              <div className="mb-6 text-amber-500">
                <MessageCircle size={28} />
              </div>
              <p className="text-gray-300 mb-6 italic relative">{testimonial.content}</p>
              <div className="flex items-center relative">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-amber-500">
                  <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 rounded-b-xl bg-amber-500/20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
