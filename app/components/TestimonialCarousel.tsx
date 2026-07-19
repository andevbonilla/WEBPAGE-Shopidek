"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  opinionLabel: string; // e.g. "Review {current} of {total}"
}

export default function TestimonialCarousel({ testimonials, opinionLabel }: TestimonialCarouselProps) {
  const [activeReview, setActiveReview] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, testimonials.length]);

  const getOpinionString = (current: number, total: number) => {
    return opinionLabel
      .replace("{current}", current.toString())
      .replace("{total}", total.toString());
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Dynamic Carousel card */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-brand-card rounded-3xl border border-brand-border/60 shadow-premium p-8 md:p-10 transition-all duration-300 hover:scale-[1.01] relative min-h-[250px] flex flex-col justify-between"
      >
        <div>
          <div className="flex gap-1 mb-4">
            {[...Array(testimonials[activeReview].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-brand-accent fill-brand-accent" />
            ))}
          </div>
          <p className="text-brand-main text-base md:text-lg italic leading-relaxed mb-6 font-light transition-all duration-300">
            &ldquo;{testimonials[activeReview].quote}&rdquo;
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-brand-border/60 pt-4 mt-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-cream border border-brand-border flex items-center justify-center font-bold text-brand-main text-sm">
              {testimonials[activeReview].author[0]}
            </div>
            <div>
              <h5 className="font-bold text-sm text-brand-main">{testimonials[activeReview].author}</h5>
              <p className="text-[9px] text-brand-muted uppercase font-bold tracking-wider">{testimonials[activeReview].role}</p>
            </div>
          </div>
          <span className="text-xs font-mono font-medium text-brand-muted bg-brand-bg px-2.5 py-1 rounded-full border border-brand-border/40">
            {getOpinionString(activeReview + 1, testimonials.length)}
          </span>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2.5 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveReview(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeReview === i ? "bg-brand-main w-6" : "bg-brand-border hover:bg-brand-muted w-2.5"
            }`}
            title="Review Dot"
          />
        ))}
      </div>
    </div>
  );
}
