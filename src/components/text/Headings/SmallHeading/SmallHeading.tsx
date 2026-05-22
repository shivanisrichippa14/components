'use client';

import React from 'react';

interface SmallHeadingProps {
  normalText?: string;
  highlightText?: string;
  endText?: string;
}

export default function SmallHeading({
  normalText = 'Your next great ',
  highlightText = 'engineering hire',
  endText = '\nis already in our \nnetwork.',
}: SmallHeadingProps) {
  return (
    <h3 className="font-montserrat font-semibold text-[50px] leading-[100%] tracking-[0%] text-brand-black m-0 whitespace-pre-wrap w-[667.94px]">
      {normalText}
      <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
        {highlightText}
      </span>
      {endText}
    </h3>
  );
}