'use client';

import React from 'react';

interface SmallParagraphProps {
  text?: string;
}

export default function SmallParagraph({
  text = 'Every week spent getting someone up to speed is a week your roadmap is waiting.',
}: SmallParagraphProps) {
  return (
    <p className="font-avenir font-normal text-[25px] leading-[140%] tracking-normal text-brand-black m-0">
      {text}
    </p>
  );
}