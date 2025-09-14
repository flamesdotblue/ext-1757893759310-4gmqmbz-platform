import { Robot, Cpu, Shield, Zap } from 'lucide-react';

const items = [
  {
    icon: Robot,
    title: 'Adaptive Personality',
    desc: 'Expressive head motion and gaze tracking that reacts to your presence.'
  },
  {
    icon: Cpu,
    title: 'AI Core',
    desc: 'On-device intelligence with continuous updates and plugin ecosystem.'
  },
  {
    icon: Shield,
    title: 'Privacy First',
    desc: 'Local processing, hardware mic mute, and transparent data controls.'
  },
  {
    icon: Zap,
    title: 'All‑day Power',
    desc: 'Fast charging dock with smart schedules and swappable battery packs.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Built for real life</h2>
          <p className="mt-2 max-w-2xl text-gray-600">Every model blends premium materials with playful interaction and serious capability.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white">
              <item.icon size={22} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-1 text-gray-600">{item.desc}</p>
            <div className="mt-4 h-1 w-0 bg-gray-900 transition-all duration-300 group-hover:w-16" />
          </div>
        ))}
      </div>
    </section>
  );
}
