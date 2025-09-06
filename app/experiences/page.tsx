import Card from "@/components/Card";
import { Section } from "@/components/Section";
import Link from "next/link";
import { experiences } from "@/data/experiences";
export default function ExperiencesPage(){
  return(<Section title="Work Experiences" subtitle="Click an experience to see projects with title, description, and impact.">
    <div className="grid md:grid-cols-2 gap-6">
      {experiences.map(exp=>(<Card key={exp.slug}><h3 className="text-xl font-semibold">{exp.role} — <span className="text-white/90">{exp.company}</span></h3><p className="muted mt-1">{exp.location} • {exp.start} – {exp.end}</p><p className="muted mt-3">{exp.summary}</p><Link className="link mt-4 inline-block" href={`/experiences/${exp.slug}`}>Open details →</Link></Card>))}
    </div>
  </Section>);
}