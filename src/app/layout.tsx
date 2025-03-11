import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://andi.ltd"),
  title: "Andi Ashari | AI Operations & Engineering",
  description: "Tech Wanderer | AI Operations & Engineering Expert | Cloud Innovator. Based in Indonesia, specializing in cloud engineering and scalable AI solutions with expertise in infrastructure and sci-fi-inspired innovation.",
  keywords: [
    "Andi Ashari",
    "AI Operations",
    "Cloud Engineering",
    "Terraform",
    "TypeScript",
    "Golang",
    "Python",
    "Scalable AI Solutions",
    "Cloud Infrastructure",
    "Sci-Fi Inspired Tech",
    "Cloud Automation",
    "AI Infrastructure",
    "Serverless Computing",
    "Containerization"
  ],
  authors: [{ name: "Andi Ashari" }],
  creator: "Andi Ashari",
  // Add Open Graph metadata
  openGraph: {
    type: "profile",
    title: "Andi Ashari | AI Operations & Engineering Expert",
    description: "Tech Wanderer and AI operations expert, specializing in cloud engineering and scalable AI solutions.",
    images: [
      {
        url: "/profile.jpeg",
        width: 150,
        height: 150,
        alt: "Andi Ashari",
      },
    ],
  },
  // Add Twitter card metadata
  twitter: {
    card: "summary",
    title: "Andi Ashari | AI Operations & Engineering Expert",
    description: "Tech Wanderer and AI operations expert, specializing in cloud engineering and scalable AI solutions.",
    images: ["/profile.jpeg"],
    creator: "@aashari",
  },
  // Add canonical URL
  alternates: {
    canonical: "https://andi.ltd",
  },
  // Add favicon and app icons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
        
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-5QSFSH6TZR`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5QSFSH6TZR');
          `}
        </Script>
      </body>
    </html>
  );
}
