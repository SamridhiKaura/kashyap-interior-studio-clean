const steps = [
  ["Consult & Briefing", "Understand goals, scope, and budget."],
  ["Concept & Mood Board", "Style direction, materials, finishes."],
  ["3D Design & Approval", "Interactive renders for feedback."],
  ["Execution & Handover", "On-site implementation with QC."],
];

export default function Process() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold">From Vision to Reality</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          {steps.map(([title, desc], i) => (
            <div key={title} className="rounded-lg border p-6">
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand)] text-sm font-bold">
                {i + 1}
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
