import { useState } from 'react';
import { Analytics } from "@vercel/analytics/react";
import './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Lounge from './components/Lounge';
import Menu from './components/Menu';
import Footer from './components/Footer';
import LocationModal from './components/LocationModal';

function App() {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-gold selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Lounge />
        <Menu />
      </main>

      <Footer onOpenMap={() => setIsMapOpen(true)} />
      <LocationModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
      <Analytics />
    </div>
  );
}

export default App;
