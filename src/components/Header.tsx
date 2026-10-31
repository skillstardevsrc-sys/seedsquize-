"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MilestoneQuizModal from "./MilestoneQuizModal";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Therapies", href: "/therapies" },
  { label: "Conditions", href: "/conditions" },
  { label: "Milestone Quiz", href: "/milestone-quiz" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md lg:bg-bg/85 lg:backdrop-blur-xl border-b border-soft-green/60">
      <nav
        className="container-main flex items-center justify-between h-14 sm:h-16 md:h-20"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <Image 
            src="/images/logo.svg" 
            alt="Seeds Therapy Center" 
            width={56}
            height={56}
            priority
            loading="eager"
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain"
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-xs sm:text-sm font-bold text-primary tracking-wide leading-tight">
              SEEDS
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-secondary tracking-wide">
              THERAPY CENTER
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-text-main hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2.5 lg:gap-3">
          <button
            onClick={() => setIsQuizOpen(true)}
            className="inline-flex items-center gap-2 px-3.5 lg:px-4 py-2 rounded-full bg-amber-50/95 hover:bg-amber-100 border border-amber-300 text-amber-950 text-xs lg:text-sm font-bold shadow-sm hover:shadow transition-all duration-200 group active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600 group-hover:rotate-12 transition-transform" />
            <span>🎯 Child Milestone Quiz</span>
          </button>

          <a
            href="/contact"
            className="px-4 lg:px-5 py-2.5 rounded-full bg-primary text-white text-xs lg:text-sm font-bold hover:bg-primary/90 transition-all duration-200 shadow-medium hover:shadow-card-hover active:scale-95 whitespace-nowrap"
          >
            Book a Consultation
          </a>
        </div>

        <button
          suppressHydrationWarning
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2.5 sm:p-2 rounded-lg hover:bg-soft-green/50 active:bg-soft-green/60 transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden border-t border-soft-green/60 bg-bg/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-5 sm:px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-text-main hover:text-primary transition-colors py-3 px-3 rounded-lg hover:bg-soft-green/30"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-2.5 border-t border-soft-green/40">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setIsQuizOpen(true);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 text-sm font-bold active:bg-amber-100 transition-colors shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>🎯 Child Milestone Quiz</span>
                </button>
                <a
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="px-5 py-3.5 rounded-xl bg-primary text-white text-sm font-semibold text-center active:bg-primary/90 transition-colors"
                >
                  Book a Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Milestone Assessment Quiz Modal */}
      <MilestoneQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />
    </header>
  );
}
