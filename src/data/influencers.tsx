export interface Influencer {
  name: string;
  niche: string;
  campaigns: number;
  img: string;
  initials: string;
}

export const allInfluencers: Influencer[] = [
  { name: "Ana García", niche: "Moda", campaigns: 142, img: "/images/influencer-1.jpg", initials: "AG" },
  { name: "Carlos López", niche: "Tecnologia", campaigns: 98, img: "/images/influencer-2.jpg", initials: "CL" },
  { name: "Maria Torres", niche: "Fitness", campaigns: 87, img: "/images/influencer-3.jpg", initials: "MT" },
  { name: "Diego Ruiz", niche: "Viagem", campaigns: 120, img: "/images/influencer-4.jpg", initials: "DR" },
  { name: "Laura Vega", niche: "Beleza", campaigns: 65, img: "/images/influencer-5.jpg", initials: "LV" },
  { name: "Pedro Morales", niche: "Games", campaigns: 73, img: "/images/influencer-6.jpg", initials: "PM" },
  { name: "Sofia Herrera", niche: "Gastronomia", campaigns: 55, img: "/images/influencer-7.jpg", initials: "SH" },
  { name: "Andrés Castillo", niche: "Música", campaigns: 41, img: "/images/influencer-8.jpg", initials: "AC" },
  { name: "Valentina Ríos", niche: "Estilo de Vida", campaigns: 18, img: "/images/influencer-9.jpg", initials: "VR" },
  { name: "Mateo Silva", niche: "Educação", campaigns: 12, img: "/images/influencer-10.jpg", initials: "MS" },
  { name: "Camila Ortiz", niche: "Saúde", campaigns: 22, img: "/images/influencer-11.jpg", initials: "CO" },
  { name: "Nicolás Peña", niche: "Esportes", campaigns: 15, img: "/images/influencer-12.jpg", initials: "NP" },
];

export const influencersByCategory = {
  top: allInfluencers.slice(0, 4),
  sponsored: allInfluencers.slice(4, 8),
  rising: allInfluencers.slice(8, 12),
};
