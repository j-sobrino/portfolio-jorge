import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe, Award } from "lucide-react";
import type { ProjectItem } from "@/data/portfolio";

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <article
          className="group relative cursor-pointer overflow-hidden rounded-lg border border-border bg-card/50 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          aria-label={`Open details for ${project.title}`}
        >
          <div className="relative">
            <img
              src={project.image}
              alt={`${project.title} project preview screenshot`}
              loading="lazy"
              className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            {project.award && (
              <div className="absolute top-2 left-2 bg-amber-500/90 text-amber-50 px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                <Award className="h-3 w-3" />
                Winner
              </div>
            )}
            <div className="absolute top-2 right-2 flex gap-1">
              {project.websiteUrl && (
                <Button size="icon" variant="secondary" className="h-8 w-8" asChild>
                  <a href={project.websiteUrl} target="_blank" rel="noreferrer noopener" aria-label={`Visit ${project.title} website`} onClick={(e) => e.stopPropagation()}>
                    <Globe className="h-3 w-3" />
                  </a>
                </Button>
              )}
              {project.repoUrl && (
                <Button size="icon" variant="secondary" className="h-8 w-8" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer noopener" aria-label={`Open repository for ${project.title}`} onClick={(e) => e.stopPropagation()}>
                    <Github className="h-3 w-3" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <div className="p-4 space-y-3">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.blurb}</p>
            <div className="flex flex-wrap gap-1">
              {project.stack.map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.blurb}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative">
            <img
              src={project.image}
              alt={`${project.title} detailed screenshot`}
              loading="lazy"
              className="h-56 w-full rounded-md object-cover"
            />
            {project.award && (
              <div className="absolute top-2 left-2 bg-amber-500 text-amber-50 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                <Award className="h-4 w-4" />
                {project.award}
              </div>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{project.details}</p>
          <div className="flex flex-wrap items-center gap-2">
            {project.stack.map((s) => (
              <span key={s} className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">
                {s}
              </span>
            ))}
          </div>
          <div className="flex justify-end gap-2">
            {project.websiteUrl && (
              <Button variant="outline" asChild>
                <a href={project.websiteUrl} target="_blank" rel="noreferrer noopener" aria-label={`Visit ${project.title} website`}>
                  <Globe className="h-4 w-4" />
                  Website
                </a>
              </Button>
            )}
            {project.repoUrl && (
              <Button asChild>
                <a href={project.repoUrl} target="_blank" rel="noreferrer noopener" aria-label={`Open repository for ${project.title}`}>
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
