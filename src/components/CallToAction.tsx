import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from '@/hooks/use-toast';
import { Zap, Download } from 'lucide-react';
const CallToAction = () => {
  const {
    toast
  } = useToast();
  const [email, setEmail] = React.useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      toast({
        title: "You're in line for tough love",
        description: "We'll notify you when your beta access is ready.",
        duration: 5000
      });
      setEmail('');
    } else {
      toast({
        title: "Arre bhai",
        description: "Valid email de do yaar!",
        variant: "destructive",
        duration: 5000
      });
    }
  };
  return <section className="py-24 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-amber-950/20 z-0"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="rounded-3xl p-8 md:p-12 border border-gray-800 shadow-xl relative overflow-hidden bg-gray-950">
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-500/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold border border-amber-500/30 mb-6 gap-2">
              <Download size={12} className="text-amber-500" />
              <span>BETA AVAILABLE NOW</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">Ready For Some <span className="text-amber-500">Digital Tough Love?</span></h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} className="flex-grow h-12 bg-black/50 border-gray-700 text-white placeholder:text-gray-500 rounded-full px-5" required />
              <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-black font-bold h-12 px-6 rounded-full">
                Download Beta
              </Button>
            </form>
            
            <p className="mt-6 text-sm text-gray-400 flex items-center justify-center">
              <Zap size={14} className="mr-1 text-amber-500" />
              Available for Android 8.0+ (iOS coming soon)
            </p>

            <div className="mt-12 pt-8 border-t border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-white">Why We Built This</h3>
              <p className="text-gray-400">
                We created YoBh.ai because sometimes you need a friend brave enough to call you an idiot when you're being one. 
                Growing up in India taught us the power of unfiltered feedback delivered with love. Now your phone can do the same.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CallToAction;