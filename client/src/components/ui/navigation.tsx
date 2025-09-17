import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Compass, Menu, Bell } from "lucide-react";
import SubscriptionPopup from "@/components/ui/subscription-popup";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const handleCitiesClick = (e: React.MouseEvent) => {
    if (location === "/") {
      e.preventDefault();
      const citiesSection = document.querySelector('[data-cities-section]');
      if (citiesSection) {
        citiesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems: Array<{ href: string; label: string; external?: boolean; onClick?: (e: React.MouseEvent) => void }> = [
    { href: "/", label: "Cities", onClick: handleCitiesClick },
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
                  onClick={item.onClick}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <SubscriptionPopup>
              <Button 
                variant="ghost" 
                className="hidden md:block text-muted-navy hover:text-travel-blue font-medium transition-colors"
                data-testid="subscription-trigger-desktop"
              >
                Updates
              </Button>
            </SubscriptionPopup>
            <input 
              type="text"
              placeholder="Search cities..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="border border-vintage-gold rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-vintage-gold focus:border-vintage-gold"
              />
            
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
                        onClick={(e) => {
                          if (item.onClick) item.onClick(e);
                          setIsOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                  <div className="pt-4 border-t">
                    <SubscriptionPopup>
                      <Button 
                        variant="ghost" 
                        className="w-full mb-2 text-muted-navy hover:text-travel-blue font-medium transition-colors py-3"
                        data-testid="subscription-trigger-mobile"
                        onClick={() => setIsOpen(false)}
                      >
                        Updates
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
