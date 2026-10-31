"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

interface ConditionItem {
  name: string;
  tagline: string;
  image: string;
  alt: string;
}

const conditionsData: ConditionItem[] = [
  {
    name: "Autism Spectrum Disorder (ASD)",
    tagline: "Building joyful play, eye contact & social communication",
    image: "/images/conditions/asd.jpg",
    alt: "Child on autism spectrum building blocks with caring therapist",
  },
  {
    name: "ADHD",
    tagline: "Channeling active energy into balance, focus & self-control",
    image: "/images/conditions/adhd.jpg",
    alt: "Energetic child practicing balance and focus exercise with coach",
  },
  {
    name: "Global Developmental Delay (GDD)",
    tagline: "Supporting milestone stepping stones in walking & learning",
    image: "/images/conditions/gdd.jpg",
    alt: "Toddler taking guided milestone steps on soft steps with therapist",
  },
  {
    name: "Intellectual Disability (ID)",
    tagline: "Patience-centered cognitive learning & shape matching skills",
    image: "/images/conditions/id.jpg",
    alt: "Child learning shape matching puzzle with patient therapist",
  },
  {
    name: "Specific Learning Disorder (SLD)",
    tagline: "Overcoming reading, phonics & writing challenges with ease",
    image: "/images/conditions/sld.jpg",
    alt: "Child reading phonics storybook and learning alphabet letters",
  },
  {
    name: "Speech Delay",
    tagline: "Unlocking clear speech sounds, words & expressive talking",
    image: "/images/conditions/speech-delay.jpg",
    alt: "Child practicing speech sounds with animal cards and speech therapist",
  },
  {
    name: "Sensory Processing Difficulties",
    tagline: "Calming sensory swings, lighting & texture regulation",
    image: "/images/conditions/sensory-processing.jpg",
    alt: "Child relaxing peacefully in a soft sensory therapy hammock swing",
  },
  {
    name: "Developmental Delay",
    tagline: "Strengthening body motor coordination, posture & movement",
    image: "/images/conditions/dev-delay.jpg",
    alt: "Young child crawling through colorful play tunnel with therapist",
  },
  {
    name: "Behavioral Challenges",
    tagline: "Emotional self-regulation, calm breathing & positive routines",
    image: "/images/conditions/behavior.jpg",
    alt: "Child and therapist learning calm emotion regulation with emotion cards",
  },
  {
    name: "Social Communication Difficulties",
    tagline: "Learning friendship, sharing toys & happy conversations",
    image: "/images/conditions/social-comm.jpg",
    alt: "Two children sharing toy train and learning friendly conversation",
  },
];

export default function ConditionsGrid() {
  return (
    <section id="conditions" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-soft-green/20 via-bg to-bg">
      <div className="container-main">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Sticky/Intro Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 text-center lg:text-left lg:sticky lg:top-28"
          >
            <span className="inline-block px-3.5 sm:px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs sm:text-sm font-bold uppercase tracking-wider mb-2.5 sm:mb-3 md:mb-4 border border-accent/20">
              Our Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-3 sm:mb-4 tracking-tight leading-tight">
              Conditions We Support
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-main mb-6 sm:mb-8 leading-relaxed font-normal">
              If your child is struggling with speech, behavior, movement, learning, or social interaction, early support can make a meaningful difference. Our team works with children who need care, structure, and personalized intervention.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:justify-start">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-white font-bold text-sm sm:text-base hover:bg-primary/90 transition-all shadow-medium hover:shadow-card-hover active:scale-95"
              >
                <span>Book an Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/milestone-quiz"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-950 font-bold text-sm sm:text-base border border-amber-300 shadow-sm transition-all active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Take Child Milestone Quiz</span>
              </a>
            </div>
          </motion.div>

          {/* Right Cards Column with Real Visual Illustrations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4">
              {conditionsData.map((condition, index) => (
                <motion.div
                  key={condition.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="group flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-soft-green/70 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300"
                >
                  {/* Instantly understandable Pediatric Illustration */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-soft-green/50 bg-soft-green/20 shadow-xs">
                    <Image
                      src={condition.image}
                      alt={condition.alt}
                      fill
                      sizes="(max-width: 640px) 64px, 80px"
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col min-w-0">
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-text-main group-hover:text-primary transition-colors leading-snug">
                      {condition.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-text-light mt-1 font-medium leading-relaxed line-clamp-2">
                      {condition.tagline}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
