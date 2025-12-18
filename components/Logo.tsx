import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' for dark backgrounds, 'dark' for light backgrounds
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
  const textColor = variant === 'dark' ? 'text-neutral-900' : 'text-white';
  const subTextColor = variant === 'dark' ? 'text-secondary' : 'text-blue-200';
  
  // The provided logo has a circle with a 'W' inside.
  // On light backgrounds (Navbar), we use a primary-colored circle with white text.
  // On dark backgrounds (Footer), we can use the same or a white circle with primary text.
  // Here we stick to the primary circle for consistency and brand recognition.

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon Mark */}
      <div className="relative w-10 h-10 flex-shrink-0">
        <div className="absolute inset-0 bg-primary rounded-full shadow-sm flex items-center justify-center">
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
             <path d="M4 6L8.4 18L12 9L15.6 18L20 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
        </div>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center h-full">
        <span className={`font-bold text-xl tracking-tight leading-none ${textColor}`}>
          Wira Hebat
        </span>
        <span className={`text-[10px] font-bold tracking-[0.2em] uppercase mt-0.5 ${subTextColor}`}>
          Garut
        </span>
      </div>
    </div>
  );
};