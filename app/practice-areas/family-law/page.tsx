import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale } from "lucide-react"
import Link from "next/link"

export default function FamilyLawPage() {
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
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Family Law Services</h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Compassionate legal guidance for life's most personal and challenging family matters. We understand that
                family law issues are deeply personal and emotionally difficult.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Get Legal Help Today</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/happy-family-with-children-in-a-park-setting--prof.jpg"
                alt="Happy family representing family law services"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Family Law Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              We provide comprehensive family law services with sensitivity, expertise, and a commitment to protecting
              your family's best interests.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Divorce & Legal Separation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Guiding you through divorce proceedings with dignity and fairness, including property division,
                  spousal support, and custody arrangements.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Uncontested Divorce</li>
                  <li>• Contested Divorce</li>
                  <li>• Property Division</li>
                  <li>• Spousal Support/Alimony</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Child Custody & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Protecting your children's best interests while securing your parental rights through custody and
                  support arrangements.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Child Custody Agreements</li>
                  <li>• Visitation Rights</li>
                  <li>• Child Support Calculations</li>
                  <li>• Custody Modifications</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Adoption Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Helping families grow through adoption with comprehensive legal support throughout the entire process.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Domestic Adoption</li>
                  <li>• International Adoption</li>
                  <li>• Stepparent Adoption</li>
                  <li>• Adult Adoption</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Prenuptial Agreements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Protecting your assets and clarifying expectations with comprehensive prenuptial and postnuptial
                  agreements.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Asset Protection</li>
                  <li>• Debt Allocation</li>
                  <li>• Business Interest Protection</li>
                  <li>• Inheritance Rights</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Domestic Violence Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Immediate legal protection for victims of domestic violence, including restraining orders and safety
                  planning.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Restraining Orders</li>
                  <li>• Emergency Protection</li>
                  <li>• Safety Planning</li>
                  <li>• Court Representation</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Guardianship & Conservatorship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Legal guardianship and conservatorship services to protect vulnerable family members and their
                  interests.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Minor Guardianship</li>
                  <li>• Adult Guardianship</li>
                  <li>• Conservatorship</li>
                  <li>• Estate Planning</li>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground mb-4">Meet Your Family Law Attorney</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <img
                      src="/professional-female-attorney-headshot--confident-s.jpg"
                      alt="Sarah Mitchell, Family Law Attorney"
                      className="rounded-full w-48 h-48 mx-auto mb-4 object-cover"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-card-foreground mb-2">Sarah Mitchell, Esq.</h3>
                    <p className="text-primary font-semibold mb-4">Lead Family Law Attorney</p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Sarah Mitchell brings over 15 years of experience in family law, with a special focus on complex
                      divorce cases and child custody matters. She is known for her compassionate approach and fierce
                      advocacy for her clients' rights.
                    </p>
                    <div className="space-y-2 mb-6">
                      <p className="text-sm">
                        <strong>Education:</strong> J.D., Harvard Law School; B.A., Yale University
                      </p>
                      <p className="text-sm">
                        <strong>Bar Admissions:</strong> State Bar, Federal District Court
                      </p>
                      <p className="text-sm">
                        <strong>Specializations:</strong> High-Asset Divorce, Child Custody, Adoption
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Protect Your Family's Future</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty leading-relaxed opacity-90">
            Don't navigate family legal matters alone. Contact our experienced family law team for compassionate, expert
            guidance.
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
              <Link href="tel:+1-555-123-4567">Call (555) 123-4567</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
