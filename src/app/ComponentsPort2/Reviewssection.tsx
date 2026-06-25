"use client";

import Image from "next/image";
import { FiStar } from "react-icons/fi";

const REVIEWS = [
  {
    company: "Unitel Angola",
    logo: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1779723813/unitel_ajkkgz.jpg",
    stars: 5,
    comment:
      "Campanha de verão entregue dentro do prazo com resultados acima das expectativas. Profissionalismo excepcional e comunicação clara durante todo o processo.",
  },
  {
    company: "Kero Hipermercados",
    logo: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1779723813/unitel_ajkkgz.jpg",
    stars: 5,
    comment:
      "Excelente criadora de conteúdo. O conteúdo gerou um aumento significativo nas visitas à loja durante a campanha.",
  },
  {
    company: "Africell Angola",
    logo: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1779723813/unitel_ajkkgz.jpg",
    stars: 4,
    comment:
      "Entrega de alta qualidade e grande alinhamento com o nosso público-alvo. Excelente parceria.",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex justify-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <FiStar
          key={i}
          size={16}
          className={
            i < count
              ? "text-amber-400 fill-amber-400"
              : "text-gray-200"
          }
          style={i < count ? { fill: "currentColor" } : {}}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
            Empresas que confiaram no trabalho
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {REVIEWS.map((review) => (
            <div
              key={review.company}
              className="relative pt-10"
            >
              {/* Logo */}
              <div
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  top-0
                  z-10
                "
              >
                <div
                  className="
                    w-20
                    h-20
                    rounded-full
                    bg-white
                    border
                    border-gray-100
                    shadow-lg
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                  "
                >
                  <Image
                    src={review.logo}
                    alt={review.company}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Card */}
              <div
                className="
                  h-full
                  bg-white
                  rounded-[32px]
                  border
                  border-gray-100
                  shadow-sm
                  px-8
                  pt-16
                  pb-8
                  text-center
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                <div className="mb-5">
                  <StarRow count={review.stars} />
                </div>

                <p
                  className="
                    text-gray-700
                    leading-relaxed
                    text-sm
                    md:text-base
                  "
                >
                  {review.comment}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}