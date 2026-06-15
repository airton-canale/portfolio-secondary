import React, { useState } from "react";
import "./experience.css";

const JOBS = [
  {
    dates: "Aug 2024 — Jun 2026",
    title: "Software Engineer",
    company: "TestBox",
    type: "Remote",
    description:
      "Built backend services for automated product demo environments (Python, Flask, Django, Chalice). Authored Terraform IaC and CI/CD pipelines across AWS. Designed ECS-containerized environments and contributed to a Chrome Extension and Node.js SDK. Supported production on-call at 99.9% uptime.",
    tech: ["Python", "Django", "Flask", "AWS", "Terraform", "Selenium", "TypeScript", "React", "CI/CD"],
  },
  {
    dates: "Jan 2026",
    title: "Full-Stack Developer",
    company: "Rech e Dalzotto Advogados",
    type: "Freelance · Remote",
    description:
      "Designed and deployed a full-stack appointment reminder platform for a law firm. Django backend, React frontend, containerized with Docker Compose, served via nginx with SSL. Deployed to AWS EC2 via GitHub Actions CI/CD.",
    tech: ["Django", "React", "Docker", "nginx", "AWS EC2", "GitHub Actions", "CI/CD"],
  },
  {
    dates: "Aug 2022 — Aug 2024",
    title: "Full-Stack Developer",
    company: "Dipsystem Hapolo",
    type: "Full-time · São Marcos, RS",
    description:
      "Developed hybrid mobile apps with Ionic and Angular. Built and maintained Django web applications. Designed and optimized MySQL databases. Implemented Python microservices to improve backend scalability.",
    tech: ["Ionic", "Angular", "JavaScript", "TypeScript", "Python", "Django", "MySQL", "Docker"],
  },
  {
    dates: "Jul 2022",
    title: "Frontend Web Developer",
    company: "Concordia Labs",
    type: "Freelance · São Marcos, RS",
    description:
      "Developed React.js screens for an industrial maintenance management system. Integrated Django REST APIs and worked with Dockerized applications in a cross-functional team.",
    tech: ["React", "Python", "Django", "JavaScript", "Docker", "Git"],
  },
  {
    dates: "2022",
    title: "Full-Stack Developer",
    company: "SOPRAN",
    type: "Freelance · São Marcos, RS",
    description:
      "Built a Dockerized full-stack web app from scratch. Translated Figma mockups into production interfaces with Next.js and TailwindCSS. Delivered Express.js APIs with MySQL via Prisma ORM. Used Scrum/Trello for project management.",
    tech: ["Next.js", "TailwindCSS", "Express.js", "MySQL", "Prisma", "Docker", "Figma"],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState({});

  const toggle = (idx) =>
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section__header">
          <div className="section__meta">
            <span className="section__num">01</span>
            <span className="section__title">experience</span>
          </div>
          <span className="section__count">{JOBS.length} roles</span>
        </div>

        <div className="exp__rows">
          {JOBS.map((job, idx) => (
            <div
              key={idx}
              className={["exp__row", expanded[idx] && "exp__row--open"].filter(Boolean).join(" ")}
              onClick={() => toggle(idx)}
            >
              <div className="exp__dates">{job.dates}</div>

              <div className="exp__info">
                <h3 className="exp__title">{job.title}</h3>
                <span className="exp__company">
                  {job.company} · {job.type}
                </span>
              </div>

              <div className="exp__desc">
                <p>{job.description}</p>
                {expanded[idx] && (
                  <div className="exp__tech">
                    {job.tech.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
