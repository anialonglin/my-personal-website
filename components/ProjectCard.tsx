import React from "react";
import "../styles/projects.css";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  tag?: string;
  links: { label: string; href: string }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  image,
  tag,
  links,
}) => {
  return (
    <div className="project-card">
      <div className="project-image relative">
        <img
          src={image}
          alt={`Image of ${title}`}
          className="w-full h-48 object-cover transition-transform transform"
        />
        {tag && (
          <div className="project-tag absolute top-4 right-4 bg-primary text-background px-3 py-1 rounded text-sm">
            {tag}
          </div>
        )}
      </div>
      <div className="project-content p-4">
        <h3 className="project-title text-xl font-semibold mb-2">{title}</h3>
        <p className="project-description text-sm opacity-80 mb-4">
          {description}
        </p>
        <div className="tech-stack flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="tech-item bg-primary bg-opacity-10 text-primary px-2 py-1 rounded text-xs border border-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links flex gap-4">
          {links.map((link, i) => (
            <a
              key={`${link.label}-${i}`}
              href={link.href}
              className="project-link text-primary border border-primary px-3 py-1 rounded hover:bg-primary hover:text-background transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;