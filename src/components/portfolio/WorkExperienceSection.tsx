import { Building2, Calendar, MapPin, Award, Code, Database } from "lucide-react";
import { differenceInMonths, differenceInDays } from "date-fns";

export function WorkExperienceSection() {
  const startDate = new Date(2025, 7, 15); // August 15, 2025
  const endDate = new Date(2026, 1, 7); // February 7, 2026
  
  const totalMonths = differenceInMonths(endDate, startDate);
  const remainingDays = differenceInDays(endDate, startDate) % 30;
  
  return (
    <section id="experience" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/20 dark:bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 dark:bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 dark:from-amber-400 dark:via-orange-500 dark:to-red-400 bg-clip-text text-transparent animate-pulse">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full animate-pulse"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 dark:bg-slate-800/40 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
            
            {/* Company Header */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <div className="relative">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 p-4 flex items-center justify-center shadow-lg hover:rotate-12 transition-transform duration-500 animate-bounce">
                  <img
                    src="/lovable-uploads/0d7c315e-a2fa-48fd-a02d-56ecb130a489.png"
                    alt="Tashi Commercial Corporation"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-400 rounded-full"></div>
              </div>
              
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                  IT Associate Manager
                </h3>
                <p className="text-xl text-amber-600 dark:text-amber-400 font-semibold mb-2 animate-pulse">
                  Tashi Commercial Corporation
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                    <Calendar className="h-4 w-4 text-amber-500" />
                    <span>August 15, 2025 - February 7, 2026</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                    <MapPin className="h-4 w-4 text-amber-500" />
                    <span>Bhutan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Duration */}
            <div className="mb-8 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 dark:from-amber-500/20 dark:via-orange-500/20 dark:to-red-500/20 rounded-2xl p-6 border border-amber-500/30 dark:border-amber-400/30 shadow-lg hover:shadow-amber-500/20 transition-all duration-500">
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg animate-bounce">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total Experience</p>
                  <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
                    {totalMonths} Months{remainingDays > 0 ? `, ${remainingDays} Days` : ""}
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Description */}
            <div className="space-y-6">
              <div className="border-l-4 border-amber-500 pl-6 hover:border-l-8 transition-all duration-300">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-amber-500 animate-spin" />
                  Role & Responsibilities
                </h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  As an IT Associate Manager at Tashi Commercial Corporation, I was responsible for 
                  overseeing IT operations, managing digital infrastructure, and implementing 
                  technology solutions that drive business efficiency and growth. I play a key role 
                  in SAP software development and system optimization.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 hover:border-l-8 transition-all duration-300">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-500 animate-pulse" />
                  SAP Development & Implementation
                </h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  I actively contributed to the development and enhancement of SAP software solutions, 
                  ensuring seamless integration with existing business processes. My role involves 
                  customizing SAP modules, optimizing workflows, and providing technical support 
                  for enterprise resource planning initiatives.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6 hover:border-l-8 transition-all duration-300">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-orange-500 animate-bounce" />
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
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 mt-6 hover:scale-105 transition-transform duration-300">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Database className="h-5 w-5 text-amber-500 animate-spin" />
                  Key Focus Areas
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                    SAP Software Development
                  </li>
                  <li className="flex items-center gap-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-100"></div>
                    IT Infrastructure Management
                  </li>
                  <li className="flex items-center gap-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-200"></div>
                    Digital Transformation Initiatives
                  </li>
                  <li className="flex items-center gap-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-300"></div>
                    Enterprise System Integration
                  </li>
                  <li className="flex items-center gap-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-400"></div>
                    Technology Strategy & Planning
                  </li>
                  <li className="flex items-center gap-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-500"></div>
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
