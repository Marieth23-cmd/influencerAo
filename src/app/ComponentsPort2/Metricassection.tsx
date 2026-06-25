"use client";
import Image from "next/image";

const DATA = {
  title: "Porque trabalhar comigo?",

  process: [
    "Análise",
    "Estratégia",
    "Roteirização",
    "Produção",
    "Edição",
    "Entrega",
  ],

  metrics: [
    {
      label: "Audiência Total",
      value: "1M",
    },
    {
      label: "Views Médias",
      value: "1M",
    },
    {
      label: "Brand Collabs",
      value: "20",
    },
    {
      label: "Experiência",
      value: "5 anos",
    },
  ],
};

export default function ProcessAndMetrics() {
  return (
    <section className="py-24 overflow-hidden">
      <div
        className="
          
         
          bg-gradient-to-r
          from-blue-600
          via-blue-700
          to-slate-900
          p-10
          md:p-10
          text-white
        "
      >
        <div  className="max-w-7xl
          mx-auto px-4">
      
        <h2 className="text-4xl md:text-5xl  font-bold mb-12">
          {DATA.title}
        </h2>

        <div className="grid lg:grid-cols-3 gap-4 items-center">
          {/* Processo */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white/80">
              Processo Criativo
            </h3>

            <div className="space-y-4">
              {DATA.process.map((step, index) => (
                <div
                  key={step}
                  className="
                    flex
                    items-center
                    gap-4
                    bg-white/10
                    border
                    border-white/20
                    backdrop-blur-md
                    rounded-full
                    px-5
                    py-4
                  "
                >
                  <span
                    className="
                      h-8
                      w-8
                      rounded-full
                      bg-white/10
                      border
                      border-white/20
                      flex
                      items-center
                      justify-center
                      text-sm
                    "
                  >
                    {index + 1}
                  </span>

                  <span className="text-lg">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Foto */}
          <div className="flex justify-center">
            <div
              className="
                h-[550px]
                w-[350px]
                rounded-[40px]
                overflow-hidden
                border-4
                border-white/20
                shadow-2xl
              "
            >
              <Image
              height={450}
              width={250}
              src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1780931434/Captura_de_ecr%C3%A3_2026-06-08_160954_dvbitp.png"
              alt=""
              className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Métricas */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white/80">
              Resultados
            </h3>

            <div className="space-y-5">
              {DATA.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="
                    flex
                    justify-between
                    items-center
                    bg-white/10
                    border
                    border-white/10
                    backdrop-blur-md
                    rounded-full
                    px-5
                    py-4
                  "
                >
                  <span className="text-white/80">
                    {metric.label}
                  </span>

                  <span className="text-2xl font-bold">
                    {metric.value}
                  </span>
                </div>
                
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}