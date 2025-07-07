import { Link } from "react-router-dom"
import { FaRegCalendarCheck } from "react-icons/fa"

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#E9F7F6] to-[#FDFDFC] flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl text-center space-y-8">
        <div className="flex justify-center">
          <FaRegCalendarCheck className="text-[#048A81] text-6xl animate-pulse drop-shadow-lg" />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-[#048A81] leading-tight">
          Ayşe Yılmaz
        </h1>

        <p className="text-gray-700 text-lg md:text-xl px-2 md:px-8">
          Günün yoğunluğunda kendini unutmamak için bir adım at. Randevunu planla, bedenini ve ruhunu dinlendir.
        </p>

        <Link
          to="/appointment"
          className="inline-block bg-[#048A81] hover:bg-[#037368] text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          Hemen Randevu Al
        </Link>

        <p className="text-sm text-gray-500 mt-6 italic">
          "Biraz durmak, yeniden başlamak için en iyi yoldur."
        </p>
      </div>
    </section>
  )
}
