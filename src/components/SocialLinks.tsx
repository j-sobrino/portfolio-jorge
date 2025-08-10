import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
}

export const SocialLinks = ({ className }: SocialLinksProps) => {
  const items = [
    { href: profile.links.email, label: "Email", Icon: Mail, bgColor: "bg-gray-700", textColor: "text-white" },
    { href: profile.links.linkedin, label: "LinkedIn", Icon: Linkedin, bgColor: "bg-[#0A66C2]", textColor: "text-white" },
    { href: profile.links.github, label: "GitHub", Icon: Github, bgColor: "bg-black", textColor: "text-white" },
  ];

  return (
    <nav aria-label="Social links" className={cn("flex items-center gap-4", className)}>
      {items.map(({ href, label, Icon, bgColor, textColor }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
          aria-label={label}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 ${bgColor} ${textColor} transition-transform duration-200 hover:scale-105 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
