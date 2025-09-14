export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xl font-bold tracking-tight text-gray-900">Axiome Robotics</div>
          <p className="mt-1 text-sm text-gray-600">Human‑friendly machines. Built with care.</p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#products" className="hover:text-gray-900">Shop</a>
          <a href="#" className="hover:text-gray-900">Support</a>
          <a href="#" className="hover:text-gray-900">Developers</a>
          <a href="#" className="hover:text-gray-900">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}
