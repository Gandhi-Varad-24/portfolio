// app/education/page.tsx
import { Section } from "@/components/Section";
import Card from "@/components/Card";
import { education } from "@/data/education";

export default function EducationPage() {
  return (
    <Section
      title="Education"
      subtitle="Degrees, key coursework, and academic highlights."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((e) => (
          <Card key={e.slug}>
            <h3 className="text-xl font-semibold">{e.degree}</h3>
            <p className="muted mt-1">
              {e.school} {e.location ? `• ${e.location}` : ""} • {e.start} – {e.end}
            </p>
            {e.gpa && (
              <p className="mt-2">
                <span className="badge">GPA</span>{" "}
                <span className="ml-2">{e.gpa}</span>
              </p>
            )}
            {e.summary && <p className="muted mt-3">{e.summary}</p>}

            {e.coursework && e.coursework.length > 0 && (
              <div className="mt-4">
                <p className="muted">Selected coursework:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {e.coursework.map((c) => (
                    <span key={c} className="badge">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {e.highlights && e.highlights.length > 0 && (
              <div className="mt-4">
                <p className="muted">Highlights:</p>
                <ul className="mt-2 list-disc list-inside text-white/80 space-y-1">
                  {e.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
