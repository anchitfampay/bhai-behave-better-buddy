
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`w-full py-4 px-4 md:px-8 fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="/lovable-uploads/ded7a9a5-6840-44fa-821d-dc5d3036fd2a.png" alt="Logo" className="h-10 w-10 rounded-full" />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Button 
            className="bg-white hover:bg-amber-500 text-black font-semibold px-6 py-2 rounded-lg ml-4 transition-colors font-poppins"
          >
            Get the app
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
