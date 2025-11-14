// app/projects/page.tsx
import { projects } from "@/data/projects";
import { Section } from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

const categoryOrder = [
  "ML & Trading",
  "ML & Crypto",
  "Risk & Fixed Income",
  "Risk & Equities",
  "Portfolio & Factor Investing",
  "Valuation & Deals",
  "Valuation & Corporate Finance",
  "Macro & Econometrics",
  "Derivatives & Hedging",
  "Equity Research",
  "Analytics & BI",
  "Accounting & Reporting",
  "Fundamental Analysis",
  "Applied ML"
];

export default function ProjectsPage() {
  const categorized = new Map<string, typeof projects>();

  for (const p of projects) {
    if (!categorized.has(p.category)) categorized.set(p.category, []);
    categorized.get(p.category)!.push(p);
  }

  const sortedCategories = categoryOrder.filter((c) => categorized.has(c));

  return (
    <div className="pb-16">
      <section className="container pt-12 pb-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          Projects & Case Studies
        </h1>
        <p className="muted mt-3 max-w-3xl">
          A selection of quantitative research, trading systems, risk analytics,
          valuation work and decision-support tools I’ve built across internships,
          research and independent projects.
        </p>
      </section>

      {sortedCategories.map((category) => {
        const list = categorized.get(category)!;
        return (
          <Section
            key={category}
            title={category}
            subtitle={
              category.startsWith("ML") || category.startsWith("Risk")
                ? "Deeper, model-driven work with a focus on validation and risk."
                : undefined
            }
          >
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {list.map((proj) => (
                <ProjectCard key={proj.slug} project={proj} />
              ))}
            </div>
          </Section>
        );
      })}
    </div>
  );
}
