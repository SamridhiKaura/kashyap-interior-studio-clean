const points = [
  { h: "Experience", p: "5+ years delivering residential & commercial interiors." },
  { h: "Detail Oriented", p: "Materials, lighting, joinery—every inch matters." },
  { h: "End-to-End", p: "Concept → 3D → execution with on-ground team." },
  { h: "Local Expertise", p: "Chandigarh/Mohali region with trusted vendors." },
];

export default function WhyUs() {
  return (
    <section className="bg-[var(--offwhite)]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold">Why Choose Us</h2>
        <p className="mt-3 text-neutral-700">
          We craft functional, beautiful spaces with clarity, quality, and a personal touch.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.h} className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-semibold">{p.h}</h3>
              <p className="mt-2 text-sm text-neutral-700">{p.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
