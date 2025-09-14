import { Star, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 'neo',
    name: 'Neo Companion',
    price: '$799',
    rating: 4.8,
    tag: 'Best for homes',
    specs: ['Face tracking', 'Smart reminders', 'Dock included'],
    colorFrom: 'from-gray-200',
    colorTo: 'to-gray-50'
  },
  {
    id: 'atlas',
    name: 'Atlas Assist',
    price: '$1,499',
    rating: 4.9,
    tag: 'Teams & creators',
    specs: ['Open SDK', 'Modular arms', '8h battery'],
    colorFrom: 'from-gray-300',
    colorTo: 'to-gray-100'
  },
  {
    id: 'nova',
    name: 'Nova Scout',
    price: '$1,099',
    rating: 4.7,
    tag: 'Security & patrol',
    specs: ['Autonomous mapping', 'Night vision', 'IP54'],
    colorFrom: 'from-gray-200',
    colorTo: 'to-gray-50'
  }
];

export default function Products() {
  return (
    <section id="products" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Pick your robot</h2>
          <p className="mt-2 max-w-2xl text-gray-600">Flexible financing, 2‑year warranty, and lifetime software updates.
          </p>
        </div>
        <a href="#" className="hidden rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 transition hover:border-gray-400 sm:inline-block">Compare models</a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {products.map((p) => (
          <div key={p.id} className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className={`relative h-48 w-full bg-gradient-to-br ${p.colorFrom} ${p.colorTo}`}>
              <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800 shadow">
                {p.tag}
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                  <div className="mt-1 flex items-center gap-1 text-amber-500">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm text-gray-700">{p.rating}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-900">{p.price}</div>
                  <div className="text-xs text-gray-500">or $45/mo</div>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {p.specs.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-3">
                <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-white transition hover:bg-black">
                  <ShoppingCart size={18} />
                  Add to cart
                </button>
                <button className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 transition hover:border-gray-400">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
