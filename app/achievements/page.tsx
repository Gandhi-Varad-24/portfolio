import { Section } from "@/components/Section";
import Card from "@/components/Card";
import { achievements } from "@/data/achievements";
export default function AchievementsPage(){
  return(<Section title="Achievements" subtitle="Awards, recognitions, and notable milestones.">
    <div className="grid md:grid-cols-2 gap-6">
      {achievements.map((a,i)=>(<Card key={i}><h3 className="font-semibold">{a.title}</h3><p className="muted mt-1">{a.date??""} {a.note??""}</p></Card>))}
    </div>
  </Section>);
}