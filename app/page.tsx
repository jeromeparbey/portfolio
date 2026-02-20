"use client";

import NavLink from "../components/NavLink";
import SectionTitle from "../components/SectionTitle";
import SkillBadge from "../components/SkillBadge";
import ProjectCard from "../components/ProjectCard";


import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MessageCircle, 
  Code2, 
  Layers, 
  Cpu, 
  Rocket, 
  CheckCircle2, 
  Menu, 
  X, 
  ArrowRight,
  Monitor,
  Server,
  Database,
  Globe,
  Sun,
  Moon,
  User,
  Phone,
  MapPin,
  Briefcase
} from 'lucide-react';


// --- Dictionnaire de Langues ---
const translations = {
  fr: {
    nav: { home: "Accueil", identity: "Identité", about: "À propos", skills: "Compétences", projects: "Projets", contact: "Contact" },
    hero: {
      badge: "Disponible pour missions freelance",
      title: "Je conçois des solutions digitales performantes.",
      subtitle: "Développeur Full Stack & Architecte Logiciel Junior basé au Togo. Je transforme vos idées complexes en applications web évolutives avec Next.js et TypeScript.",
      ctaProjects: "Voir mes projets",
      ctaContact: "Me contacter"
    },
    identity: {
      title: "Identité Professionnelle",
      subtitle: "Informations personnelles et professionnelles",
      name: "Nom Complet",
      role: "Poste Actuel",
      birth: "Date de naissance",
      phone: "Téléphone",
      email: "Email",
      location: "Adresse",
      nationality: "Nationalité",
      togolese: "Togolaise",
      experience: "Expérience",
      years: "Junior (L3)",
      education: "Éducation",
      institution: "ESGIS AVEDJI"
    },
    about: {
      title: "À propos de moi",
      quote: "L'architecture logicielle n'est pas seulement du code, c'est l'art de bâtir des fondations solides pour le futur numérique.",
      text: "Titulaire d’une Licence 3 en Architecture des Logiciels de l’ESGIS au Togo, je possède une solide formation académique complétée par des expériences et formations antérieures en développement logiciel et technologies informatiques. Cette combinaison de savoir-faire et de curiosité technologique me permet d’aborder chaque projet avec une vision structurée, innovante et orientée vers des systèmes robustes et scalables.",
      formation: "Formation",
      location: "Localisation"
    },
    skills: { title: "Expertise Technique", subtitle: "Les technologies que je maîtrise pour donner vie à vos projets internationaux." },
    projects: { 
      title: "Projets Premium", 
      subtitle: "Une sélection de mes travaux les plus récents alliant performance et design.",
      demo: "Démo",
      code: "Code"
    },
    whyMe: {
      title: "Pourquoi collaborer avec moi ?",
      points: [
        "Code propre, documenté et professionnel",
        "Performance et optimisation SEO natives",
        "Design moderne axé sur l'expérience utilisateur",
        "Communication transparente et réactive",
        "Solutions évolutives prêtes pour la croissance"
      ],
      available: "Disponible Maintenant",
      subAvailable: "Pour vos projets au Togo ou à l'international.",
      btn: "Démarrer un projet"
    },
    contact: {
      title: "Parlons de votre projet",
      subtitle: "Prêt à donner vie à vos idées ? Envoyez-moi un message.",
      labelName: "Nom complet",
      labelSubject: "Sujet",
      labelMsg: "Message",
      placeholderName: "Votre nom",
      placeholderMsg: "Décrivez brièvement votre projet...",
      btn: "Envoyer le message",
      coord: "Coordonnées"
    }
  },
  en: {
    nav: { home: "Home", identity: "Identity", about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },
    hero: {
      badge: "Available for freelance projects",
      title: "I build high-performance digital solutions.",
      subtitle: "Full Stack Developer & Junior Software Architect based in Togo. I turn your complex ideas into scalable web applications with Next.js and TypeScript.",
      ctaProjects: "View my projects",
      ctaContact: "Contact me"
    },
    identity: {
      title: "Professional Identity",
      subtitle: "Personal and professional information",
      name: "Full Name",
      role: "Current Role",
      birth: "Date of Birth",
      phone: "Phone",
      email: "Email",
      location: "Address",
      nationality: "Nationality",
      togolese: "Togolese",
      experience: "Experience",
      years: "Junior (L3)",
      education: "Education",
      institution: "ESGIS AVEDJI"
    },
    about: {
      title: "About me",
      quote: "Software architecture is not just code, it's the art of building solid foundations for the digital future.",
      text: "Holder of a Bachelor's degree in Software Architecture from ESGIS in Togo, I have a solid academic background complemented by previous training and experience in software development and IT technologies. This combination of skills and technological curiosity allows me to approach each project with a structured, innovative vision, focused on building robust and scalable systems.",
      formation: "Education",
      location: "Location"
    },
    skills: { title: "Technical Expertise", subtitle: "The technologies I master to bring your international projects to life." },
    projects: { 
      title: "Premium Projects", 
      subtitle: "A selection of my most recent works combining performance and design.",
      demo: "Demo",
      code: "Code"
    },
    whyMe: {
      title: "Why work with me?",
      points: [
        "Clean, documented and professional code",
        "Native performance and SEO optimization",
        "Modern design focused on user experience",
        "Transparent and reactive communication",
        "Scalable solutions ready for growth"
      ],
      available: "Available Now",
      subAvailable: "For your projects in Togo or worldwide.",
      btn: "Start a project"
    },
    contact: {
      title: "Let's talk about your project",
      subtitle: "Ready to bring your ideas to life? Send me a message.",
      labelName: "Full Name",
      labelSubject: "Subject",
      labelMsg: "Message",
      placeholderName: "Your name",
      placeholderMsg: "Briefly describe your project...",
      btn: "Send message",
      coord: "Contact Details"
    }
  }
};

