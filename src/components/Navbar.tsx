
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { AlignJustify, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`w-full py-4 px-4 md:px-8 fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-void-black/80 backdrop-blur-md border-b border-blue-500/10' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Yo Bh.ai</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground/80 hover:text-blue-400 font-medium transition-colors">Features</a>
          <a href="#how-it-works" className="text-foreground/80 hover:text-blue-400 font-medium transition-colors">How It Works</a>
          <a href="#testimonials" className="text-foreground/80 hover:text-blue-400 font-medium transition-colors">Testimonials</a>
          <a href="#pricing" className="text-foreground/80 hover:text-blue-400 font-medium transition-colors">Pricing</a>
          <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 rounded-lg">Get Started</Button>
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-void-black/95 backdrop-blur-md border-b border-blue-900/10 p-4 z-50">
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-foreground/80 hover:text-blue-400 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-foreground/80 hover:text-blue-400 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground/80 hover:text-blue-400 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-foreground/80 hover:text-blue-400 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold transition-all duration-300 w-full shadow-lg shadow-blue-500/25">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
