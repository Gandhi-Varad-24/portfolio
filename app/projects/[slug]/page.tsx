// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";
import { Section } from "@/components/Section";
import Card from "@/components/Card";
import KPI from "@/components/KPI";

export default function ProjectDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const proj = projects.find((p) => p.slug === params.slug);
  if (!proj) notFound();

  const sections = groupDetails(proj);

  const otherProjects = projects
    .filter((p) => p.slug !== proj.slug)
    .slice(0, 6);

  return (
    <div className="pb-16">
      {/* HERO */}
      <section className="container pt-12 pb-6">
        <p className="text-xs uppercase tracking-[0.18em] text-white/60">
          {proj.category}
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">{proj.title}</h1>
        <p className="muted mt-3 max-w-3xl">{proj.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {proj.tags.map((t) => (
            <span key={t} className="badge">
              {t}
            </span>
          ))}
        </div>

        {/* Links / NDA */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          {proj.links?.nda ? (
            <div className="flex items-center gap-2 text-sm text-white/80">
              <span>🔒</span>
              <span>Details and artifacts not shareable due to NDAs.</span>
            </div>
          ) : proj.links?.demo || proj.links?.report || proj.links?.code ? (
            <>
              {proj.links?.demo && (
                <a
                  className="btn"
                  href={proj.links.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Demo
                </a>
              )}
              {proj.links?.report && (
                <a
                  className="btn"
                  href={proj.links.report}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Report (PDF)
                </a>
              )}
              {proj.links?.code && (
                <a
                  className="btn"
                  href={proj.links.code}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code
                </a>
              )}
              <p className="muted text-xs basis-full">
                Links open in a new tab and are view-only.
              </p>
            </>
          ) : (
            <p className="muted text-sm">
              No public links available for this project.
            </p>
          )}
        </div>
      </section>

      {/* BODY */}
      <Section title="Case Study" subtitle="Problem • Approach • Results • Metrics">
        <div className="grid lg:grid-cols-[minmax(0,2fr),minmax(260px,1fr)] gap-8 items-start">
          {/* Main narrative */}
          <div className="flex flex-col gap-6">
            {sections.description.length > 0 && (
              <Card>
                <h2 className="text-xl font-semibold mb-2">Overview</h2>
                <RichParagraphs text={sections.description.join("\n\n")} />
              </Card>
            )}

            {sections.approach.length > 0 && (
              <Card>
                <h2 className="text-xl font-semibold mb-2">Approach</h2>
                <ul className="space-y-3 list-disc list-inside text-white/80">
                  {sections.approach.map((text, i) => (
                    <li key={i}>
                      <HighlightedHeading inline text={text} />
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {sections.results.length > 0 && (
              <Card>
                <h2 className="text-xl font-semibold mb-2">Results & Impact</h2>
                <ul className="space-y-3 list-disc list-inside text-white/80">
                  {sections.results.map((text, i) => (
                    <li key={i}>
                      <HighlightedHeading inline text={text} />
                    </li>
                  ))}
                </ul>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            <Card>
              <h3 className="font-semibold mb-3">Key Metrics</h3>
              {proj.kpis && proj.kpis.length > 0 ? (
                <div className="grid grid-cols-1 gap-3">
                  {proj.kpis.map((k, i) => (
                    <KPI
                      key={i}
                      label={k.label}
                      value={k.value}
                      delta={k.delta}
                    />
                  ))}
                </div>
              ) : (
                <p className="muted text-sm">
                  Metrics are qualitative for this project.
                </p>
              )}
            </Card>

            <Card>
              <h3 className="font-semibold mb-3">Project Metadata</h3>
              <ul className="text-sm text-white/80 space-y-2">
                <li>
                  <span className="text-white/60">Category:</span>{" "}
                  {proj.category}
                </li>
                <li>
                  <span className="text-white/60">Tags:</span>{" "}
                  {proj.tags.join(", ")}
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="font-semibold mb-3">More Projects</h3>
              <div className="flex flex-col gap-2 text-sm">
                {otherProjects.map((p) => (
                  <Link key={p.slug} href={`/projects/${p.slug}`} className="link">
                    {p.title} →
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>
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
    if (t.startsWith("Problem:") || t.startsWith("Overview:") || t.startsWith("Description:")) {
      description.push(stripPrefix(t));
    } else if (
      t.startsWith("Approach:") ||
      t.startsWith("Modeling:") ||
      t.startsWith("Tech:")
    ) {
      approach.push(stripPrefix(t));
    } else if (
      t.startsWith("Results:") ||
      t.startsWith("Impact:") ||
      t.startsWith("Outcome:")
    ) {
      results.push(stripPrefix(t));
    } else {
      // If no prefix, treat first items as description by default.
      description.push(t);
    }

    if (d.impact) {
      results.push(d.impact.trim());
    }
  }

  return { description, approach, results };
}

function stripPrefix(text: string) {
  const idx = text.indexOf(":");
  return idx > 0 ? text.slice(idx + 1).trim() : text;
}

function RichParagraphs({ text }: { text: string }) {
  return (
    <div className="prose prose-invert max-w-none">
      {text.split(/\n{2,}/).map((p, i) => (
        <p key={i} className="text-white/80 leading-relaxed">
          {p}
        </p>
      ))}
    </div>
  );
}

function HighlightedHeading({
  text,
  inline = false
}: {
  text: string;
  inline?: boolean;
}) {
  const idx = text.indexOf(":");
  if (idx <= 0) {
    return (
      <span className={inline ? "text-white/80" : "muted"}>
        {text}
      </span>
    );
  }
  const head = text.slice(0, idx).trim();
  const body = text.slice(idx + 1).trim();
  return inline ? (
    <span>
      <span className="font-semibold text-white">{head}: </span>
      <span className="text-white/80">{body}</span>
    </span>
  ) : (
    <>
      <h3 className="font-semibold">{head}</h3>
      <p className="muted mt-2">{body}</p>
    </>
  );
}
