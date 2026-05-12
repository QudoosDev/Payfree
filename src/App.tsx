/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import Reporting from './components/Reporting';
import Solutions from './components/Solutions';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="features"><Features /></div>
      <div id="about"><WhyChooseUs /></div>
      <div id="reporting"><Reporting /></div>
      <div id="solutions"><Solutions /></div>
      <FinalCTA />
      <Footer />
    </div>
  );
}
