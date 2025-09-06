import { Section } from "@/components/Section";
import Card from "@/components/Card";
import { research } from "@/data/research";
export default function ResearchPage(){
  return(<Section title="Research" subtitle="Abstracts and descriptions for published and in-progress work.">
    <div className="grid md:grid-cols-2 gap-6">
      {research.map(r=>(<Card key={r.slug}><h3 className="text-xl font-semibold">{r.title}</h3><p className="muted mt-1">{r.status}{r.venue?` • ${r.venue}`:''}{r.date?` • ${r.date}`:''}</p><p className="mt-3"><span className="badge">Abstract</span> <span className="ml-2">{r.abstract}</span></p><p className="muted mt-3">{r.description}</p>{r.link&&<a className="link mt-3 inline-block" href={r.link} target="_blank" rel="noreferrer">Read more →</a>}</Card>))}
    </div>
  </Section>);
}