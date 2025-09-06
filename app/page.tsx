// app/page.tsx
import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Link from "next/link";
import { Section } from "@/components/Section";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <div>
      <section className="container py-16 md:py-24 grid md:grid-cols-[auto,1fr] gap-8 items-center">
        <Avatar />
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Quant, Analytics & ML for <span className="gradient-text">Markets</span>
          </h1>
          <p className="muted mt-4 max-w-2xl">
            I build data-driven trading systems, risk analytics, and clean dashboards. This portfolio highlights my work across internships, independent projects, and research.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/projects" className="btn btn-primary">View Projects</Link>
            <Link href="/experiences" className="btn">Work Experiences</Link>
          </div>
        </div>
      </section>

      <Section title="Recent Work" subtitle="Highlights from experiences and independent projects.">
        <div className="grid md:grid-cols-3 gap-6">
          {experiences.slice(0, 3).map((exp) => (
            <Card key={exp.slug}>
              <h3 className="font-semibold">
                {exp.role} — <span className="text-white/90">{exp.company}</span>
              </h3>
              <p className="muted mt-2 line-clamp-3">{exp.summary}</p>
              <Link href={`/experiences/${exp.slug}`} className="link mt-4 inline-block">
                View details →
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Featured Projects">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((p) => (
            <Card key={p.slug}>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="muted mt-2 line-clamp-3">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span className="badge" key={t}>{t}</span>
                ))}
              </div>
              <Link href={`/projects/${p.slug}`} className="link mt-4 inline-block">
                Read case study →
              </Link>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
