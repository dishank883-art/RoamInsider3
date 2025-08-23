import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail, MessageCircle, Users, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:rremote@roaminsider.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "Get in touch with our team",
      contact: "rremote@roaminsider.com",
      action: "Send Email",
      link: "mailto:rremote@roaminsider.com"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Join Our Community",
      description: "Connect with 200+ nomads",
      contact: "Discord Community",
      action: "Join Discord",
      link: "https://discord.gg/roaminsider"
    },
  ];

  const faqs = [
    {
      question: "How do I join the Roam Insider community?",
      answer: "Simply join our Discord server or reach out via email. We welcome all digital nomads and travelers interested in exploring India!"
    },
    {
      question: "Can you help with visa applications?",
      answer: "While we provide comprehensive visa guides and resources, we recommend consulting with official visa services for personalized assistance."
    },
    {
      question: "Do you offer city-specific advice?",
      answer: "Yes! Our community members and team have extensive experience across all featured cities and can provide insider tips and recommendations."
    },
    {
      question: "Is there a membership fee?",
      answer: "Our community is completely free to join. We believe in making travel information accessible to everyone."
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-travel-blue via-travel-blue/90 to-muted-navy overflow-hidden">
        <div className="absolute inset-0 vintage-texture opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="text-white hover:text-vintage-gold mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <div className="text-center text-white">
            <h1 className="font-serif text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Get in Touch
              <span className="text-vintage-gold font-script text-4xl lg:text-5xl block mt-2">
                We're Here to Help
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Have questions about digital nomad life in India? Need city recommendations? Want to join our community? We'd love to hear from you.
            </p>
            
            <div className="flex items-center justify-center space-x-8 text-blue-100 mb-8">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-vintage-gold" />
                <span className="font-semibold">200+ Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-vintage-gold" />
                <span className="font-semibold">20+ Cities</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-vintage-gold" />
                <span className="font-semibold">24/7 Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-travel-blue mb-6">Send us a Message</h2>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-travel-blue hover:bg-travel-blue/90 text-white">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Methods */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-travel-blue mb-6">Other Ways to Reach Us</h2>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-travel-blue/10 rounded-lg flex items-center justify-center text-travel-blue">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">{method.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                        <p className="font-medium text-travel-blue mb-3">{method.contact}</p>
                        <a 
                          href={method.link}
                          target={method.link.startsWith('http') ? '_blank' : '_self'}
                          rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="inline-flex items-center text-travel-blue hover:text-vintage-gold font-medium text-sm transition-colors"
                        >
                          {method.action}
                          <ArrowLeft className="ml-1 h-3 w-3 rotate-180" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Response Promise */}
            <Card className="mt-8 bg-gradient-to-r from-vintage-gold/10 to-travel-blue/10 border-vintage-gold/20">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="h-5 w-5 text-vintage-gold" />
                  <span className="font-semibold text-travel-blue">Quick Response Promise</span>
                </div>
                <p className="text-gray-600 text-sm">
                  We typically respond to all inquiries within 24 hours during weekdays. For urgent matters, 
                  joining our Discord community is the fastest way to get real-time help from our team and fellow nomads.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <h2 className="font-serif text-3xl font-bold text-travel-blue mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Community CTA */}
        <section className="mt-16 bg-gradient-to-r from-travel-blue/10 to-vintage-gold/10 rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-travel-blue mb-4">
            Join Our Thriving Community
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Connect with 200+ digital nomads exploring India. Share experiences, get recommendations, 
            and find travel companions in our active Discord community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open('https://discord.gg/roaminsider', '_blank')}
              className="bg-travel-blue hover:bg-travel-blue/90 text-white px-6 py-3"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Join Discord
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.location.href = 'mailto:rremote@roaminsider.com'}
              className="border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white px-6 py-3"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Us
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}