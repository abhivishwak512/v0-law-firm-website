import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Scale, Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-primary mr-3" />
              <span className="text-xl font-bold text-foreground">Sterling & Associates</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/practice-areas" className="text-foreground hover:text-primary transition-colors">
                Practice Areas
              </Link>
              <Link href="/attorneys" className="text-foreground hover:text-primary transition-colors">
                Our Team
              </Link>
              <Link href="/contact" className="text-primary font-medium">
                Contact
              </Link>
              <Button asChild>
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Contact Our Legal Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Ready to discuss your legal needs? Contact Sterling & Associates today for a free consultation. Our
              experienced attorneys are here to help you navigate your legal challenges.
            </p>
          </div>

          {/* Emergency Contact Alert */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                <h3 className="text-lg font-semibold text-destructive">Emergency Legal Assistance</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                If you've been arrested or need immediate criminal defense assistance, call our emergency line 24/7.
              </p>
              <Button variant="destructive" asChild>
                <Link href="tel:+1-555-123-4569">Emergency: (555) 123-4569</Link>
              </Button>
            </div>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-foreground mb-2">(555) 123-4567</p>
                <p className="text-sm text-muted-foreground">Monday - Friday, 8:00 AM - 6:00 PM</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground mb-2">info@sterlinglaw.com</p>
                <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold text-foreground mb-1">123 Legal Plaza, Suite 500</p>
                <p className="text-sm text-muted-foreground">Downtown, ST 12345</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Office Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Schedule Your Free Consultation</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll contact you within 24 hours to discuss your legal needs.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="practiceArea">Practice Area *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a practice area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="family-law">Family Law</SelectItem>
                          <SelectItem value="criminal-defense">Criminal Defense</SelectItem>
                          <SelectItem value="corporate-law">Corporate Law</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="urgency">How urgent is your matter?</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select urgency level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emergency">Emergency - Need immediate assistance</SelectItem>
                          <SelectItem value="urgent">Urgent - Within a few days</SelectItem>
                          <SelectItem value="normal">Normal - Within a week</SelectItem>
                          <SelectItem value="planning">Planning - No immediate deadline</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about your legal matter *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide details about your legal situation, including any relevant dates, parties involved, and specific questions you have..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="text-xs text-muted-foreground">
                        <p className="mb-2">
                          * Required fields. By submitting this form, you agree to our{" "}
                          <Link href="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                          </Link>
                          .
                        </p>
                        <p>
                          <strong>Disclaimer:</strong> Submitting this form does not create an attorney-client
                          relationship. Do not include confidential or sensitive information in your message.
                        </p>
                      </div>
                      <Button type="submit" size="lg" className="w-full">
                        Send Message & Schedule Consultation
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              {/* Office Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Office Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        Sterling & Associates Law Firm
                        <br />
                        123 Legal Plaza, Suite 500
                        <br />
                        Downtown, ST 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone Numbers</h4>
                      <p className="text-muted-foreground">
                        Main Office: (555) 123-4567
                        <br />
                        Emergency Line: (555) 123-4569
                        <br />
                        Fax: (555) 123-4568
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">
                        General Inquiries: info@sterlinglaw.com
                        <br />
                        New Clients: newclient@sterlinglaw.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                        <br />
                        <span className="text-destructive font-medium">Emergency consultations available 24/7</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Find Our Office</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">123 Legal Plaza, Suite 500</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <Link
                        href="https://maps.google.com/?q=123+Legal+Plaza+Suite+500+Downtown+ST+12345"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Directions on Google Maps
                      </Link>
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Free parking available in the building garage. Visitor parking on levels 1-2.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Direct Attorney Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Contact Attorneys Directly</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-semibold text-foreground">David Sterling</p>
                      <p className="text-sm text-muted-foreground">Corporate Law</p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="tel:+1-555-123-4567">Call Direct</Link>
                    </Button>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-semibold text-foreground">Sarah Mitchell</p>
                      <p className="text-sm text-muted-foreground">Family Law</p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="tel:+1-555-123-4568">Call Direct</Link>
                    </Button>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-semibold text-foreground">Michael Rodriguez</p>
                      <p className="text-sm text-muted-foreground">Criminal Defense</p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="tel:+1-555-123-4569">Call Direct</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How much does a consultation cost?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer free initial consultations for all practice areas. This allows us to understand your legal
                  needs and explain how we can help without any financial commitment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How quickly can I meet with an attorney?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We typically schedule consultations within 24-48 hours. For urgent matters, especially criminal cases,
                  we can often meet the same day or provide immediate phone consultation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you handle cases outside your main practice areas?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  While we specialize in Family Law, Criminal Defense, and Corporate Law, we have a network of trusted
                  attorneys for other legal matters and can provide appropriate referrals.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What should I bring to my consultation?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bring any relevant documents, contracts, court papers, or correspondence related to your legal matter.
                  We'll provide a specific list based on your case type when you schedule.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Scale className="h-6 w-6 text-primary mr-2" />
                <span className="text-lg font-bold text-card-foreground">Sterling & Associates</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Professional legal services with integrity and results since 1998.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Mail className="h-4 w-4" />
                <span>info@sterlinglaw.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>
                  123 Legal Plaza, Suite 500
                  <br />
                  Downtown, ST 12345
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-4">Practice Areas</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/practice-areas/family-law" className="hover:text-primary transition-colors">
                    Family Law
                  </Link>
                </li>
                <li>
                  <Link href="/practice-areas/criminal-defense" className="hover:text-primary transition-colors">
                    Criminal Defense
                  </Link>
                </li>
                <li>
                  <Link href="/practice-areas/corporate-law" className="hover:text-primary transition-colors">
                    Corporate Law
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-4">About</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/attorneys" className="hover:text-primary transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    Our Firm
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-primary transition-colors">
                    Client Reviews
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/privacy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="hover:text-primary transition-colors">
                    Legal Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Sterling & Associates Law Firm. All rights reserved.</p>
            <p className="mt-2 text-sm">Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
