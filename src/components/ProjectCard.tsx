import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
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
          <img
            src={project.image}
            alt={`${project.title} project preview screenshot`}
            loading="lazy"
            className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{project.blurb}</p>
          </div>
        </article>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.blurb}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <img
            src={project.image}
            alt={`${project.title} detailed screenshot`}
            loading="lazy"
            className="h-56 w-full rounded-md object-cover"
          />
          <p className="text-sm text-muted-foreground">{project.details}</p>
          <div className="flex flex-wrap items-center gap-2">
            {project.stack.map((s) => (
              <span key={s} className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">
                {s}
              </span>
            ))}
          </div>
          <div className="flex justify-end">
            <Button asChild>
              <a href={project.repoUrl} target="_blank" rel="noreferrer noopener" aria-label={`Open repository for ${project.title}`}>
                View Code <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
