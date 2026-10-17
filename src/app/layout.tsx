import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

import Script from "next/script";

export const viewport = "width=device-width, initial-scale=1";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.seedstherapycenter.org"),
  title: "Child Therapy Center in Coimbatore | Seeds Therapy Center",
  description:
    "Seeds Therapy Center is a Best therapy center in Coimbatore offering occupational therapy, speech therapy, behavioral therapy, and early intervention.",
  keywords: [
    "best therapy center",
    "therapy center",
    "Therapy center in Coimbatore",
    "best therapy center in Coimbatore",
    "Best child therapy center in Coimbatore",
    "child therapy center",
    "Best pediatric therapy center in Coimbatore",
    "best child therapy center Coimbatore",
    "Best developmental delay therapy in Coimbatore",
    "child development center in Coimbatore",
    "ADHD therapy in Coimbatore",
    "ADHD therapy for childrens",
  ],
  openGraph: {
    title: "Child Therapy Center in Coimbatore | Seeds Therapy Center",
    description:
      "Seeds Therapy Center is a child therapy center in Coimbatore offering occupational therapy, speech therapy, behavioral therapy, and early intervention.",
    type: "website",
    locale: "en_US",
    siteName: "Seeds Therapy Center",
    images: [
      {
        url: "https://www.seedstherapycenter.org/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Seeds Therapy Center Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Child Therapy Center in Coimbatore | Seeds Therapy Center",
    description:
      "Seeds Therapy Center is a child therapy center in Coimbatore offering occupational therapy, speech therapy, behavioral therapy, and early intervention.",
    images: ["https://www.seedstherapycenter.org/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/images/logo.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png"
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: "pOcD3IAbG-uf8b_nfhhlwaI7J_4dPvxWw0XI2ymdRHA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-P7V4Y0E1CF"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-P7V4Y0E1CF');
            `,
          }}
        />
        <Script
          id="remove-fdprocessedid"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Remove fdprocessedid attributes before React hydration
                  var removeIds = function() {
                    var elements = document.querySelectorAll("[fdprocessedid]");
                    for (var i = 0; i < elements.length; i++) {
                      elements[i].removeAttribute("fdprocessedid");
                    }
                  };
                  
                  // Run immediately
                  removeIds();
                  
                  // Also observe for dynamically added elements
                  if (window.MutationObserver) {
                    var observer = new MutationObserver(function(mutations) {
                      for (var i = 0; i < mutations.length; i++) {
                        if (mutations[i].type === 'attributes' && mutations[i].attributeName === 'fdprocessedid') {
                          mutations[i].target.removeAttribute("fdprocessedid");
                        }
                      }
                    });
                    observer.observe(document.documentElement, {
                      attributes: true,
                      subtree: true,
                      attributeFilter: ['fdprocessedid']
                    });
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
