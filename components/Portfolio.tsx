import Image from "next/image";

const projects = [
  { src: "/portfolio/kit.jpg", title: "Modern Kitchen – Mohali" },
  { src: "/portfolio/accent-wall.jpg", title: "Accent Wall – Zirakpur" },
  { src: "/portfolio/wardrobe.jpg", title: "Wardrobe Unit – Chandigarh" },
  { src: "/portfolio/kitchen-white.jpg", title: "U-Shaped Kitchen – Mohali" },
  { src: "/portfolio/divider-planter.jpg", title: "Wooden Divider with Planters" },
  { src: "/portfolio/kids-bunk-bed.jpg", title: "Kids Bunk Bed with Storage" },
  { src: "/portfolio/Mirror.jpg", title: "Mirror Design – Light Palette" },
  { src: "/portfolio/partition-geometric.jpg", title: "Geometric Partition Feature" },
  { src: "/portfolio/pooja-arch.jpg", title: "Pooja Niche – Arch & Backlit OM" },
  { src: "/portfolio/foyer-unit.jpg", title: "Foyer/Bar Unit – Walnut & Mirror" },
  { src: "/portfolio/kitchen-pendants.jpg", title: "Kitchen with Pendant Lighting" },
   { src: "/portfolio/office.jpg", title: "Office Reception with lights" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold">Recent Projects</h2>
        <p className="mt-3 text-neutral-700">
          A peek into our favorite transformations across Punjab—crafted with passion and precision.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <figure key={p.src} className="overflow-hidden rounded-lg border bg-[var(--offwhite)]">
              <Image src={p.src} alt={p.title} width={1200} height={800} className="h-56 w-full object-cover" />
              <figcaption className="p-4 text-sm text-neutral-700">{p.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
