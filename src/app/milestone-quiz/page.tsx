import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MilestoneQuizModal from "@/components/MilestoneQuizModal";
import { Sparkles, Heart, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Child Developmental Milestone Quiz (Ages 1-10) | Seeds Therapy Center",
  description:
    "Free clinical developmental screening quiz for parents. Check your child's speech, motor, social, and sensory milestones with gentle guidance.",
  openGraph: {
    title: "Child Developmental Milestone Quiz | Seeds Therapy Center",
    description:
      "Loving developmental milestone screening for children ages 1 to 10. Understand your child's unique growth strengths and areas for gentle enrichment.",
  },
};

export default function MilestoneQuizPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-text-main">
      <Header />

      <main className="grow pt-16 sm:pt-20 pb-8 px-3 sm:px-6 flex flex-col items-center justify-center">
        <div className="w-full max-w-xl mx-auto flex flex-col items-center">
          {/* Compact Top Heading */}
          <div className="text-center mb-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-green/60 text-primary text-xs font-bold mb-1.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Free Developmental Milestone Screening (Ages 1–10)</span>
            </div>
            <h1 className="text-lg sm:text-2xl font-extrabold text-primary tracking-tight">
              Understand Your Child&apos;s Milestones
            </h1>
            <div className="flex items-center justify-center gap-3 text-[11px] text-text-light font-medium mt-1">
              <span className="flex items-center gap-1">
                <Heart className="w-3 h-3 text-secondary fill-secondary/20" /> Caring & Loving
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-secondary" /> 100% Confidential
              </span>
            </div>
          </div>

          {/* Standalone Quiz Component */}
          <div className="w-full flex justify-center">
            <MilestoneQuizModal isStandalone={true} />
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
