"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2, XCircle } from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [botField, setBotField] = useState(""); // honeypot field

  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [shake, setShake] = useState(false); // validation animation

  const validateFields = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Bot protection – invisible field
    if (botField !== "") {
      console.log("Bot detected");
      return;
    }

    if (!validateFields()) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
      return;
    }

    setStatus("loading");
console.log("name, email, message ",name, email, message )
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => setStatus("idle"), 3000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-20 py-24"
    >
      {/* Title */}
      <motion.h2
        className="text-5xl font-extrabold mb-16 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
          Let’s Connect
        </span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Have an idea or project in mind? Let’s collaborate and build
            something extraordinary together.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="text-purple-400" />
              <span>syedibrahim5436@email.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-purple-400" />
              <span>+92 3102180747</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-purple-400" />
              <span>Karachi, Pakistan</span>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-lg space-y-6 border border-white/10 ${
            shake ? "animate-[shake_0.3s]" : ""
          }`}
        >
          {/* Honeypot Bot Field (hidden) */}
          <input
            type="text"
            value={botField}
            onChange={(e) => setBotField(e.target.value)}
            className="hidden"
          />

          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: status === "loading" ? 1 : 1.05 }}
            whileTap={{ scale: status === "loading" ? 1 : 0.95 }}
            disabled={
              status === "loading" ||
              !name.trim() ||
              !email.trim() ||
              !message.trim()
            }
            className={`w-full px-6 py-3 rounded-lg font-semibold shadow-lg hover:cursor-pointer
              ${
                status === "loading"
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 "
              }`}
          >
            {status === "loading" ? "Sending..." : "🚀 Send Message"}
          </motion.button>
        </motion.form>
      </div>

      {/* SUCCESS TOAST */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-10 right-10 bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg flex items-center space-x-3 z-50"
          >
            <CheckCircle2 size={24} />
            <span>Message sent successfully!</span>
          </motion.div>
        )}

        {/* ERROR TOAST */}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-10 right-10 bg-red-600 text-white px-6 py-4 rounded-xl shadow-lg flex items-center space-x-3 z-50"
          >
            <XCircle size={24} />
            <span>Something went wrong. Try again.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
