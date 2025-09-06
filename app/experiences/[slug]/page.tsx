import { notFound } from "next/navigation";
import { experiences } from "@/data/experiences";
import Card from "@/components/Card";
import { Section } from "@/components/Section";
export default function ExperienceDetail({ params }:{ params:{slug:string}}){
  const exp=experiences.find(e=>e.slug===params.slug); if(!exp){notFound();}
  return(<div>
    <Section title={`${exp!.role} — ${exp!.company}`} subtitle={`${exp!.location??""} • ${exp!.start} – ${exp!.end}`}>
      <Card><p className="muted">{exp!.summary}</p></Card>
    </Section>
    <Section title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {exp!.projects.map((p,i)=>(<Card key={i}><h3 className="font-semibold">{p.title}</h3><p className="muted mt-2">{p.description}</p><p className="mt-3"><span className="badge">Impact</span> <span className="ml-2">{p.impact}</span></p></Card>))}
      </div>
    </Section>
  </div>);
}