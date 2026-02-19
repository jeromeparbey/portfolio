"use client";
import React from "react";

type SectionTitleProps = {
  children: React.ReactNode;
  subtitle?: string;
};

export default function SectionTitle({
  children,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">

      <h2 className="text-3xl md:text-4xl font-bold text-blue-1000 dark:text-white mb-4">
        {children}
      </h2>

      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

      <div className="w-20 h-1.5 bg-indigo-600 mx-auto mt-4 rounded-full"></div>

    </div>
  );
}
