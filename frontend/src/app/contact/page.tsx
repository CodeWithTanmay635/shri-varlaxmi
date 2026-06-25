"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { submitContactMessage, type ContactApiError } from "@/services/contactApi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await submitContactMessage(formData);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      const apiError = err as ContactApiError;
      setError(apiError.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing again
    if (error) setError(null);
  };

  return (
    <div className="bg-page text-page-primary min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">

        {/* Header Block */}
        <section className="text-center max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold block">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-page-primary font-serif">
            Contact The Showroom
          </h1>
          <p className="text-page-secondary font-light leading-relaxed text-sm md:text-base max-w-xl mx-auto font-sans">
            Reach out directly for custom carving commissions, custom size inquiries, or to coordinate a showroom visit.
          </p>
        </section>

        {/* Layout: Info block & Enquiry Form */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left Block: Business details */}
          <div className="lg:col-span-5 space-y-12 text-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-page-primary font-serif">Shri Varalakshmi</h3>
              <p className="text-xs tracking-wider text-page-muted uppercase font-sans">
                Jewellery &amp; Metals &bull; Kalaburagi Karnataka
              </p>
            </div>

            <div className="space-y-8 font-sans">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <span className="p-3 icon-badge rounded-xl text-accent mt-1 shrink-0">
                  <FiMapPin className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="text-[9px] uppercase tracking-wider text-page-muted font-semibold">Address</h4>
                  <p className="text-sm text-page-primary mt-1.5 leading-relaxed font-light">
                    5677, Super Market, Chakkar Katta,<br />
                    Maktampura, Kalaburagi,<br />
                    Karnataka 585101
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <span className="p-3 icon-badge rounded-xl text-accent mt-1 shrink-0">
                  <FiPhone className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="text-[9px] uppercase tracking-wider text-page-muted font-semibold">Phone Lines</h4>
                  <div className="text-sm text-page-primary mt-1.5 space-y-1 font-light">
                    <a href="tel:+919341874222" className="block hover:text-accent transition-colors">+91 93418 74222</a>
                    <a href="tel:+919740423851" className="block hover:text-accent transition-colors">+91 97404 23851</a>
                    <div className="flex flex-col space-y-1.5 pt-1">
                      <a
                        href="https://wa.me/919341874222"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-emerald-500 hover:text-accent transition-colors"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        <span>WhatsApp (Primary)</span>
                      </a>
                      <a
                        href="https://wa.me/919740423851"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-emerald-500 hover:text-accent transition-colors"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        <span>WhatsApp (Secondary)</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <span className="p-3 icon-badge rounded-xl text-accent mt-1 shrink-0">
                  <FiMail className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="text-[9px] uppercase tracking-wider text-page-muted font-semibold">Email</h4>
                  <p className="text-sm text-page-primary mt-1.5 font-light">
                    <a href="mailto:golekar.srinivas@gmail.com" className="hover:text-accent transition-colors">
                      golekar.srinivas@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <span className="p-3 icon-badge rounded-xl text-accent mt-1 shrink-0">
                  <FiClock className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="text-[9px] uppercase tracking-wider text-page-muted font-semibold">Showroom Hours</h4>
                  <p className="text-sm text-page-primary mt-1.5 font-light">
                    Monday - Saturday: 10:00 AM - 8:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-2xl card-block text-left relative">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 font-sans"
                  >
                    <h3 className="text-xl font-light text-page-primary font-serif">Exhibition Inquiry Form</h3>
                    <p className="text-xs text-page-muted leading-relaxed font-light">
                      Please supply details below. Our showroom managers will review and coordinate within one business day.
                    </p>

                    {/* Error Banner */}
                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex items-start space-x-3 p-4 rounded-xl border border-red-500/20 bg-red-500/5 overflow-hidden"
                        >
                          <FiAlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                          <p className="text-xs text-red-400 leading-relaxed normal-case tracking-normal font-normal">
                            {error}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-widest text-page-secondary">Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-input w-full text-xs"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-widest text-page-secondary">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-input w-full text-xs"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest text-page-secondary">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="form-input w-full text-xs"
                        placeholder="Subject of your inquiry"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest text-page-secondary">Message / Sizing requirements</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-input w-full text-xs resize-none"
                        placeholder="Describe your requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-accent text-black hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <FiSend className="w-3.5 h-3.5" />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-6 font-sans"
                  >
                    <div className="flex justify-center">
                      <span className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full animate-pulse">
                        <FiCheckCircle className="w-10 h-10" />
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-light text-page-primary font-serif">Message Dispatched Successfully</h4>
                      <p className="text-xs text-page-secondary max-w-[280px] mx-auto leading-relaxed font-light">
                        Thank you for contacting Shri Varalakshmi. A showroom supervisor will reach out on your email or phone shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-xl card-block text-xs text-page-primary uppercase tracking-widest font-semibold transition-all hover:text-accent"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}
