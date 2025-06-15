
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Contact Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-foreground">hello@portfolio.dev</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-foreground">+1 (555) 000-0000</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-foreground">Available Worldwide</span>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <Input
                placeholder="Your Name"
                className="bg-muted border-border text-foreground placeholder-muted-foreground"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-muted border-border text-foreground placeholder-muted-foreground"
              />
              <Textarea
                placeholder="Your Message"
                rows={4}
                className="bg-muted border-border text-foreground placeholder-muted-foreground"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
