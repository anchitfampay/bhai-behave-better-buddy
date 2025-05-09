
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { AlignJustify, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="w-full py-4 px-4 md:px-8 bg-background/90 backdrop-blur-sm fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">Yo Bh.ai</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground/80 hover:text-bhai-purple font-medium transition-colors">Features</a>
          <a href="#how-it-works" className="text-foreground/80 hover:text-bhai-purple font-medium transition-colors">How It Works</a>
          <a href="#testimonials" className="text-foreground/80 hover:text-bhai-purple font-medium transition-colors">Testimonials</a>
          <Button className="btn-gradient">Early Access</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <AlignJustify size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 z-50">
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-foreground/80 hover:text-bhai-purple font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-foreground/80 hover:text-bhai-purple font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground/80 hover:text-bhai-purple font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <Button className="btn-gradient w-full">Early Access</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
