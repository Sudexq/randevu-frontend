import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLink = (path: string, label: string) => (
    <Link
      to={path}
      onClick={() => setIsOpen(false)}
      className={`block py-2 px-4 rounded hover:bg-gray-100 transition ${
        location.pathname === path ? "text-[#048A81] font-semibold" : "text-gray-700"
      }`}
    >
      {label}
    </Link>
  )

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-[#048A81]">
          RandevuSitesi
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menüyü Aç">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <nav className="hidden md:flex space-x-6">
          {navLink("/", "Anasayfa")}
          {navLink("/about", "Hakkında")}
          {navLink("/appointment", "Randevu Al")}
          {navLink("/contact", "İletişim")}
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 px-4 pb-3 bg-white">
          {navLink("/", "Anasayfa")}
          {navLink("/about", "Hakkında")}
          {navLink("/appointment", "Randevu Al")}
          {navLink("/contact", "İletişim")}
        </div>
      )}
    </header>
  )
}
