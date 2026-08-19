"use client";

import { useState } from "react";
import { Plus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FAQItem[];
}

export default function FaqSection({ faqs }: FaqSectionProps) {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (activeFAQ === index) {
      setActiveFAQ(null);
    } else {
      setActiveFAQ(index);
    }
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {faqs.map((faq, index) => {
        const isOpen = activeFAQ === index;
        return (
          <div 
            key={index}
            className="bg-brand-bg rounded-2xl border border-brand-border overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-6 flex justify-between items-center gap-4 font-bold text-brand-main hover:bg-brand-cream/40 transition-colors"
            >
              <span className="text-base md:text-lg flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-brand-accent-hover flex-shrink-0" />
                <span>{faq.question}</span>
              </span>
              <Plus className={`w-5 h-5 text-brand-muted transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`} />
            </button>
            {isOpen && (
              <div className="p-6 pt-0 border-t border-brand-border/60 text-sm text-brand-secondary leading-relaxed font-light animate-fadeIn whitespace-pre-line">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

