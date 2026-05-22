'use client';

import React from 'react';

interface SectionParagraphProps {
  text?: string;
}

export default function SectionParagraph({
  text = 'Replacing a mis-hired engineer costs up to 150% of their annual salary. That is before you account for the downstream effect on dependent teams, delayed roadmaps, and the leadership time spent managing the gap.',
}: SectionParagraphProps) {
  return (
    <p className="font-avenir font-medium text-[25px] leading-[140%] tracking-[0%] text-brand-black m-0">
      {text}
    </p>
  );
}