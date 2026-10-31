"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle, CheckCircle, Loader2, AlertCircle } from "lucide-react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919597469409";
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "fc0324b1-52d7-4bb8-9af6-152ac442f37a";

export default function ContactSection() {
  const [contactMethod, setContactMethod] = useState<"email" | "whatsapp">("email");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const child = params.get("child");
      const age = params.get("age");
      if (child) {
        setFormData((prev) => ({
          ...prev,
          message: `Hello SEEDS Therapy Center, I would like to schedule a consultation for my child ${child}${
            age ? ` (Age: ${age})` : ""
          }.`,
        }));
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (contactMethod === "whatsapp") {
      // WhatsApp - open in a new tab with details pre-filled
      const text = `Hello SEEDS Therapy Center,\n\nI would like to contact you.\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}`;
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, "_blank");
      return;
    }

    // Email - call Web3Forms directly from browser (client-side) using FormData
    setStatus("loading");
    setErrorMessage("");

    try {
      const form = new FormData();
      form.append("access_key", WEB3FORMS_KEY);
      form.append("from_name", "NEW PATIENT ENQUIRY");
      form.append("subject", `NEW PATIENT ENQUIRY - Website Inquiry (${formData.name})`);
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
      setErrorMessage("Network error. Please check your internet connection and try again.");
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-14 md:py-28 bg-surface pb-16 sm:pb-20 md:pb-28">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-soft-green text-primary border border-primary/15 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-sm">
            Contact Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-3 sm:mb-4 tracking-tight">
            We&apos;re Here To Help
          </h2>
          <p className="text-base sm:text-lg text-text-main max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed font-normal">
            Reach out to us for questions, assessments, or to schedule a visit. We look forward to hearing from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-5"
          >
            {[
              {
                icon: MapPin,
                label: "Visit Us",
                value: "No-77, Seeds Therapy Center, Siddhapudur, Coimbatore, Tamil Nadu 641044",
                href: "https://maps.google.com/?q=Seeds+Therapy+Center+Coimbatore",
              },
              {
                icon: Phone,
                label: "Call Us",
                value: "+91 9597469409\n+91 9043866554",
                href: "tel:+919597469409",
              },
              {
                icon: Mail,
                label: "Email Us",
                value: "seedstherapycenter@gmail.com",
                href: "mailto:seedstherapycenter@gmail.com",
              },
              {
                icon: Clock,
                label: "Therapy Session Timing",
                value: "Mon - Fri: 10:00 AM - 8:00 PM\nSat: 10:00 AM - 8:00 PM",
                href: null,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border-2 border-soft-green/60 shadow-sm">
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm sm:text-base font-bold text-primary mb-0.5 sm:mb-1">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm sm:text-base text-text-main font-medium hover:text-primary transition-colors whitespace-pre-line block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm sm:text-base text-text-main font-medium whitespace-pre-line">{item.value}</div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 sm:p-5 rounded-2xl bg-white border-2 border-primary/30 shadow-card hover:shadow-card-hover transition-all duration-200 group min-h-16 sm:min-h-auto"
            >
              <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm sm:text-base font-bold text-primary">Chat with us on WhatsApp</div>
                <div className="text-xs sm:text-sm text-text-main font-medium">Quick responses during business hours</div>
              </div>
              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-5 sm:p-8 border-2 border-soft-green/60 shadow-card flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-primary mb-4">Send Us a Message</h3>

              {/* Toggle Tab */}
              <div className="flex bg-bg p-1 rounded-xl border border-soft-green mb-6">
                <button
                  suppressHydrationWarning
                  type="button"
                  onClick={() => setContactMethod("email")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    contactMethod === "email"
                      ? "bg-primary text-white shadow-sm"
                      : "text-text-main hover:text-primary"
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  Email (Silent Send)
                </button>
                <button
                  suppressHydrationWarning
                  type="button"
                  onClick={() => setContactMethod("whatsapp")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    contactMethod === "whatsapp"
                      ? "bg-primary text-white shadow-sm"
                      : "text-text-main hover:text-primary"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp (Open Chat)
                </button>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-8 space-y-4"
                  >
                    <CheckCircle className="w-16 h-16 text-primary" />
                    <h4 className="text-xl font-bold text-primary">Message Sent! 🎉</h4>
                    <p className="text-sm text-text-light max-w-xs">
                      Thank you for contacting us. We will get back to you as soon as possible.
                    </p>
                    <button
                      suppressHydrationWarning
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2 border border-primary text-primary rounded-xl text-sm font-semibold hover:bg-primary/5 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
                    {status === "error" && (
                      <div className="flex gap-2 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold">Submission failed:</span> {errorMessage}
                        </div>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-text-main mb-1.5 sm:mb-2">
                          Your Name
                        </label>
                        <input
                          suppressHydrationWarning
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-soft-green bg-white text-text-main font-medium placeholder:text-text-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-base"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-text-main mb-1.5 sm:mb-2">
                          Email Address
                        </label>
                        <input
                          suppressHydrationWarning
                          type="email"
                          id="email"
                          required={contactMethod === "email"}
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-soft-green bg-white text-text-main font-medium placeholder:text-text-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-base"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs sm:text-sm font-bold text-text-main mb-1.5 sm:mb-2">
                        Phone Number
                      </label>
                      <input
                        suppressHydrationWarning
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-soft-green bg-white text-text-main font-medium placeholder:text-text-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-base"
                        placeholder="Phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-text-main mb-1.5 sm:mb-2">
                        How can we help?
                      </label>
                      <textarea
                        suppressHydrationWarning
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-soft-green bg-white text-text-main font-medium placeholder:text-text-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none text-base"
                        placeholder="Tell us about your child and how we can support your family..."
                      />
                    </div>
                    <button
                      suppressHydrationWarning
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full px-6 py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all duration-200 shadow-medium hover:shadow-card-hover active:scale-95 text-base min-h-14 flex items-center justify-center gap-2"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending silently...
                        </>
                      ) : contactMethod === "email" ? (
                        "Send Message Silently"
                      ) : (
                        "Open WhatsApp Chat"
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
