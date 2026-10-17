"use client";

import { Heart, Phone, Mail } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  navigate: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Therapies", href: "/therapies" },
    { label: "Conditions We Support", href: "/conditions" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Occupational Therapy", href: "/therapies/occupational-therapy" },
    { label: "Neuro Occupational Therapy", href: "/therapies/neuro-occupational-therapy" },
    { label: "Speech Therapy", href: "/therapies/speech-therapy" },
    { label: "Behavioral Therapy", href: "/therapies/behavioral-therapy" },
    { label: "Early Intervention", href: "/therapies/early-intervention" },
    { label: "All Therapies", href: "/therapies" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white/80">
      <div className="container-main py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4 lg:pr-8">
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <Image src="/images/logo.svg" alt="Seeds Therapy Center" width={48} height={48} className="h-10 md:h-12 w-10 md:w-12 object-contain" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-wide">SEEDS</span>
                <span className="text-xs font-semibold text-white/70 tracking-wider">THERAPY CENTER</span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-5">
              Seeds Therapy Center provides personalized, evidence-based therapy support to help children grow in communication, independence, behavior, and development in a caring and family-friendly environment.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Heart className="w-4 h-4 text-accent" />
              <span>EARLY INTERVENTION · EARLY SUPPORT</span>
            </div>
          </div>

          {/* Navigate */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-extrabold text-white mb-4 uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-3">
              {footerLinks.navigate.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/85 hover:text-white font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-extrabold text-white mb-4 uppercase tracking-wider">Therapies</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-sm text-white/85 hover:text-white font-medium transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-extrabold text-white mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3 text-sm text-white/85 font-medium">
                  <Heart className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="leading-relaxed">No-77, Seeds Therapy Center, Siddhapudur, Coimbatore, Tamil Nadu 641044</span>
                </div>
              </li>
              <li>
                <a
                  href="tel:+919597469409"
                  className="flex items-center gap-3 text-sm text-white/85 hover:text-white font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                  <span>+91 9597469409</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919043866554"
                  className="flex items-center gap-3 text-sm text-white/85 hover:text-white font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                  <span>+91 9043866554</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:seedstherapycenter@gmail.com"
                  className="flex items-center gap-3 text-sm text-white/85 hover:text-white font-medium transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                  <span>seedstherapycenter@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-white/70 font-medium">
            &copy; {new Date().getFullYear()} Seeds Therapy. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-white/70 font-medium">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
