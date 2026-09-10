import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const FORMSPREE_ENDPOINT = `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_FORM_ID}`;

function Contact() {
  const revealRef = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full bg-[#141311] border border-white/10 rounded-lg px-4 py-2.5 text-base text-gray-200 placeholder-gray-600 focus:outline-none focus:border-orange-500/50";

  return (
    <section id="contact" ref={revealRef} className="mb-28 scroll-mt-24 reveal">
      <h2 className="text-white font-extrabold text-4xl md:text-6xl leading-tight mb-10">
        <span className="text-gray-400">LET'S CONNECT</span>
      </h2>

      {status === "success" && (
        <p className="text-sm text-green-400 mb-4 bg-green-400/10 px-4 py-2 rounded-lg w-fit">
          Thanks! Your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400 mb-4 bg-red-400/10 px-4 py-2 rounded-lg w-fit">
          Something went wrong. Please try again.
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-[#1c1b19] border border-white/5 rounded-2xl p-6 flex flex-col gap-4 max-w-2xl"
      >
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          required
          className={inputClasses}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClasses}
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className={inputClasses}
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="self-center bg-orange-500 hover:bg-orange-600 text-white text-lg font-medium px-10 py-3 rounded-lg transition w-fit disabled:opacity-50"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}

export default Contact;
