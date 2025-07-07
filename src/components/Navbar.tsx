import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLink = (path: string, label: string) => (
    <Link
      to={path}
      onClick={() => setIsOpen(false)}
      className={`block py-2 px-4 rounded hover:bg-[#f0f0f0] ${
        location.pathname === path ? "text-[#048A81] font-bold" : "text-gray-700"
      }`}
    >
      {label}
    </Link>
  )

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-[#048A81]">
          RandevuSitesi
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="text-2xl">☰</span>
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
        <div className="md:hidden px-4 pb-3 space-y-1 bg-white border-t border-gray-100">
          {navLink("/", "Anasayfa")}
          {navLink("/about", "Hakkında")}
          {navLink("/appointment", "Randevu Al")}
          {navLink("/contact", "İletişim")}
        </div>
      )}
    </header>
  )
}
