
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Download, Send, Clock, Globe, Quote } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
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
    { icon: Clock, label: "Availability", value: "Available for opportunities", link: "#" }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/skills-beep" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/bishal-sharma-12b7211b6/" },
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/bishal_sharma111/?hl=en" },
    { icon: Globe, label: "Portfolio", url: "#" }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="w-24 h-[2px] bg-white/20 mx-auto mb-6"></div>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white/[0.03] backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 group">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Let's Connect</CardTitle>
                <CardDescription className="text-white/40">Reach out through any channel</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 group/item hover:scale-[1.02]">
                      <div className="p-2 rounded-lg bg-white/10 text-white/60 group-hover/item:text-white group-hover/item:bg-white/15 transition-all duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white/30">{info.label}</p>
                        <a href={info.link} className="text-white/80 font-medium hover:text-white transition-colors">{info.value}</a>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="bg-white/[0.03] backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all duration-500 hover:scale-110 border border-white/10 hover:border-white/20"
                        aria-label={social.label}
                      >
                        <IconComponent className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/[0.05] border-white/15 backdrop-blur-xl hover:scale-105 transition-all duration-700">
              <CardContent className="pt-6">
                <Button 
                  className="w-full bg-white text-black hover:bg-white/90 font-semibold transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] group border-0"
                  onClick={() => window.open("https://drive.google.com/file/d/1jnTVqiNuBN51vE7mCBi6TuBGDwRzvXVO/view?usp=drive_link", "_blank")}
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-white/[0.03] backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-[1.01]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Send Me a Message</CardTitle>
                <CardDescription className="text-white/40">
                  Have a project in mind? Let's discuss how we can work together.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white/70">Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your full name" className="bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20 transition-all duration-300" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white/70">Email</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" className="bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20 transition-all duration-300" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white/70">Subject</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="What's this about?" className="bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20 transition-all duration-300" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white/70">Message</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project..." className="bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20 min-h-[120px] resize-none transition-all duration-300" required />
                  </div>
                  
                  <Button type="submit" className="w-full bg-white text-black hover:bg-white/90 font-semibold py-3 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] group border-0">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10">
            <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse"></div>
            <span className="text-sm text-white/40">Available for new opportunities</span>
            <div className="w-2 h-2 rounded-full bg-white/30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>

        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-white/[0.03] backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105">
            <CardContent className="pt-8 pb-8">
              <div className="flex flex-col items-center space-y-4">
                <Quote className="h-8 w-8 text-white/20" />
                <blockquote className="text-lg sm:text-xl italic text-center text-white/50 leading-relaxed max-w-3xl">
                  "Success is not final, failure is not fatal: it is the courage to continue that counts. 
                  In the pursuit of Gross National Happiness, we must embrace innovation while preserving our values."
                </blockquote>
                <cite className="text-sm text-white/30 font-medium">
                  — His Majesty Jigme Khesar Namgyel Wangchuck, King of Bhutan
                </cite>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
