import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { Code, Stethoscope, Scale, Briefcase, Calculator, PenTool, Book, BrainCircuit, Cog } from "lucide-react";

// Unsplash: Group of students collaborating
const headerImage = "/images/communities-header.jpg";

const communities = [
  { name: "Computer Science & IT", icon: Code, desc: "Tech innovators building Africa's digital future." },
  { name: "Medical & Health", icon: Stethoscope, desc: "Future doctors and health policy experts." },
  { name: "Law & Governance", icon: Scale, desc: "Advocates for justice and constitutionalism." },
  { name: "Business & Entrepreneurship", icon: Briefcase, desc: "Driving economic growth through enterprise." },
  { name: "Economics & Finance", icon: Calculator, desc: "Shaping fiscal policy and financial systems." },
  { name: "Engineering & Architecture", icon: Cog, desc: "Designing sustainable infrastructure." },
  { name: "Arts & Media", icon: PenTool, desc: "Storytellers reclaiming the African narrative." },
  { name: "Education", icon: Book, desc: "Transforming learning systems for the next generation." },
  { name: "Psychology & Social Work", icon: BrainCircuit, desc: "Promoting mental well-being and social cohesion." },
];

export default function Communities() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Professional Communities" 
        subtitle="Connect with peers in your field to collaborate on specialized projects."
        image={headerImage}
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map((community, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-secondary/20 hover:bg-white p-6 rounded-2xl border border-transparent hover:border-primary/20 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm text-foreground group-hover:bg-primary group-hover:text-black transition-colors">
                    <community.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-foreground mb-2 group-hover:text-primary transition-colors">
                      {community.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {community.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
