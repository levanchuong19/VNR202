"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/components/hero-section";
import CourseOverview from "@/components/course-overview";
import TimelineSection from "@/components/timeline-section";
import ModulesSection from "@/components/modules-section";
import ModulesDetailSection from "@/components/modules-detail-section";
import GallerySection from "@/components/gallery-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { UnderstandingSection } from "@/components/understanding-section";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <HeroSection scrollY={scrollY} />
        <UnderstandingSection />
        <CourseOverview />
        {/* <FeaturedSection /> */}
        <TimelineSection />
        <ModulesSection />
        <ModulesDetailSection />
        {/* <ExpertsSection /> */}
        <GallerySection />
        {/* <FAQSection /> */}
        {/* <TestimonialsSection /> */}
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
