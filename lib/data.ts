import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  
] as const;

export const experiencesData = [
  {
    title: "Étudiant en Intelligence Artificielle Fullstack",
    location: "EPSI Paris",
    description:
      "J'ai étudié divers domaines, notamment le développement logiciel orienté objet, l'intelligence artificielle et les technologies web avancées.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Développeur web full stack",
    location: "ODIT gouvernance",
    description:
      "Création d’une application web de gestion des charges locatives.",
      icon: React.createElement(FaReact),
    date: "2024",
  },
  {
    title: "Développeur Web (Stage)",
    location: "ODIT gouvernance",
    description:
      "Développement et amélioration du site web.",
      icon: React.createElement(CgWorkAlt),
    date: "2023 ",
  },
] as const;

export const projectsData = [
  {
    title: "Application web SaaS",
    description:
      "Application développée pour ODIT Gouvernance afin de simplifier et automatiser la régularisation des charges locatives via une plateforme centralisée, sécurisée et collaborative, remplaçant les tableurs Excel et les calculs manuels.",
      tags: ["React.js(v18)", "Node.js", "MySQL"],
    imageUrl: "/Mockup-Ticketing.png", 
  },
  {
    title: "Chatbot Intelligent",
    description:
      "Conçu avec Flutter et Dart, ce chatbot utilise des algorithmes d'IA pour fournir des réponses contextuelles et améliorer l'interaction utilisateur.",
    tags: ["Flutter", "Dart", "IA"],
    imageUrl: "/phone.jpg", 
  },
  
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Django",
  "Spring Boot",
  "Laravel",
  "Python",
  "Java",
  "Flutter",
  "Node.js",
  "Git",
  "Tailwind",
  "SQL",
  "NoSQL",
  "Firebase",
  "AWS",
  "Figma",
  "Adobe Creative Cloud",
  "Redux",
  "SCSS",
  "Bootstrap",
] as const;
