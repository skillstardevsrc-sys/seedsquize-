"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2, AlertCircle, Mail, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919597469409";
const WEB3FORMS_KEY = "fc0324b1-52d7-4bb8-9af6-152ac442f37a";

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [contactMethod, setContactMethod] = useState<"email" | "whatsapp">("email");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    phone: "",
    email: "",
    concern: "",
    message: "",
  });

  useEffect(() => {
    // Only show once per session or just wait 15 seconds after load
    if (hasShown) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasShown(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, [hasShown]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id.replace("popup-", "")]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (contactMethod === "whatsapp") {
      // WhatsApp - open in a new tab with details pre-filled
      const text = `Hello SEEDS Therapy Center,\n\nI would like to book an assessment.\n\n*Parent/Guardian Name:* ${formData.parentName}\n*Child's Name:* ${formData.childName || "N/A"}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || "N/A"}\n*Concern:* ${formData.concern || "N/A"}\n*Message:* ${formData.message || "N/A"}`;
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, "_blank");
      setIsOpen(false);
      return;
    }

    // Email - call Web3Forms directly from browser (client-side) using FormData
    setStatus("loading");
    setErrorMessage("");

    try {
      const form = new FormData();
      form.append("access_key", WEB3FORMS_KEY);
      form.append("from_name", "NEW PATIENT ENQUIRY");
      form.append("subject", `NEW PATIENT ENQUIRY - Assessment Request (${formData.parentName})`);
      form.append("parent_name", formData.parentName);
      form.append("child_name", formData.childName);
      form.append("phone", formData.phone);
      form.append("email", formData.email);
      form.append("concern", formData.concern);
      form.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({
          parentName: "",
          childName: "",
          phone: "",
          email: "",
          concern: "",
          message: "",
        });
        // Auto close after 3 seconds on success
        setTimeout(() => {
          setIsOpen(false);
          setStatus("idle");
        }, 3000);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting popup form:", error);
      setStatus("error");
      setErrorMessage("Network error. Please check your internet connection.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-card overflow-hidden"
          >
            <div className="absolute top-4 right-4 z-10">
              <button
                suppressHydrationWarning
                onClick={() => setIsOpen(false)}
                className="p-1.5 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8 max-h-[90vh] overflow-y-auto scrollbar-hide">
              <h3 className="text-2xl font-bold text-primary mb-2">Book an Assessment</h3>
              <p className="text-text-light text-sm mb-6">
                Take the first step towards a better journey. Fill out the details below.
              </p>

              {/* Toggle Tab */}
              <div className="flex bg-surface p-1 rounded-xl border border-soft-green/50 mb-6">
                <button
                  suppressHydrationWarning
                  type="button"
                  onClick={() => setContactMethod("email")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    contactMethod === "email"
                      ? "bg-primary text-white shadow-sm"
                      : "text-text-light hover:text-primary"
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  Email
                </button>
                <button
                  suppressHydrationWarning
                  type="button"
                  onClick={() => setContactMethod("whatsapp")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    contactMethod === "whatsapp"
                      ? "bg-primary text-white shadow-sm"
                      : "text-text-light hover:text-primary"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
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
                    <CheckCircle className="w-16 h-16 text-primary animate-bounce" />
                    <h4 className="text-xl font-bold text-primary">Message Sent! 🎉</h4>
                    <p className="text-sm text-text-light max-w-xs">
                      Thank you for contacting us. We will get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {status === "error" && (
                      <div className="flex gap-2 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">Submission failed:</span> {errorMessage}
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="popup-parentName" className="block text-sm font-medium text-gray-700 mb-1">
                          Parent/Guardian Name
                        </label>
                        <input
                          suppressHydrationWarning
                          type="text"
                          id="popup-parentName"
                          required
                          value={formData.parentName}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                          placeholder="Enter name"
                        />
                      </div>
                      <div>
                        <label htmlFor="popup-childName" className="block text-sm font-medium text-gray-700 mb-1">
                          Child&apos;s Name
                        </label>
                        <input
                          suppressHydrationWarning
                          type="text"
                          id="popup-childName"
                          value={formData.childName}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                          placeholder="Enter child's name"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="popup-phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          suppressHydrationWarning
                          type="tel"
                          id="popup-phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                          placeholder="Phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="popup-email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          suppressHydrationWarning
                          type="email"
                          id="popup-email"
                          required={contactMethod === "email"}
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                          placeholder="Email address"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="popup-concern" className="block text-sm font-medium text-gray-700 mb-1">
                        Primary Concern
                      </label>
                      <select
                        suppressHydrationWarning
                        id="popup-concern"
                        value={formData.concern}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white"
                      >
                        <option value="">Select a concern...</option>
                        <option value="speech">Speech & Language</option>
                        <option value="occupational">Occupational Therapy</option>
                        <option value="neuro-occupational">Neuro Occupational Therapy</option>
                        <option value="behavioral">Behavioral Issues</option>
                        <option value="special-ed">Special Education</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="popup-message" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Message (Optional)
                      </label>
                      <textarea
                        suppressHydrationWarning
                        id="popup-message"
                        rows={2}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                        placeholder="Tell us briefly about your needs..."
                      ></textarea>
                    </div>

                    <button
                      suppressHydrationWarning
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3.5 px-4 mt-2 bg-primary text-white rounded-lg font-semibold gradient-btn-primary hover:gradient-btn-hover transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending silently...
                        </>
                      ) : contactMethod === "email" ? (
                        "Request Consultation Silently"
                      ) : (
                        "Request Consultation via WhatsApp"
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
