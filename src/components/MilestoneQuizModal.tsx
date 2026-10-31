"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Heart,
  CheckCircle2,
  Clock,
  HelpCircle,
  Phone,
  MessageCircle,
  Calendar,
  RotateCcw,
  ShieldCheck,
  ArrowRight,
  AlertCircle,
  Activity,
  Hand,
  Users,
  Brain,
  Ear,
  MessageSquare,
  TrendingUp,
  XCircle,
  Stethoscope,
  Smile,
  Loader2
} from "lucide-react";
import {
  Question,
  AGE_BANDS,
  DOMAIN_DESCRIPTIONS,
  SkillDomain,
  getQuestionsForAgeBand,
  calculateClinicalScore,
  OverallAssessmentResult
} from "@/data/quizQuestions";

interface MilestoneQuizModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  isStandalone?: boolean;
  initialBandId?: string;
}

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "fc0324b1-52d7-4bb8-9af6-152ac442f37a";
const CLINIC_PHONE = "9597469409";
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919597469409";

export default function MilestoneQuizModal({
  isOpen = true,
  onClose,
  isStandalone = false,
  initialBandId = "band_3_4",
}: MilestoneQuizModalProps) {
  // Step state: 1 = Details filling stage, 2 = 24 Questions portal, 3 = Results
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [mounted, setMounted] = useState(false);
  const [isSubmittingDetails, setIsSubmittingDetails] = useState(false);

  // Form Details (Step 1)
  const [parentName, setParentName] = useState("");
  const [childName, setChildName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedBandId, setSelectedBandId] = useState<string>(initialBandId);

  // Quiz State (Step 2)
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const autoAdvanceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current);
    };
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (!isStandalone && isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen, isStandalone]);

  const selectedBand = useMemo(() => {
    const list = Array.isArray(AGE_BANDS) ? AGE_BANDS : [];
    return (
      list.find((b) => b.id === selectedBandId) ||
      list[2] || {
        id: "band_3_4",
        label: "3–4 years (36–47 months)",
        shortLabel: "3–4 yrs",
        sublabel: "36–47 mos",
        ageYears: 3,
      }
    );
  }, [selectedBandId]);

  // STEP 1 -> STEP 2 HANDLER:
  // When parent enters details and clicks "Next", send initial details to clinic email immediately
  // and then transition into the 24 questions portal for that child's age!
  const handleNextToQuestions = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};

    if (!parentName.trim()) {
      errs.parentName = "Please enter parent name.";
    }
    if (!childName.trim()) {
      errs.childName = "Please enter child name.";
    }
    const cleanPhone = phone.replace(/[^0-9]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = "Enter valid 10-digit phone.";
    }
    if (!selectedBandId) {
      errs.selectedBandId = "Select age band.";
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmittingDetails(true);

    // Send initial lead details via email immediately when clicking Next
    try {
      const initialPayload = new FormData();
      initialPayload.append("access_key", WEB3FORMS_KEY);
      initialPayload.append("from_name", "SEEDS Child Milestone Quiz");
      initialPayload.append(
        "subject",
        `📢 NEW QUIZ LEAD STARTED: ${childName} (Parent: ${parentName}, Phone: ${phone}, Age: ${selectedBand.label})`
      );
      initialPayload.append("parent_name", parentName);
      initialPayload.append("child_name", childName);
      initialPayload.append("phone", phone);
      initialPayload.append("child_age_band", selectedBand.label);
      initialPayload.append("stage", "Step 1 Details Submitted - Starting Questions");
      initialPayload.append("started_at", new Date().toLocaleString());
      initialPayload.append(
        "message",
        `A parent just started the Developmental Milestone Quiz on the website!\n\n` +
          `• Parent / Guardian Name: ${parentName}\n` +
          `• Child's Name: ${childName}\n` +
          `• Phone / WhatsApp: ${phone}\n` +
          `• Child Age Band: ${selectedBand.label}\n` +
          `• Timestamp: ${new Date().toLocaleString()}\n\n` +
          `The parent has entered the questions portal to answer the 24 age-specific questions. Full results will follow upon completion.`
      );

      // Non-blocking fire-and-forget submission
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: initialPayload,
      }).catch((err) => {
        console.warn("Silent lead dispatch log:", err);
      });
    } catch (err) {
      console.warn("Initial lead dispatch error:", err);
    } finally {
      setIsSubmittingDetails(false);
      // Load questions for the selected age band and enter portal
      const qs = getQuestionsForAgeBand(selectedBandId);
      setQuestions(qs);
      setCurrentQuestionIndex(0);
      setAnswers({});
      setStep(2);
    }
  };

  // Safe question retrieval
  const safeIndex = questions.length > 0 ? Math.min(Math.max(currentQuestionIndex, 0), questions.length - 1) : 0;
  const currentQ = questions[safeIndex];
  const progressPercent =
    questions.length > 0 ? Math.round(((safeIndex + 1) / questions.length) * 100) : 0;

  // Category & question tracker math (8 domains * 3 questions = 24)
  const currentDomainIndex = Math.floor(safeIndex / 3); // 0 to 7
  const questionInDomain = (safeIndex % 3) + 1; // 1, 2, or 3

  // Answer selection handler
  const handleSelectAnswer = (score: number) => {
    if (autoAdvanceTimer.current) {
      clearTimeout(autoAdvanceTimer.current);
      autoAdvanceTimer.current = null;
    }

    if (!currentQ) return;

    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: score,
    }));

    // Auto-advance to next question if not at the very end
    if (safeIndex < questions.length - 1) {
      autoAdvanceTimer.current = setTimeout(() => {
        setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1));
      }, 220);
    }
  };

  // Calculate clinical result
  const assessmentResult: OverallAssessmentResult = useMemo(() => {
    return calculateClinicalScore(answers, selectedBandId, childName);
  }, [answers, selectedBandId, childName]);

  // FINAL SUBMIT:
  // 1. Show results to user immediately
  // 2. Send complete answer report with all 24 questions & details to clinic email again
  const handleFinalSubmit = () => {
    if (autoAdvanceTimer.current) {
      clearTimeout(autoAdvanceTimer.current);
      autoAdvanceTimer.current = null;
    }

    // Immediately show results to parent
    setStep(3);

    // Send final completed report to clinic email
    try {
      const domainBreakdownText = assessmentResult.domainScores
        .map((d) => `• ${d.label}: ${d.score}/${d.maxScore} (${d.percentage}%) - ${d.badge}`)
        .join("\n");

      const questionBreakdownText = questions
        .map((q, idx) => {
          const score = answers[q.id];
          const label = score === 2 ? "Yes" : score === 1 ? "Sometimes" : score === 0 ? "No / Not yet" : "Unanswered";
          return `Q${idx + 1} [${q.domain}]:\n${q.text}\n=> Parent Answer: ${label}`;
        })
        .join("\n\n");

      const fullEmailReport = `
==================================================
🎯 SEEDS THERAPY CENTER - COMPLETED MILESTONE REPORT
==================================================

PARENT & CHILD DETAILS:
--------------------------------------------------
• Parent / Guardian Name: ${parentName || "N/A"}
• Child's Name: ${childName || "N/A"}
• Phone / WhatsApp Number: ${phone || "N/A"}
• Child Age Band: ${selectedBand.label}
• Submission Time: ${new Date().toLocaleString()}

ASSESSMENT OUTCOME VERDICT:
--------------------------------------------------
• Outcome: ${assessmentResult.badge}
• Verdict Title: ${assessmentResult.title}
• Response Breakdown:
  - Yes (High = Child is Excellent): ${assessmentResult.yesCount} / 24
  - Sometimes (High = Concern a Doctor): ${assessmentResult.sometimesCount} / 24
  - No / Not Yet (High = Attend One Session): ${assessmentResult.noCount} / 24
• Milestone Score: ${assessmentResult.totalScore} / 48 points (${assessmentResult.percentage}%)

DOMAIN-WISE SCORES (8 CLINICAL CATEGORIES):
--------------------------------------------------
${domainBreakdownText}

Strongest Areas: ${assessmentResult.strongestDomains.join(", ") || "None"}
Areas for Gentle Focus: ${assessmentResult.focusDomains.join(", ") || "None"}

==================================================
ALL 24 QUESTIONS & PARENT RESPONSES:
==================================================

${questionBreakdownText}

==================================================
End of Milestone Screening Report
==================================================
`.trim();

      const finalPayload = new FormData();
      finalPayload.append("access_key", WEB3FORMS_KEY);
      finalPayload.append("from_name", "SEEDS Child Milestone Quiz Report");
      finalPayload.append(
        "subject",
        `🎯 COMPLETED QUIZ REPORT: ${childName || "Child"} (${parentName}) | ${assessmentResult.badge} [Yes: ${assessmentResult.yesCount}, Sometimes: ${assessmentResult.sometimesCount}, No: ${assessmentResult.noCount}]`
      );
      finalPayload.append("parent_name", parentName || "N/A");
      finalPayload.append("child_name", childName || "N/A");
      finalPayload.append("phone", phone || "N/A");
      finalPayload.append("age_band", selectedBand.label);
      finalPayload.append("verdict", assessmentResult.title);
      finalPayload.append("verdict_badge", assessmentResult.badge);
      finalPayload.append("yes_count", `${assessmentResult.yesCount} / 24`);
      finalPayload.append("sometimes_count", `${assessmentResult.sometimesCount} / 24`);
      finalPayload.append("no_count", `${assessmentResult.noCount} / 24`);
      finalPayload.append("total_score", `${assessmentResult.totalScore} / 48`);
      finalPayload.append("domain_scores", domainBreakdownText);
      finalPayload.append("message", fullEmailReport);
      finalPayload.append("submitted_at", new Date().toLocaleString());

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: finalPayload,
      }).catch((err) => {
        console.warn("Silent final lead dispatch log:", err);
      });
    } catch (err) {
      console.warn("Final report notification error:", err);
    }
  };

  // WhatsApp pre-filled link
  const whatsappUrl = useMemo(() => {
    const text = `Hello SEEDS Therapy Center,\n\nI just completed the Child Milestone Assessment for my child *${
      childName || "My Child"
    }* (Age: *${selectedBand.label}*).\n\n*Parent Name:* ${parentName}\n*Phone:* ${phone}\n*Result:* ${
      assessmentResult.badge
    } (${assessmentResult.title})\n*Counts:* ${assessmentResult.yesCount} Yes, ${
      assessmentResult.sometimesCount
    } Sometimes, ${assessmentResult.noCount} No / Not yet\n\nI would like to discuss the report and schedule a consultation with your specialists.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }, [childName, selectedBand, parentName, phone, assessmentResult]);

  // Restart quiz
  const handleReset = () => {
    setStep(1);
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  // Render domain icons
  const renderDomainIcon = (domain: SkillDomain, className = "w-3.5 h-3.5") => {
    switch (domain) {
      case "Gross Motor":
        return <Activity className={className} />;
      case "Fine Motor":
        return <Hand className={className} />;
      case "Social Skills":
        return <Users className={className} />;
      case "Cognitive Skills":
        return <Brain className={className} />;
      case "Speech & Language — Receptive":
        return <Ear className={className} />;
      case "Speech & Language — Expressive":
        return <MessageSquare className={className} />;
      case "Sensory Processing":
        return <Sparkles className={className} />;
      case "Behavioural Skills":
        return <Heart className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  const domainList: SkillDomain[] = [
    "Gross Motor",
    "Fine Motor",
    "Social Skills",
    "Cognitive Skills",
    "Speech & Language — Receptive",
    "Speech & Language — Expressive",
    "Sensory Processing",
    "Behavioural Skills"
  ];

  const content = (
    <div className="w-full max-w-xl sm:max-w-2xl bg-surface rounded-2xl shadow-xl border border-soft-green/60 overflow-hidden text-text-main flex flex-col">
      {/* Sleek, Readable Header bar */}
      <div className="bg-gradient-to-r from-primary to-secondary px-4 py-3 sm:px-6 sm:py-3.5 text-white flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-md flex items-center justify-center text-accent">
            <Sparkles className="w-4 h-4 text-amber-300" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-bold tracking-tight leading-none">
              Child Milestone Screening Quiz
            </h2>
            <p className="text-xs text-soft-green font-medium leading-tight mt-1">
              Ages 1 to 10 • 8 Skill Domains • Free Screening
            </p>
          </div>
        </div>

        {!isStandalone && onClose && (
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/15 text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Close quiz"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Main interactive area with comfortable padding */}
      <div className="p-4 sm:p-6 overflow-y-auto">
        <AnimatePresence mode="wait">
          {/* STEP 1: DETAILS FILLING STAGE (High-visibility text & inputs) */}
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col gap-3.5"
            >
              <div className="text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-soft-green/60 text-primary mb-1.5 shadow-2xs">
                  <Heart className="w-3.5 h-3.5 text-secondary fill-secondary/30" />
                  Step 1 of 2: Child & Parent Details
                </div>
                <h3 className="text-base sm:text-lg font-bold text-text-main leading-tight">
                  Enter details to load your child&apos;s 24 questions
                </h3>
              </div>

              <form onSubmit={handleNextToQuestions} className="space-y-3">
                {/* 3 Inputs with large, legible letter sizes */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  <div>
                    <label
                      htmlFor="parentName"
                      className="block text-xs sm:text-sm font-bold text-text-main mb-1"
                    >
                      Parent Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="parentName"
                      type="text"
                      value={parentName}
                      onChange={(e) => {
                        setParentName(e.target.value);
                        if (errors.parentName) setErrors((prev) => ({ ...prev, parentName: "" }));
                      }}
                      placeholder="Your Name"
                      className="w-full px-3 py-2 sm:py-2.5 rounded-lg border border-soft-green bg-bg/50 focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base font-medium transition-all"
                    />
                    {errors.parentName && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.parentName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="childName"
                      className="block text-xs sm:text-sm font-bold text-text-main mb-1"
                    >
                      Child&apos;s Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="childName"
                      type="text"
                      value={childName}
                      onChange={(e) => {
                        setChildName(e.target.value);
                        if (errors.childName) setErrors((prev) => ({ ...prev, childName: "" }));
                      }}
                      placeholder="Child's Name"
                      className="w-full px-3 py-2 sm:py-2.5 rounded-lg border border-soft-green bg-bg/50 focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base font-medium transition-all"
                    />
                    {errors.childName && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.childName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs sm:text-sm font-bold text-text-main mb-1"
                    >
                      Phone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                      }}
                      placeholder="e.g. 9597469409"
                      className="w-full px-3 py-2 sm:py-2.5 rounded-lg border border-soft-green bg-bg/50 focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base font-medium transition-all"
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* 9 Age Bands with large, clearly visible typography */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-text-main mb-1.5">
                    Select Child&apos;s Age Band <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {AGE_BANDS.map((band) => (
                      <button
                        type="button"
                        key={band.id}
                        onClick={() => {
                          setSelectedBandId(band.id);
                          if (errors.selectedBandId) setErrors((prev) => ({ ...prev, selectedBandId: "" }));
                        }}
                        className={`py-2 px-2.5 sm:py-2.5 sm:px-3 rounded-xl text-left transition-all duration-150 border cursor-pointer ${
                          selectedBandId === band.id
                            ? "bg-primary text-white border-primary shadow-xs font-bold ring-2 ring-primary/30"
                            : "bg-surface hover:bg-soft-green/30 text-text-main border-soft-green/70"
                        }`}
                      >
                        <div className="font-bold text-xs sm:text-sm leading-tight truncate">{band.shortLabel}</div>
                        <div
                          className={`text-[10px] sm:text-xs truncate leading-tight mt-0.5 ${
                            selectedBandId === band.id ? "text-soft-green" : "text-text-light font-medium"
                          }`}
                        >
                          {band.sublabel}
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.selectedBandId && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.selectedBandId}
                    </p>
                  )}
                </div>

                {/* Highly Visible Next Button */}
                <div className="pt-1.5">
                  <button
                    type="submit"
                    disabled={isSubmittingDetails}
                    className="w-full py-3 px-5 rounded-xl bg-primary hover:bg-secondary text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all active:scale-[0.99] cursor-pointer"
                  >
                    {isSubmittingDetails ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Connecting to Questions...</span>
                      </>
                    ) : (
                      <>
                        <span>Next • Open 24 Questions ({selectedBand.shortLabel})</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-xs text-text-light pt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                  <span>100% Confidential • Details emailed securely to clinic</span>
                </div>
              </form>
            </motion.div>
          )}

          {/* STEP 2: 24 QUESTIONS PORTAL (Compact, fully visible without scrolling) */}
          {step === 2 && currentQ && (
            <motion.div
              key={`q-${safeIndex}`}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.14 }}
              className="flex flex-col gap-2.5"
            >
              {/* LIVE TRACKER WITH HIGH-VISIBILITY TYPOGRAPHY */}
              <div className="bg-soft-green/30 rounded-xl p-3 border border-soft-green/60 shadow-2xs">
                {/* 1-Line Category & Question Header */}
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold mb-2">
                  <div className="flex items-center gap-2 text-primary truncate max-w-[65%]">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary inline-block animate-pulse shrink-0"></span>
                    <span className="truncate">
                      Category {currentDomainIndex + 1}/8: <strong className="text-secondary">{currentQ.domain}</strong>
                    </span>
                  </div>

                  {/* 3 mini step dots for current category */}
                  <div className="flex items-center gap-1.5 bg-white/90 px-2.5 py-1 rounded-full border border-soft-green/60 shadow-2xs shrink-0">
                    <span className="text-[10px] sm:text-xs text-text-light font-bold">Item:</span>
                    {[1, 2, 3].map((stepNum) => {
                      const isCurrentStep = questionInDomain === stepNum;
                      const isPastStep = questionInDomain > stepNum;
                      return (
                        <span
                          key={stepNum}
                          className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-extrabold ${
                            isCurrentStep
                              ? "bg-primary text-white"
                              : isPastStep
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          {isPastStep ? "✓" : stepNum}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* 8-segment mini bar (1 for each domain) */}
                <div className="grid grid-cols-8 gap-1.5 mb-1.5">
                  {domainList.map((dom, dIdx) => {
                    const isDone = currentDomainIndex > dIdx;
                    const isCurrent = currentDomainIndex === dIdx;
                    return (
                      <div
                        key={dom}
                        title={dom}
                        className={`h-1.5 rounded-full transition-all ${
                          isCurrent
                            ? "bg-primary"
                            : isDone
                            ? "bg-emerald-600"
                            : "bg-soft-green/50"
                        }`}
                      />
                    );
                  })}
                </div>

                <div className="flex justify-between items-center text-xs text-text-light font-semibold px-0.5">
                  <span>Question {safeIndex + 1} of 24</span>
                  <span>{progressPercent}% Completed</span>
                </div>
              </div>

              {/* Large, Clear Question Card */}
              <div className="bg-surface border border-soft-green/70 rounded-xl p-3.5 sm:p-4 shadow-2xs">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-secondary mb-1.5">
                  {renderDomainIcon(currentQ.domain, "w-4 h-4")}
                  <span>{currentQ.domain} • Question #{questionInDomain} of 3</span>
                </div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-text-main leading-relaxed">
                  {currentQ.text}
                </h4>

                <div className="mt-2 flex items-center gap-2 text-xs text-text-light bg-bg/60 rounded-lg px-3 py-1.5 border border-soft-green/30">
                  <HelpCircle className="w-3.5 h-3.5 text-secondary shrink-0" />
                  <span className="truncate">{DOMAIN_DESCRIPTIONS[currentQ.domain]?.hint}</span>
                </div>
              </div>

              {/* HIGH VISIBILITY BUTTONS (Yes, Sometimes, No / Not yet) */}
              <div className="space-y-2">
                {[
                  {
                    score: 2,
                    title: "Yes",
                    subtext: "Mastered",
                    icon: CheckCircle2,
                    borderCol: "border-emerald-200 hover:border-emerald-500",
                    bgSelected: "bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500/30 text-emerald-950",
                    badgeCol: "text-emerald-700 bg-emerald-100",
                  },
                  {
                    score: 1,
                    title: "Sometimes",
                    subtext: "Emerging",
                    icon: Clock,
                    borderCol: "border-amber-200 hover:border-amber-500",
                    bgSelected: "bg-amber-50 border-amber-500 ring-2 ring-amber-500/30 text-amber-950",
                    badgeCol: "text-amber-700 bg-amber-100",
                  },
                  {
                    score: 0,
                    title: "No / Not yet",
                    subtext: "Needs Support",
                    icon: XCircle,
                    borderCol: "border-rose-200 hover:border-rose-500",
                    bgSelected: "bg-rose-50 border-rose-500 ring-2 ring-rose-500/30 text-rose-950",
                    badgeCol: "text-rose-700 bg-rose-100",
                  },
                ].map((opt) => {
                  const isSelected = answers[currentQ.id] === opt.score;
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.title}
                      type="button"
                      onClick={() => handleSelectAnswer(opt.score)}
                      className={`w-full text-left py-2.5 px-3.5 sm:py-3 sm:px-4 rounded-xl border transition-all duration-150 flex items-center justify-between group active:scale-[0.99] cursor-pointer shadow-2xs ${
                        isSelected ? opt.bgSelected : `bg-surface text-text-main ${opt.borderCol} hover:bg-bg`
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected ? opt.badgeCol : "bg-bg text-text-light group-hover:bg-soft-green/40"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm sm:text-base font-bold">
                            {opt.title}
                          </span>
                          <span className="text-xs text-text-light font-semibold">
                            ({opt.subtext})
                          </span>
                        </div>
                      </div>
                      <div
                        className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                          isSelected
                            ? "border-primary bg-primary text-white"
                            : "border-text-light/30 group-hover:border-primary"
                        }`}
                      >
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation & Submit actions */}
              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={() => {
                    if (safeIndex > 0) {
                      setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
                    } else {
                      setStep(1);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-text-light hover:text-primary py-2 px-3 rounded-lg hover:bg-soft-green/20 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>

                {safeIndex < questions.length - 1 ? (
                  <button
                    type="button"
                    disabled={answers[currentQ.id] === undefined}
                    onClick={() => setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1))}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white bg-primary disabled:opacity-40 disabled:pointer-events-none hover:bg-secondary py-2 px-4 rounded-xl shadow-2xs transition-all cursor-pointer"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={answers[currentQ.id] === undefined}
                    onClick={handleFinalSubmit}
                    className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary disabled:opacity-40 disabled:pointer-events-none py-2.5 px-5 rounded-xl shadow-xs transition-all cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Submit & Reveal Results</span>
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {/* STEP 3: COMPACT RESULTS SCREEN (Fits completely without scrolling) */}
          {step === 3 && (
            <motion.div
              key="step-3-results"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-2.5"
            >
              {/* PRIMARY OUTCOME BANNER (Compact) */}
              <div
                className={`border rounded-2xl p-3 text-center relative overflow-hidden shadow-2xs ${
                  assessmentResult.outcomeType === "excellent"
                    ? "bg-gradient-to-br from-emerald-100/60 via-surface to-emerald-50/50 border-emerald-300"
                    : assessmentResult.outcomeType === "attend_session"
                    ? "bg-gradient-to-br from-rose-100/60 via-surface to-amber-50/50 border-rose-300"
                    : "bg-gradient-to-br from-amber-100/60 via-surface to-indigo-50/50 border-amber-300"
                }`}
              >
                <div
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold mb-1 shadow-2xs ${
                    assessmentResult.outcomeType === "excellent"
                      ? "bg-emerald-700 text-white"
                      : assessmentResult.outcomeType === "attend_session"
                      ? "bg-rose-700 text-white"
                      : "bg-amber-700 text-white"
                  }`}
                >
                  {assessmentResult.outcomeType === "excellent" ? (
                    <Smile className="w-3 h-3 text-amber-300" />
                  ) : assessmentResult.outcomeType === "attend_session" ? (
                    <Calendar className="w-3 h-3 text-amber-300" />
                  ) : (
                    <Stethoscope className="w-3 h-3 text-amber-300" />
                  )}
                  <span>{assessmentResult.badge}</span>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-primary leading-tight">
                  {assessmentResult.title}
                </h3>

                <p className="text-[11px] text-text-light mt-0.5">
                  {childName || "Your child"} ({selectedBand.shortLabel}) • 24 questions completed
                </p>

                {/* 3 COMPACT SUMMARY RESPONSE COUNT CARDS */}
                <div className="grid grid-cols-3 gap-1.5 max-w-xs mx-auto mt-2">
                  <div
                    className={`p-1.5 rounded-lg border transition-all flex flex-col items-center relative ${
                      assessmentResult.outcomeType === "excellent"
                        ? "bg-white border-emerald-500 ring-1.5 ring-emerald-500/30 shadow-xs"
                        : "bg-white/80 border-emerald-200"
                    }`}
                  >
                    <span className="text-emerald-700 font-black text-base sm:text-lg leading-tight">
                      {assessmentResult.yesCount}
                    </span>
                    <span className="text-[9px] font-bold text-emerald-800 uppercase tracking-tight">
                      Yes
                    </span>
                    <span className="text-[8px] font-semibold text-emerald-600/90 leading-tight">
                      (Excellent)
                    </span>
                  </div>

                  <div
                    className={`p-1.5 rounded-lg border transition-all flex flex-col items-center relative ${
                      assessmentResult.outcomeType === "consult_doctor"
                        ? "bg-white border-amber-500 ring-1.5 ring-amber-500/30 shadow-xs"
                        : "bg-white/80 border-amber-200"
                    }`}
                  >
                    <span className="text-amber-700 font-black text-base sm:text-lg leading-tight">
                      {assessmentResult.sometimesCount}
                    </span>
                    <span className="text-[9px] font-bold text-amber-800 uppercase tracking-tight">
                      Sometimes
                    </span>
                    <span className="text-[8px] font-semibold text-amber-600/90 leading-tight">
                      (Concern Dr)
                    </span>
                  </div>

                  <div
                    className={`p-1.5 rounded-lg border transition-all flex flex-col items-center relative ${
                      assessmentResult.outcomeType === "attend_session"
                        ? "bg-white border-rose-500 ring-1.5 ring-rose-500/30 shadow-xs"
                        : "bg-white/80 border-rose-200"
                    }`}
                  >
                    <span className="text-rose-700 font-black text-base sm:text-lg leading-tight">
                      {assessmentResult.noCount}
                    </span>
                    <span className="text-[9px] font-bold text-rose-800 uppercase tracking-tight">
                      No / Not yet
                    </span>
                    <span className="text-[8px] font-semibold text-rose-600/90 leading-tight">
                      (Attend 1 Ssn)
                    </span>
                  </div>
                </div>

                {/* Compact Milestone Score Bar */}
                <div className="mt-2 max-w-xs mx-auto">
                  <div className="w-full bg-soft-green/50 h-1.5 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${assessmentResult.percentage}%` }}
                      className={`h-full rounded-full transition-all duration-500 ${
                        assessmentResult.outcomeType === "excellent"
                          ? "bg-emerald-600"
                          : assessmentResult.outcomeType === "attend_session"
                          ? "bg-rose-600"
                          : "bg-amber-600"
                      }`}
                    />
                  </div>
                  <div className="flex justify-between text-[9px] text-text-light font-bold mt-0.5 px-0.5">
                    <span>Score: {assessmentResult.totalScore}/48 pts</span>
                    <span>{assessmentResult.percentage}% Milestone Index</span>
                  </div>
                </div>
              </div>

              {/* STREAMLINED 8 CATEGORY BREAKDOWN (Compact 4x2 Grid) */}
              <div className="bg-surface rounded-xl p-2.5 border border-soft-green/70 shadow-2xs">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-3 h-3 text-secondary" />
                    <span className="text-xs font-bold text-primary">
                      Category Breakdown (8 Domains)
                    </span>
                  </div>
                  <span className="text-[9px] text-text-light font-medium">
                    Max 6 pts / domain
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {assessmentResult.domainScores.map((ds) => (
                    <div
                      key={ds.domain}
                      className="p-1.5 rounded-lg border border-soft-green/50 bg-bg/40 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between text-[10px] font-bold mb-0.5">
                        <span className="truncate pr-1">{ds.label.split(" ")[0]}</span>
                        <span className="text-primary font-extrabold">{ds.score}/6</span>
                      </div>
                      <div className="w-full bg-soft-green/40 h-1 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${ds.percentage}%` }}
                          className={`h-full rounded-full ${
                            ds.percentage >= 80
                              ? "bg-emerald-600"
                              : ds.percentage >= 50
                              ? "bg-amber-600"
                              : "bg-rose-600"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compact Guidance Note */}
              <div className="p-2 rounded-xl bg-bg/80 text-[11px] text-text-main border border-soft-green/40 leading-snug">
                <span className="font-bold text-primary">Guidance: </span>
                <span>{assessmentResult.toneSummary}</span>
              </div>

              {/* REDUCED ACTION BUTTONS */}
              <div className="space-y-1.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {/* WhatsApp Action */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-xs hover:shadow transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>
                      {assessmentResult.outcomeType === "attend_session"
                        ? "Book 1 Session on WhatsApp"
                        : assessmentResult.outcomeType === "consult_doctor"
                        ? "Concern a Doctor on WhatsApp"
                        : "Discuss Report on WhatsApp"}
                    </span>
                  </a>

                  {/* Consultation Booking */}
                  <a
                    href={`/contact?child=${encodeURIComponent(childName || "Child")}&band=${encodeURIComponent(
                      selectedBand.shortLabel
                    )}&verdict=${encodeURIComponent(assessmentResult.badge)}`}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-primary hover:bg-secondary text-white font-bold text-xs shadow-xs hover:shadow transition-all cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>
                      {assessmentResult.outcomeType === "attend_session"
                        ? "Attend One Session"
                        : "Book Consultation"}
                    </span>
                  </a>
                </div>

                {/* Call directly & retake */}
                <div className="flex items-center justify-between text-[11px] text-text-light px-1 pt-0.5">
                  <a
                    href={`tel:+91${CLINIC_PHONE}`}
                    className="inline-flex items-center gap-1 text-primary hover:text-secondary font-bold"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call: {CLINIC_PHONE}</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1 text-text-light hover:text-primary font-medium cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" /> Retake
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  // If standalone page, render centered with zero extra outer vertical padding
  if (isStandalone) {
    return <div className="w-full flex items-center justify-center">{content}</div>;
  }

  if (!isOpen || !mounted) return null;

  // Mount directly to document.body via Portal
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2.5 sm:p-4 bg-black/60 backdrop-blur-sm overflow-hidden animate-in fade-in duration-150">
      <div
        className="fixed inset-0 -z-10"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-xl my-auto flex justify-center">
        {content}
      </div>
    </div>,
    document.body
  );
}
