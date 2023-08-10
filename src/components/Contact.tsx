function Contact() {
  return (
    <div>
      <h1 className="text-2xl font-medium text-center mb-6">Contact me</h1>
      <form className="flex flex-col space-y-5 max-w-screen-lg border mx-auto px-5 md:px-10 py-5 rounded-xl bg-zinc-800">
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
