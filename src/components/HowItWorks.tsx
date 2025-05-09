
import React from 'react';
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return <section id="how-it-works" className="py-24 relative bg-black">
      <div className="container px-4 md:px-6 relative z-10 py-0">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black mb-4 text-white md:text-5xl">Brutally <span className="text-amber-500">Simple</span></h2>
        </div>
        
        <div className="text-center">
          <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-6 text-lg rounded-full border-4 border-black shadow-lg">
            <span className="relative z-10">Get Your Digital Reality Check</span>
          </Button>
        </div>
      </div>
    </section>;
};
export default HowItWorks;
