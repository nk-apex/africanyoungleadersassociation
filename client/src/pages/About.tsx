import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";

// Unsplash: African map or collaborative work concept
const headerImage = "/images/about-header.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="About AYLA" 
        subtitle="We are the architects of a united, prosperous Africa."
        image={headerImage}
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Vision & Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12"
            >
              <div className="p-8 bg-secondary/30 rounded-3xl border border-border">
                <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Our Vision</h3>
                <p className="text-xl md:text-2xl font-display font-medium text-foreground leading-relaxed">
                  "An integrated, prosperous, and peaceful Africa, driven by its own citizens and representing a dynamic force in the global arena."
                </p>
              </div>
              
              <div className="p-8 bg-secondary/30 rounded-3xl border border-border">
                <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Our Mission</h3>
                <p className="text-xl md:text-2xl font-display font-medium text-foreground leading-relaxed">
                  To cultivate a generation of ethical, visionary leaders who work collaboratively to solve the continent's most pressing challenges.
                </p>
              </div>
            </motion.div>

            {/* Story */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg prose-gray max-w-none"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our Pan-African Identity</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded on the ideals of Pan-Africanism, AYLA recognizes that the borders drawn on maps should not divide our aspirations. We believe that the challenges facing the youth in Lagos are similar to those in Nairobi, Cairo, and Johannesburg.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our organization serves as a platform for dialogue, collaboration, and action. By connecting young professionals, students, entrepreneurs, and activists, we create a powerful network capable of influencing policy and driving economic growth.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We are not just a student organization; we are a movement. A movement that believes in the potential of Africa's greatest resource: its people.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-border">
              {[
                { label: "Members", value: "5,000+" },
                { label: "Countries", value: "24" },
                { label: "Universities", value: "50+" },
                { label: "Events Held", value: "100+" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold font-display text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
