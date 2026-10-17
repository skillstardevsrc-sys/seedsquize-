import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import ConditionsGrid from "@/components/ConditionsGrid";
import ServicesSection from "@/components/ServicesSection";
import JourneySection from "@/components/JourneySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PopupForm from "@/components/PopupForm";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.seedstherapycenter.org/#organization",
      "name": "Seeds Therapy Center",
      "url": "https://www.seedstherapycenter.org",
      "telephone": "+919597469409",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No-77, Seeds Therapy Center, Siddhapudur",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641044",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Occupational Therapy",
      "provider": {
        "@id": "https://www.seedstherapycenter.org/#organization"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Neuro Occupational Therapy",
      "provider": {
        "@id": "https://www.seedstherapycenter.org/#organization"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Speech Therapy",
      "provider": {
        "@id": "https://www.seedstherapycenter.org/#organization"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Behavioral Therapy",
      "provider": {
        "@id": "https://www.seedstherapycenter.org/#organization"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Early Intervention",
      "provider": {
        "@id": "https://www.seedstherapycenter.org/#organization"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the signs that a child may need therapy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If your child has ongoing difficulties with speech, language, learning, behavior, social interaction, motor skills, sensory processing, emotional regulation, or daily activities, professional assessment may help identify their individual needs. At Seeds Therapy Center in Coimbatore, children can receive personalized support based on their developmental needs and therapy goals."
          }
        },
        {
          "@type": "Question",
          "name": "What is Occupational Therapy for children?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pediatric Occupational Therapy helps children develop skills needed for everyday activities, school participation, independence, fine motor development, sensory processing, coordination, attention, and functional participation."
          }
        },
        {
          "@type": "Question",
          "name": "What are the signs that a child may need emotional or behavioral support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Children may sometimes experience frequent emotional outbursts, anxiety, withdrawal, irritability, difficulty concentrating, changes in behavior, difficulty managing emotions, or challenges with social interaction."
          }
        },
        {
          "@type": "Question",
          "name": "What are the signs of an unhappy or emotionally struggling child?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A child who is frequently irritable, withdrawn, unusually quiet, losing interest in activities, having frequent emotional outbursts, or struggling with everyday interactions may need additional attention and support."
          }
        },
        {
          "@type": "Question",
          "name": "What does Speech Therapy help children with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pediatric Speech Therapy can support children with speech delay, language delay, pronunciation and articulation difficulties, limited vocabulary, difficulty understanding or expressing language, social communication challenges, and fluency difficulties."
          }
        },
        {
          "@type": "Question",
          "name": "Are parents involved in their child's therapy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Parent involvement is an important part of a child's therapy journey. Depending on the child's therapy plan, parents may receive progress updates, guidance, and practical strategies for home routines."
          }
        },
        {
          "@type": "Question",
          "name": "Which is the best therapy center for children in Coimbatore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seeds Therapy Center in Coimbatore provides child-focused therapy services including Occupational Therapy, Speech Therapy, Behavioral Therapy, and early developmental support tailored to each child's individual needs."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find a child therapy center in Coimbatore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parents searching for a child therapy center in Coimbatore can consider Seeds Therapy Center in Siddhapudur, Coimbatore for personalized therapy support."
          }
        },
        {
          "@type": "Question",
          "name": "What types of therapy are available for children at Seeds Therapy Center?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seeds Therapy Center provides Speech Therapy, Occupational Therapy, Behavioral Therapy, and Early Intervention support for children."
          }
        },
        {
          "@type": "Question",
          "name": "How do I choose the right therapy for my child?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The right therapy depends on the child's specific developmental and functional needs. A professional assessment at Seeds Therapy Center can help determine the most appropriate support."
          }
        },
        {
          "@type": "Question",
          "name": "Does my child need Speech, Occupational, or Behavioral Therapy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you notice persistent difficulties with communication, behavior, sensory processing, motor skills, or daily activities, a professional assessment can identify the right therapy."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose Seeds Therapy Center for child therapy in Coimbatore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seeds Therapy Center focuses on child-centered, individualized therapy with parent collaboration to help children develop practical life and communication skills."
          }
        },
        {
          "@type": "Question",
          "name": "Does early therapy help children with developmental difficulties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Early support helps children build essential skills faster and participate more confidently at home, school, and social settings."
          }
        },
        {
          "@type": "Question",
          "name": "How can I find the best child therapy center near me in Coimbatore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Consider therapist qualifications, experience, customized approach, location, and communication. Seeds Therapy Center offers comprehensive pediatric therapy in Coimbatore."
          }
        }
      ]
    }
  ]
};

export const metadata = {
  alternates: {
    canonical: "https://www.seedstherapycenter.org",
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="schema-markup"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <AboutSection />
        <ConditionsGrid />
        <ServicesSection />
        <JourneySection />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <PopupForm />
    </>
  );
}
