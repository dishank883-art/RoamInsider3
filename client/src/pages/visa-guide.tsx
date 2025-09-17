import { useEffect } from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Clock, MapPin, FileText, Users, AlertCircle, CheckCircle } from "lucide-react";

export default function VisaGuide() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  const visaTypes = [
    {
      title: "Tourist Visa",
      duration: "30-365 days",
      category: "Short-term",
      description: "Perfect for exploring India as a traveler",
      features: ["Multiple entries allowed", "Valid for tourism only", "Cannot work on this visa", "Easy online application"],
      color: "bg-blue-50 border-blue-200 text-blue-800"
    },
    {
      title: "e-Visa",
      duration: "30-365 days", 
      category: "Digital",
      description: "Quick online visa for most nationalities",
      features: ["100% online process", "5 categories available", "Fast approval (72 hours)", "Multiple entry options"],
      color: "bg-green-50 border-green-200 text-green-800"
    },
    {
      title: "Business Visa", 
      duration: "1-5 years",
      category: "Long-term",
      description: "For business meetings and conferences",
      features: ["Multiple entries", "Business activities allowed", "Cannot take up employment", "Meeting attendance permitted"],
      color: "bg-purple-50 border-purple-200 text-purple-800"
    },
    {
      title: "X Visa",
      duration: "3-6 months",
      category: "Special",
      description: "For internships and training programs", 
      features: ["Internship allowed", "Training programs", "Educational purposes", "Mentorship opportunities"],
      color: "bg-orange-50 border-orange-200 text-orange-800"
    }
  ];

  const applicationSteps = [
    {
      step: "1",
      title: "Choose Visa Type",
      description: "Select the appropriate visa category based on your purpose of visit",
      icon: <FileText className="h-6 w-6" />
    },
    {
      step: "2", 
      title: "Fill Application",
      description: "Complete the online visa application form with accurate details",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: "3",
      title: "Upload Documents",
      description: "Submit required documents including passport, photos, and supporting papers",
      icon: <ExternalLink className="h-6 w-6" />
    },
    {
      step: "4",
      title: "Pay Fees",
      description: "Pay the visa fees online using credit/debit card or other accepted methods",
      icon: <CheckCircle className="h-6 w-6" />
    }
  ];

  const resources = [
    {
      title: "Official Indian Visa Portal",
      description: "Government website for visa applications",
      url: "https://indianvisaonline.gov.in/evisa/",
      type: "Official"
    },
    {
      title: "Visa Requirements Checker",
      description: "Check visa requirements by country",
      url: "https://www.mha.gov.in/",
      type: "Government"
    },
    {
      title: "Embassy Locator",
      description: "Find Indian embassies and consulates worldwide",
      url: "https://www.mea.gov.in/",
      type: "Official"
    },
    {
      title: "Travel Advisory",
      description: "Latest travel advisories and updates",
      url: "https://www.mha.gov.in/",
      type: "Updates"
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
              India Visa Guide
              <span className="text-vintage-gold font-script text-4xl lg:text-5xl block mt-2">
                Complete Resource
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Everything you need to know about getting a visa for India. From tourist visas to business permits - we've got you covered.
            </p>
            
            <div className="flex items-center justify-center space-x-8 text-blue-100 mb-8">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-vintage-gold" />
                <span className="font-semibold">All Countries</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-vintage-gold" />
                <span className="font-semibold">Updated 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-vintage-gold" />
                <span className="font-semibold">Official Links</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Important Notice */}
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-8 rounded-r-lg">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-orange-400 mt-0.5" />
            <div className="ml-3">
              <p className="text-orange-700 font-medium">Important Notice</p>
              <p className="text-orange-600 text-sm mt-1">
                Always verify visa requirements on official government websites as policies can change. This guide provides general information only.
              </p>
            </div>
          </div>
        </div>

        {/* Visa Types */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-travel-blue mb-8">Visa Types for India</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {visaTypes.map((visa, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{visa.title}</CardTitle>
                    <Badge variant="secondary" className={visa.color}>
                      {visa.category}
                    </Badge>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    {visa.duration}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{visa.description}</p>
                  <ul className="space-y-2">
                    {visa.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-travel-blue mb-8">Application Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow duration-200">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-travel-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <Badge variant="secondary" className="mb-3">
                    Step {step.step}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Essential Documents */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-travel-blue mb-8">Essential Documents</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-travel-blue" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-3" />
                    <div>
                      <span className="font-medium">Valid Passport</span>
                      <p className="text-sm text-gray-600">At least 6 months validity remaining</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-3" />
                    <div>
                      <span className="font-medium">Recent Photo</span>
                      <p className="text-sm text-gray-600">Passport-size, white background</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-3" />
                    <div>
                      <span className="font-medium">Travel Itinerary</span>
                      <p className="text-sm text-gray-600">Flight bookings or travel plans</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-3" />
                    <div>
                      <span className="font-medium">Accommodation Proof</span>
                      <p className="text-sm text-gray-600">Hotel bookings or invitation letter</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-travel-blue" />
                  Additional Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-3" />
                    <div>
                      <span className="font-medium">Financial Proof</span>
                      <p className="text-sm text-gray-600">Bank statements (last 3 months)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-3" />
                    <div>
                      <span className="font-medium">Employment Letter</span>
                      <p className="text-sm text-gray-600">From your employer (if applicable)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-3" />
                    <div>
                      <span className="font-medium">Previous Visas</span>
                      <p className="text-sm text-gray-600">Copies of previous Indian visas</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-3" />
                    <div>
                      <span className="font-medium">Travel Insurance</span>
                      <p className="text-sm text-gray-600">Recommended for medical coverage</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Official Resources */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-travel-blue mb-8">Official Resources & Links</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-travel-blue border-travel-blue">
                      {resource.type}
                    </Badge>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-travel-blue hover:text-vintage-gold font-medium transition-colors"
                  >
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-travel-blue/10 to-vintage-gold/10 rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-travel-blue mb-4">
            Need Personalized Visa Assistance?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team can help you navigate the visa process and connect you with trusted visa consultants for your specific situation.
          </p>
          <Button 
            onClick={() => window.location.href = '/contact'}
            className="bg-travel-blue hover:bg-travel-blue/90 text-white px-8 py-3"
          >
            Contact Our Team
          </Button>
        </section>
      </div>

      <Footer />
    </div>
  );
}
