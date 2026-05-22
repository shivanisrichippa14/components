'use client';

import React from 'react';

interface BlackButtonProps {
  label?: string;
  onClick?: () => void;
}

export default function BlackButton({
  label = "Let's Find You a Great Hire",
  onClick,
}: BlackButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-between w-[370.79px] h-[66.03px] px-4 bg-brand-black border-none rounded-full cursor-pointer"
    >
      <span className="font-avenir font-semibold text-[20px] leading-[140%] text-brand-white whitespace-nowrap">
        {label}
      </span>
      <span className="w-2 h-2 bg-brand-white shrink-0" />
    </button>
  );
}