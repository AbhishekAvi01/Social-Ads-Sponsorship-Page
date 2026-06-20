// src/components/common/Card.jsx
import React from 'react';

export const Card = ({ children, className = '', onClick }) => {
  const isClickable = !!onClick;
  return (
    <div
      onClick={onClick}
      className={`bg-white border border-[#E5E7EB] rounded-xl p-6 transition-all duration-300 ${
        isClickable 
          ? 'cursor-pointer hover:shadow-md hover:border-[#dc2626]/30 hover:translate-y-[-2px]' 
          : 'shadow-sm'
      } ${className}`}
    >
      {children}
    </div>
  );
};