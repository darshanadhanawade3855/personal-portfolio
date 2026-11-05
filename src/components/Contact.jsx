import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Copy, Check, Sparkles, ArrowUpRight, MessageSquare, MapPin, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email format';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject';
    if (!formData.message.trim()) errs.message = 'Please enter your message';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable frontend submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Trigger subtle luxury confetti
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#8B5CF6', '#38BDF8', '#10B981', '#6366F1'],
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest text-purple-400 uppercase font-semibold inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20"
          >
            06 — LET'S CONNECT
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Need high-reliability software? <br className="hidden sm:block" />
            <span className="accent-gradient-text">Let's connect.</span>
          </motion.h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal">
            Whether you are hiring for Software Quality Assurance, Test Automation, or Full-Stack roles, I would love to talk through how I can add immediate value to your engineering team.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08] space-y-6"
            >
              <h3 className="font-display text-lg font-bold text-white tracking-tight">
                Direct Contact & Channels
              </h3>

              {/* Email Item */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-zinc-400 uppercase">Email Address</div>
                <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
                  <a
                    href={`mailto:${personalInfo.contactEmail}`}
                    className="text-xs sm:text-sm text-zinc-200 hover:text-purple-300 font-mono truncate transition-colors"
                  >
                    {personalInfo.contactEmail}
                  </a>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-xl text-zinc-400 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] transition-colors shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location Item */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-zinc-400 uppercase">Location</div>
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.07] text-xs sm:text-sm text-zinc-200">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono text-zinc-400 uppercase">Professional Profiles</div>
                
                <div className="space-y-2">
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.07] hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                        <LinkedinIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-purple-200 transition-colors">
                          LinkedIn
                        </div>
                        <div className="text-xs text-zinc-400 font-mono">
                          linkedin.com/in/darshanad3855
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>

                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.07] hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-zinc-200">
                        <GithubIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-purple-200 transition-colors">
                          GitHub
                        </div>
                        <div className="text-xs text-zinc-400 font-mono">
                          github.com/darshanadhanawade3855
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              </div>

              {/* Status Note */}
              <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-xs text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open to Software Quality Assurance, Test Automation, and Full-Stack Engineering roles.</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Glass Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/[0.08] relative overflow-hidden"
            >
              <h3 className="font-display text-xl font-bold text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono text-zinc-300 uppercase">
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Hiring Manager / Recruiter"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-500/80 focus:border-red-400'
                          : 'border-white/[0.1] focus:border-purple-500/80 focus:bg-white/[0.06]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 font-mono mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono text-zinc-300 uppercase">
                      Email Address <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-500/80 focus:border-red-400'
                          : 'border-white/[0.1] focus:border-purple-500/80 focus:bg-white/[0.06]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 font-mono mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-mono text-zinc-300 uppercase">
                    Subject <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="QA Engineering Role / Project Inquiry"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                      errors.subject
                        ? 'border-red-500/80 focus:border-red-400'
                        : 'border-white/[0.1] focus:border-purple-500/80 focus:bg-white/[0.06]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-400 font-mono mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono text-zinc-300 uppercase">
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your team or opportunity..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-red-500/80 focus:border-red-400'
                        : 'border-white/[0.1] focus:border-purple-500/80 focus:bg-white/[0.06]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 font-mono mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 hover:from-purple-500 hover:via-indigo-500 hover:to-sky-500 shadow-[0_0_25px_rgba(139,92,246,0.35)] transition-all duration-300 active:scale-[0.99] disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending message...</span>
                    </div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Success Toast */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-center gap-3"
                    >
                      <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div>
                        <div className="font-semibold text-emerald-200">Thank you for your message!</div>
                        <div className="text-emerald-400/90 text-xs mt-0.5">I will review your message and reply promptly.</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}