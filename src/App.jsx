import './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-gold selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
      </main>

      <Footer />
    </div>
  );
}

export default App;
