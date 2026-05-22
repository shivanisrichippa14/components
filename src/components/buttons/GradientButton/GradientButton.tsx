'use client';

import React from 'react';

interface GradientButtonProps {
  label?: string;
  onClick?: () => void;
}

export default function GradientButton({
  label = "Get Started",
  onClick,
}: GradientButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-between w-[359px] h-[66px] px-7 bg-gradient-to-r from-brand-blue to-brand-purple border-none rounded-full cursor-pointer"
    >
      <span className="font-avenir font-semibold text-[20px] leading-[140%] text-brand-white whitespace-nowrap">
        {label}
      </span>
      <span className="w-2 h-2 bg-brand-white shrink-0" />
    </button>
  );
}