import React from "react";

import Image from "next/image";
import Link from "next/link";

import { PROJECTS } from "@/constants/projects";
import type { Project } from "@/types";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

function Project({ project }: { project: Project }) {
  return (
    <div className="">
      <h1 className="inline-block text-2xl font-bold">{project.name}</h1>

      <div className="relative mx-auto mt-3 aspect-video w-full max-w-2xl">
        <Image
          src={project.imageUrl}
          alt={`${project.name}`}
          layout="fill"
          objectFit="contain"
          className="rounded-md transition-opacity duration-300"
        />
      </div>

      <p className="mt-3">{project.description}</p>

      <div className="mt-6 flex flex-col gap-3 md:flex-row">
        <Link href={project.url} target="_blank">
          <Button
            effect="expandIcon"
            icon={ArrowRightIcon}
            iconPlacement="right"
            className="w-full md:w-auto"
          >
            Visit Site
          </Button>
        </Link>
        {project.github && (
          <Link href={project.github} target="_blank">
            <Button
              className="w-full border-primary bg-transparent text-primary hover:bg-transparent hover:text-primary md:w-auto"
              variant="outline"
              effect="ringHover"
            >
              View Source
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="layout min-h-dvh" id="projects">
      <h1 className="inline-block text-4xl font-bold lg:text-5xl">Projects</h1>
      <div className="mt-6">
        <p className="mb-8 max-w-4xl">
          Talk is cheap—I believe in putting my money where my code is. Here’s a
          collection of projects that showcase my skills, creativity, and
          dedication to building things that work beautifully. Dive in and see
          what I’ve been up to!
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;