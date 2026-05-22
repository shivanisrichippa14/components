'use client';

import React from 'react';

interface CardHeadingProps {
  text?: string;
}

export default function CardHeading({
  text = 'Delivery Slows',
}: CardHeadingProps) {
  return (
    <h4 className="font-montserrat font-semibold text-[35px] leading-[140%] tracking-[0%] text-brand-black m-0">
      {text}
    </h4>
  );
}