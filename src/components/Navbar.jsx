import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-slate-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-extrabold text-white">
          TRPHONE
        </Link>

        <nav className="flex gap-6 text-sm text-gray-400">
          <Link to="/premium" className="hover:text-white">
            Premium
          </Link>
          <Link to="/odeme" className="hover:text-white">
            Ödeme
          </Link>
          <a
            href="https://myssoftwares.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            MYS Software
          </a>
        </nav>
      </div>
    </header>
  );
}
