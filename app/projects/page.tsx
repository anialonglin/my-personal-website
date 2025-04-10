import React from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import ProjectCard from "../../components/ProjectCard";
import "../../styles/projects.css";
import projects from "./projectsData";

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