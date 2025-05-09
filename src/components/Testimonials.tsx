
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "Bh.ai's Hindi roasts are hilarious! It called me out for scrolling Instagram at 2AM with 'अरे भाई, सो जा! तेरी रील्स कल भी यहीं रहेंगी।' I actually put my phone down!",
      author: "Rajesh K.",
      role: "College Student, Delhi",
      image: "https://randomuser.me/api/portraits/men/36.jpg"
    },
    {
      content: "I didn't realize how much time I wasted on social media until Bh.ai started tracking it. The gentle nudges and occasionally brutal honesty have helped me cut my screen time by 40%.",
      author: "Priya S.",
      role: "UX Designer, Mumbai",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      content: "Finally an app that speaks to me in my language! The Hindi interventions feel so much more impactful than English notifications from other wellbeing apps.",
      author: "Vikram M.",
      role: "Software Developer, Bangalore",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-accent/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what early adopters are saying about their experience with Bh.ai.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-border/50 card-hover">
              <CardContent className="p-6">
                <div className="mb-4 text-bhai-purple">
                  <MessageCircle size={28} />
                </div>
                <p className="text-foreground/80 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-sm text-foreground/70">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
