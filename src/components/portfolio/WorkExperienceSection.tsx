
import { Building2, Calendar, MapPin, Award, Code, Database } from "lucide-react";
import { differenceInMonths, differenceInDays } from "date-fns";

export function WorkExperienceSection() {
  const startDate = new Date(2025, 7, 15);
  const endDate = new Date(2026, 1, 7);
  
  const totalMonths = differenceInMonths(endDate, startDate);
  const remainingDays = differenceInDays(endDate, startDate) % 30;
  
  return (
    <section id="work-experience" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tight">
            Work Experience
          </h2>
          <div className="w-24 h-[2px] bg-white/30 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/[0.03] backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105">
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
              <div className="relative shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 p-3 flex items-center justify-center">
                  <img
                    src="/lovable-uploads/0d7c315e-a2fa-48fd-a02d-56ecb130a489.png"
                    alt="Tashi Commercial Corporation"
                    className="w-full h-full object-contain rounded-full grayscale"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-white/40 rounded-full border-2 border-black"></div>
              </div>
              
              <div className="text-center sm:text-left flex-1 min-w-0">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  IT Associate Manager
                </h3>
                <p className="text-lg text-white/60 font-semibold mb-3">
                  Tashi Commercial Corporation
                </p>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-sm text-white/40">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-white/50 shrink-0" />
                    <span>Aug 2025 – Feb 2026</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-white/50 shrink-0" />
                    <span>Bhutan</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8 bg-white/[0.03] rounded-xl p-5 border border-white/10">
              <div className="flex items-center gap-4 justify-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Award className="h-6 w-6 text-white/70" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white/30 uppercase tracking-wider">Total Experience</p>
                  <p className="text-xl font-bold text-white">
                    {totalMonths} Months{remainingDays > 0 ? ` & ${remainingDays} Days` : ""}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-white/20 pl-6 hover:border-l-4 hover:border-white/40 transition-all duration-300">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-white/50" />
                  Role & Responsibilities
                </h4>
                <p className="text-white/50 leading-relaxed mb-4">
                  As an IT Associate Manager at Tashi Commercial Corporation, I was responsible for 
                  overseeing IT operations, managing digital infrastructure, and implementing 
                  technology solutions that drive business efficiency and growth.
                </p>
              </div>

              <div className="border-l-2 border-white/20 pl-6 hover:border-l-4 hover:border-white/40 transition-all duration-300">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Code className="h-5 w-5 text-white/50" />
                  SAP Development & Implementation
                </h4>
                <p className="text-white/50 leading-relaxed mb-4">
                  I actively contributed to the development and enhancement of SAP software solutions, 
                  ensuring seamless integration with existing business processes.
                </p>
              </div>

              <div className="border-l-2 border-white/20 pl-6 hover:border-l-4 hover:border-white/40 transition-all duration-300">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-white/50" />
                  About Tashi Commercial Corporation
                </h4>
                <p className="text-white/50 leading-relaxed">
                  Tashi Commercial Corporation is a leading business conglomerate in Bhutan, 
                  known for its diverse portfolio and commitment to innovation.
                </p>
              </div>

              <div className="bg-white/[0.03] rounded-2xl p-6 mt-6 hover:scale-[1.02] transition-transform duration-300 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Database className="h-5 w-5 text-white/50" />
                  Key Focus Areas
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/50">
                  {["SAP Software Development", "IT Infrastructure Management", "Digital Transformation Initiatives", "Enterprise System Integration", "Technology Strategy & Planning", "Team Leadership & Development"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
