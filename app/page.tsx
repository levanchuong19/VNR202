"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/components/hero-section";
import CourseOverview from "@/components/course-overview";
import FeaturedSection from "@/components/featured-section";
import TimelineSection from "@/components/timeline-section";
import ModulesSection from "@/components/modules-section";
import ModulesDetailSection from "@/components/modules-detail-section";
import ExpertsSection from "@/components/experts-section";
import GallerySection from "@/components/gallery-section";
import FAQSection from "@/components/faq-section";
import PricingSection from "@/components/pricing-section";
import TestimonialsSection from "@/components/testimonials-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <HeroSection scrollY={scrollY} />
      <CourseOverview />
      <FeaturedSection />
      <TimelineSection />
      <ModulesSection />
      <ModulesDetailSection />
      <ExpertsSection />
      <GallerySection />
      <FAQSection />
      {/* <PricingSection /> */}
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
