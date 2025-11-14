// components/ProjectCard.tsx
import Link from "next/link";
import Card from "./Card";
import KPI from "./KPI";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const kpis = project.kpis ?? [];

  return (
    <Card className="flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-xl transition-transform duration-200">
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="text-xs uppercase tracking-wide text-white/60">
            {project.category}
          </span>
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="badge text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="muted mt-2 line-clamp-3">{project.summary}</p>

        {kpis.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-2">
            {kpis.slice(0, 2).map((k, i) => (
              <KPI key={i} label={k.label} value={k.value} delta={k.delta} />
            ))}
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <Link href={`/projects/${project.slug}`} className="link font-medium">
          View case study →
        </Link>
        {project.links?.report && (
          <span className="text-xs text-white/60">PDF available</span>
        )}
      </div>
    </Card>
  );
}
