"use client";

import { 
  ShieldAlert, 
  CheckCircle2, 
  Mail, 
  Sparkles,
  ArrowRight,
  ArrowDown
} from "lucide-react";

interface ProblemSolutionWorkflowProps {
  locale: "en" | "es";
  // Problem section props (4 Boxes Timeline)
  probBadge: string;
  probTitle: string;
  probDesc: string;
  probBox1Title: string;
  probBox1Desc: string;
  probBox2Title: string;
  probBox2Desc: string;
  probBox3Title: string;
  probBox3Desc: string;
  probBox4Title: string;
  probBox4Desc: string;
}

export default function ProblemSolutionWorkflow({
  locale,
  probBadge,
  probTitle,
  probDesc,
  probBox1Title,
  probBox1Desc,
  probBox2Title,
  probBox2Desc,
  probBox3Title,
  probBox3Desc,
  probBox4Title,
  probBox4Desc
}: ProblemSolutionWorkflowProps) {
  return (
    <section id="problem-solution" className="py-20 bg-brand-card border-y border-brand-border animate-fadeIn">
      <div className="layout-container space-y-12">
        
        {/* PROBLEM & SOLUTION PROCESS TIMELINE (4 BOXES) */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
          <span className="font-display font-extrabold text-xs text-red-600 bg-red-50 border border-red-200 px-4 py-1.5 rounded-full self-center uppercase tracking-widest">
            {probBadge}
          </span>
          <h2 className="font-display font-black text-2xl md:text-3xl text-brand-main tracking-tight uppercase leading-tight">
            {probTitle}
          </h2>
          <p className="text-brand-secondary text-sm md:text-base leading-relaxed font-light">
            {probDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch max-w-7xl mx-auto relative pt-4">
          
          {/* Box 1 */}
          <div className="relative group">
            <div className="h-full bg-[#FCFBF9] p-6 rounded-3xl border border-brand-border shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center mb-6">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                </div>
                <h4 className="font-display font-black text-base text-brand-main mb-3 uppercase tracking-tight">
                  {probBox1Title}
                </h4>
                <p className="text-xs text-brand-secondary font-light leading-relaxed">
                  {probBox1Desc}
                </p>
              </div>
            </div>
            {/* Connector Arrow (Desktop: Right) */}
            <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-brand-card border border-brand-border items-center justify-center shadow-soft">
              <ArrowRight className="w-4 h-4 text-brand-muted" />
            </div>
            {/* Connector Arrow (Mobile: Bottom) */}
            <div className="flex md:hidden absolute -bottom-5 left-1/2 -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-brand-card border border-brand-border items-center justify-center shadow-soft">
              <ArrowDown className="w-4 h-4 text-brand-muted" />
            </div>
          </div>

          {/* Box 2 */}
          <div className="relative group">
            <div className="h-full bg-[#FCFBF9] p-6 rounded-3xl border border-brand-border shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-100 border border-red-200 flex items-center justify-center mb-6">
                  <Mail className="w-5 h-5 text-red-600" />
                </div>
                <h4 className="font-display font-black text-base text-brand-main mb-3 uppercase tracking-tight">
                  {probBox2Title}
                </h4>
                <p className="text-xs text-brand-secondary font-light leading-relaxed">
                  {probBox2Desc}
                </p>
              </div>
            </div>
            {/* Connector Arrow (Desktop: Right) */}
            <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-brand-card border border-brand-border items-center justify-center shadow-soft">
              <ArrowRight className="w-4 h-4 text-brand-muted" />
            </div>
            {/* Connector Arrow (Mobile: Bottom) */}
            <div className="flex md:hidden absolute -bottom-5 left-1/2 -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-brand-card border border-brand-border items-center justify-center shadow-soft">
              <ArrowDown className="w-4 h-4 text-brand-muted" />
            </div>
          </div>

          {/* Box 3 */}
          <div className="relative group">
            <div className="h-full bg-[#FCFBF9] p-6 rounded-3xl border border-brand-border shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-100 border border-rose-200 flex items-center justify-center mb-6">
                  <ShieldAlert className="w-5 h-5 text-rose-600" />
                </div>
                <h4 className="font-display font-black text-base text-brand-main mb-3 uppercase tracking-tight">
                  {probBox3Title}
                </h4>
                <p className="text-xs text-brand-secondary font-light leading-relaxed">
                  {probBox3Desc}
                </p>
              </div>
            </div>
            {/* Connector Arrow (Desktop: Right) */}
            <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-brand-card border border-brand-border items-center justify-center shadow-soft">
              <ArrowRight className="w-4 h-4 text-brand-muted" />
            </div>
            {/* Connector Arrow (Mobile: Bottom) */}
            <div className="flex md:hidden absolute -bottom-5 left-1/2 -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-brand-card border border-brand-border items-center justify-center shadow-soft">
              <ArrowDown className="w-4 h-4 text-brand-muted" />
            </div>
          </div>

          {/* Box 4 */}
          <div className="relative group">
            <div className="h-full bg-brand-cream p-6 rounded-3xl border border-brand-accent/50 shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <h4 className="font-display font-black text-base text-brand-main mb-3 uppercase tracking-tight">
                  {probBox4Title}
                </h4>
                <p className="text-xs text-brand-secondary font-light leading-relaxed">
                  {probBox4Desc}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
