import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
  }
  
  return (
    <div>
      <h1 className="text-2xl font-medium text-center mb-6">Contact me</h1>
      <form ref={form} onSubmit={handleSubmit} className="flex flex-col space-y-5 max-w-screen-lg border mx-auto px-5 md:px-10 py-5 rounded-xl bg-zinc-800">
        <label className="flex flex-col">
          Name
          <input
            type="text"
            name="name"
            required
            className="text-black px-2 py-2 rounded-sm"
          />
        </label>
        <label className="flex flex-col">
          Email
          <input
            type="email"
            name="email"
            required
            className="text-black px-2 py-2 rounded-sm"
          />
        </label>
        <label className="flex flex-col">
          Subject
          <input
            type="text"
            name="subject"
            required
            className="text-black px-2 py-2 rounded-sm"
          />
        </label>
        <label className="flex flex-col">
          Message
          <textarea
            name="message"
            rows={5}
            required
            className="text-black px-2 py-2 rounded-sm"
          />
        </label>
        <button type="submit" className="rounded-md py-3 bg-orange-500">
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
