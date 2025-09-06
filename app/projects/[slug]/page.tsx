import { notFound } from "next/navigation";
import { projects, type Project } from "@/data/projects";
import Card from "@/components/Card";
import KPI from "@/components/KPI";
import Link from "next/link";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const proj = projects.find((p) => p.slug === params.slug);
  if (!proj) notFound();

  const sections = groupDetails(proj);

  return (
    <div>
      {/* HERO */}
      <section className="container pt-12 pb-6">
        <h1 className="text-3xl md:text-5xl font-bold">{proj.title}</h1>
        <p className="muted mt-3 max-w-3xl">{proj.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {proj.tags.map((t) => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>
      </section>

      <section className="container pb-16">
        {/* Links (NDA-aware) */}
        <h2 className="section-title mb-3">Links</h2>
        <Card>
          {proj.links?.nda ? (
            <div className="flex items-center gap-3">
              <span className="text-lg">🔒</span>
              <p className="text-white/80">Not shareable due to NDAs with the company.</p>
            </div>
          ) : proj.links?.demo || proj.links?.report || proj.links?.code ? (
            <div className="flex flex-wrap gap-3">
              {proj.links?.demo && (
                <a className="btn" href={proj.links.demo} target="_blank" rel="noreferrer">View Demo</a>
              )}
              {proj.links?.report && (
                <a className="btn" href={proj.links.report} target="_blank" rel="noreferrer">View Report (PDF)</a>
              )}
              {proj.links?.code && (
                <a className="btn" href={proj.links.code} target="_blank" rel="noreferrer">View Code</a>
              )}
              <p className="muted text-sm basis-full">Note: Links open in a new tab and are view-only.</p>
            </div>
          ) : (
            <p className="muted">No public links available.</p>
          )}
        </Card>

        {/* Description */}
        <h2 className="section-title mt-10 mb-3">Description</h2>
        <Card><RichParagraphs text={sections.description.join("\n\n")} /></Card>

        {/* Approach */}
        <h2 className="section-title mt-10 mb-3">Approach</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {sections.approach.map((text, i) => (
            <Card key={i}><HighlightedHeading text={text} /></Card>
          ))}
        </div>

        {/* Results */}
        <h2 className="section-title mt-10 mb-3">Results</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1 flex flex-col gap-3">
            {(proj.kpis ?? []).map((k, i) => (
              <KPI key={i} label={k.label} value={k.value} delta={k.delta} />
            ))}
          </div>
          <div className="md:col-span-2">
            <Card>
              <ul className="space-y-3 list-disc list-inside">
                {sections.results.map((text, i) => (
                  <li key={i} className="text-white/80">
                    <HighlightedHeading inline text={text} />
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        {/* Footer nav */}
        <div className="mt-12 flex flex-wrap gap-3">
          {projects.filter((p) => p.slug !== proj.slug).slice(0, 4).map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="btn">
              {p.title} →
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ---------- helpers ---------- */
function groupDetails(proj: Project) {
  const description: string[] = [];
  const approach: string[] = [];
  const results: string[] = [];
  for (const d of proj.details) {
    const t = d.description.trim();
    if (t.startsWith("Problem:") || t.startsWith("Description:")) description.push(t.replace(/^\w+:\s*/, ""));
    else if (t.startsWith("Approach:") || t.startsWith("Modeling:") || t.startsWith("Tech:")) approach.push(t.replace(/^\w+:\s*/, ""));
    else if (t.startsWith("Results:") || t.startsWith("Validation:") || t.startsWith("Impact:")) results.push(t.replace(/^\w+:\s*/, ""));
    else description.push(t);
    if (d.impact) results.push(d.impact);
  }
  return { description, approach, results };
}
function RichParagraphs({ text }: { text: string }) {
  return (
    <div className="prose prose-invert max-w-none">
      {text.split(/\n{2,}/).map((p, i) => (
        <p key={i} className="text-white/80 leading-relaxed">{p}</p>
      ))}
    </div>
  );
}
function HighlightedHeading({ text, inline = false }: { text: string; inline?: boolean }) {
  const i = text.indexOf(":");
  if (i <= 0) return <span className={inline ? "text-white/80" : "muted"}>{text}</span>;
  const head = text.slice(0, i).trim();
  const body = text.slice(i + 1).trim();
  return inline ? (
    <span><span className="font-semibold text-white">{head}: </span><span className="text-white/80">{body}</span></span>
  ) : (
    <>
      <h3 className="font-semibold">{head}</h3>
      <p className="muted mt-2">{body}</p>
    </>
  );
}

