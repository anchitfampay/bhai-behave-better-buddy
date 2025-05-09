
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from '@/hooks/use-toast';

const CallToAction = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      toast({
        title: "Thanks for joining!",
        description: "We've added you to our early access list.",
        duration: 5000,
      });
      setEmail('');
    } else {
      toast({
        title: "Please enter a valid email",
        description: "We need your email to contact you about early access.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="bg-gradient-to-br from-bhai-purple/10 to-bhai-orange/10 rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Habits?</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Be among the first to experience Bh.ai and get exclusive early access benefits.
              Join our waitlist today!
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow h-12"
                required
              />
              <Button type="submit" className="btn-gradient h-12 px-8">Join Waitlist</Button>
            </form>
            
            <p className="mt-4 text-sm text-foreground/60">
              No spam, ever. We'll only notify you when early access is available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
