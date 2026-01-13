import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  {
    href: "https://github.com/JoaoMorais03",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/joão-pedro-de-morais-8922782b8",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:jp.morais800@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Photo */}
          <a
            href="#"
            className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-accent/50 hover:ring-accent transition-all"
          >
            <Image
              src="/photo.jpeg"
              alt="João Morais"
              fill
              className="object-cover"
            />
          </a>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-border hover:border-accent hover:text-accent transition-all"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500" /> by João
            Morais
          </p>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
