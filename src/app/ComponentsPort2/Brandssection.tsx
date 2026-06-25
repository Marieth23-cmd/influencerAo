"use client";

const BRANDS = [
  { name: "Unitel", abbr: "UN" },
  { name: "BAI", abbr: "BAI" },
  { name: "Multichoice", abbr: "MC" },
  { name: "Refriango", abbr: "RF" },
  { name: "Africell", abbr: "AF" },
  { name: "Kero", abbr: "KR" },
];

export default function BrandsSection() {
  return (
    <section className="bg-gray-50 border-b border-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xl font-semibold tracking-widest text-gray-400 uppercase mb-6">
          Marcas que já colaboraram
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {BRANDS.map((b) => (
            <div
              key={b.name}
              className="group flex items-center gap-2 bg-white border 
             rounded-full px-5 py-5 transition-all cursor-default"
            >
              
              <span className="text-xs tracking-[0.3em] font-semibold text-gray-500 group-hover:text-blue-600 transition-colors">
                {b.abbr}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}