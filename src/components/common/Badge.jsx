// src/components/common/Badge.jsx
import React from 'react';

export const Badge = ({ children, variant = 'gray' }) => {
  const themes = {
    danger: 'bg-[#fef2f2] text-[#dc2626] border-[#fecaca]',
    active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    gray: 'bg-gray-50 text-[#6B7280] border-gray-200',
    premium: 'bg-amber-50 text-amber-700 border-amber-200',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${themes[variant]}`}>
      {children}
    </span>
  );
};