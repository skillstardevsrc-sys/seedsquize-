"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  Calendar,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Pencil,
  Shirt,
  Activity,
  Eye,
  BrainCircuit,
  Compass,
  Wrench,
  ShieldCheck,
  HeartHandshake,
  MessageSquare,
  BookOpenCheck,
  Mic,
  Waves,
  Users,
  TabletSmartphone,
  BookOpen,
  Grid,
  Volume2,
  HeartPulse,
  ThumbsUp,
  Target,
  CalendarClock,
  Smile,
  GraduationCap,
  LayoutList,
  Shield,
  Thermometer,
  Award,
  Star,
  MapPin,
  Clock,
  Check,
  Baby,
  Heart,
  Lightbulb,
  Speech,
} from "lucide-react";
import { TherapyData } from "@/data/therapiesData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Pencil,
  Shirt,
  Activity,
  Eye,
  BrainCircuit,
  Compass,
  Wrench,
  ShieldCheck,
  HeartHandshake,
  MessageSquare,
  MessageCircle,
  Speech,
  BookOpenCheck,
  Mic,
  Waves,
  Users,
  TabletSmartphone,
  BookOpen,
  Grid,
  Volume2,
  HeartPulse,
  ThumbsUp,
  Target,
  CalendarClock,
  Smile,
  GraduationCap,
  LayoutList,
  Shield,
  Thermometer,
  Award,
  Baby,
  Heart,
  Lightbulb,
};

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Component = iconMap[name] || Sparkles;
  return <Component className={className} />;
}

