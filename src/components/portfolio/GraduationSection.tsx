
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { GraduationCap, BookOpen, Users, Trophy, Target, Heart } from "lucide-react";

export function GraduationSection() {
  const graduationImages = [
    {
      src: "/lovable-uploads/a83192a6-702d-4d19-ad6a-253948350ae9.png",
      alt: "Graduation at Chandigarh University - TOP 2% Universities Worldwide",
      caption: "Ranked among TOP 2% Universities Worldwide"
    },
    {
      src: "/lovable-uploads/fd5e6b3e-79d4-442c-969c-399347add64d.png",
      alt: "Graduation Ceremony at Chandigarh University",
      caption: "Graduation Ceremony - June 28, 2025"
    },
    {
      src: "/lovable-uploads/6bc20c1b-d470-47ef-98fc-ca61b29ef4f0.png",
      alt: "Graduation Day with flowers and certificate",
      caption: "A moment of achievement and gratitude"
    },
    {
      src: "/lovable-uploads/f21ea6f0-e3e7-4cee-9186-4c821af7276c.png",
      alt: "Speaking at Graduation Ceremony",
      caption: "Delivering graduation speech"
    },
    {
      src: "/lovable-uploads/af9bbb9c-8aa9-43e4-ad50-6c8accb6778e.png",
      alt: "Final graduation moment",
      caption: "The culmination of 3 years of hard work"
    }
  ];

  const learnings = [
    {
      icon: BookOpen,
      title: "Technical Excellence",
      description: "Mastered programming languages, algorithms, and software development principles that form the foundation of modern technology.",
      color: "text-blue-500 dark:text-blue-400"
    },
    {
      icon: Users,
      title: "Collaborative Growth",
      description: "Learned the power of teamwork through group projects, understanding that the best solutions emerge from diverse perspectives.",
      color: "text-emerald-500 dark:text-emerald-400"
    },
    {
      icon: Target,
      title: "Problem-Solving Mindset",
      description: "Developed analytical thinking and systematic approaches to break down complex problems into manageable solutions.",
      color: "text-violet-500 dark:text-violet-400"
    },
    {
      icon: Trophy,
      title: "Perseverance & Resilience",
      description: "Overcame countless debugging sessions and project challenges, building mental resilience and determination.",
      color: "text-amber-500 dark:text-amber-400"
    },
    {
      icon: Heart,
      title: "Passion for Innovation",
      description: "Discovered my love for creating technology that can make a positive impact on people's lives and solve real-world problems.",
      color: "text-rose-500 dark:text-rose-400"
    }
  ];

  return (
    <section id="graduation" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-slate-900/40 dark:via-background dark:to-slate-800/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-amber-200/50 to-orange-300/50 dark:from-amber-500/30 dark:to-orange-600/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-violet-200/40 to-purple-300/50 dark:from-violet-500/20 dark:to-purple-600/30 rounded-full blur-3xl animate-float-slow-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-amber-600 dark:text-amber-400" />
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 dark:from-amber-400 dark:via-orange-500 dark:to-rose-400 bg-clip-text text-transparent">
              My Graduation Journey
            </h2>
            <GraduationCap className="w-8 h-8 text-amber-600 dark:text-amber-400" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 dark:from-amber-500 dark:via-orange-500 dark:to-rose-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-700 dark:text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Three transformative years at Chandigarh University, where I not only earned my Computer Science degree 
            but also discovered my passion for technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Graduation Photos Carousel */}
          <div className="order-2 lg:order-1">
            <Card className="bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl border-slate-200/80 dark:border-slate-700/50 hover:border-amber-400/60 dark:hover:border-amber-500/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800 dark:text-card-foreground flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  Graduation Moments
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-muted-foreground">
                  Celebrating the completion of my Computer Science journey at Chandigarh University
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full">
                  <CarouselContent>
                    {graduationImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative group">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute bottom-4 left-4 right-4">
                              <p className="text-white text-sm font-medium drop-shadow-lg">{image.caption}</p>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-white/90 dark:bg-slate-800/90 border-slate-300 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-700" />
                  <CarouselNext className="right-2 bg-white/90 dark:bg-slate-800/90 border-slate-300 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-700" />
                </Carousel>
              </CardContent>
            </Card>
          </div>

          {/* What I Learned */}
          <div className="order-1 lg:order-2 space-y-6">
            <Card className="bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl border-slate-200/80 dark:border-slate-700/50 hover:border-violet-400/60 dark:hover:border-violet-500/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800 dark:text-card-foreground flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                  What I Learned in 3 Years
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-muted-foreground">
                  Beyond coding - the life lessons that shaped me as a developer and individual
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {learnings.map((learning, index) => {
                  const IconComponent = learning.icon;
                  return (
                    <div key={index} className="flex gap-4 p-4 rounded-lg bg-slate-50/80 dark:bg-slate-800/30 hover:bg-slate-100/80 dark:hover:bg-slate-700/40 border border-slate-200/50 dark:border-slate-700/50 hover:border-slate-300/80 dark:hover:border-slate-600/60 transition-all duration-500 group hover:scale-105 hover:shadow-lg hover:shadow-violet-500/10">
                      <div className={`p-3 rounded-lg bg-slate-100 dark:bg-slate-800/50 ${learning.color} group-hover:scale-110 transition-all duration-500 group-hover:rotate-6 flex-shrink-0 border border-slate-200/50 dark:border-slate-700/50`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-slate-800 dark:text-card-foreground mb-2 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors duration-500">
                          {learning.title}
                        </h4>
                        <p className="text-slate-600 dark:text-muted-foreground text-sm leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                          {learning.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Achievement Highlight */}
            <Card className="bg-gradient-to-br from-amber-100/80 via-orange-50/90 to-rose-100/80 dark:from-amber-500/20 dark:via-orange-500/20 dark:to-rose-500/20 border-amber-300/60 dark:border-amber-500/40 backdrop-blur-xl hover:scale-105 transition-all duration-700 hover:shadow-2xl hover:shadow-amber-500/30 shadow-lg">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-200/80 dark:bg-amber-500/20 border border-amber-400/60 dark:border-amber-500/40 mb-4">
                    <Trophy className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                    <span className="text-sm font-medium text-amber-800 dark:text-amber-300">University Achievement</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-card-foreground mb-2">
                    Graduated from Top 2% Universities Worldwide
                  </h3>
                  <p className="text-slate-600 dark:text-muted-foreground text-sm">
                    Chandigarh University - Global Rank #575 (QS World University Rankings 2026)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Closing Quote */}
        <div className="text-center mt-16">
          <Card className="max-w-4xl mx-auto bg-white/70 dark:bg-gradient-to-br dark:from-slate-900/60 dark:via-slate-800/40 dark:to-slate-900/60 backdrop-blur-xl border-slate-200/80 dark:border-slate-700/50 hover:border-violet-400/60 dark:hover:border-violet-500/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20 shadow-lg">
            <CardContent className="pt-8 pb-8">
              <blockquote className="text-lg sm:text-xl italic text-center text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                "These three years taught me that learning never stops. Every challenge was a stepping stone, 
                every project a lesson, and every failure a foundation for future success. 
                The journey from a curious student to a passionate developer has just begun."
              </blockquote>
              <cite className="text-sm text-violet-600 dark:text-violet-400 font-medium mt-4 block">
                — Reflecting on my Computer Science Journey
              </cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
