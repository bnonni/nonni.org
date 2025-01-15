import { generatePageMetadata } from "@/app/seo";
import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/data/projects";
import React from "react";

export const metadata = generatePageMetadata({
  title: "Projects",
  description:
    "View my open source projects, mobile and web apps, npm packages, cli tools and more.",
});

export default function Projects() {
  return (
    <React.Fragment>
      <section>
        <h1 className="mb-4 text-2xl font-bold tracking-tighter">Projects</h1>
        <div
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2"
        >
          {PROJECTS.map((project, idx) => (
            <ProjectCard project={project} key={idx} />
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}
