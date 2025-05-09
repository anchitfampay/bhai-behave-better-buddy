
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
    <section id="testimonials" className="py-20 relative bg-gray-50">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-800">The Numbers <span className="text-[#FF4D4D]">Don't Lie</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These people touched grass after Bh.ai reminded them there's life beyond the screen.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-xl border-4 border-white relative group"
              style={{ boxShadow: `0 10px 25px -5px ${testimonial.color}30` }}
            >
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <Quote size={40} style={{ color: `${testimonial.color}20` }} />
              </div>
              <div className="mb-6" style={{ color: testimonial.color }}>
                <MessageCircle size={28} />
              </div>
              <p className="text-gray-800 mb-6 italic relative">{testimonial.content}</p>
              <div className="flex items-center relative">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2" style={{ borderColor: testimonial.color }}>
                  <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-2 rounded-b-xl" style={{ background: testimonial.color, opacity: 0.2 }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
