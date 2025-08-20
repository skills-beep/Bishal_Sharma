
import { Building2, Calendar, MapPin, Award } from "lucide-react";

export function WorkExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/20 dark:bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 dark:bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 dark:from-amber-400 dark:via-orange-500 dark:to-red-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 dark:bg-slate-800/40 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500">
            
            {/* Company Header */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 p-4 flex items-center justify-center shadow-lg">
                <img
                  src="/lovable-uploads/0d7c315e-a2fa-48fd-a02d-56ecb130a489.png"
                  alt="Tashi Commercial Corporation"
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  IT Associate Manager
                </h3>
                <p className="text-xl text-amber-600 dark:text-amber-400 font-semibold mb-2">
                  Tashi Commercial Corporation
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-amber-500" />
                    <span>August 15, 2024 - Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-amber-500" />
                    <span>Bhutan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Description */}
            <div className="space-y-6">
              <div className="border-l-4 border-amber-500 pl-6">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-amber-500" />
                  Current Role & Responsibilities
                </h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  As an IT Associate Manager at Tashi Commercial Corporation, I'm responsible for 
                  overseeing IT operations, managing digital infrastructure, and implementing 
                  technology solutions that drive business efficiency and growth.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-orange-500" />
                  About Tashi Commercial Corporation
                </h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Tashi Commercial Corporation is a leading business conglomerate in Bhutan, 
                  known for its diverse portfolio and commitment to innovation. As part of their 
                  IT team, I contribute to the digital transformation initiatives that support 
                  the company's various business operations and strategic objectives.
                </p>
              </div>

              {/* Key Achievements */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 mt-6">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Key Focus Areas
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    IT Infrastructure Management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    Digital Transformation Initiatives
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    Technology Strategy & Planning
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    Team Leadership & Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
