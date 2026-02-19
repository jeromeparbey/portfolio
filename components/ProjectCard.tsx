"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

type ProjectCardProps = {
  title: string;
  desc: string;
  tags: string[];
  image?: string;
  link: string;
  code: string;
  langLabels: {
    demo: string;
    code: string;
  };
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  desc,
  tags,
  image,
  link,
  code,
  langLabels,
}) => {
  return (
    <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-indigo-500/10">

      {/* IMAGE CONTAINER */}
      <div className="relative h-48 w-full overflow-hidden">

        {/* Background overlay */}
        <div className="absolute inset-0 bg-indigo-500/5 dark:bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

        {/* Image */}
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            priority={false}
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 font-bold text-lg italic uppercase tracking-widest">
            {title}
          </div>
        )}

      </div>

      {/* CONTENT */}
      <div className="p-6">

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider font-bold
              text-indigo-600 dark:text-indigo-400
              bg-indigo-100 dark:bg-indigo-400/10
              px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
          {desc}
        </p>

        {/* LINKS */}
        <div className="flex items-center gap-6">

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold
            text-indigo-600 dark:text-white
            hover:text-indigo-500 transition-colors duration-300"
          >
            <ExternalLink size={16} />
            {langLabels.demo}
          </a>

          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold
            text-gray-500 dark:text-gray-400
            hover:text-gray-900 dark:hover:text-white
            transition-colors duration-300"
          >
            <Github size={16} />
            {langLabels.code}
          </a>

        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