// --- Application Principale ---

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'fr'| 'en'>('fr');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
  if (typeof window !== 'undefined') {
    return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  }
  return 'dark';
});


  const t = translations[lang];
  const highlightText =
  lang === 'fr'
    ? 'solutions digitales'
    : 'digital solutions';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Initialiser le thème au chargement
    if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  localStorage.setItem('theme', theme);
}, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const projects = [
    {
      title: "SaaS Enterprise Dashboard",
      desc: lang === 'fr' 
        ? "Une plateforme d'analyse de données en temps réel pour entreprises, avec gestion de rôles et visualisation complexe." 
        : "A real-time data analytics platform for businesses, featuring role management and complex visualization.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
      link: "#",
      code: "#"
    },
    {
      title: "E-commerce Premium Store",
      desc: lang === 'fr' 
        ? "Boutique en ligne haute performance avec panier persistant, système de paiement intégré et SEO optimisé."
        : "High-performance online store with persistent cart, integrated payment system, and optimized SEO.",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      link: "#",
      code: "#"
    },
    {
      title: "Architecture Logicielle Tool",
      desc: lang === 'fr'
        ? "Outil de modélisation de diagrammes UML et flux de données pour architectes junior."
        : "Modeling tool for UML diagrams and data flows for junior architects.",
      tags: ["TypeScript", "Canvas API", "Redux"],
      link: "#",
      code: "#"
    },
    {
      title: "Full Stack Portfolio",
      desc: lang === 'fr'
        ? "Le présent portfolio, conçu avec une architecture modulaire et des performances optimales."
        : "This portfolio, designed with modular architecture and optimal performance.",
      tags: ["Next.js", "Framer Motion", "Tailwind"],
      link: "#",
      code: "#"
    }
  ];

  const services = [
    {
      icon: <Monitor className="text-indigo-500 dark:text-indigo-400" />,
      title: "Frontend Development",
      desc: lang === 'fr' 
        ? "Création d'interfaces utilisateur modernes, réactives et accessibles avec React et Next.js."
        : "Creating modern, responsive, and accessible user interfaces with React and Next.js."
    },
    {
      icon: <Server className="text-indigo-500 dark:text-indigo-400" />,
      title: "Backend & API",
      desc: lang === 'fr'
        ? "Conception d'architectures robustes avec Node.js, Express et NestJS pour des serveurs scalables."
        : "Designing robust architectures with Node.js, Express, and NestJS for scalable servers."
    },
    {
      icon: <Layers className="text-indigo-500 dark:text-indigo-400" />,
      title: "Architecture Logicielle",
      desc: lang === 'fr'
        ? "Planification de systèmes complexes, choix technologiques et optimisation de la structure du code."
        : "Complex system planning, technology choices, and code structure optimization."
    },
    {
      icon: <Database className="text-indigo-500 dark:text-indigo-400" />,
      title: "Bases de Données",
      desc: lang === 'fr'
        ? "Modélisation et gestion de données avec SQL (PostgreSQL) et NoSQL (MongoDB, Redis)."
        : "Data modeling and management with SQL (PostgreSQL) and NoSQL (MongoDB, Redis)."
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-[#0a0a0c] text-gray-100' : 'bg-gray-50 text-gray-900'} font-sans selection:bg-indigo-500 selection:text-white`}>
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (theme === 'dark' ? 'bg-[#0a0a0c]/80 border-b border-gray-800' : 'bg-white/80 border-b border-gray-200') + ' backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-xl text-white">J</div>
            <span className="font-bold text-xl tracking-tighter uppercase">PARBEY<span className="text-indigo-500">.</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#home">{t.nav.home}</NavLink>
            <NavLink href="#about">{t.nav.about}</NavLink>
            <NavLink href="#skills">{t.nav.skills}</NavLink>
            <NavLink href="#projects">{t.nav.projects}</NavLink>
            <NavLink href="#contact">{t.nav.contact}</NavLink>
            
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>

            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <button onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} className="text-xs font-bold px-2 py-1 rounded-full bg-blue-1000 dark:bg-gray-800 hover:bg-indigo-600 hover:text-white transition-all">
                {lang === 'fr' ? 'EN' : 'FR'}
              </button>
              {/* Theme Toggle */}
              <button onClick={toggleTheme} className="p-2 rounded bg-blue-1000 dark:bg-gray-800 hover:text-indigo-500 transition-all">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            <a 
              href="https://wa.me/22892438582" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden absolute top-full left-0 w-full p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300 ${theme === 'dark' ? 'bg-[#0d0d0f] border-b border-gray-800' : 'bg-white border-b border-gray-200 shadow-xl'}`}>
            <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>{t.nav.home}</NavLink>
            <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</NavLink>
            <NavLink href="#skills" onClick={() => setIsMenuOpen(false)}>{t.nav.skills}</NavLink>
            <NavLink href="#projects" onClick={() => setIsMenuOpen(false)}>{t.nav.projects}</NavLink>
            <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</NavLink>
            <div className="flex gap-4">
              <button onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} className="text-xs font-bold px-2 py-1 rounded-full bg-blue-1000 dark:bg-gray-800 hover:bg-indigo-600 hover:text-white transition-all">
                {lang === 'fr' ? 'EN' : 'FR'}
              </button>
              <button onClick={toggleTheme} className="p-2 rounded bg-blue-1000 dark:bg-gray-800 hover:text-indigo-500 transition-all">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6 animate-bounce">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              {t.hero.badge}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-blue-1000 dark:text-white">
              
             {t.hero.title.split(highlightText).map((part: string, i: number) => (
  <React.Fragment key={i}>
    {part}
    {i === 0 && (
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
        {highlightText}
      </span>
    )}
  </React.Fragment>
))}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/20">
                {t.hero.ctaProjects} <ArrowRight size={20} />
              </a>
              <a href="#contact" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all border border-gray-200 dark:border-gray-700">
                {t.hero.ctaContact}
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-3xl rotate-6 blur-sm opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 flex items-center justify-center overflow-hidden shadow-2xl">
                <Code2 size={120} className="text-indigo-500/30" />
                <div className="absolute bottom-4 left-4 right-4 bg-gray-100/90 dark:bg-gray-900/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                  <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Parbey Jerome</p>
                  <p className="text-sm text-gray-900 dark:text-white font-bold uppercase">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Identité Section */}
      <section id="identity" className={`py-24 ${theme === 'dark' ? 'bg-[#0a0a0c]' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle={t.identity.subtitle}>
            {t.identity.title}
          </SectionTitle>
          
          <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-200 dark:border-gray-800 overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-12">
              {/* Photo & Socials Column */}
              <div className="md:col-span-4 bg-gray-50 dark:bg-gray-800/50 p-10 flex flex-col items-center border-r border-gray-200 dark:border-gray-800">
                <div className="relative group mb-8">
                  <div className="absolute inset-0 bg-indigo-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="relative w-48 h-60 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                    <div className="flex items-center justify-center h-full">
                       <User size={80} className="text-gray-400 dark:text-gray-500" />
                    </div>
                    {/* <img src="URL_DE_VOTRE_PHOTO" alt="Jerome Parbey" className="w-full h-full object-cover" /> */}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Jerome PARBEY</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-8 uppercase tracking-wider text-sm">Full Stack Developer</p>
                
                <div className="flex gap-4">
                   <a href="https://github.com/jeromeparbey" className="p-3 bg-white dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-all border border-gray-200 dark:border-gray-700 shadow-sm"><Github size={20} /></a>
                   <a href="https://www.linkedin.com/in/jeromeparbey/" className="p-3 bg-white dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-all border border-gray-200 dark:border-gray-700 shadow-sm"><Linkedin size={20} /></a>
                   <a href="https://wa.me/22892438582" className="p-3 bg-white dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-all border border-gray-200 dark:border-gray-700 shadow-sm"><MessageCircle size={20} /></a>
                </div>
              </div>

              {/* Details Column */}
              <div className="md:col-span-8 p-10">
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-500/10 rounded-xl text-indigo-600"><User size={20} /></div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t.identity.name}</p>
                      <p className="text-gray-900 dark:text-white font-semibold">Parbey Komlan Jerome</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-500/10 rounded-xl text-indigo-600"><Briefcase size={20} /></div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t.identity.role}</p>
                      <p className="text-gray-900 dark:text-white font-semibold">Architecte Logiciel Junior</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-500/10 rounded-xl text-indigo-600"><Phone size={20} /></div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t.identity.phone}</p>
                      <p className="text-gray-900 dark:text-white font-semibold">+228 92 43 85 82</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-500/10 rounded-xl text-indigo-600"><Mail size={20} /></div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t.identity.email}</p>
                      <p className="text-gray-900 dark:text-white font-semibold">jeromekparbey@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-500/10 rounded-xl text-indigo-600"><MapPin size={20} /></div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t.identity.location}</p>
                      <p className="text-gray-900 dark:text-white font-semibold">Lomé, Togo (Avedji)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-500/10 rounded-xl text-indigo-600"><Globe size={20} /></div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t.identity.nationality}</p>
                      <p className="text-gray-900 dark:text-white font-semibold">{t.identity.togolese}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-500/10 rounded-xl text-indigo-600"><Monitor size={20} /></div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t.identity.experience}</p>
                      <p className="text-gray-900 dark:text-white font-semibold">{t.identity.years}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-500/10 rounded-xl text-indigo-600"><Rocket size={20} /></div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t.identity.education}</p>
                      <p className="text-gray-900 dark:text-white font-semibold">{t.identity.institution}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold">
                  <CheckCircle2 size={18} />
                  <span>Disponible immédiatement pour nouveaux défis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-24 ${theme === 'dark' ? 'bg-[#0d0d0f]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-1000 dark:text-white">{t.about.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-indigo-600 pl-6 text-xl">
                {t.about.quote}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t.about.text}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-100 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-white">{t.about.formation}</h4>
                  <p className="text-sm text-gray-500">Licence 3 - ESGIS</p>
                </div>
                <div className="p-4 bg-gray-100 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-white">{t.about.location}</h4>
                  <p className="text-sm text-gray-500">Lomé, Togo</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {services.map((s, i) => (
                <div key={i} className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-indigo-500 transition-all shadow-sm">
                  <div className="mb-4">{s.icon}</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-6 " >
          <SectionTitle subtitle={t.skills.subtitle}>
            {t.skills.title}
          </SectionTitle>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                <Monitor className="text-indigo-500" size={24} /> Frontend
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5", "JavaScript ES6"].map(s => <SkillBadge key={s} name={s} />)}
              </div>
            </div>

            <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                <Server className="text-indigo-500" size={24} /> Backend
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Node.js", "Express", "REST APIs", "Prisma", "Authentication", "Microservices"].map(s => <SkillBadge key={s} name={s} />)}
              </div>
            </div>

            <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                <Cpu className="text-indigo-500" size={24} /> Outils & Dev
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Git / GitHub", "Docker", "Architecture", "CI/CD", "PostgreSQL", "MongoDB"].map(s => <SkillBadge key={s} name={s} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-24 ${theme === 'dark' ? 'bg-[#0d0d0f]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle={t.projects.subtitle}>
            {t.projects.title}
          </SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => <ProjectCard key={i} {...p} langLabels={{demo: t.projects.demo, code: t.projects.code}} />)}
          </div>
        </div>
      </section>  

      {/* Why Me Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-indigo-600/30">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Rocket size={200} className="text-white" />
            </div>
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">{t.whyMe.title}</h2>
                <div className="space-y-4">
                  {t.whyMe.points.map((text: string , i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={24} className="text-indigo-200" />
                      <span className="text-lg font-medium text-white">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center">
                  <h3 className="text-2xl font-bold mb-2 text-white">{t.whyMe.available}</h3>
                  <p className="text-indigo-100 mb-6">{t.whyMe.subAvailable}</p>
                  <a href="#contact" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
                    {t.whyMe.btn}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle={t.contact.subtitle}>
            {t.contact.title}
          </SectionTitle>
          
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">{t.contact.coord}</h3>
                <div className="space-y-6">
                  <a href="https://wa.me/22892438582" className="flex items-center gap-4 text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors group">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-indigo-600/20 transition-colors">
                      <MessageCircle className="text-indigo-500" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-gray-400">WhatsApp</p>
                      <p className="text-lg font-medium">+228 92438582</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 group">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
                      <Mail className="text-indigo-500" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-gray-400">Email</p>
                      <p className="text-lg font-medium">jeromekparbey@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 group">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
                      <Globe className="text-indigo-500" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-gray-400">{t.about.location}</p>
                      <p className="text-lg font-medium">Lomé, Togo (UTC+0)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <form className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-400">{t.contact.labelName}</label>
                    <input type="text" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder={t.contact.placeholderName} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-400">Email</label>
                    <input type="email" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="email@exemple.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400">{t.contact.labelSubject}</label>
                  <input type="text" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Sujet..." />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400">{t.contact.labelMsg}</label>
                  <textarea rows={4} className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none" placeholder={t.contact.placeholderMsg}></textarea>
                </div>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-600/30 uppercase tracking-widest text-sm">
                  {t.contact.btn}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t border-gray-200 dark:border-gray-800 ${theme === 'dark' ? 'bg-[#0a0a0c]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">P</div>
            <span className="font-bold text-lg tracking-tight uppercase">JEROME<span className="text-indigo-500">.</span></span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Parbey Komlan Jerome. {lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/jeromeparbey" className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/jeromeparbey/" className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all"><Linkedin size={18} /></a>
            <a href="https://wa.me/22892438582" className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all"><MessageCircle size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}