"use client";
import React from "react";

type SkillBadgeProps = {
  name: string;
};

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
<span className="
  px-4 py-2
  rounded-lg text-sm font-medium
  transition-all duration-300

  /* Light mode */
  bg-indigo-50
  text-indigo-700
  border border-indigo-200

  /* Dark mode */
  dark:bg-gray-800
  dark:text-indigo-300
  dark:border-gray-700

  /* Hover Light */
  hover:bg-indigo-100
  hover:border-indigo-400

  /* Hover Dark */
  dark:hover:bg-gray-700
  dark:hover:border-indigo-500
">
      {name}
    </span>
  );
}
