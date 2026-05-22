'use client';

import React from 'react';

interface NumberStatProps {
  value?: string;
}

export default function NumberStat({
  value = '03',
}: NumberStatProps) {
  return (
    <span className="font-montserrat font-semibold text-[22px] leading-[140%] tracking-[0%] text-brand-violet inline-block">
      {value}
    </span>
  );
}