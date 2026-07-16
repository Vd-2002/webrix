import { Bricolage_Grotesque, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import GlobalBackground from "@/components/GlobalBackground";
import Script from "next/script";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://webrix.co.in"),
  title: {
    default: "Webrix | Web Development, Custom Software & Digital Marketing Agency",
    template: "%s | Webrix",
  },
  description: "Webrix is a professional web development and digital marketing agency. We engineer premium headless websites, custom software, mobile apps, and execute result-oriented SEO & marketing campaigns.",
  keywords: [
    "Webrix", "Webrix agency", "Webrix software development", "Webrix web design", "Webrix services",
    "Webrix digital marketing", "digital marketing agency", "SEO optimization", "social media marketing",
    "custom website development", "Next.js developers", "React 19 development",
    "headless eCommerce Shopify", "custom CRM software", "SaaS portal developers",
    "AI workflow automation", "LLM agent integration", "React Native developers",
    "Core Web Vitals audit", "conversion rate optimization CRO", "low latency web systems"
  ],
  authors: [{ name: "Webrix Team", url: "https://webrix.co.in" }],
  creator: "Webrix Team",
  publisher: "Webrix Team",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webrix.co.in",
    title: "Webrix | Web Development, Custom Software & Digital Marketing Agency",
    description: "Webrix is a professional web development and digital marketing agency. We engineer premium headless websites, custom software, mobile apps, and execute result-oriented SEO & marketing campaigns.",
    siteName: "Webrix",
    images: [
      {
        url: "/logo2.png",
        width: 130,
        height: 38,
        alt: "Webrix",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Webrix | Web Development, Custom Software & Digital Marketing Agency",
    description: "Webrix is a professional web development and digital marketing agency. We engineer premium headless websites, custom software, mobile apps, and execute result-oriented SEO & marketing campaigns.",
    images: ["/logo2.png"],
  },
  other: {
    "geo.region": "US-NY",
    "geo.placename": "New York City",
    "geo.position": "40.7128;-74.0060",
    "ICBM": "40.7128, -74.0060",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${bricolageGrotesque.variable} ${ibmPlexMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground relative">
        {/* Google Analytics (gtag.js) */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* Google Tag Manager */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
            `}
          </Script>
        )}

        {/* Google Tag Manager (noscript) */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <GlobalBackground />
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
