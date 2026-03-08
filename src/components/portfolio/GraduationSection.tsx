
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { GraduationCap, BookOpen, Users, Trophy, Target, Heart } from "lucide-react";

export function GraduationSection() {
  const graduationImages = [
    { src: "/lovable-uploads/a83192a6-702d-4d19-ad6a-253948350ae9.png", alt: "Graduation at Chandigarh University", caption: "Ranked among TOP 2% Universities Worldwide" },
    { src: "/lovable-uploads/fd5e6b3e-79d4-442c-969c-399347add64d.png", alt: "Graduation Ceremony", caption: "Graduation Ceremony - June 28, 2025" },
    { src: "/lovable-uploads/6bc20c1b-d470-47ef-98fc-ca61b29ef4f0.png", alt: "Graduation Day", caption: "A moment of achievement and gratitude" },
    { src: "/lovable-uploads/f21ea6f0-e3e7-4cee-9186-4c821af7276c.png", alt: "Speaking at Ceremony", caption: "Delivering graduation speech" },
    { src: "/lovable-uploads/af9bbb9c-8aa9-43e4-ad50-6c8accb6778e.png", alt: "Final moment", caption: "The culmination of 3 years of hard work" }
  ];

  const learnings = [
    { icon: BookOpen, title: "Technical Excellence", description: "Mastered programming languages, algorithms, and software development principles." },
    { icon: Users, title: "Collaborative Growth", description: "Learned the power of teamwork through group projects and diverse perspectives." },
    { icon: Target, title: "Problem-Solving Mindset", description: "Developed analytical thinking and systematic approaches to complex problems." },
    { icon: Trophy, title: "Perseverance & Resilience", description: "Overcame countless challenges, building mental resilience and determination." },
    { icon: Heart, title: "Passion for Innovation", description: "Discovered my love for creating technology that makes a positive impact." }
  ];

  return (
    <section id="graduation" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-white/60" />
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              My Graduation Journey
            </h2>
            <GraduationCap className="w-8 h-8 text-white/60" />
          </div>
          <div className="w-24 h-[2px] bg-white/20 mx-auto mb-6"></div>
          <p className="text-lg text-white/40 max-w-3xl mx-auto leading-relaxed">
            Three transformative years at Chandigarh University, where I earned my Computer Science degree 
            and discovered my passion for technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Carousel */}
          <div className="order-2 lg:order-1">
            <Card className="bg-white/[0.03] backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-white/60" />
                  Graduation Moments
                </CardTitle>
                <CardDescription className="text-white/40">
                  Celebrating the completion of my Computer Science journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full">
                  <CarouselContent>
                    {graduationImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative group">
                          <img src={image.src} alt={image.alt} className="w-full h-80 object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute bottom-4 left-4 right-4">
                              <p className="text-white text-sm font-medium">{image.caption}</p>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-black/80 border-white/20 text-white hover:bg-black hover:text-white" />
                  <CarouselNext className="right-2 bg-black/80 border-white/20 text-white hover:bg-black hover:text-white" />
                </Carousel>
              </CardContent>
            </Card>
          </div>

          {/* Learnings */}
          <div className="order-1 lg:order-2 space-y-6">
            <Card className="bg-white/[0.03] backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-white/60" />
                  What I Learned in 3 Years
                </CardTitle>
                <CardDescription className="text-white/40">
                  Beyond coding - the life lessons that shaped me
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {learnings.map((learning, index) => {
                  const IconComponent = learning.icon;
                  return (
                    <div key={index} className="flex gap-4 p-4 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/15 transition-all duration-500 group hover:scale-[1.02]">
                      <div className="p-3 rounded-lg bg-white/10 text-white/60 group-hover:text-white group-hover:scale-110 group-hover:bg-white/15 transition-all duration-500 flex-shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-white transition-colors">{learning.title}</h4>
                        <p className="text-white/30 text-sm leading-relaxed group-hover:text-white/50 transition-colors">{learning.description}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="bg-white/[0.05] border-white/15 backdrop-blur-xl hover:scale-105 transition-all duration-700">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-4">
                    <Trophy className="w-4 h-4 text-white/70" />
                    <span className="text-sm font-medium text-white/70">University Achievement</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Graduated from Top 2% Universities Worldwide</h3>
                  <p className="text-white/40 text-sm">Chandigarh University - Global Rank #575 (QS World University Rankings 2026)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16">
          <Card className="max-w-4xl mx-auto bg-white/[0.03] backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105">
            <CardContent className="pt-8 pb-8">
              <blockquote className="text-lg sm:text-xl italic text-center text-white/50 leading-relaxed font-medium">
                "These three years taught me that learning never stops. Every challenge was a stepping stone, 
                every project a lesson, and every failure a foundation for future success."
              </blockquote>
              <cite className="text-sm text-white/30 font-medium mt-4 block">
                — Reflecting on my Computer Science Journey
              </cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
