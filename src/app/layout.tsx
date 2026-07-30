import type { Metadata, Viewport } from "next";
import { Almarai, Alexandria } from 'next/font/google';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['300', '400', '700', '800'],
  variable: '--font-almarai',
});

const alexandria = Alexandria({
  subsets: ['arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-alexandria',
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "شركة إشراق للدعاية والإعلان بالرياض | لوحات إعلانية وتجهيز معارض",
  description: "شركة إشراق للدعاية والإعلان بالرياض تأسست عام 2020. متخصصة في تصنيع وتركيب اللوحات الإعلانية الخارجية والداخلية، الحروف البارزة ثلاثية الأبعاد، وتجهيز المعارض والمؤتمرات، وتغليف السيارات والهدايا الدعائية بأعلى معايير الجودة وأفضل الأسعار.",
  keywords: ["شركة دعاية واعلان الرياض", "لوحات اعلانية الرياض", "حروف مجسمة 3d", "تجهيز معارض الرياض", "تغليف سيارات الرياض", "لوحات كلادينج الرياض", "مطبوعات دعاية واعلان", "شركة اشراق للدعاية والاعلان"],
  authors: [{ name: "شركة إشراق" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://ishraq-adv.com/",
  },
  openGraph: {
    title: "شركة إشراق للدعاية والإعلان بالرياض | لوحات إعلانية وتجهيز معارض",
    description: "شركة إشراق للدعاية والإعلان بالرياض. تصنيع اللوحات الإعلانية الخارجية، الحروف البارزة، المعارض، وتغليف السيارات بأعلى جودة.",
    url: "https://ishraq-adv.com/",
    siteName: "مؤسسة إشراق للدعاية والإعلان",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة إشراق للدعاية والإعلان بالرياض",
    description: "تصنيع وتركيب اللوحات الإعلانية وتجهيز المعارض والمؤتمرات بالرياض.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className={`${almarai.variable} ${alexandria.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', theme);
              })()
            `
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
