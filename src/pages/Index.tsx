import SocialLinks from "@/components/SocialLinks";
import ProjectCard from "@/components/ProjectCard";
import { profile, experience, projects, education, languages } from "@/data/portfolio";

const Index = () => {
  return (
    <div className="min-h-screen bg-ambient">
      <header className="container mx-auto px-4 py-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground">{profile.role}</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight">Software Engineering Internship Portfolio</h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">{profile.tagline}</p>
          </div>
          <SocialLinks />
        </div>
      </header>

      <main>
        <section id="experience" className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {experience.map((exp) => (
              <article key={`${exp.company}-${exp.role}`} className="rounded-lg border border-border bg-card/50 p-5 hover-lift">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <span className="text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{exp.company}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {exp.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-1 text-sm text-muted-foreground">An appealing glance — click to learn more and view code.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((proj) => (
              <ProjectCard key={proj.title} project={proj} />)
            )}
          </div>
        </section>

        <section id="education" className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {education.map((ed) => (
              <article key={`${ed.school}-${ed.degree}`} className="rounded-lg border border-border bg-card/50 p-5 hover-lift">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{ed.school}</h3>
                  <span className="text-xs text-muted-foreground">{ed.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{ed.degree}</p>
                {ed.notes && <p className="mt-2 text-sm text-muted-foreground">{ed.notes}</p>}
              </article>
            ))}
          </div>
        </section>

        <section id="languages" className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Languages</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {languages.map((l) => (
              <span key={l.name} className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                {l.name} — {l.level}
              </span>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 bg-background/70">
        <div className="container mx-auto flex items-center justify-between px-4 py-8">
          <div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          </div>
          <SocialLinks />
        </div>
      </footer>
    </div>
  );
};

export default Index;
