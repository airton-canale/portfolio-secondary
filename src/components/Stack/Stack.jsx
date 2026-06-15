import React from "react";
import "./Stack.css";

const GROUPS = [
  {
    label: "languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "frontend",
    items: ["React.js", "Next.js", "Angular", "Ionic", "TailwindCSS", "HTML", "CSS"],
  },
  {
    label: "backend",
    items: ["Django", "Flask", "Express.js", "Node.js", "REST APIs"],
  },
  {
    label: "cloud & devops",
    items: ["AWS (EC2, ECS)", "Docker", "Terraform", "nginx", "GitHub Actions", "CI/CD"],
  },
  {
    label: "databases",
    items: ["MySQL", "Prisma ORM"],
  },
  {
    label: "tools",
    items: ["Git", "Selenium", "Figma", "Scrum / Agile"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <div className="section__header">
          <div className="section__meta">
            <span className="section__num">02</span>
            <span className="section__title">stack</span>
          </div>
          <span className="section__count">{GROUPS.reduce((a, g) => a + g.items.length, 0)} technologies</span>
        </div>

        <div className="stack__groups">
          {GROUPS.map(({ label, items }) => (
            <div key={label} className="stack__group">
              <span className="stack__label">{label}</span>
              <div className="stack__chips">
                {items.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
