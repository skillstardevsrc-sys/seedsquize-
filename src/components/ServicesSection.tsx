"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Speech,
  Brain,
  BrainCircuit,
  Baby,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Link from "next/link";

const primaryServices = [
  {
    title: "Occupational Therapy",
    desc: "Helping children build skills for everyday life, fine motor coordination, sensory regulation, and functional play.",
    icon: Stethoscope,
    bestFor: [
      "Sensory processing & regulation",
      "Fine motor skills & handwriting",
      "Attention & daily routines",
      "Motor planning & coordination",
    ],
    link: "/therapies/occupational-therapy",
  },
  {
    title: "Neuro Occupational Therapy",
    desc: "Targeted rehabilitation helping adults and individuals regain independence, arm-hand function, and motor abilities.",
    icon: BrainCircuit,
    bestFor: [
      "Arm & hand function recovery",
      "Activities of Daily Living (ADL)",
      "Stroke & brain injury recovery",
      "Balance & movement control",
    ],
    link: "/therapies/neuro-occupational-therapy",
  },
  {
    title: "Speech Therapy",
    desc: "Supporting children to speak clearly, communicate better, understand language, and build social confidence.",
    icon: Speech,
    bestFor: [
      "Speech & language delay",
      "Pronunciation & articulation",
      "Vocabulary & communication",
      "Stammering & fluency support",
    ],
    link: "/therapies/speech-therapy",
  },
  {
    title: "Behavioral Therapy",
    desc: "Helping children improve emotional regulation, positive behaviors, attention span, and routine transitions.",
    icon: Brain,
    bestFor: [
      "Emotional regulation & tantrums",
      "Attention span & focus",
      "Social skill difficulties",
      "Routine resistance & transitions",
    ],
    link: "/therapies/behavioral-therapy",
  },
];

const earlyInterventionService = {
  title: "Early Intervention",
  desc: "Providing essential developmental support in early childhood to nurture speech, motor skills, and learning readiness.",
  icon: Baby,
  bestFor: [
    "Early milestone delays",
    "Speech & language support",
    "Motor & sensory development",
    "Preschool & learning readiness",
  ],
  link: "/therapies/early-intervention",
};

interface ServicesSectionProps {
  showEarlyIntervention?: boolean;
}

export default function ServicesSection({
  showEarlyIntervention = false,
}: ServicesSectionProps) {
  const services = showEarlyIntervention
    ? [...primaryServices, earlyInterventionService]
    : primaryServices;

  return (
    <section id="therapies" className="py-10 sm:py-14 md:py-20 bg-surface">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8 md:mb-10"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-soft-green text-primary border border-primary/15 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 sm:mb-3 shadow-sm">
            Our Therapies
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-2 sm:mb-3 tracking-tight">
            Personalized Therapies for Every Child
          </h2>
          <p className="text-sm sm:text-base text-text-main max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed font-normal">
            Every child develops differently. Some need support with speech. Some need help with sensory processing, attention, behavior, or daily activities. At Seeds Therapy Center, we create therapy plans based on your child’s unique needs, strengths, and developmental goals.
          </p>
        </motion.div>

        {/* Mobile/Tablet: Horizontal Carousel */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide pb-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="flex-shrink-0 w-[80vw] sm:w-80 bg-white rounded-2xl p-5 border border-soft-green/70 shadow-card snap-start hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-primary mb-1.5">{service.title}</h3>
                    <p className="text-xs sm:text-sm text-text-light leading-relaxed mb-3 line-clamp-2">{service.desc}</p>
                    
                    <div className="mb-4">
                      <p className="text-xs sm:text-sm font-bold text-primary mb-2">Key support areas:</p>
                      <ul className="space-y-1.5">
                        {service.bestFor.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-text-main">
                            <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href={service.link} className="inline-flex items-center gap-1.5 text-primary font-bold text-xs sm:text-sm group hover:text-secondary transition-colors pt-3 border-t border-soft-green/50 mt-2">
                    <span>Learn More & Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Desktop: Standard Grid */}
        <div
          className={`hidden md:grid gap-4 lg:gap-5 ${
            showEarlyIntervention
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -4 }}
                className="group flex flex-col bg-white rounded-2xl p-5 lg:p-6 border border-soft-green/70 shadow-sm hover:shadow-card hover:border-secondary/40 transition-all duration-300 justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-primary mb-1.5">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-text-light leading-relaxed mb-3 line-clamp-2">{service.desc}</p>
                  
                  <div className="mb-4">
                    <p className="text-xs sm:text-sm font-bold text-primary mb-2">Key support areas:</p>
                    <ul className="space-y-1.5">
                      {service.bestFor.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-text-main">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link href={service.link} className="inline-flex items-center gap-1.5 text-primary font-bold text-xs sm:text-sm group-hover:text-secondary transition-colors pt-3 border-t border-soft-green/50 mt-2">
                  <span>Learn More & Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
