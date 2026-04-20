
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Download, Send, Clock, Globe, Quote } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ContactSection() {
  const { ref, isInView } = useScrollAnimation(0.05);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "bishalsharma153@gmail.com", link: "mailto:bishalsharma153@gmail.com" },
    { icon: Phone, label: "Phone", value: "+975 77905211", link: "tel:+97577905211" },
    { icon: MapPin, label: "Location", value: "Thimphu, Bhutan", link: "#" },
    { icon: Clock, label: "Status", value: "Available for opportunities", link: "#" }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/skills-beep" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/bishal-sharma-12b7211b6/" },
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/bishal_sharma111/?hl=en" },
    { icon: Globe, label: "Portfolio", url: "#" }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } }
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient glow — richer */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-teal-400/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm mb-6">
            <Mail className="w-4 h-4 text-emerald-400" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-emerald-300/80 font-medium">Connect</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">Get In Touch</h2>
          <p className="text-neutral-300 text-sm mt-4 max-w-md mx-auto">Have a project in mind or want to collaborate? I'd love to hear from you.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left sidebar - contact info */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
            {/* Contact details */}
            <div className="rounded-2xl border border-neutral-700/50 bg-gradient-to-br from-neutral-900/80 to-neutral-950/60 backdrop-blur-sm p-5 space-y-3 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={i}
                    href={info.link}
                    variants={itemVariants}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-800/50 transition-colors duration-300 group/item"
                  >
                    <div className="p-2.5 rounded-lg bg-neutral-800/80 border border-neutral-700/40 group-hover/item:bg-emerald-500/15 group-hover/item:border-emerald-500/40 transition-colors duration-300">
                      <Icon className="w-4 h-4 text-neutral-300 group-hover/item:text-emerald-400 transition-colors duration-300" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-wider text-neutral-400">{info.label}</p>
                      <p className="text-sm text-neutral-100 group-hover/item:text-white transition-colors truncate">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social links */}
            <div className="rounded-2xl border border-neutral-700/50 bg-gradient-to-br from-neutral-900/80 to-neutral-950/60 backdrop-blur-sm p-5 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <p className="text-xs uppercase tracking-wider text-neutral-400 mb-3">Follow</p>
              <div className="flex gap-2">
                {socialLinks.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className="p-3 rounded-xl bg-neutral-800/60 text-neutral-300 hover:text-emerald-300 hover:bg-emerald-500/15 transition-all duration-300 border border-neutral-700/40 hover:border-emerald-500/40"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Resume download */}
            <motion.div variants={itemVariants}>
              <Button
                className="w-full bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-black font-semibold py-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(52,211,153,0.35)] group border-0 rounded-xl"
                onClick={() => window.open("https://drive.google.com/file/d/1jnTVqiNuBN51vE7mCBi6TuBGDwRzvXVO/view?usp=drive_link", "_blank")}
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" /> Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - form */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="rounded-2xl border border-neutral-700/50 bg-gradient-to-br from-neutral-900/80 to-neutral-950/60 backdrop-blur-sm p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
              <p className="text-neutral-400 text-xs mb-6">I'll get back to you as soon as possible.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-neutral-300 text-xs">Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" className="bg-neutral-900/70 border-neutral-700/60 focus:border-emerald-400/60 text-white placeholder:text-neutral-500 transition-all duration-300 rounded-xl h-11" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-neutral-300 text-xs">Email</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" className="bg-neutral-900/70 border-neutral-700/60 focus:border-emerald-400/60 text-white placeholder:text-neutral-500 transition-all duration-300 rounded-xl h-11" required />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="subject" className="text-neutral-300 text-xs">Subject</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="What's this about?" className="bg-neutral-900/70 border-neutral-700/60 focus:border-emerald-400/60 text-white placeholder:text-neutral-500 transition-all duration-300 rounded-xl h-11" required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-neutral-300 text-xs">Message</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project..." className="bg-neutral-900/70 border-neutral-700/60 focus:border-emerald-400/60 text-white placeholder:text-neutral-500 min-h-[130px] resize-none transition-all duration-300 rounded-xl" required />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-black font-semibold py-5 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_8px_30px_rgba(52,211,153,0.35)] group border-0 rounded-xl">
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" /> Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <div className="max-w-2xl mx-auto px-8 py-6 rounded-2xl border border-neutral-700/40 bg-gradient-to-br from-neutral-900/60 to-neutral-950/40 backdrop-blur-sm">
            <Quote className="h-5 w-5 text-emerald-400/60 mx-auto mb-3" />
            <blockquote className="text-sm italic text-neutral-200 leading-relaxed">
              "Success is not final, failure is not fatal: it is the courage to continue that counts."
            </blockquote>
            <cite className="text-[11px] text-emerald-400/70 mt-3 block tracking-wide">— His Majesty Jigme Khesar Namgyel Wangchuck</cite>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
