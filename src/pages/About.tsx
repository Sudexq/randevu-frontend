export default function About() {
  return (
    <section className="min-h-screen bg-white px-4 py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Görsel Alanı */}
        <div className="w-[50%] md:w-1/4 md:m-20">
          <img
            src="src/assets/profile.png"
            alt="Ayşe Yılmaz"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Yazı Alanı */}
        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#048A81]">Hakkımda</h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Merhaba, ben <strong>Ayşe Yılmaz</strong>. Psikolojik danışmanlık ve kişisel gelişim alanında bireylerin
            potansiyelini keşfetmesine destek oluyorum. Danışanlarımla empati, güven ve anlayış temelinde bir ilişki kurmayı önemsiyorum.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Uzmanlık alanlarım arasında stres yönetimi, ilişkiler, öz şefkat ve yaşam koçluğu yer alıyor. Kendi içsel gücünüzü
            keşfetmek ve daha dengeli bir yaşam sürmek için buradayım.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Size özel bir yolculukta eşlik etmek için sabırsızlanıyorum.
          </p>

          <a
            href="/appointment"
            className="inline-block mt-4 bg-[#048A81] hover:bg-[#037368] text-white font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            Randevu Al
          </a>
        </div>
      </div>
    </section>
  )
}
