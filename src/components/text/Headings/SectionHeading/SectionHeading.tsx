'use client';

import React from 'react';

interface SectionHeadingProps {
  text?: string;
}

export default function SectionHeading({
  text = 'INTELLIGENTLY PRECISE',
}: SectionHeadingProps) {
  return (
    <h2 className="font-montserrat font-bold text-[15.24px] leading-[100%] tracking-[0.23em] bg-gradient-to-r from-brand-section-blue to-brand-section-purple bg-clip-text text-transparent m-0">
      {text}
    </h2>
  );
}