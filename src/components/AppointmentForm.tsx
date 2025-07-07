import { useState } from "react"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { db } from "../firebase/firebase"

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    note: ""
  })

  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, "randevular"), {
        ...form,
        status: "pending",
        createdAt: Timestamp.now()
      })
      setSuccess(true)
      setForm({ name: "", email: "", date: "", time: "", note: "" })
    } catch (err) {
      alert("Bir hata oluştu, lütfen tekrar deneyin.")
      console.error(err)
    }
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#048A81]">Randevu Al</h2>

      {success && <p className="text-green-600 text-center mb-4">Randevu başarıyla alındı!</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Ad Soyad"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="E-posta"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="note"
          placeholder="Not (isteğe bağlı)"
          value={form.note}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#048A81] text-white p-2 rounded hover:bg-[#037368]"
        >
          Gönder
        </button>
      </form>
    </div>
  )
}
