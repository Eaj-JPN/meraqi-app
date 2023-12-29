"use client";

import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Pages
import PageLanding from "./PageLanding";
import PageAbout from "./PageAbout";
import PageCompanies from "./PageCompanies";
import PageService from "./PageService";
import PageVision from "./PageVision";
import PageFooter from "@/components/PageFooter";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import PageServiceCompany from "./PageServiceCompany";

export default function Home() {
  // Parralax Effect
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="min-h-screen h-fit ">
      <PageLanding />

      <PageAbout />

      <PageServiceCompany />

      <div
        id="Vision"
        className="min-h-screen flex justify-center items-center "
      >
        <PageVision />
      </div>

      <PageFooter />
      <ScrollToTopButton />
    </main>
  );
}
