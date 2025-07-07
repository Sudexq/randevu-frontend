export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm border-t">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} RandevuSitesi. Tüm hakları saklıdır.</p>
        <p className="mt-1">
          <a
            href="mailto:iletisim@randevusitesi.com"
            className="text-[#048A81] underline hover:text-[#037368] transition"
          >
            iletisim@randevusitesi.com
          </a>
        </p>
      </div>
    </footer>
  )
}
