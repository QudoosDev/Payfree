/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import Reporting from './components/Reporting';
import Solutions from './components/Solutions';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Auth from './components/Auth';
import CustomToast from './components/Toast';

export default function App() {
  const [view, setView] = useState<'home' | 'login' | 'signup'>('home');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const navigateToAuth = (type: 'login' | 'signup') => {
    setView(type);
    window.scrollTo(0, 0);
  };

  const handleAuthSuccess = (type: 'Login' | 'Signup') => {
    setToastMessage(`${type} successful! Welcome to Payfree.`);
    setShowToast(true);
    
    // After toast is shown, go back to home
    setTimeout(() => {
      setShowToast(false);
      setView('home');
    }, 3000);
  };

  if (view === 'login' || view === 'signup') {
    return (
      <>
        <Auth 
          initialType={view} 
          onBack={() => setView('home')} 
          onSuccess={handleAuthSuccess}
        />
        <CustomToast 
          isVisible={showToast} 
          message={toastMessage} 
          onClose={() => setShowToast(false)} 
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onAuth={navigateToAuth} />
      <div id="hero"><Hero onAuth={navigateToAuth} /></div>
      <div id="features"><Features /></div>
      <div id="about"><WhyChooseUs /></div>
      <div id="reporting"><Reporting /></div>
      <div id="solutions"><Solutions onAuth={navigateToAuth} /></div>
      <FinalCTA onAuth={navigateToAuth} />
      <Footer />
      
      {/* Toast can also appear on home page if redirected with success */}
      <CustomToast 
        isVisible={showToast} 
        message={toastMessage} 
        onClose={() => setShowToast(false)} 
      />
    </div>
  );
}
