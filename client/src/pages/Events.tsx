import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

// Unsplash: Conference hall
const headerImage = "/images/events-header.jpg";

const events = [
  {
    title: "Pan-African Youth Summit 2025",
    date: "August 12-14, 2025",
    location: "Kigali, Rwanda",
    time: "09:00 AM - 05:00 PM",
    tag: "Flagship Event",
    image: "/images/event-summit.jpg"
  },
  {
    title: "Future of Tech in Africa",
    date: "October 05, 2025",
    location: "Lagos, Nigeria (Hybrid)",
    time: "02:00 PM - 06:00 PM",
    tag: "Workshop",
    image: "/images/event-tech.jpg"
  },
  {
    title: "Women in Leadership Forum",
    date: "November 20, 2025",
    location: "Nairobi, Kenya",
    time: "10:00 AM - 04:00 PM",
    tag: "Networking",
    image: "/images/event-women.jpg"
  }
];

export default function Events() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Upcoming Events" 
        subtitle="Join the conversation at our forums, summits, and workshops."
        image={headerImage}
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-8">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                      {event.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-5 h-5 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <div>
                    <Button className="rounded-full px-8 font-bold">
                      Register Now
                    </Button>
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
