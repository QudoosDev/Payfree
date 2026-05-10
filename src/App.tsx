/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import Reporting from './components/Reporting';
import Solutions from './components/Solutions';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  const appRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from('.gsap-nav', {
      y: -40,
      opacity: 0,
      duration: 0.8,
    })
    .from('.gsap-hero-h1', {
      y: 40,
      opacity: 0,
      duration: 0.8,
    }, "<0.12")
    .from('.gsap-hero-sub', {
      y: 30,
      opacity: 0,
      duration: 0.8,
    }, "<0.1")
    .from('.gsap-hero-btn', {
      y: 20,
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      stagger: 0.1,
    }, "<0.15")
    .from('.gsap-hero-dashboard', {
      y: 60,
      opacity: 0,
      duration: 1,
    }, "<0.15");
  }, { scope: appRef });

  return (
    <div ref={appRef} className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <WhyChooseUs />
      <Reporting />
      <Solutions />
      <FinalCTA />
      <Footer />
    </div>
  );
}
