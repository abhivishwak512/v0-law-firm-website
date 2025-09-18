import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Shield, Gavel, Phone, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function CriminalDefensePage() {
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
                Criminal Defense Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Aggressive defense to protect your rights, freedom, and future. When facing criminal charges, you need
                experienced advocates who will fight tirelessly on your behalf.
              </p>
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 text-destructive mb-2">
                  <AlertTriangle className="h-5 w-5" />
                  <span className="font-semibold">Arrested? Time is Critical</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Contact us immediately. The sooner we begin your defense, the better we can protect your rights.
                </p>
              </div>
              <Button size="lg" asChild>
                <Link href="tel:+1-555-123-4567">Call Now: (555) 123-4567</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/professional-courthouse-with-justice-scales--drama.jpg"
                alt="Courthouse representing criminal defense services"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Criminal Defense Practice Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              We provide aggressive defense representation for all types of criminal charges, from misdemeanors to
              serious felonies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>DUI/DWI Defense</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive defense against drunk driving charges, including license suspension hearings and court
                  representation.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• First-Time DUI Offenses</li>
                  <li>• Repeat DUI Charges</li>
                  <li>• License Suspension Defense</li>
                  <li>• Field Sobriety Test Challenges</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Drug Crime Defense</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Defending against all drug-related charges, from simple possession to trafficking and distribution.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Drug Possession</li>
                  <li>• Drug Trafficking</li>
                  <li>• Drug Manufacturing</li>
                  <li>• Prescription Drug Crimes</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Assault & Battery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Strong defense against violent crime charges, including domestic violence and aggravated assault
                  cases.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Simple Assault</li>
                  <li>• Aggravated Assault</li>
                  <li>• Domestic Violence</li>
                  <li>• Self-Defense Claims</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>White Collar Crimes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Sophisticated defense for complex financial crimes and professional misconduct charges.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Fraud & Embezzlement</li>
                  <li>• Money Laundering</li>
                  <li>• Tax Evasion</li>
                  <li>• Securities Violations</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Theft & Property Crimes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Defense against theft, burglary, robbery, and other property-related criminal charges.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Theft & Larceny</li>
                  <li>• Burglary</li>
                  <li>• Robbery</li>
                  <li>• Vandalism</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Appeals & Post-Conviction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Appellate representation and post-conviction relief for those seeking to overturn convictions.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Criminal Appeals</li>
                  <li>• Post-Conviction Relief</li>
                  <li>• Sentence Modifications</li>
                  <li>• Expungement Services</li>
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
              Meet Your Criminal Defense Attorney
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <img
                      src="/professional-male-attorney-headshot--serious-expre.jpg"
                      alt="Michael Rodriguez, Criminal Defense Attorney"
                      className="rounded-full w-48 h-48 mx-auto mb-4 object-cover"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-card-foreground mb-2">Michael Rodriguez, Esq.</h3>
                    <p className="text-primary font-semibold mb-4">Lead Criminal Defense Attorney</p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Michael Rodriguez is a former prosecutor with over 12 years of criminal law experience. His unique
                      perspective from both sides of the courtroom gives him a strategic advantage in defending his
                      clients' rights and freedom.
                    </p>
                    <div className="space-y-2 mb-6">
                      <p className="text-sm">
                        <strong>Education:</strong> J.D., Stanford Law School; B.A., UC Berkeley
                      </p>
                      <p className="text-sm">
                        <strong>Experience:</strong> Former District Attorney, 12+ Years Criminal Law
                      </p>
                      <p className="text-sm">
                        <strong>Specializations:</strong> DUI Defense, Drug Crimes, White Collar Defense
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild>
                        <Link href="/contact">Schedule Consultation</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="tel:+1-555-123-4567">Emergency: (555) 123-4567</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Criminal Defense Team?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Aggressive Defense</h3>
              <p className="text-muted-foreground text-sm">
                We fight tirelessly to protect your rights and achieve the best possible outcome.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Gavel className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Trial Experience</h3>
              <p className="text-muted-foreground text-sm">
                Extensive courtroom experience with a proven track record of successful defenses.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">24/7 Availability</h3>
              <p className="text-muted-foreground text-sm">
                Available around the clock for arrests and emergency legal situations.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Scale className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Former Prosecutor</h3>
              <p className="text-muted-foreground text-sm">
                Insider knowledge of prosecution strategies and court procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Your Freedom is Our Priority</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty leading-relaxed opacity-90">
            Don't face criminal charges alone. Contact our experienced defense team immediately for aggressive
            representation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="tel:+1-555-123-4567">Emergency: (555) 123-4567</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
