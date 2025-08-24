import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail, MapPin, Bell, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SubscriptionPopupProps {
  children: React.ReactNode;
}

export default function SubscriptionPopup({ children }: SubscriptionPopupProps) {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call - in a real app, this would send to your backend
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Successfully Subscribed! 🎉",
        description: "Welcome to the Roam Insider community! You'll receive updates about new destinations and nomad insights.",
      });
      
      setEmail("");
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-travel-blue">
            <Mail className="h-5 w-5 text-vintage-gold" />
            <span>Stay Updated with Roam Insider</span>
          </DialogTitle>
          <DialogDescription className="text-muted-navy">
            Get the latest digital nomad destinations, city insights, and exclusive tips delivered to your inbox.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubscribe} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-travel-blue font-medium">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-gray-300 focus:border-travel-blue focus:ring-travel-blue"
              required
              data-testid="subscription-email-input"
            />
          </div>
          
          <div className="bg-vintage-gold/10 rounded-lg p-4 space-y-3">
            <h4 className="font-semibold text-travel-blue flex items-center space-x-2">
              <Bell className="h-4 w-4" />
              <span>What You'll Get:</span>
            </h4>
            <ul className="space-y-2 text-sm text-muted-navy">
              <li className="flex items-center space-x-2">
                <MapPin className="h-3 w-3 text-vintage-gold" />
                <span>New city guides and destination spotlights</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-3 w-3 text-vintage-gold" />
                <span>Latest cost of living updates and trends</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-3 w-3 text-vintage-gold" />
                <span>Exclusive nomad tips and community insights</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-3 w-3 text-vintage-gold" />
                <span>Early access to new platform features</span>
              </li>
            </ul>
          </div>
          
          <div className="flex space-x-3">
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-vintage-gold hover:bg-vintage-gold/90 text-white"
              data-testid="subscribe-button"
            >
              {isLoading ? "Subscribing..." : "Subscribe Now"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="border-gray-300 text-muted-navy hover:bg-gray-50"
              data-testid="cancel-subscription"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-xs text-muted-navy text-center">
            We respect your privacy. Unsubscribe anytime. No spam, just valuable nomad insights.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}