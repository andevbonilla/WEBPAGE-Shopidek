"use client";

import { useState, useEffect, useRef } from "react";

interface Footprint {
  id: number;
  x: number;
  y: number;
  angle: number;
  isLeft: boolean;
  opacity: number;
}

export default function FootprintTracker() {
  const [footprints, setFootprints] = useState<Footprint[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPlaced = useRef<{ x: number; y: number; isLeft: boolean }>({ x: 0, y: 0, isLeft: false });
  const footprintId = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      
      // Only trace tracks if coordinates fall inside the bounds of the Hero container
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        // Compute local absolute position
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const dx = x - lastPlaced.current.x;
        const dy = y - lastPlaced.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Place track after moving 55 pixels
        if (distance > 55) {
          const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
          const isLeft = !lastPlaced.current.isLeft;

          // Double trail offset physics
          const offsetDistance = 12;
          const offsetAngle = (angle - 90) * (Math.PI / 180);
          const perpAngle = offsetAngle + (isLeft ? -Math.PI / 2 : Math.PI / 2);
          
          const fx = x + Math.cos(perpAngle) * offsetDistance;
          const fy = y + Math.sin(perpAngle) * offsetDistance;

          footprintId.current += 1;
          const newFootprint: Footprint = {
            id: footprintId.current,
            x: fx,
            y: fy,
            angle: angle + (isLeft ? -8 : 8),
            isLeft,
            opacity: 0.6
          };

          setFootprints((prev) => [...prev.slice(-25), newFootprint]);
          lastPlaced.current = { x, y, isLeft };
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Continuous tick loop to fade out footprints at 60fps
    const fadeInterval = setInterval(() => {
      setFootprints((prev) => {
        if (prev.length === 0) return prev;
        return prev
          .map((f) => ({ ...f, opacity: f.opacity - 0.06 }))
          .filter((f) => f.opacity > 0);
      });
    }, 90);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(fadeInterval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
    >
      {footprints.map((foot) => (
        <div
          key={foot.id}
          style={{
            position: "absolute",
            left: `${foot.x}px`,
            top: `${foot.y}px`,
            transform: `translate(-50%, -50%) rotate(${foot.angle}deg)`,
            opacity: foot.opacity,
            transition: "opacity 0.08s linear",
          }}
          className="text-brand-main/15"
        >
          {foot.isLeft ? (
            /* Alternate left boot step path shape */
            <svg width="14" height="24" viewBox="0 0 14 24" fill="currentColor" className="text-brand-main/15 select-none pointer-events-none">
              <path d="M 6 0 C 1 0, 0 4, 1 8 C 2 11, 4 12, 4 14 C 4 16, 2 16, 2 18 C 2 21, 5 22, 8 22 C 11 22, 12 20, 12 18 C 12 16, 9 15, 9 14 C 9 12, 11 11, 12 8 C 13 4, 11 0, 6 0 Z" />
            </svg>
          ) : (
            /* Alternate right boot step path shape */
            <svg width="14" height="24" viewBox="0 0 14 24" fill="currentColor" className="text-brand-main/15 select-none pointer-events-none">
              <path d="M 8 0 C 13 0, 14 4, 13 8 C 12 11, 10 12, 10 14 C 10 16, 12 16, 12 18 C 12 21, 9 22, 6 22 C 3 22, 2 20, 2 18 C 2 16, 5 15, 5 14 C 5 12, 3 11, 2 8 C 1 4, 3 0, 8 0 Z" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
