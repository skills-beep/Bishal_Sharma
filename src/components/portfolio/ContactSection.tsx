
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Calendar, Globe } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, and creative collaborations. 
                Whether you're looking for a dedicated developer, have a project in mind, or just want to connect, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="group flex items-center gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-purple-400/30 transition-all duration-300 hover:scale-[1.02]">
                <div className="p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg border border-purple-500/20">
                  <Mail className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <span className="text-foreground font-medium">bishalsharma153@gmail.com</span>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-blue-400/30 transition-all duration-300 hover:scale-[1.02]">
                <div className="p-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-500/20">
                  <Phone className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <span className="text-foreground font-medium">+975 17658134</span>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-green-400/30 transition-all duration-300 hover:scale-[1.02]">
                <div className="p-3 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-lg border border-green-500/20">
                  <MapPin className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <span className="text-foreground font-medium">Samtse, Bhutan</span>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-cyan-400/30 transition-all duration-300 hover:scale-[1.02]">
                <div className="p-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                  <Globe className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Availability</p>
                  <span className="text-foreground font-medium">Open for opportunities</span>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-yellow-400/30 transition-all duration-300 hover:scale-[1.02]">
                <div className="p-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20">
                  <Calendar className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Response Time</p>
                  <span className="text-foreground font-medium">Within 24 hours</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 rounded-xl border border-purple-500/20">
              <h4 className="text-lg font-semibold text-foreground mb-3">Why Choose Me?</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Dedicated to delivering quality solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Strong academic background (CGPA: 8.6)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Always learning and adapting to new technologies</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-card/60 backdrop-blur-xl p-8 rounded-3xl border border-border/50 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input
                      placeholder="Your first name"
                      className="bg-muted/50 border-border/50 text-foreground placeholder-muted-foreground focus:border-purple-400/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input
                      placeholder="Your last name"
                      className="bg-muted/50 border-border/50 text-foreground placeholder-muted-foreground focus:border-purple-400/50 transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-muted/50 border-border/50 text-foreground placeholder-muted-foreground focus:border-purple-400/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    placeholder="What's this about?"
                    className="bg-muted/50 border-border/50 text-foreground placeholder-muted-foreground focus:border-purple-400/50 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project or how I can help you..."
                    rows={5}
                    className="bg-muted/50 border-border/50 text-foreground placeholder-muted-foreground focus:border-purple-400/50 transition-colors resize-none"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium py-3 transition-all duration-300 group">
                  <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
