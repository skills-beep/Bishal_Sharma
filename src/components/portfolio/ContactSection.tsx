
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram,
  Download,
  Send,
  Clock,
  Globe,
  Quote
} from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bishalsharma153@gmail.com",
      link: "mailto:bishalsharma153@gmail.com",
      color: "text-rose-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+975 77849068",
      link: "tel:+97577849068",
      color: "text-emerald-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Thimphu, Bhutan",
      link: "#",
      color: "text-sky-400"
    },
    {
      icon: Clock,
      label: "Availability",
      value: "Available for opportunities",
      link: "#",
      color: "text-violet-400"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/yourusername",
      color: "hover:text-slate-300 hover:bg-slate-800/20"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      url: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-300 hover:bg-blue-500/20"
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/bishal_sharma111/?hl=en",
      color: "hover:text-pink-300 hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-purple-500/20"
    },
    {
      icon: Globe,
      label: "Portfolio",
      url: "#",
      color: "hover:text-cyan-300 hover:bg-cyan-500/20"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900/40 via-background to-slate-800/20 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-violet-500/30 to-purple-600/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-rose-500/20 to-pink-600/30 rounded-full blur-3xl animate-float-slow-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-sky-500/10 to-indigo-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 transform transition-all duration-1000 hover:scale-105">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-purple-500 to-rose-400 bg-clip-text text-transparent animate-fade-in">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-rose-500 mx-auto rounded-full mb-6 animate-scale-in"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-left transition-all duration-700 hover:text-slate-300">
            Ready to bring your next project to life? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 animate-slide-in-left">
            <Card className="bg-slate-900/40 backdrop-blur-xl border-slate-700/50 hover:border-violet-500/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20 group">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-card-foreground group-hover:text-violet-300 transition-colors duration-500">Let's Connect</CardTitle>
                <CardDescription className="text-muted-foreground transition-colors duration-500 group-hover:text-slate-300">
                  Feel free to reach out through any of the following channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-700/40 transition-all duration-500 group hover:scale-105 hover:shadow-lg hover:shadow-violet-500/10">
                      <div className={`p-2 rounded-lg bg-slate-800/50 ${info.color} group-hover:scale-110 transition-all duration-500 group-hover:rotate-6`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-slate-300">{info.label}</p>
                        <a 
                          href={info.link}
                          className="text-card-foreground font-medium hover:text-violet-300 transition-colors duration-500"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-slate-900/40 backdrop-blur-xl border-slate-700/50 hover:border-violet-500/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-card-foreground">Follow Me</CardTitle>
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
                        className={`p-3 rounded-lg bg-slate-800/40 text-muted-foreground ${social.color} transition-all duration-500 hover:scale-125 hover:rotate-12 hover:shadow-lg transform border border-slate-700/50 hover:border-violet-500/30`}
                        aria-label={social.label}
                      >
                        <IconComponent className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Resume Download */}
            <Card className="bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-rose-500/20 border-violet-500/40 backdrop-blur-xl hover:scale-105 transition-all duration-700 hover:shadow-2xl hover:shadow-violet-500/30">
              <CardContent className="pt-6">
                <Button 
                  className="w-full bg-gradient-to-r from-violet-600 via-purple-600 to-rose-600 hover:from-violet-700 hover:via-purple-700 hover:to-rose-700 text-white font-semibold transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30 group border-0"
                  onClick={() => window.open("https://drive.google.com/file/d/1jnTVqiNuBN51vE7mCBi6TuBGDwRzvXVO/view?usp=drive_link", "_blank")}
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-in-right">
            <Card className="bg-slate-900/40 backdrop-blur-xl border-slate-700/50 hover:border-violet-500/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-card-foreground">Send Me a Message</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2 transform transition-all duration-500 hover:scale-105">
                      <Label htmlFor="name" className="text-card-foreground">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="bg-slate-800/30 border-slate-600/50 focus:border-violet-400 transition-all duration-500 hover:shadow-lg focus:shadow-lg focus:shadow-violet-400/20 hover:bg-slate-700/30"
                        required
                      />
                    </div>
                    <div className="space-y-2 transform transition-all duration-500 hover:scale-105">
                      <Label htmlFor="email" className="text-card-foreground">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="bg-slate-800/30 border-slate-600/50 focus:border-violet-400 transition-all duration-500 hover:shadow-lg focus:shadow-lg focus:shadow-violet-400/20 hover:bg-slate-700/30"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 transform transition-all duration-500 hover:scale-105">
                    <Label htmlFor="subject" className="text-card-foreground">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="bg-slate-800/30 border-slate-600/50 focus:border-violet-400 transition-all duration-500 hover:shadow-lg focus:shadow-lg focus:shadow-violet-400/20 hover:bg-slate-700/30"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 transform transition-all duration-500 hover:scale-105">
                    <Label htmlFor="message" className="text-card-foreground">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, timeline, and how I can help..."
                      className="bg-slate-800/30 border-slate-600/50 focus:border-violet-400 transition-all duration-500 min-h-[120px] resize-none hover:shadow-lg focus:shadow-lg focus:shadow-violet-400/20 hover:bg-slate-700/30"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-violet-600 via-purple-600 to-rose-600 hover:from-violet-700 hover:via-purple-700 hover:to-rose-700 text-white font-semibold py-3 transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30 group border-0"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-500" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in mb-12">
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-lg hover:shadow-violet-500/20 hover:border-violet-500/40">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Available for new opportunities</span>
            <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>

        {/* Quote from His Majesty */}
        <div className="text-center animate-fade-in">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60 backdrop-blur-xl border-slate-700/50 hover:border-violet-500/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20">
            <CardContent className="pt-8 pb-8">
              <div className="flex flex-col items-center space-y-4">
                <Quote className="h-8 w-8 text-violet-400 opacity-70" />
                <blockquote className="text-lg sm:text-xl italic text-center text-slate-300 leading-relaxed max-w-3xl">
                  "Success is not final, failure is not fatal: it is the courage to continue that counts. 
                  In the pursuit of Gross National Happiness, we must embrace innovation while preserving our values."
                </blockquote>
                <cite className="text-sm text-violet-400 font-medium">
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
