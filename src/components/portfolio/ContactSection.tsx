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
  Globe
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
      value: "wangchukgurung15@gmail.com",
      link: "mailto:wangchukgurung15@gmail.com",
      color: "text-red-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+975 77849068",
      link: "tel:+97577849068",
      color: "text-green-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Thimphu, Bhutan",
      link: "#",
      color: "text-blue-400"
    },
    {
      icon: Clock,
      label: "Availability",
      value: "Available for opportunities",
      link: "#",
      color: "text-purple-400"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/yourusername",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      url: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-400"
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://instagram.com/yourprofile",
      color: "hover:text-pink-400"
    },
    {
      icon: Globe,
      label: "Portfolio",
      url: "#",
      color: "hover:text-cyan-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/20 via-background to-muted/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-slow-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 transform transition-all duration-700 hover:scale-105">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6 animate-scale-in"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-left">
            Ready to bring your next project to life? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 animate-slide-in-left">
            <Card className="bg-card/60 backdrop-blur-xl border-border/50 hover:border-purple-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-card-foreground group-hover:text-purple-400 transition-colors duration-300">Let's Connect</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Feel free to reach out through any of the following channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-all duration-300 group hover:scale-105 hover:shadow-lg">
                      <div className={`p-2 rounded-lg bg-muted ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <a 
                          href={info.link}
                          className="text-card-foreground font-medium hover:text-purple-400 transition-colors duration-300"
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
            <Card className="bg-card/60 backdrop-blur-xl border-border/50 hover:border-purple-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
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
                        className={`p-3 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground ${social.color} transition-all duration-300 hover:scale-125 hover:rotate-6 hover:shadow-lg transform`}
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
            <Card className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/30 backdrop-blur-xl hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
              <CardContent className="pt-6">
                <Button 
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg group"
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
            <Card className="bg-card/60 backdrop-blur-xl border-border/50 hover:border-purple-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-card-foreground">Send Me a Message</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2 transform transition-all duration-300 hover:scale-105">
                      <Label htmlFor="name" className="text-card-foreground">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="bg-muted/20 border-border focus:border-purple-400 transition-all duration-300 hover:shadow-lg focus:shadow-lg focus:shadow-purple-400/20"
                        required
                      />
                    </div>
                    <div className="space-y-2 transform transition-all duration-300 hover:scale-105">
                      <Label htmlFor="email" className="text-card-foreground">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="bg-muted/20 border-border focus:border-purple-400 transition-all duration-300 hover:shadow-lg focus:shadow-lg focus:shadow-purple-400/20"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 transform transition-all duration-300 hover:scale-105">
                    <Label htmlFor="subject" className="text-card-foreground">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="bg-muted/20 border-border focus:border-purple-400 transition-all duration-300 hover:shadow-lg focus:shadow-lg focus:shadow-purple-400/20"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 transform transition-all duration-300 hover:scale-105">
                    <Label htmlFor="message" className="text-card-foreground">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, timeline, and how I can help..."
                      className="bg-muted/20 border-border focus:border-purple-400 transition-all duration-300 min-h-[120px] resize-none hover:shadow-lg focus:shadow-lg focus:shadow-purple-400/20"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-muted/20 border border-border backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Available for new opportunities</span>
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
