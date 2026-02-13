import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { BookOpen, Gavel, Handshake, Sprout, HeartPulse } from "lucide-react";

// Unsplash: Workshop or seminar
const headerImage = "/images/programs-header.jpg";

const programs = [
  {
    title: "Leadership Development",
    desc: "Intensive workshops and mentorship programs designed to cultivate ethical leadership skills in young professionals.",
    icon: Handshake,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Youth Empowerment",
    desc: "Providing tools, resources, and funding opportunities for youth-led initiatives and startups.",
    icon: Sprout,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Policy & Advocacy",
    desc: "Training young leaders to engage with policy-making processes and advocate for youth-centric legislation.",
    icon: Gavel,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Education & Research",
    desc: "Scholarship opportunities and research grants focused on solving continental challenges.",
    icon: BookOpen,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Health & Climate Action",
    desc: "Mobilizing youth for public health campaigns and sustainable environmental practices.",
    icon: HeartPulse,
    color: "bg-red-50 text-red-600",
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Our Programs" 
        subtitle="Strategic initiatives designed to equip leaders with the skills they need."
        image={headerImage}
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${program.color} group-hover:scale-110 transition-transform`}>
                  <program.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{program.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {program.desc}
                </p>
                <button className="text-sm font-bold text-foreground border-b border-primary hover:text-primary transition-colors pb-1">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
