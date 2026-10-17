"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Sun, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-10 sm:py-12 md:py-20 bg-surface">
      <div className="container-main h-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-start">
          {/* Left: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative block mt-6 sm:mt-0"
          >
            <div className="relative w-full lg:max-w-2xl aspect-[15/16] rounded-3xl overflow-hidden bg-gradient-to-br from-soft-green/40 to-bg shadow-medium">
              <Image
                src="/images/about-poster.jpg"
                alt="Seeds Therapy Center - Grow Today, Thrive Tomorrow"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-accent" />
              <span className="text-xs sm:text-sm font-bold text-accent uppercase tracking-wider">About Us</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-4 sm:mb-5 leading-tight tracking-tight">
              We Understand Children. We Support Families.
            </h2>

            <div className="space-y-3.5 sm:space-y-4 text-text-main leading-relaxed text-sm sm:text-base md:text-lg">
              <p>
                Seeds Therapy Center is a child-focused therapy and early intervention center in Coimbatore dedicated to supporting children in their communication, development, behavior, learning, sensory processing, and everyday skills.
              </p>
              <p>
                We believe that no child is the same and that each child requires a unique approach to support them according to their strengths, challenges, interests and developmental goals.
              </p>
              <p>
                Our staff implements child-centered and evidence-based Occupational Therapy, Neuro Occupational Therapy, Speech Therapy, Behavioral Therapy and Early Intervention services. We also feel there is a significant part for the parents in a child&apos;s development and actively strive to involve them in their child&apos;s life, communicate with them regularly and give them guidance that can help to take their child&apos;s development beyond therapy.
              </p>
              <p>
                We will provide a secure, nurturing, caring place for children to feel understood and supported and for families to be clear and guided on their child&apos;s development journey.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { label: "Evidence-Based Approach", icon: Sun },
                { label: "Whole Child Focus", icon: Heart },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl bg-soft-green/50 border border-soft-green">
                    <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base font-bold text-primary">{item.label}</span>
                  </div>
                );
              })}
            </div>

            <a
              href="/conditions"
              className="group mt-6 sm:mt-8 inline-flex items-center gap-2 text-base font-bold text-primary hover:text-secondary transition-all"
            >
              Learn how we can help your child
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
