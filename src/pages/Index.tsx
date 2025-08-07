import SocialLinks from "@/components/SocialLinks";
import ProjectCard from "@/components/ProjectCard";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { profile, experience, projects, education, languages, profileImage } from "@/data/portfolio";

const Index = () => {
  return (
    <div className="min-h-screen bg-ambient">
      <header className="container mx-auto px-4 py-10">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-start gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={profileImage} alt={profile.name} />
              <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm text-muted-foreground">{profile.role}</p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight">{profile.name}</h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">{profile.tagline}</p>
            </div>
          </div>
          <SocialLinks />
        </div>
        
        <section className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-2">
            {languages.map((l) => (
              <span key={l.name} className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm shadow-sm">
                <span className="text-base">{l.flag}</span>
                <span className="font-medium">{l.name}</span>
                <span className="text-muted-foreground">—</span>
                <span className="text-muted-foreground">{l.level}</span>
              </span>
            ))}
          </div>
        </section>
      </header>

      <main>
        <section id="experience" className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {experience.map((exp) => (
              <article key={`${exp.company}-${exp.role}`} className="rounded-lg border border-border bg-card/50 p-5 hover-lift">
                <div className="flex items-start gap-4">
                  {exp.logo && (
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="h-12 w-12 object-contain flex-shrink-0"
                    />
                  )}
                  <div className="flex-1">
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
                  </div>
                </div>
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
                <div className="flex items-start gap-4">
                  {ed.logo && (
                    <img 
                      src={ed.logo} 
                      alt={`${ed.school} logo`}
                      className="h-12 w-12 object-contain flex-shrink-0"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{ed.school}</h3>
                      <span className="text-xs text-muted-foreground">{ed.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{ed.degree}</p>
                    {ed.notes && <p className="mt-2 text-sm text-muted-foreground">{ed.notes}</p>}
                  </div>
                </div>
              </article>
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
