
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">bishalsharma153@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">+975 17658134</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">Samtse, Bhutan</span>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <Input
                placeholder="Your Name"
                className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
