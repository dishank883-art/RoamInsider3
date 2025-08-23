import { Link } from "wouter";
import { Compass } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Explore",
      links: [
        { label: "All Cities", href: "/cities" },
        { label: "Popular Destinations", href: "/popular" },
        { label: "Hidden Gems", href: "/hidden-gems" },
        { label: "Budget Cities", href: "/budget" },
        { label: "Tech Hubs", href: "/tech-hubs" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Cost Calculator", href: "/calculator" },
        { label: "Visa Guide", href: "/visa" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ]
    }
  ];

  const socialLinks = [
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-telegram", href: "#" },
    { icon: "fab fa-discord", href: "#" }
  ];

  return (
    <footer className="bg-travel-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Compass className="h-8 w-8 text-vintage-gold" />
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Roam <span className="text-vintage-gold">Insider</span>
              </h3>
            </div>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed mb-4 sm:mb-6">
              Your ultimate guide to digital nomad life in incredible Indian cities. Discover, explore, and thrive.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="w-10 h-10 bg-vintage-gold rounded-full flex items-center justify-center hover:bg-vintage-gold/90 transition-colors"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">{section.title}</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-blue-100">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="hover:text-vintage-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-blue-600 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 mb-4 md:mb-0">
              © 2024 Roam Insider. All rights reserved. Made with ❤️ for digital nomads.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm sm:text-base text-blue-100">
              <span className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-vintage-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>20+ Cities</span>
              </span>
              <span className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-vintage-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16.5c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5H18v4h2zM12.5 11.5c.83 0 1.5-.67 1.5-1.5V4c0-1.66-1.34-3-3-3S8 2.34 8 4v6c0 .83.67 1.5 1.5 1.5H12.5zm-2-7.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM11 22v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 9.54 8H7.5C6.67 8 6 8.67 6 9.5v7c0 .83.67 1.5 1.5 1.5H9v4h2z"/>
                </svg>
                <span>200+ Members</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
