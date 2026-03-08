
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Download, Send, Clock, Globe, Quote } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ContactSection() {
  const { ref, isInView } = useScrollAnimation(0.1);
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
    { icon: Phone, label: "Phone", value: "+975 17658134", link: "tel:+97517658134" },
    { icon: MapPin, label: "Location", value: "Thimphu, Bhutan", link: "#" },
    { icon: Clock, label: "Status", value: "Available for opportunities", link: "#" }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/skills-beep" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/bishal-sharma-12b7211b6/" },
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/bishal_sharma111/?hl=en" },
    { icon: Globe, label: "Portfolio", url: "#" }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4 block">Connect</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Get In Touch</h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-neutral-600 to-neutral-400 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-5"
          >
            <Card className="bg-gradient-to-b from-neutral-900/70 to-neutral-950/40 backdrop-blur-xl border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-500 group">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Let's Connect</CardTitle>
                <CardDescription className="text-neutral-500">Reach out anytime</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-neutral-800/20 hover:bg-neutral-800/40 border border-neutral-800/30 hover:border-neutral-700/40 transition-all duration-300 group/item"
                    >
                      <div className="p-2 rounded-lg bg-neutral-800/60 border border-neutral-700/30 group-hover/item:scale-110 transition-transform">
                        <Icon className="w-4 h-4 text-neutral-500 group-hover/item:text-white transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-neutral-600">{info.label}</p>
                        <a href={info.link} className="text-sm text-neutral-300 hover:text-white transition-colors truncate block">{info.value}</a>
                      </div>
                    </motion.div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-neutral-900/70 to-neutral-950/40 border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-white">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  {socialLinks.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <motion.a
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.08, type: "spring" }}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-neutral-800/30 text-neutral-500 hover:text-white hover:bg-neutral-800/60 transition-all duration-300 hover:scale-110 border border-neutral-800/40 hover:border-neutral-700/50"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-neutral-800/40 to-neutral-900/30 border-neutral-700/40 hover:border-neutral-600/50 transition-all duration-500">
                <CardContent className="pt-5 pb-5">
                  <Button 
                    className="w-full bg-white text-black hover:bg-neutral-200 font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] group border-0"
                    onClick={() => window.open("https://drive.google.com/file/d/1jnTVqiNuBN51vE7mCBi6TuBGDwRzvXVO/view?usp=drive_link", "_blank")}
                  >
                    <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" /> Download Resume
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="bg-gradient-to-b from-neutral-900/70 to-neutral-950/40 backdrop-blur-xl border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Send a Message</CardTitle>
                <CardDescription className="text-neutral-500">I'd love to hear about your project</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-neutral-400 text-sm">Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" className="bg-neutral-800/30 border-neutral-700/40 focus:border-neutral-500 text-white placeholder:text-neutral-600 transition-all duration-300 rounded-xl" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-neutral-400 text-sm">Email</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" className="bg-neutral-800/30 border-neutral-700/40 focus:border-neutral-500 text-white placeholder:text-neutral-600 transition-all duration-300 rounded-xl" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-neutral-400 text-sm">Subject</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="What's this about?" className="bg-neutral-800/30 border-neutral-700/40 focus:border-neutral-500 text-white placeholder:text-neutral-600 transition-all duration-300 rounded-xl" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-neutral-400 text-sm">Message</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project..." className="bg-neutral-800/30 border-neutral-700/40 focus:border-neutral-500 text-white placeholder:text-neutral-600 min-h-[120px] resize-none transition-all duration-300 rounded-xl" required />
                  </div>
                  <Button type="submit" className="w-full bg-white text-black hover:bg-neutral-200 font-semibold py-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] group border-0">
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto relative group">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-neutral-700/20 via-neutral-600/30 to-neutral-700/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative bg-gradient-to-b from-neutral-900/60 to-neutral-950/40 backdrop-blur-xl p-8 rounded-2xl border border-neutral-800/50">
              <Quote className="h-6 w-6 text-neutral-700 mx-auto mb-4" />
              <blockquote className="text-base italic text-neutral-400 leading-relaxed">
                "Success is not final, failure is not fatal: it is the courage to continue that counts."
              </blockquote>
              <cite className="text-xs text-neutral-600 mt-4 block">— His Majesty Jigme Khesar Namgyel Wangchuck</cite>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
