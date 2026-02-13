import { Link } from "wouter";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

// Unsplash: Individual signing document or handshake
const headerImage = "/images/membership-header.jpg";

const benefits = [
  "Access to exclusive mentorship programs",
  "Networking opportunities with industry leaders",
  "Priority registration for AYLA summits",
  "Voting rights in association elections",
  "Access to research grants and funding",
  "Certificate of Membership",
  "Professional development workshops",
  "Global travel opportunities for conferences"
];

export default function Membership() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Become a Member" 
        subtitle="Join a prestigious network of change-makers committed to Africa's growth."
        image={headerImage}
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Col: Info */}
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Why Join AYLA?</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Membership in AYLA is more than just a title; it is a commitment to service and excellence. As a member, you gain unparalleled access to resources that accelerate your career and amplify your impact.
              </p>

              <div className="bg-secondary/30 p-8 rounded-2xl border border-border mb-8">
                <h3 className="text-xl font-bold mb-4">Membership Criteria</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    Must be between 18 and 35 years of age.
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    Citizen of an African nation (or diaspora).
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    Demonstrated passion for community development.
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold mb-6">Membership Benefits</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-border sticky top-24"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold font-display">Standard Membership</h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold tracking-tight text-primary">$20</span>
                  <span className="text-sm font-semibold leading-6 text-gray-400">/year</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">Billed annually. Cancel anytime.</p>
              </div>

              <Link href="/contact">
                <Button className="w-full py-6 text-lg font-bold mb-6 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40">
                  Apply for Membership
                </Button>
              </Link>

              <div className="text-center">
                <p className="text-xs text-gray-400 mb-4">
                  By applying, you agree to our <span className="underline cursor-pointer">Ethical Code of Conduct</span>.
                </p>
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-600">Need financial aid?</p>
                  <a href="#" className="text-sm text-primary font-bold hover:underline">Apply for a waiver</a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
