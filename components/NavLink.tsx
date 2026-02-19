"use client";
import React from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 font-medium"
    >
      {children}
    </a>
  );
};

export default NavLink;
