
import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-smartbench-blue text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M3 3v18h18" />
        <path d="m7 17 4-4 4 4 6-6" />
      </svg>
    </div>
  );
}
