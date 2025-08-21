import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setEmail("");
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our weekly newsletter with the latest nomad insights.",
      });
    }, 1000);
  };

  return (
    <section className="py-16 bg-vintage-gold/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-travel-blue mb-4">
          Never Miss a Beat
        </h2>
        <p className="text-xl text-muted-navy mb-8">
          Get weekly insights, city spotlights, and exclusive nomad deals delivered to your inbox
        </p>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vintage-gold focus:border-transparent text-lg"
              required
            />
            <Button 
              type="submit"
              disabled={isSubscribing}
              className="px-8 py-4 bg-vintage-gold text-white rounded-xl font-semibold text-lg hover:bg-vintage-gold/90 transition-all duration-200 whitespace-nowrap"
            >
              {isSubscribing ? "Subscribing..." : "Subscribe Free"}
            </Button>
          </form>
          <p className="text-sm text-muted-navy mt-4">
            Join 25,000+ nomads getting our weekly newsletter. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
