import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Users, Award, GraduationCap, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function AttorneysPage() {
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
              <Link href="/attorneys" className="text-primary font-medium">
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
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Meet Our Legal Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Our experienced attorneys bring decades of combined expertise across multiple practice areas. We are
            committed to providing exceptional legal representation with integrity and results.
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Years Combined Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Cases Successfully Handled</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <p className="text-muted-foreground">Practice Areas</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Attorney Profiles */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* David Sterling - Managing Partner */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2 relative">
                    <img
                      src="/professional-male-attorney-headshot--confident-bus.jpg"
                      alt="David Sterling, Managing Partner"
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                  </div>
                  <div className="lg:col-span-3 p-8 lg:p-12">
                    <div className="mb-4">
                      <h2 className="text-3xl font-bold text-foreground mb-2">David Sterling, Esq.</h2>
                      <p className="text-xl text-primary font-semibold mb-4">
                        Managing Partner & Corporate Law Attorney
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <Badge variant="secondary">Corporate Law</Badge>
                        <Badge variant="secondary">M&A</Badge>
                        <Badge variant="secondary">Business Formation</Badge>
                        <Badge variant="secondary">Securities Law</Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      David Sterling founded Sterling & Associates in 1998 with a vision to provide exceptional
                      corporate legal services to businesses of all sizes. With over 20 years of experience in corporate
                      law, he has guided hundreds of businesses through complex transactions, mergers, acquisitions, and
                      strategic decisions that have shaped their success.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Before founding the firm, David was a partner at a prestigious BigLaw firm where he represented
                      Fortune 500 companies in multi-billion dollar transactions. His unique combination of big-firm
                      expertise and personalized service has made him a trusted advisor to CEOs and business owners
                      throughout the region.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-primary" />
                          Education
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• J.D., Columbia Law School (magna cum laude)</li>
                          <li>• MBA, Wharton School of Business</li>
                          <li>• B.A., Economics, Harvard University</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          Achievements
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Super Lawyers (10 consecutive years)</li>
                          <li>• Best Lawyers in America</li>
                          <li>• Chambers USA Leading Lawyer</li>
                          <li>• State Bar Business Law Section Chair</li>
                        </ul>
                      </div>
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

            {/* Sarah Mitchell - Family Law */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2 relative order-2 lg:order-1">
                    <img
                      src="/professional-female-attorney-headshot--confident-s.jpg"
                      alt="Sarah Mitchell, Family Law Attorney"
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                  </div>
                  <div className="lg:col-span-3 p-8 lg:p-12 order-1 lg:order-2">
                    <div className="mb-4">
                      <h2 className="text-3xl font-bold text-foreground mb-2">Sarah Mitchell, Esq.</h2>
                      <p className="text-xl text-primary font-semibold mb-4">Lead Family Law Attorney</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <Badge variant="secondary">Family Law</Badge>
                        <Badge variant="secondary">Divorce</Badge>
                        <Badge variant="secondary">Child Custody</Badge>
                        <Badge variant="secondary">Adoption</Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Sarah Mitchell brings over 15 years of dedicated experience in family law, with a special focus on
                      complex divorce cases, high-asset property division, and sensitive child custody matters. She is
                      known throughout the legal community for her compassionate approach combined with fierce advocacy
                      for her clients' rights.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Sarah understands that family law matters are deeply personal and emotionally challenging. She
                      takes pride in guiding families through difficult transitions with dignity, helping them achieve
                      resolutions that protect their children's best interests while securing their financial future.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-primary" />
                          Education
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• J.D., Harvard Law School</li>
                          <li>• B.A., Psychology, Yale University</li>
                          <li>• Family Mediation Certification</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          Achievements
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Top Family Lawyers (5 consecutive years)</li>
                          <li>• Rising Stars Super Lawyers</li>
                          <li>• Family Law Section Board Member</li>
                          <li>• Pro Bono Excellence Award</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild>
                        <Link href="/contact">Schedule Consultation</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="tel:+1-555-123-4568">Call Direct: (555) 123-4568</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Michael Rodriguez - Criminal Defense */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2 relative">
                    <img
                      src="/professional-male-attorney-headshot--serious-expre.jpg"
                      alt="Michael Rodriguez, Criminal Defense Attorney"
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                  </div>
                  <div className="lg:col-span-3 p-8 lg:p-12">
                    <div className="mb-4">
                      <h2 className="text-3xl font-bold text-foreground mb-2">Michael Rodriguez, Esq.</h2>
                      <p className="text-xl text-primary font-semibold mb-4">Lead Criminal Defense Attorney</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <Badge variant="secondary">Criminal Defense</Badge>
                        <Badge variant="secondary">DUI Defense</Badge>
                        <Badge variant="secondary">White Collar</Badge>
                        <Badge variant="secondary">Appeals</Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Michael Rodriguez brings a unique perspective to criminal defense, having served as a prosecutor
                      for 5 years before joining Sterling & Associates. This experience on both sides of the courtroom
                      gives him invaluable insight into prosecution strategies and helps him build stronger defenses for
                      his clients.
                    </p>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      With over 12 years of criminal law experience, Michael has successfully defended clients against
                      charges ranging from misdemeanors to serious felonies. He is known for his meticulous case
                      preparation, aggressive courtroom advocacy, and unwavering commitment to protecting his clients'
                      constitutional rights.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-primary" />
                          Education
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• J.D., Stanford Law School</li>
                          <li>• B.A., Criminal Justice, UC Berkeley</li>
                          <li>• Trial Advocacy Certification</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          Achievements
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Criminal Defense Lawyer of the Year</li>
                          <li>• Super Lawyers Rising Stars</li>
                          <li>• Former District Attorney</li>
                          <li>• Trial Lawyers Association Member</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild>
                        <Link href="/contact">Schedule Consultation</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="tel:+1-555-123-4569">Emergency: (555) 123-4569</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Firm Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground mb-4">Our Commitment to Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Our attorneys share a common commitment to providing exceptional legal representation with integrity,
              professionalism, and results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Client-Centered Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We prioritize our clients' needs and goals, providing personalized attention and tailored legal
                  strategies for every case.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Proven Track Record</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our attorneys have achieved exceptional results for clients across all practice areas, with hundreds
                  of successful cases.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Scale className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Ethical Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We maintain the highest standards of legal ethics and professional conduct in all our client
                  relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Ready to Work with Our Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty leading-relaxed opacity-90">
            Contact us today to discuss your legal needs with one of our experienced attorneys. We're here to help you
            achieve the best possible outcome.
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
