'use client';

import React from 'react';

interface HeroHeadingProps {
  normalText?: string;
  highlightText?: string;
}

export default function HeroHeading({
  normalText = 'Your next great ',
  highlightText = 'engineering hire',
}: HeroHeadingProps) {
  return (
    <h1 className="font-montserrat font-semibold text-[60.95px] leading-[100%] tracking-[0%] text-brand-black m-0 whitespace-pre-wrap">
      {normalText}
      <span className="font-montserrat font-semibold text-[60.95px] leading-[100%] tracking-[0%] bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
        {highlightText}
      </span>
    </h1>
  );
}