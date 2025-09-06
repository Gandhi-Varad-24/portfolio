// app/projects/page.tsx
import { projects } from "@/data/projects";
import Card from "@/components/Card";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <p className="muted mb-10 max-w-2xl">
        A collection of research, trading systems, analytics and engineering work.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Card key={p.slug}>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="muted mt-2 line-clamp-3">{p.summary}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span className="badge" key={t}>{t}</span>
              ))}
            </div>

            <Link href={`/projects/${p.slug}`} className="link mt-4 inline-block">
              View details →
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
