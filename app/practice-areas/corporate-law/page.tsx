import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Building, TrendingUp, FileText, Briefcase } from "lucide-react"
import Link from "next/link"

export default function CorporateLawPage() {
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
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Corporate Law Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Strategic legal counsel for businesses of all sizes. From startups to established corporations, we
                provide comprehensive legal support to help your business thrive and grow.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Discuss Your Business Needs</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/modern-corporate-office-building-with-glass-facade.jpg"
                alt="Corporate office building representing business law services"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Corporate Legal Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              We provide comprehensive corporate legal services to help businesses navigate complex legal challenges and
              achieve their strategic objectives.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Business Formation & Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Expert guidance on choosing the right business structure and handling all formation requirements.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• LLC Formation</li>
                  <li>• Corporation Setup</li>
                  <li>• Partnership Agreements</li>
                  <li>• Business Registration</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Contract Negotiation & Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive contract services to protect your business interests and minimize legal risks.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Contract Drafting</li>
                  <li>• Contract Review</li>
                  <li>• Vendor Agreements</li>
                  <li>• Service Contracts</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mergers & Acquisitions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Strategic legal support for complex business transactions, mergers, and acquisitions.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Due Diligence</li>
                  <li>• Transaction Structure</li>
                  <li>• Purchase Agreements</li>
                  <li>• Regulatory Compliance</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Employment Law Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Ensuring your business complies with employment laws and protecting against workplace disputes.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Employee Handbooks</li>
                  <li>• Workplace Policies</li>
                  <li>• Discrimination Prevention</li>
                  <li>• Termination Procedures</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Intellectual Property Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Protecting your valuable intellectual property assets and business innovations.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Trademark Registration</li>
                  <li>• Copyright Protection</li>
                  <li>• Trade Secrets</li>
                  <li>• Licensing Agreements</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Corporate Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Establishing proper corporate governance structures and ensuring regulatory compliance.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Board Governance</li>
                  <li>• Shareholder Agreements</li>
                  <li>• Corporate Compliance</li>
                  <li>• Securities Law</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Attorney Profile Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground mb-4">
              Meet Your Corporate Law Attorney
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <img
                      src="/professional-male-attorney-headshot--confident-bus.jpg"
                      alt="David Sterling, Corporate Law Attorney"
                      className="rounded-full w-48 h-48 mx-auto mb-4 object-cover"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-card-foreground mb-2">David Sterling, Esq.</h3>
                    <p className="text-primary font-semibold mb-4">Managing Partner & Corporate Law Attorney</p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      David Sterling founded the firm with a vision to provide exceptional corporate legal services.
                      With over 20 years of experience in corporate law, he has guided hundreds of businesses through
                      complex transactions and strategic decisions.
                    </p>
                    <div className="space-y-2 mb-6">
                      <p className="text-sm">
                        <strong>Education:</strong> J.D., Columbia Law School; MBA, Wharton School
                      </p>
                      <p className="text-sm">
                        <strong>Experience:</strong> Former BigLaw Partner, 20+ Years Corporate Law
                      </p>
                      <p className="text-sm">
                        <strong>Specializations:</strong> M&A, Corporate Finance, Business Formation
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild>
                        <Link href="/contact">Schedule Consultation</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="tel:+1-555-123-4567">Call Direct: (555) 123-4567</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Our corporate law expertise spans across multiple industries, providing specialized knowledge for your
              business sector.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Technology & Startups</h3>
              <p className="text-muted-foreground text-sm">
                Venture capital, IP protection, and rapid growth legal support.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Real Estate</h3>
              <p className="text-muted-foreground text-sm">
                Commercial real estate transactions and development projects.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Manufacturing</h3>
              <p className="text-muted-foreground text-sm">
                Supply chain agreements, regulatory compliance, and operations.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Professional Services</h3>
              <p className="text-muted-foreground text-sm">
                Partnership structures, client agreements, and professional liability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty leading-relaxed opacity-90">
            Let our experienced corporate law team help you navigate complex business challenges and achieve your
            strategic goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule Business Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="tel:+1-555-123-4567">Call (555) 123-4567</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
