
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';

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
            <img src="/lovable-uploads/efd04eea-709d-4ce3-942b-146e0888cd38.png" alt="Logo" className="h-10 w-10 rounded-full" />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="text-white hover:text-gray-300 font-medium transition-colors flex items-center">
              Features <ChevronDown size={16} className="ml-1" />
            </button>
          </div>
          <a href="#developers" className="text-white hover:text-gray-300 font-medium transition-colors">Developers</a>
          <div className="relative group">
            <button className="text-white hover:text-gray-300 font-medium transition-colors flex items-center">
              Company <ChevronDown size={16} className="ml-1" />
            </button>
          </div>
          <a href="#blog" className="text-white hover:text-gray-300 font-medium transition-colors">Blog</a>
          <a href="#changelog" className="text-white hover:text-gray-300 font-medium transition-colors">Changelog</a>
          
          <Button className="bg-amber-600/80 hover:bg-amber-500 text-white font-semibold px-6 py-2 rounded-lg ml-4">
            Get the app
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
