import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Users, Award, Building, Shield, Gavel } from "lucide-react"
import Link from "next/link"

export default function PracticeAreasPage() {
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
              <Link href="/practice-areas" className="text-primary font-medium">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Comprehensive Legal Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Our experienced attorneys provide expert legal representation across multiple practice areas, ensuring you
            receive the specialized attention your case deserves.
          </p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Family Law</CardTitle>
                <CardDescription className="text-base">
                  Compassionate legal guidance for life's most personal matters
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Our family law practice focuses on protecting your family's interests during challenging times. We
                  handle divorce, child custody, adoption, and other family-related legal matters with sensitivity and
                  expertise.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Services:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Divorce & Legal Separation</li>
                    <li>• Child Custody & Support</li>
                    <li>• Adoption Proceedings</li>
                    <li>• Prenuptial Agreements</li>
                    <li>• Domestic Violence Protection</li>
                  </ul>
                </div>
                <Button asChild className="w-full">
                  <Link href="/practice-areas/family-law">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Criminal Defense</CardTitle>
                <CardDescription className="text-base">
                  Aggressive defense to protect your rights and freedom
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  When facing criminal charges, you need experienced advocates who will fight tirelessly for your
                  rights. Our criminal defense team provides aggressive representation for all types of criminal
                  matters.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Services:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• DUI/DWI Defense</li>
                    <li>• Drug Crime Defense</li>
                    <li>• Assault & Battery</li>
                    <li>• White Collar Crimes</li>
                    <li>• Appeals & Post-Conviction</li>
                  </ul>
                </div>
                <Button asChild className="w-full">
                  <Link href="/practice-areas/criminal-defense">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Corporate Law</CardTitle>
                <CardDescription className="text-base">
                  Strategic legal counsel for businesses of all sizes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Our corporate law practice helps businesses navigate complex legal challenges, from formation to
                  expansion. We provide strategic counsel to protect your business interests and ensure compliance.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Services:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Business Formation & Structure</li>
                    <li>• Contract Negotiation & Review</li>
                    <li>• Mergers & Acquisitions</li>
                    <li>• Employment Law Compliance</li>
                    <li>• Intellectual Property Protection</li>
                  </ul>
                </div>
                <Button asChild className="w-full">
                  <Link href="/practice-areas/corporate-law">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground mb-4">
              Why Choose Sterling & Associates?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Our commitment to excellence and client satisfaction sets us apart in the legal community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">25+ Years Experience</h3>
              <p className="text-muted-foreground text-sm">
                Decades of combined legal expertise across all practice areas.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Client-Focused Approach</h3>
              <p className="text-muted-foreground text-sm">
                Personalized attention and tailored legal strategies for every client.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Gavel className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Proven Track Record</h3>
              <p className="text-muted-foreground text-sm">Hundreds of successful cases and satisfied clients.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Scale className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Ethical Practice</h3>
              <p className="text-muted-foreground text-sm">
                Committed to the highest standards of legal ethics and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Need Legal Assistance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty leading-relaxed opacity-90">
            Contact us today to discuss your legal needs. Our experienced attorneys are ready to help you navigate your
            legal challenges.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Schedule Your Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
