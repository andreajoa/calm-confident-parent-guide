import { ArrowLeft, Mail, Shield, AlertCircle, Download, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ReturnPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            📚 Return & Refund Policy
          </h1>
          <p className="text-muted-foreground">
            Effective Date: July 25, 2025
          </p>
        </div>

        {/* Product Info Card */}
        <Card className="mb-8 border-blue-200">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Product:</strong> The Calm & Confident Parent (Digital eBook)
              </div>
              <div>
                <strong>Purchase Platform:</strong> Gumroad.com
              </div>
              <div>
                <strong>Website:</strong> www.adhdautism.online
              </div>
              <div>
                <strong>Contact:</strong> info@adhdautism.online
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {/* How Purchase Works */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-lg">🛒</span>
                </div>
                <h2 className="text-xl font-semibold text-foreground">How the Purchase Works</h2>
              </div>
              <div className="text-muted-foreground space-y-3">
                <p>
                  When you visit our website, www.adhdautism.online, and click the purchase button for 
                  The Calm & Confident Parent, you will be securely redirected to our product page on 
                  Gumroad, a trusted third-party platform that processes the payment and delivers the eBook.
                </p>
                <p>
                  Once the payment is complete, Gumroad provides immediate access to download the digital 
                  eBook to your computer, smartphone, or tablet.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Digital Product - Final Sale */}
          <Card className="border-amber-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="h-4 w-4 text-amber-600" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Digital Product – Final Sale</h2>
              </div>
              <div className="text-muted-foreground space-y-3">
                <p>
                  Please be aware that The Calm & Confident Parent is a digital product, and all sales 
                  are considered final.
                </p>
                <p>
                  Because the eBook is delivered instantly after purchase and cannot be "returned," 
                  we do not offer automatic refunds or exchanges.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Exceptional Situations */}
          <Card className="border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-lg">💬</span>
                </div>
                <h2 className="text-xl font-semibold text-foreground">Exceptional Situations – We're Here to Help</h2>
              </div>
              <div className="text-muted-foreground space-y-3">
                <p>
                  If you experience a technical issue or believe you made a purchase in error, we encourage 
                  you to contact us. We are happy to assist in situations such as:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>You did not receive your download link from Gumroad</li>
                  <li>You accidentally purchased multiple copies</li>
                  <li>You are experiencing trouble accessing the eBook</li>
                  <li>You have a valid reason to request support</li>
                </ul>
                <p>
                  In these cases, please contact our team within <strong>7 days</strong> of your purchase at{" "}
                  <a href="mailto:info@adhdautism.online" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                    <Mail className="h-3 w-3" />
                    info@adhdautism.online
                  </a>. Include your Gumroad order number and a brief explanation. We treat every request 
                  with care and understanding.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Didn't Receive Download */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Download className="h-4 w-4 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Didn't Receive Your Download?</h2>
              </div>
              <div className="text-muted-foreground space-y-3">
                <p>
                  After purchase on Gumroad, your download link should be sent immediately to the email 
                  address you provided. If you don't see it within a few minutes:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Check your spam, junk, or promotions folder</li>
                  <li>Ensure your email was correctly entered during checkout</li>
                </ul>
                <p>
                  Still need help? Reach out to us at{" "}
                  <a href="mailto:info@adhdautism.online" className="text-blue-600 hover:underline">
                    info@adhdautism.online
                  </a>{" "}
                  – we'll make sure you receive it
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Our Commitment */}
          <Card className="border-pink-200 bg-gradient-to-r from-pink-50 to-purple-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="h-4 w-4 text-pink-600" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Our Commitment</h2>
              </div>
              <div className="text-muted-foreground space-y-3">
                <p>
                  The Calm & Confident Parent was created to support and empower parents raising children 
                  with ADHD and/or autism. We are honored that you've chosen to invest in this journey with us.
                </p>
                <p className="text-foreground font-medium">
                  Thank you for your trust and for being part of our mission to support families with 
                  care and clarity. 💙
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Have questions about our return policy?
          </p>
          <Button asChild>
            <a href="mailto:info@adhdautism.online" className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;