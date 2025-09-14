import Spline from '@splinetool/react-spline';
import { ArrowRight, ShoppingCart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-sm text-gray-700 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            In-stock: Next‑gen home robots
          </div>
          <h1 className="font-semibold leading-tight text-gray-900" style={{ fontFamily: 'Mona Sans, Inter, system-ui, sans-serif', fontWeight: 800, fontStretch: 'expanded' }}>
            <span className="block text-5xl sm:text-6xl">Robotics that</span>
            <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent text-5xl sm:text-6xl">works with you</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gray-700">
            Meet sleek, smart, and friendly robots engineered for homes and teams. Interactive. Upgradeable. Ready to roll.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#products" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-white shadow-lg shadow-gray-900/10 transition hover:translate-y-[-1px] hover:bg-black active:translate-y-0">
              <ShoppingCart size={18} />
              Shop robots
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-gray-900 transition hover:border-gray-400">
              Explore features
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
