import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Features />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
