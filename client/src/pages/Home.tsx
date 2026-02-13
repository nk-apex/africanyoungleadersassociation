import { Link } from "wouter";
import { ArrowRight, Users, Lightbulb, Globe, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-foreground">
        {/* Unsplash image: Diverse group of young Africans smiling confident */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-african-youth.jpg"
            alt="Young African Leaders" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm">
              Empowering the Continent
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-8 leading-[1.1]">
              Young Minds.<br />
              <span className="text-primary">Bold Vision.</span><br />
              United Africa.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-light">
              Connecting and empowering the next generation of African leaders to drive sustainable change and prosperity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership">
                <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-primary text-black hover:bg-primary/90 font-bold shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all">
                  Join the Movement
                </Button>
              </Link>
              <Link href="/communities">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black font-semibold">
                  Explore Communities
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative"
            >
              {/* Unsplash: Professional meeting or discussion */}
              <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="/images/about-discussion.jpg" 
                  alt="AYLA discussion" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-0" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-black/5 rounded-full blur-3xl -z-0" />
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Who We Are</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                A Unified Voice for Africa's Future
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Africa's Young Leaders Association (AYLA) represents the vanguard of the continent's transformation. We are a network of young professionals, students, and visionaries committed to Pan-African unity and progress.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Through mentorship, policy advocacy, and community engagement, we are building the bridges necessary for a prosperous African future.
              </p>
              <Link href="/about">
                <div className="inline-flex items-center text-foreground font-bold border-b-2 border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                  Read Our Full Story <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Core Values</h2>
            <p className="text-muted-foreground text-lg">The principles that guide our actions and shape our vision.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Pan-Africanism", desc: "Uniting voices across borders for a shared destiny." },
              { icon: Lightbulb, title: "Innovation", desc: "Pioneering creative solutions for local challenges." },
              { icon: Users, title: "Leadership", desc: "Cultivating ethical, servant-leadership at all levels." },
              { icon: Heart, title: "Integrity", desc: "Upholding transparency and accountability in all we do." },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary group-hover:text-black transition-colors">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Join thousands of young leaders across the continent who are actively shaping the future of Africa today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/membership">
              <Button size="lg" className="text-lg px-10 py-6 rounded-full bg-white text-black hover:bg-gray-100 font-bold">
                Become a Member
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 rounded-full border-white/20 text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
