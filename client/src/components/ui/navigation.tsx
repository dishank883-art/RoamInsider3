import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Compass, Menu, Bell } from "lucide-react";
import SubscriptionPopup from "@/components/ui/subscription-popup";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: Array<{ href: string; label: string; external?: boolean }> = [
    { href: "/", label: "Cities" },
    { href: "https://discord.gg/Y39GGpQtMm", label: "Community", external: true },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-vintage-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <Compass className="h-8 w-8 text-vintage-gold" />
            <h1 className="font-serif text-xl sm:text-2xl font-bold text-travel-blue">
              Roam <span className="text-vintage-gold">Insider</span>
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.external ? (
                <a 
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-navy hover:text-travel-blue font-medium transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link 
                  key={item.label}
                  href={item.href}
                  className="text-muted-navy hover:text-travel-blue font-medium transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <SubscriptionPopup>
              <Button 
                variant="outline" 
                className="hidden md:block border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white"
                data-testid="subscription-trigger-desktop"
              >
                <Bell className="h-4 w-4 mr-2" />
                Get Updates
              </Button>
            </SubscriptionPopup>
            <Button 
              asChild
              className="bg-vintage-gold text-white hover:bg-vintage-gold/90 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2.5 touch-manipulation min-h-[44px]"
            >
              <a 
                href="https://discord.gg/Y39GGpQtMm" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="hidden sm:inline">Join Free Community</span>
                <span className="sm:hidden">Join</span>
              </a>
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-6">
                  {navItems.map((item) => (
                    item.external ? (
                      <a 
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-navy hover:text-travel-blue font-medium transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link 
                        key={item.label}
                        href={item.href}
                        className="text-muted-navy hover:text-travel-blue font-medium transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                  <div className="pt-4 border-t">
                    <SubscriptionPopup>
                      <Button 
                        variant="outline" 
                        className="w-full mb-2 border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white"
                        data-testid="subscription-trigger-mobile"
                        onClick={() => setIsOpen(false)}
                      >
                        <Bell className="h-4 w-4 mr-2" />
                        Get Updates
                      </Button>
                    </SubscriptionPopup>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
