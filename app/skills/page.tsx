import { Section } from "@/components/Section";
import Card from "@/components/Card";
import SkillMeter from "@/components/SkillMeter";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import Link from "next/link";
export default function SkillsPage(){
  return(<Section title="Skills" subtitle="Visual indicators of experience plus related projects.">
    <div className="grid md:grid-cols-2 gap-6">
      {skills.map(s=>(<Card key={s.name}>
        <div className="flex items-center justify-between"><h3 className="font-semibold">{s.name}</h3><span className="badge">{s.level}%</span></div>
        <div className="mt-3"><SkillMeter level={s.level}/></div>
        {s.usedIn.length>0&&(<div className="mt-3"><p className="muted">Associated projects:</p><div className="mt-2 flex flex-wrap gap-2">{s.usedIn.map(slug=>{const p=projects.find(pp=>pp.slug===slug); if(!p) return null; return <Link key={slug} href={`/projects/${slug}`} className="badge hover:bg-white/20">{p.title}</Link>})}</div></div>)}
      </Card>))}
    </div>
  </Section>);
}