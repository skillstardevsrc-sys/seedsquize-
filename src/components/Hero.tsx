"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";

const features = [
  "Child-centered approach",
  "Experienced therapists",
  "Family involvement",
  "Safe and nurturing environment",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[100dvh] min-h-[580px] max-h-[1000px] flex items-center pt-16 sm:pt-20 lg:pt-16 overflow-hidden"
    >
      {/* Background image: 100% natural, bright, and completely free of any box or overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/final bg.png"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center brightness-100"
        />
      </div>

      <div className="container-main w-full py-2 sm:py-4">
        {/* Borderless, natural open content with balanced medium-large sizing */}
        <div className="max-w-lg lg:max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-soft-green/90 text-primary border border-primary/20 text-xs sm:text-sm font-bold tracking-wide mb-2.5 shadow-xs">
              EARLY INTERVENTION · EARLY SUPPORT
            </span> 
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-balance text-primary mb-2.5 sm:mb-3 tracking-tight"
          >
            Best Child Therapy Center in Coimbatore
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-sm sm:text-base md:text-lg text-text-main font-semibold leading-relaxed mb-3.5 sm:mb-4 max-w-lg"
          >
            Seeds Therapy Center is a leading child therapy center in Coimbatore, offering Speech Therapy, Occupational Therapy, Neuro Occupational Therapy, and Behavioral Therapy for children. We provide personalized care to support communication, development, and confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col mb-3 sm:mb-4"
          >
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-3">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center sm:justify-start gap-2 px-5 py-2.5 sm:px-5.5 sm:py-2.5 rounded-full bg-primary text-white font-bold text-xs sm:text-sm md:text-base hover:bg-primary/90 transition-all duration-200 shadow-medium hover:shadow-card-hover active:scale-95"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-5.5 sm:py-2.5 rounded-full border-2 border-primary/25 text-primary bg-white/80 font-bold text-xs sm:text-sm md:text-base hover:bg-primary/10 transition-all duration-200 active:scale-95 shadow-sm"
              >
                Watch Our Story
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-wrap gap-2.5 pt-1"
          >
            {features.map((feature, index) => (
              <div
                key={feature}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 border border-primary/20 shadow-xs"
              >
                <motion.div 
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                  className="w-4.5 h-4.5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-xs"
                >
                  <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
                </motion.div>
                <span className="text-xs sm:text-sm md:text-base text-primary font-bold">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
