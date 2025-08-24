import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, AlertTriangle, Users, Shield, Mail } from "lucide-react";

export default function Terms() {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>Terms of Service - Roam Insider | Legal Terms & Conditions</title>
      <meta 
        name="description" 
        content="Read Roam Insider's Terms of Service. Understand your rights and responsibilities when using our digital nomad platform for India travel information." 
      />
      <meta name="keywords" content="terms of service, legal terms, roam insider terms, conditions, user agreement" />
      <meta property="og:title" content="Terms of Service - Roam Insider" />
      <meta property="og:description" content="Legal terms and conditions for using Roam Insider's digital nomad platform." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://roaminsider.com/terms" />
      
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-travel-blue via-travel-blue/90 to-muted-navy py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-vintage-gold rounded-full mb-6 mx-auto">
              <Scale className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              The legal terms governing your use of our digital nomad platform.
            </p>
            <p className="text-sm text-blue-200 mt-4">Last updated: January 2024</p>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center border-none shadow-lg">
                <CardHeader>
                  <FileText className="h-8 w-8 text-travel-blue mx-auto mb-2" />
                  <CardTitle className="text-travel-blue">Fair Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-navy text-sm">
                    Use our platform responsibly and respect other community members.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-none shadow-lg">
                <CardHeader>
                  <Shield className="h-8 w-8 text-travel-blue mx-auto mb-2" />
                  <CardTitle className="text-travel-blue">Your Rights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-navy text-sm">
                    Free access to city information and community features.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-none shadow-lg">
                <CardHeader>
                  <AlertTriangle className="h-8 w-8 text-travel-blue mx-auto mb-2" />
                  <CardTitle className="text-travel-blue">Important Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-navy text-sm">
                    Information is for guidance only. Always verify details independently.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 space-y-12">
              
              {/* Agreement */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-travel-blue mb-6">
                  Agreement to Terms
                </h2>
                <p className="text-muted-navy leading-relaxed mb-4">
                  By accessing and using Roam Insider ("we", "us", "our"), you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p className="text-muted-navy leading-relaxed">
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              {/* Platform Description */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-travel-blue mb-6">
                  Our Platform
                </h2>
                <p className="text-muted-navy leading-relaxed mb-4">
                  Roam Insider is a digital nomad platform providing information about Indian cities including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-navy ml-4">
                  <li>Cost of living estimates and breakdowns</li>
                  <li>Internet connectivity information</li>
                  <li>Local attractions and activities</li>
                  <li>Transportation options and costs</li>
                  <li>Community discussions and insights</li>
                  <li>Accommodation recommendations</li>
                </ul>
              </div>

              {/* User Responsibilities */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-travel-blue mb-6 flex items-center">
                  <Users className="h-6 w-6 mr-3" />
                  User Responsibilities
                </h2>
                <p className="text-muted-navy leading-relaxed mb-4">
                  As a user of our platform, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-navy ml-4">
                  <li>Provide accurate information when interacting with our platform</li>
                  <li>Respect other community members and maintain civil discourse</li>
                  <li>Not share false or misleading information</li>
                  <li>Not attempt to hack, disrupt, or harm our platform</li>
                  <li>Not use our platform for illegal activities</li>
                  <li>Respect intellectual property rights</li>
                  <li>Follow our community guidelines in Discord and other forums</li>
                </ul>
              </div>

              {/* Information Accuracy */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-travel-blue mb-6 flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-3" />
                  Information Accuracy Disclaimer
                </h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                  <p className="text-yellow-800 font-semibold mb-2">Important Notice:</p>
                  <p className="text-yellow-700 leading-relaxed">
                    All information on our platform is provided for guidance purposes only. Costs, connectivity, and city conditions can change rapidly.
                  </p>
                </div>
                <p className="text-muted-navy leading-relaxed mb-4">
                  While we strive to provide accurate and up-to-date information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-navy ml-4">
                  <li>Information may become outdated between updates</li>
                  <li>Individual experiences may vary significantly</li>
                  <li>Costs and conditions are estimates based on user reports</li>
                  <li>You should always verify information independently</li>
                  <li>We are not responsible for decisions made based on our information</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-travel-blue mb-6">
                  Intellectual Property
                </h2>
                <p className="text-muted-navy leading-relaxed mb-4">
                  The content, design, graphics, and compilation of all content on this site are owned by Roam Insider and are protected by copyright and other intellectual property laws.
                </p>
                <p className="text-muted-navy leading-relaxed">
                  You may not reproduce, distribute, or create derivative works from our content without explicit permission.
                </p>
              </div>

              {/* Community Guidelines */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-travel-blue mb-6">
                  Community Guidelines
                </h2>
                <p className="text-muted-navy leading-relaxed mb-4">
                  Our Discord community and platform discussions must remain:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-navy ml-4">
                  <li><strong>Respectful:</strong> Treat all members with courtesy and respect</li>
                  <li><strong>Helpful:</strong> Share genuine experiences and constructive advice</li>
                  <li><strong>Relevant:</strong> Keep discussions focused on digital nomad topics</li>
                  <li><strong>Safe:</strong> No harassment, spam, or inappropriate content</li>
                  <li><strong>Legal:</strong> Do not share illegal content or advice</li>
                </ul>
                <p className="text-muted-navy leading-relaxed mt-4">
                  Violations of these guidelines may result in removal from our community.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-travel-blue mb-6">
                  Limitation of Liability
                </h2>
                <p className="text-muted-navy leading-relaxed mb-4">
                  To the fullest extent permitted by applicable law, Roam Insider shall not be liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-navy ml-4">
                  <li>Any direct, indirect, incidental, or consequential damages</li>
                  <li>Financial losses resulting from travel decisions</li>
                  <li>Inaccurate or outdated information on our platform</li>
                  <li>Third-party content or services</li>
                  <li>Technical issues or service interruptions</li>
                </ul>
              </div>

              {/* Privacy */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-travel-blue mb-6">
                  Privacy
                </h2>
                <p className="text-muted-navy leading-relaxed">
                  Your privacy is important to us. Please review our 
                  <a href="/privacy" className="text-travel-blue hover:text-vintage-gold transition-colors ml-1">Privacy Policy</a> 
                  to understand how we collect, use, and protect your information.
                </p>
              </div>

              {/* Modifications */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-travel-blue mb-6">
                  Modifications to Terms
                </h2>
                <p className="text-muted-navy leading-relaxed">
                  We reserve the right to modify these terms at any time. Material changes will be communicated through our platform. 
                  Continued use of our service after changes constitutes acceptance of the new terms.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-travel-blue mb-6">
                  Termination
                </h2>
                <p className="text-muted-navy leading-relaxed">
                  We may terminate or suspend access to our service immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-travel-blue mb-6">
                  Governing Law
                </h2>
                <p className="text-muted-navy leading-relaxed">
                  These Terms shall be interpreted and governed by the laws of India. Any disputes arising under these terms shall be subject to the jurisdiction of Indian courts.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-travel-blue mb-6 flex items-center">
                  <Mail className="h-6 w-6 mr-3" />
                  Contact Information
                </h2>
                <p className="text-muted-navy leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-muted-navy">
                    <strong>Email:</strong> rremote@roaminsider.com<br />
                    <strong>Subject:</strong> Terms of Service Question
                  </p>
                </div>
              </div>

              {/* Acknowledgment */}
              <div className="bg-travel-blue/5 rounded-lg p-6">
                <p className="text-travel-blue font-semibold text-center">
                  By using Roam Insider, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}