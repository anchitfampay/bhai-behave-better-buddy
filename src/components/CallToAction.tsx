
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
        title: "You're in the queue!",
        description: "We'll notify you when your digital intervention is ready.",
        duration: 5000,
      });
      setEmail('');
    } else {
      toast({
        title: "Invalid email detected",
        description: "We need a valid email to contact you. No spam, promise.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent z-0"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-bhai-purple/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-bhai-orange/10 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-foreground/5 backdrop-blur-sm text-foreground/70 text-sm font-medium border border-border mb-5 gap-2">
              <Zap size={14} className="text-bhai-purple" />
              <span>EARLY ACCESS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to <span className="gradient-text">Break Up</span> with Bad Digital Habits?</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Be first in line for the AI companion that's not afraid to call you out when you're doom-scrolling at 3 AM.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow h-12 bg-background/50 backdrop-blur-sm border-white/10 placeholder:text-foreground/40"
                required
              />
              <Button type="submit" className="btn-gradient h-12 px-8 font-bold">
                Get Early Access
              </Button>
            </form>
            
            <p className="mt-4 text-sm text-foreground/60">
              No spam, just digital intervention when you need it most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
