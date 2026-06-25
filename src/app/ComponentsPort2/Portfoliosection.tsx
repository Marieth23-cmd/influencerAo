"use client";

import {
  FiCheckCircle, FiPlay, FiEye,FiUsers,} from "react-icons/fi";
  import Image from "next/image";

const CAMPAIGNS = [
  {
    type: "video",
    title: "Verão Unitel 2024",
    brand: "Unitel",
    views: "420K",
    reach: "380K",
    verified: true,
    image:
      "https://res.cloudinary.com/dhpa1juyr/image/upload/v1781023258/Captura_de_ecr%C3%A3_2026-06-08_171338_if5usc.png",
  },
  {
    type: "image",
    title: "Coleção Primavera",
    brand: "Kero Fashion",
    views: "210K",
    reach: "195K",
    verified: true,
    image:
      "https://res.cloudinary.com/dhpa1juyr/image/upload/v1781023258/Captura_de_ecr%C3%A3_2026-06-08_171338_if5usc.png",
  },
  {
    type: "image",
    title: "Campanha Africell",
    brand: "Africell Angola",
    views: "310K",
    reach: "280K",
    verified: true,
    image:
      "https://res.cloudinary.com/dhpa1juyr/image/upload/v1780931434/Captura_de_ecr%C3%A3_2026-06-08_160954_dvbitp.png",
  },
];

function CampaignCard({
  campaign,
}: {
  campaign: (typeof CAMPAIGNS)[0];
}) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border border-gray-200
        bg-black
        aspect-[9/12]
        shadow-sm
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-2xl hover:shadow-black/10
      "
    >
      {/* Imagem */}
      <Image
        height={500}
        width={300}
        src={campaign.image}
        alt={campaign.title}
        className="
          absolute inset-0
          w-full h-full object-cover
          transition-transform duration-700
          group-hover:scale-105
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

      {/* Badge */}
      {campaign.verified && (
        <div
          className="
            absolute top-4 left-4
            flex items-center gap-1
            bg-white/90
            backdrop-blur-md
            text-xs font-medium
            px-3 py-1.5
            rounded-full
            text-blue-700
          "
        >
          <FiCheckCircle size={12} />
          Verificada
        </div>
      )}

      {/* Tipo */}
      <div
        className="
          absolute top-4 right-4
          w-10 h-10
          rounded-full
          bg-white/15
          backdrop-blur-md
          border border-white/20
          flex items-center justify-center
        "
      >
        {campaign.type === "video" ? (
          <FiPlay className="text-white ml-0.5" size={16} />
        ) : (
          <FiEye className="text-white" size={16} />
        )}
      </div>

      {/* Conteúdo */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-sm text-white/70 font-medium mb-1">
          {campaign.brand}
        </p>

        <h3 className="text-xl font-semibold text-white leading-tight mb-4">
          {campaign.title}
        </h3>

        <div className="flex items-center gap-4 text-white/70 text-sm">
          <div className="flex items-center gap-1.5">
            <FiPlay size={14} />
            <span>{campaign.views}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <FiUsers size={14} />
            <span>{campaign.reach}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="mb-12">
          

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Campanhas realizadas
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAMPAIGNS.map((campaign) => (
            <CampaignCard
              key={campaign.title}
              campaign={campaign}
            />
          ))}
        </div>
      </div>
    </section>
  );
}