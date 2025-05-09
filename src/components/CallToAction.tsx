
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from '@/hooks/use-toast';
import { Zap } from 'lucide-react';

const CallToAction = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      toast({
        title: "Neural link established",
        description: "You'll be notified when your access is granted.",
        duration: 5000,
      });
      setEmail('');
    } else {
      toast({
        title: "Invalid data detected",
        description: "We need a valid email for neural connection.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pulse-violet/5 to-transparent z-0"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pulse-violet/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ice-blue/20 to-transparent"></div>
      
      {/* Neural spire vertical lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-pulse-violet/10 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-ice-blue/10 to-transparent"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="bg-card/20 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-pulse-violet/10 relative overflow-hidden prismatic-border data-pulse">
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-foreground/5 text-foreground/70 text-xs font-medium border border-pulse-violet/20 mb-6 gap-2">
              <Zap size={12} className="text-pulse-violet" />
              <span>BRUTAL TRUTH</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Face <span className="gradient-text">Reality</span></h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow h-12 bg-background/20 backdrop-blur-sm border-pulse-violet/20 placeholder:text-foreground/40"
                required
              />
              <Button type="submit" className="btn-gradient h-12 px-6 font-bold">
                Connect
              </Button>
            </form>
            
            <p className="mt-3 text-xs text-foreground/50">
              Truth hurts. Growth follows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
