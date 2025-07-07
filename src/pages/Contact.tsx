import { FaEnvelope, FaLinkedin, FaInstagram, FaFileAlt } from "react-icons/fa"

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F9FBFB] to-white px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#048A81] mb-4">İletişim</h2>

        <p className="text-center text-gray-700 text-lg mb-10">
          Benimle bağlantı kurmak isterseniz aşağıdaki platformlardan ulaşabilirsiniz. Geri dönüşleri her zaman dikkatle okuyor ve cevaplıyorum 💌
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* İletişim Bilgileri */}
          <div className="space-y-6 text-gray-800 text-lg md:ml-10 md:mt-10">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#048A81] text-2xl" />
              <a href="mailto:ayseyilmaz@psikolog.com" className="hover:underline">
                ayseyilmaz@psikolog.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-[#048A81] text-2xl" />
              <a href="https://linkedin.com/in/ayseyilmaz" target="_blank" className="hover:underline">
                linkedin.com/in/ayseyilmaz
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaFileAlt className="text-[#048A81] text-2xl" />
              <a href="/cv-ayseyilmaz.pdf" target="_blank" className="hover:underline">
                CV Dosyasını Görüntüle
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaInstagram className="text-[#048A81] text-2xl" />
              <a href="https://instagram.com/psk.ayseyilmaz" target="_blank" className="hover:underline">
                @psk.ayseyilmaz
              </a>
            </div>
          </div>

          {/* Harita */}
          <div className="md:mr-10">
            <iframe
              title="Danışmanlık Ofisi Konumu"
              className="w-full h-72 rounded-xl shadow-md border"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.6638356569254!2d28.87196371562827!3d41.005321426310804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba402f7c4ff3%3A0xabc7b983ec9ff5a4!2s%C4%B0stanbul%20K%C3%BClt%C3%BCr%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1620820820820!5m2!1str!2str"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
