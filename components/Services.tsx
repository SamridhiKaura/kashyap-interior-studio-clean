const items = [
  { title: "Residential Interiors", desc: "Living rooms, bedrooms, modular kitchens, flats & villas." },
  { title: "Commercial & Offices", desc: "Offices, showrooms, cafés, society common areas." },
  { title: "Custom Wooden Work", desc: "Wardrobes, TV units, modular storage, partitions, wall panels." },
  { title: "Lighting & Décor", desc: "Ambient lighting, accessory selection & styling." },
];

export default function Services() {
  return (
    <section id="services" className="bg-[var(--offwhite)]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--charcoal)]">Our Expertise</h2>
        <p className="mt-3 text-[var(--charcoal)]/80">
          From concept to installation—tailored designs delivered with precision by our skilled team of 5–10 craftsmen.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.title} className="rounded-lg border p-6 hover:shadow-md bg-white">
              <h3 className="font-semibold">{i.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
