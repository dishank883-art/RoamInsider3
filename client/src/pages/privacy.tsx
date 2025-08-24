import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Users, Database, Mail } from "lucide-react";

export default function Privacy() {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>Privacy Policy - Roam Insider | Data Protection & Privacy</title>
      <meta 
        name="description" 
        content="Read Roam Insider's Privacy Policy. Learn how we protect your personal data, what information we collect, and your privacy rights on our digital nomad platform." 
      />
      <meta name="keywords" content="privacy policy, data protection, roam insider privacy, personal data, privacy rights" />
      <meta property="og:title" content="Privacy Policy - Roam Insider" />
      <meta property="og:description" content="Learn how Roam Insider protects your privacy and personal data on our digital nomad platform." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://roaminsider.com/privacy" />
      
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-travel-blue via-travel-blue/90 to-muted-navy py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-vintage-gold rounded-full mb-6 mx-auto">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Your privacy matters to us. Learn how we protect and handle your personal information.
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
                  <Eye className="h-8 w-8 text-travel-blue mx-auto mb-2" />
                  <CardTitle className="text-travel-blue">What We Collect</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-navy text-sm">
                    Only essential information needed to provide our service and improve your experience.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-none shadow-lg">
                <CardHeader>
                  <Lock className="h-8 w-8 text-travel-blue mx-auto mb-2" />
                  <CardTitle className="text-travel-blue">How We Protect</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-navy text-sm">
                    Industry-standard security measures to keep your data safe and secure.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-none shadow-lg">
                <CardHeader>
                  <Users className="h-8 w-8 text-travel-blue mx-auto mb-2" />
                  <CardTitle className="text-travel-blue">Your Rights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-navy text-sm">
                    Full control over your personal data with easy options to manage your privacy.
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
              
              {/* Information We Collect */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-travel-blue mb-6 flex items-center">
                  <Database className="h-6 w-6 mr-3" />
                  Information We Collect
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-travel-blue mb-3">Personal Information</h3>
                    <p className="text-muted-navy leading-relaxed mb-3">
                      When you interact with our platform, we may collect:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-navy ml-4">
                      <li>Email address (when subscribing to updates)</li>
                      <li>Discord username (when joining our community)</li>
                      <li>City preferences and travel interests</li>
                      <li>Feedback and messages you send us</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-travel-blue mb-3">Automatically Collected Information</h3>
                    <p className="text-muted-navy leading-relaxed mb-3">
                      We automatically collect certain information when you visit our website:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-navy ml-4">
                      <li>IP address and browser information</li>
                      <li>Device type and operating system</li>
                      <li>Pages visited and time spent on site</li>
                      <li>Referral sources and search terms</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-travel-blue mb-6">
                  How We Use Your Information
                </h2>
                <div className="space-y-4">
                  <p className="text-muted-navy leading-relaxed">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-navy ml-4">
                    <li>Provide and improve our digital nomad platform</li>
                    <li>Send you updates about new cities and features (with your consent)</li>
                    <li>Respond to your questions and provide customer support</li>
                    <li>Analyze how our platform is used to make improvements</li>
                    <li>Prevent spam and maintain platform security</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </div>

              {/* Information Sharing */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-travel-blue mb-6">
                  Information Sharing
                </h2>
                <p className="text-muted-navy leading-relaxed mb-4">
                  We respect your privacy and do not sell your personal information. We may share information only in these limited circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-navy ml-4">
                  <li><strong>Service Providers:</strong> With trusted third-parties who help us operate our platform</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger or acquisition (with notice)</li>
                  <li><strong>Consent:</strong> When you give us explicit permission</li>
                </ul>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-travel-blue mb-6 flex items-center">
                  <Lock className="h-6 w-6 mr-3" />
                  Data Security
                </h2>
                <p className="text-muted-navy leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-travel-blue mb-6">
                  Your Privacy Rights
                </h2>
                <p className="text-muted-navy leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-navy ml-4">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Ask us to correct any inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Receive your information in a portable format</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                </ul>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-travel-blue mb-6">
                  Cookies and Tracking
                </h2>
                <p className="text-muted-navy leading-relaxed mb-4">
                  We use cookies and similar technologies to improve your experience and analyze how our platform is used. You can control cookies through your browser settings.
                </p>
                <p className="text-muted-navy leading-relaxed">
                  We use analytics tools to understand user behavior and improve our platform. These tools may collect information about your device and usage patterns.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-travel-blue mb-6 flex items-center">
                  <Mail className="h-6 w-6 mr-3" />
                  Contact Us
                </h2>
                <p className="text-muted-navy leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-muted-navy">
                    <strong>Email:</strong> rremote@roaminsider.com<br />
                    <strong>Subject:</strong> Privacy Policy Question
                  </p>
                </div>
              </div>

              {/* Updates */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-travel-blue mb-6">
                  Policy Updates
                </h2>
                <p className="text-muted-navy leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                  We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
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