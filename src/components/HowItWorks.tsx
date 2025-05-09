
import React from 'react';
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <Button 
            variant="link"
            onClick={() => {
              const featuresSection = document.getElementById('features');
              featuresSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-white hover:text-amber-500"
          >
            Explore How It Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