export default function TherapyDetailView({ therapy }: { therapy: TherapyData }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Seeds Therapy Center, I would like to inquire about ${therapy.shortTitle}.`
  );

  return (
    <div className="bg-bg text-text-main">
      {/* 1. BREADCRUMBS */}
      <div className="border-b border-soft-green/50 bg-surface/60 backdrop-blur-sm">
        <div className="container-main py-3 sm:py-3.5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-text-light">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-text-light/60" />
            <Link href="/therapies" className="hover:text-primary transition-colors">
              Therapies
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-text-light/60" />
            <span className="text-primary font-semibold truncate">{therapy.shortTitle}</span>
          </nav>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-b from-surface via-surface/90 to-bg border-b border-soft-green/40">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-soft-green/40 rounded-full blur-3xl pointer-events-none -z-10 animate-blob" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="container-main">
          {therapy.heroImage ? (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Content */}
                <div className="lg:col-span-7 text-left space-y-4 sm:space-y-5">
                  {/* Top Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-soft-green/60 border border-secondary/30 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm"
                  >
                    <Sparkles className="w-4 h-4 text-secondary" />
                    <span>{therapy.badge}</span>
                  </motion.div>

                  {/* Title (H1) */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight tracking-tight"
                  >
                    {therapy.title}
                  </motion.h1>

                  {/* Tagline */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-base sm:text-lg md:text-xl text-secondary font-medium leading-snug"
                  >
                    &ldquo;{therapy.tagline}&rdquo;
                  </motion.p>

                  {/* Hero Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-sm sm:text-base md:text-lg text-text-light leading-relaxed"
                  >
                    {therapy.heroDescription}
                  </motion.p>

                  {/* CTAs */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-primary text-white text-sm sm:text-base font-semibold shadow-soft hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                    >
                      <Calendar className="w-4 sm:w-5 h-4 sm:h-5 text-accent" />
                      <span>Book an Assessment</span>
                      <ArrowRight className="w-4 h-4 ml-0.5" />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-surface border border-secondary/40 text-primary hover:text-secondary hover:border-secondary text-sm sm:text-base font-semibold shadow-soft hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                    >
                      <span>Contact Us</span>
                    </Link>

                    <a
                      href={`https://wa.me/919597469409?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full bg-soft-green/40 hover:bg-soft-green/70 text-primary text-sm font-semibold transition-all duration-200"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>
                  </motion.div>
                </div>

                {/* Right Column: Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-5 relative mt-6 lg:mt-0"
                >
                  <div className="relative mx-auto max-w-md lg:max-w-none">
                    {/* Decorative ambient glow */}
                    <div className="absolute -inset-2 bg-gradient-to-tr from-soft-green/60 to-accent/20 rounded-3xl blur-xl opacity-70 -z-10" />

                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-soft-green/80 shadow-card bg-surface/50 group">
                      <Image
                        src={therapy.heroImage}
                        alt={therapy.heroImageAlt || therapy.title}
                        width={768}
                        height={512}
                        priority
                        className="w-full h-auto object-cover object-center max-h-[460px] transform group-hover:scale-102 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* 4 Quick Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left mt-10 sm:mt-12 md:mt-14"
              >
                {therapy.quickStats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-surface/90 border border-soft-green/60 p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-card transition-all duration-300"
                  >
                    <div className="flex items-center gap-1.5 text-secondary text-xs sm:text-sm font-bold uppercase tracking-wider mb-1">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>{stat.label}</span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-text-light leading-snug">{stat.desc}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto text-center">
              {/* Top Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-soft-green/60 border border-secondary/30 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6 shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-secondary" />
                <span>{therapy.badge}</span>
              </motion.div>

              {/* Title (H1) */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight tracking-tight mb-4 sm:mb-6"
              >
                {therapy.title}
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl text-secondary font-medium mb-4 sm:mb-6 max-w-3xl mx-auto leading-snug"
              >
                &ldquo;{therapy.tagline}&rdquo;
              </motion.p>

              {/* Hero Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base sm:text-lg text-text-light leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10 px-2 sm:px-0"
              >
                {therapy.heroDescription}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-14"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white text-base font-semibold shadow-soft hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <Calendar className="w-5 h-5 text-accent" />
                  <span>Book an Assessment</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-surface border border-secondary/40 text-primary hover:text-secondary hover:border-secondary text-base font-semibold shadow-soft hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <span>Contact Us</span>
                </Link>

                <a
                  href={`https://wa.me/919597469409?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-soft-green/40 hover:bg-soft-green/70 text-primary text-sm font-semibold transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </motion.div>

              {/* 4 Quick Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left"
              >
                {therapy.quickStats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-surface/90 border border-soft-green/60 p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-card transition-all duration-300"
                  >
                    <div className="flex items-center gap-1.5 text-secondary text-xs sm:text-sm font-bold uppercase tracking-wider mb-1">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>{stat.label}</span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-text-light leading-snug">{stat.desc}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* 3. WHAT IS PEDIATRIC OCCUPATIONAL THERAPY? */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3.5 py-1 rounded-full bg-soft-green/50 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider">
                {therapy.overviewSubtitle || "Clinical Insight & Care"}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                {therapy.overviewHeading}
              </h2>
              {therapy.overviewParagraphs.map((para, i) => (
                <p key={i} className="text-base sm:text-lg text-text-light leading-relaxed">
                  {para}
                </p>
              ))}

              <div className="pt-2">
                <div className="p-4 sm:p-5 rounded-2xl bg-bg border border-soft-green/60 flex items-start gap-3.5">
                  <HeartHandshake className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-primary mb-1">
                      {therapy.overviewPhilosophy?.title || "Our Child-Centered Philosophy"}
                    </h4>
                    <p className="text-xs sm:text-sm text-text-light">
                      {therapy.overviewPhilosophy?.desc ||
                        "We focus on practical, everyday functional skills through age-appropriate activities designed around your child’s unique pace and comfort."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Reassurance Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-soft-green/30 to-surface border border-secondary/30 rounded-3xl p-6 sm:p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center">
                  <Star className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">
                    {therapy.overviewSideCard?.title || "Early Support in Coimbatore"}
                  </h3>
                  <span className="text-xs text-secondary font-medium">
                    {therapy.overviewSideCard?.subtitle || "Building Lifelong Confidence"}
                  </span>
                </div>
              </div>
              <p className="text-sm text-text-main leading-relaxed mb-5">
                {therapy.overviewSideCard?.description ||
                  "Our personalized programs empower children to develop the foundational sensory, motor, and daily life skills needed for independence at home and school."}
              </p>
              <ul className="space-y-2.5 mb-6 text-sm text-text-light">
                {(
                  therapy.overviewSideCard?.points || [
                    "Fine motor dexterity & handwriting readiness",
                    "Sensory processing & emotional calming routines",
                    "Daily routine & self-care mastery",
                  ]
                ).map((pt, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="w-full py-3 px-4 rounded-xl bg-primary text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-sm"
              >
                <span>Schedule an Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW OCCUPATIONAL THERAPY HELPS CHILDREN */}
      {therapy.howItHelps && (
        <section className="py-12 sm:py-16 md:py-20 bg-bg border-y border-soft-green/40">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full bg-soft-green/50 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
                {therapy.howItHelps.subtitle}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                {therapy.howItHelps.title}
              </h2>
              <p className="text-base sm:text-lg text-text-light">
                {therapy.howItHelps.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3.5 sm:gap-4 max-w-4xl mx-auto">
              {therapy.howItHelps.points.map((pt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="bg-surface rounded-xl p-4 border border-soft-green/70 shadow-sm flex items-center gap-3 hover:border-secondary hover:shadow-card transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-text-main">
                    {pt}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. SIGNS YOUR CHILD MAY BENEFIT FROM OCCUPATIONAL THERAPY */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-soft-green/50 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
              {therapy.whoIsItFor.subtitle || "Developmental Checklist"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              {therapy.whoIsItFor.heading}
            </h2>
            <p className="text-base sm:text-lg text-text-light">
              {therapy.whoIsItFor.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 max-w-4xl mx-auto">
            {therapy.whoIsItFor.signs.map((sign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="bg-bg rounded-2xl p-4 sm:p-5 border border-soft-green/70 shadow-sm hover:shadow-card hover:border-secondary/50 transition-all duration-300 flex items-start gap-3.5"
              >
                <div className="w-7 h-7 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                </div>
                <p className="text-sm sm:text-base text-text-main leading-snug font-medium">
                  {sign}
                </p>
              </motion.div>
            ))}
          </div>

          {therapy.whoIsItFor.reassurance && (
            <div className="mt-8 text-center max-w-2xl mx-auto space-y-4">
              <p className="text-sm sm:text-base text-text-light bg-soft-green/30 border border-soft-green/60 p-4 rounded-2xl">
                {therapy.whoIsItFor.reassurance}
              </p>

              {therapy.whoIsItFor.ctaText && (
                <div className="pt-2">
                  <Link
                    href={therapy.whoIsItFor.ctaLink || "/contact"}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold shadow-soft hover:bg-primary/90 transition-all"
                  >
                    <span>{therapy.whoIsItFor.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 6. OUR OCCUPATIONAL THERAPY APPROACH (5 STEPS) */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-bg to-surface border-t border-soft-green/40">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full bg-soft-green/50 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
              {therapy.ourApproachSubtitle || "5-Step Process"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              {therapy.ourApproachHeading}
            </h2>
            <p className="text-base sm:text-lg text-text-light">
              {therapy.ourApproachDescription}
            </p>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${therapy.ourApproachSteps.length === 6 ? 'lg:grid-cols-6' : therapy.ourApproachSteps.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'} gap-4 sm:gap-6 relative`}>
            {therapy.ourApproachSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-surface rounded-2xl p-5 sm:p-6 border border-soft-green/60 shadow-sm relative flex flex-col justify-between hover:shadow-card transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary text-accent font-extrabold text-sm flex items-center justify-center mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. AREAS WE SUPPORT (6-GRID) */}
      <section className="py-12 sm:py-16 md:py-24 bg-surface border-t border-soft-green/40">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-soft-green/50 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
              {therapy.coreAreasSubtitle || "Targeted Skill Building"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              {therapy.coreAreasHeading}
            </h2>
            <p className="text-base sm:text-lg text-text-light">
              {therapy.coreAreasDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {therapy.coreAreas.map((area, idx) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-bg to-surface rounded-2xl p-6 sm:p-7 border border-soft-green/60 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-5 text-secondary">
                    <DynamicIcon name={area.iconName} className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2.5">{area.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed mb-5">{area.desc}</p>
                </div>

                <div>
                  <div className="pt-4 border-t border-soft-green/40">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                      Key Highlights:
                    </p>
                    <ul className="space-y-1.5">
                      {area.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2 text-xs sm:text-sm text-text-main">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. OCCUPATIONAL THERAPY FOR AUTISM & ADHD (SPECIALIZED SUPPORT) */}
      {(therapy.autismSection || therapy.adhdSection) && (
        <section className="py-12 sm:py-16 md:py-20 bg-bg border-y border-soft-green/40">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Autism Section */}
              {therapy.autismSection && (
                <div className="bg-surface rounded-3xl p-6 sm:p-8 md:p-10 border border-soft-green/60 shadow-card flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3.5 py-1 rounded-full bg-soft-green/60 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                      {therapy.autismSection.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                      {therapy.autismSection.title}
                    </h3>
                    <div className="space-y-3.5 text-sm sm:text-base text-text-light leading-relaxed mb-6">
                      {therapy.autismSection.paragraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>

                  {therapy.autismSection.ctaText && (
                    <div className="pt-4 border-t border-soft-green/40">
                      <Link
                        href={therapy.autismSection.ctaLink || "/therapies"}
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-secondary transition-colors"
                      >
                        <span>{therapy.autismSection.ctaText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* ADHD Section */}
              {therapy.adhdSection && (
                <div className="bg-gradient-to-br from-primary to-[#0f2e25] text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-card flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
                      {therapy.adhdSection.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      {therapy.adhdSection.title}
                    </h3>
                    <div className="space-y-3.5 text-sm sm:text-base text-white/85 leading-relaxed mb-6">
                      {therapy.adhdSection.paragraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/15">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:text-white transition-colors"
                    >
                      <span>Book an ADHD Assessment</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 9. WHY CHOOSE SEEDS THERAPY CENTER? */}
      {therapy.whyChooseSection && (
        <section className="py-12 sm:py-16 md:py-20 bg-surface">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="inline-block px-3.5 py-1 rounded-full bg-soft-green/50 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  {therapy.whyChooseSection.subtitle}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                  {therapy.whyChooseSection.title}
                </h2>
                <p className="text-base sm:text-lg text-text-light leading-relaxed">
                  {therapy.whyChooseSection.description}
                </p>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {therapy.whyChooseSection.points.map((pt, i) => (
                  <div
                    key={i}
                    className="bg-bg p-4 rounded-xl border border-soft-green/60 flex items-center gap-3 shadow-sm hover:border-secondary transition-all"
                  >
                    <Check className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-sm font-semibold text-text-main">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 10. BEST OCCUPATIONAL THERAPY CENTER IN COIMBATORE */}
      {therapy.bestCenterSection && (
        <section className="py-12 sm:py-16 md:py-20 bg-bg border-t border-soft-green/40">
          <div className="container-main">
            <div className="max-w-4xl mx-auto bg-surface rounded-3xl p-6 sm:p-10 border border-soft-green/70 shadow-card">
              <div className="text-center mb-8">
                <span className="inline-block px-3.5 py-1 rounded-full bg-soft-green/50 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
                  {therapy.bestCenterSection.subtitle}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                  {therapy.bestCenterSection.title}
                </h2>
              </div> 

              <div className="space-y-4 text-sm sm:text-base text-text-light leading-relaxed mb-8">
                {therapy.bestCenterSection.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {therapy.bestCenterSection.ctaText && (
                <div className="text-center">
                  <Link
                    href={therapy.bestCenterSection.ctaLink || "/contact"}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white text-base font-semibold shadow-soft hover:bg-primary/90 transition-all"
                  >
                    <span>{therapy.bestCenterSection.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      {/* 11. SPECIALIZED CLINIC FACILITIES */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface border-t border-soft-green/40">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-soft-green/50 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
              Specialized Environment
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              {therapy.specializedFacilities.title}
            </h2>
            <p className="text-base text-text-light">
              Equipped with purposeful therapeutic tools designed to support functional recovery and active engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {therapy.specializedFacilities.items.map((facility, i) => (
              <div
                key={i}
                className="bg-bg rounded-2xl p-5 sm:p-6 border border-soft-green/60 shadow-sm hover:border-secondary transition-all flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center mb-4">
                  <DynamicIcon name={facility.iconName} className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-base font-bold text-primary mb-2">{facility.name}</h3>
                <p className="text-xs sm:text-sm text-text-light leading-relaxed">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="py-12 sm:py-16 md:py-20 bg-bg border-y border-soft-green/40">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-soft-green/50 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
              Help & Information
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-text-light">
              Common questions asked about {therapy.shortTitle} and rehabilitation services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {therapy.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-soft-green/60 rounded-2xl overflow-hidden bg-surface transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-primary hover:text-secondary transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-secondary shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-soft-green/40 bg-bg/50 px-4 sm:px-5 py-4"
                      >
                        <p className="text-sm sm:text-base text-text-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. EXPLORE RELATED THERAPIES */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-soft-green/50 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
              Holistic Care Ecosystem
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3">
              Explore Our Other Specialized Therapies
            </h2>
            <p className="text-base text-text-light">
              Many individuals benefit from a multidisciplinary therapy approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {therapy.relatedTherapies.map((rel) => (
              <Link
                key={rel.slug}
                href={`/therapies/${rel.slug}`}
                className="group bg-bg rounded-2xl p-6 sm:p-7 border border-soft-green/60 shadow-card hover:shadow-card-hover hover:border-secondary transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-soft-green/60 text-primary text-xs font-semibold uppercase tracking-wide mb-3">
                    {rel.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                    {rel.title}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed mb-4">{rel.desc}</p>
                </div>
                <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:text-secondary group-hover:translate-x-1 transition-all">
                  <span>Explore {rel.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 14. FINAL CTA */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary via-[#13352b] to-primary text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container-main relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-accent text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 border border-white/15">
              Seeds Therapy Center Coimbatore
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              {therapy.finalCta?.title || "Help You or Your Loved One Take the Next Step"}
            </h2>
            {therapy.finalCta?.paragraphs ? (
              therapy.finalCta.paragraphs.map((p, i) => (
                <p key={i} className="text-base sm:text-lg text-white/85 mb-4 leading-relaxed max-w-2xl mx-auto">
                  {p}
                </p>
              ))
            ) : (
              <p className="text-base sm:text-lg text-white/85 mb-8 leading-relaxed max-w-2xl mx-auto">
                Every individual has their own unique strengths, abilities and pace of recovery. With the right support, people can achieve greater confidence and independence in everyday activities.
              </p>
            )}

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-8">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-accent text-primary text-base font-bold shadow-lg hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                {therapy.finalCta?.primaryBtn || "Book an Assessment"}
              </Link>
              <Link
                href="/contact"
                className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-base font-semibold border border-white/20 backdrop-blur-sm transition-all duration-200"
              >
                {therapy.finalCta?.secondaryBtn || "Contact Seeds Therapy Center"}
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/70 pt-4 border-t border-white/15">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Siddhapudur, Coimbatore</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>+91 9597469409 / +91 9043866554</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
