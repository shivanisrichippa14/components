'use client';

import React from 'react';

interface HeroParagraphProps {
  text?: string;
}

export default function HeroParagraph({
  text = 'We work with enterprises to place experienced engineers who fit the role, the team, and the long run. Every candidate goes through CODE9 before we make any introduction.',
}: HeroParagraphProps) {
  return (
    <p className="font-avenir font-medium text-[30.48px] leading-[140%] tracking-[0%] text-brand-black m-0">
      {text}
    </p>
  );
}