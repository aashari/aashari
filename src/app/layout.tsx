import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@/styles/index.css";

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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'rgb(249, 248, 246)' },
    { media: '(prefers-color-scheme: dark)', color: '#1A2A44' }
  ],
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
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
        
        {/* Theme detection script */}
        <Script id="theme-detector" strategy="beforeInteractive">
          {`
            (function() {
              try {
                // Check if user has a saved preference
                const savedTheme = localStorage.getItem('theme');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                
                // Apply theme based on saved preference or system preference
                if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
                  document.documentElement.classList.add('dark');
                } else if (savedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                }
                
                // Listen for system preference changes
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
                  if (!localStorage.getItem('theme')) {
                    if (e.matches) {
                      document.documentElement.classList.add('dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                    }
                  }
                });
              } catch (e) {
                // Fallback if localStorage is not available
                console.warn('Theme detection failed:', e);
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}

