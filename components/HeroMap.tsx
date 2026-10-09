"use client";

import { useEffect, useRef } from "react";

// Animated route on the home page hero. Pauses the SVG animation for
// visitors who prefer reduced motion.
export default function HeroMap() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (svg && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      svg.pauseAnimations();
    }
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 480 300"
      role="img"
      aria-label="Map showing a rider travelling from pickup to drop-off"
    >
      <g stroke="#E3E6EB" strokeWidth="14" strokeLinecap="square">
        <path d="M-10 70H490M-10 190H490M90 -10V310M250 -10V310M400 -10V310" />
      </g>
      <g stroke="#ECEEF2" strokeWidth="6">
        <path d="M-10 130H490M-10 250H490M170 -10V310M330 -10V310" />
      </g>
      <rect x="300" y="205" width="80" height="34" rx="6" fill="#DDF1E5" />
      <rect x="110" y="88" width="45" height="30" rx="6" fill="#DDF1E5" />
      <path
        id="routePath"
        d="M90 250 V190 H250 V70 H400"
        fill="none"
        stroke="#FF5A1F"
        strokeWidth="5"
        strokeDasharray="10 8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g transform="translate(90 250)">
        <circle r="15" fill="#1B2130" />
        <circle r="5" fill="#fff" />
      </g>
      <g transform="translate(400 70)">
        <path
          d="M0 6 C-12 -8 -14 -14 -14 -20 a14 14 0 0128 0 c0 6 -2 12 -14 26z"
          fill="#FF5A1F"
          transform="translate(0 -6)"
        />
        <circle cy="-26" r="5" fill="#fff" />
      </g>
      <g>
        <circle r="13" fill="#fff" stroke="#FF5A1F" strokeWidth="3" />
        <circle r="5" fill="#FF5A1F" />
        <animateMotion
          dur="7s"
          repeatCount="indefinite"
          keyPoints="0;0.62;0.62"
          keyTimes="0;0.8;1"
          calcMode="linear"
        >
          <mpath href="#routePath" />
        </animateMotion>
      </g>
      <g fontFamily="Barlow, Arial, sans-serif" fontSize="13" fontWeight="600" fill="#1B2130">
        <rect x="22" y="268" width="90" height="24" rx="12" fill="#fff" stroke="#DCE0E6" />
        <text x="67" y="284.5" textAnchor="middle">
          Pickup
        </text>
        <rect x="290" y="58" width="90" height="24" rx="12" fill="#fff" stroke="#DCE0E6" />
        <text x="335" y="74.5" textAnchor="middle">
          Drop-off
        </text>
      </g>
    </svg>
  );
}
