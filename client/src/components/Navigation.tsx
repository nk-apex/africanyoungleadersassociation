import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/communities", label: "Communities" },
  { href: "/membership", label: "Membership" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <img 
              src="https://i.ibb.co/vC0d1Qrt/307eaf4eff2d.jpg" 
              alt="AYLA Logo" 
              className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary transition-all duration-300"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold font-display leading-none text-foreground tracking-tight">
                AYLA
              </h1>
              <p className="text-[0.65rem] font-medium text-muted-foreground uppercase tracking-widest">
                Africa's Young Leaders Association
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <div 
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer
                    ${isActive 
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" 
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"}
                  `}
                >
                  {link.label}
                </div>
              </Link>
            );
          })}
          <div className="ml-4 pl-4 border-l border-border h-6 flex items-center">
             <Link href="/membership">
              <Button size="sm" className="font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 bg-foreground text-background hover:bg-foreground/90">
                Join Now <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
             </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground hover:bg-secondary rounded-full transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div 
                    onClick={() => setIsOpen(false)}
                    className={`
                      p-4 rounded-xl text-lg font-medium transition-colors cursor-pointer flex justify-between items-center
                      ${location === link.href 
                        ? "bg-secondary text-foreground font-bold" 
                        : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"}
                    `}
                  >
                    {link.label}
                    {location === link.href && <div className="w-2 h-2 rounded-full bg-primary" />}
                  </div>
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border">
                <Link href="/membership">
                  <Button className="w-full h-12 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => setIsOpen(false)}>
                    Become a Member
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
