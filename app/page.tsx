"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

// Pages
import PageLanding from "./PageLanding";
import PageAbout from "./PageAbout";
import PageVision from "./PageVision";
import PageFooter from "@/components/PageFooter";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import PageServiceCompany from "./PageServiceCompany";

export default function Home() {
  // Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <main className="min-h-screen h-fit ">
        <PageLanding />

        <PageAbout />

        <PageServiceCompany />

        <PageVision />

        <PageFooter />
        <ScrollToTopButton />
      </main>
    </>
  );
}
