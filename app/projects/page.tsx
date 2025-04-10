import React from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import ProjectCard from "../../components/ProjectCard";
import "../../styles/projects.css";

const projects = [
  {
    title: "Neural Interface Dashboard",
    description:
      "An immersive 3D dashboard that visualizes complex data streams through an intuitive neural interface. Features interactive 3D elements and real-time data processing.",
    techStack: ["Next.js", "Three.js", "WebGL", "Node.js", "TensorFlow.js"],
    image: "/api/placeholder/600/400",
    tag: "Featured",
    links: [
      { label: "Live Demo", href: "#" },
      { label: "Source Code", href: "#" },
    ],
  },
  {
    title: "CyberChat LLM",
    description:
      "A cyberpunk-themed chat application powered by AI language models with custom UI and animations.",
    techStack: ["React", "Node.js", "OpenAI API", "Three.js"],
    image: "/api/placeholder/400/250",
    tag: "Web App",
    links: [
      { label: "Demo", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  // Add other projects here...
];

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects - CyberFolio</title>
        <meta
          name="description"
          content="Showcasing my latest work in web development, 3D interfaces, and AI integration."
        />
      </Head>
      <div className="bg-background text-text min-h-screen">
        <Navbar />
        <section className="projects-section pt-32 px-8">
          <div className="projects-container max-w-6xl mx-auto">
            <h2 className="section-heading text-4xl font-bold mb-4">Projects</h2>
            <p className="section-subheading text-lg opacity-70 mb-8">
              Showcasing my latest work in web development, 3D interfaces, and
              AI integration.
            </p>

            <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  image={project.image}
                  tag={project.tag}
                  links={project.links}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}