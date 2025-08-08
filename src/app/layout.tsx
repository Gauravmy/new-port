import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaurav Dhakad - AI/ML Developer & Tech Community Leader",
  description: "Personal portfolio of Gaurav Dhakad, a second-year B.Tech AI/ML student, SDE Intern, Tech Community Leader, and Open Source Contributor. Showcasing projects, achievements, and skills in AI, machine learning, and full-stack development.",
  keywords: ["Gaurav Dhakad", "AI/ML", "Machine Learning", "Full Stack Developer", "Open Source", "Tech Community Leader", "React", "Python", "TensorFlow"],
  authors: [{ name: "Gaurav Dhakad" }],
  openGraph: {
    title: "Gaurav Dhakad - AI/ML Developer & Tech Community Leader",
    description: "Personal portfolio showcasing AI/ML projects, hackathon achievements, and community leadership",
    url: "https://gaurav-dhakad-portfolio.vercel.app",
    siteName: "Gaurav Dhakad Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Dhakad - AI/ML Developer & Tech Community Leader",
    description: "Personal portfolio showcasing AI/ML projects, hackathon achievements, and community leadership",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
