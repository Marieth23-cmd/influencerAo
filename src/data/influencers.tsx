export interface Influencer {
  name: string;
  niche: string;
  campaigns: number;
  img: string;
  initials: string;
  engagement: number;
}

export const allInfluencers: Influencer[] = [
  { name: "Ana García", niche: "Moda", campaigns: 142, img: "/images/influencer-1.jpg", initials: "AG", engagement: 4.5 },
  { name: "Carlos López", niche: "Tecnologia", campaigns: 98, img: "/images/influencer-2.jpg", initials: "CL", engagement: 3.8 },
  { name: "Maria Torres", niche: "Fitness", campaigns: 87, img: "/images/influencer-3.jpg", initials: "MT", engagement: 4.2 },
  { name: "Diego Ruiz", niche: "Viagem", campaigns: 120, img: "/images/influencer-4.jpg", initials: "DR", engagement: 4.0 },
  { name: "Sofia Martínez", niche: "Culinária", campaigns: 75, img: "/images/influencer-5.jpg", initials: "SM", engagement: 3.9 },
  { name: "Jorge Fernández", niche: "Automóveis", campaigns: 65, img: "/images/influencer-6.jpg", initials: "JF", engagement: 3.7 },
  { name: "Lucia Gómez", niche: "Beleza", campaigns: 110, img: "/images/influencer-7.jpg", initials: "LG", engagement: 4.3 },
  { name: "Miguel Sánchez", niche: "Esportes", campaigns: 80, img: "/images/influencer-8.jpg", initials: "MS", engagement: 4.1 },
  { name: "Elena Rodríguez", niche: "Arte", campaigns: 55, img: "/images/influencer-9.jpg", initials: "ER", engagement: 3.6 },
  { name: "Pablo Gómez", niche: "Música", campaigns: 90, img: "/images/influencer-10.jpg", initials: "PG", engagement: 4.4 },
  { name: "Isabel Martínez", niche: "Fotografia", campaigns: 70, img: "/images/influencer-11.jpg", initials: "IM", engagement: 3.8 },
  { name: "Ricardo López", niche: "Gaming", campaigns: 95, img: "/images/influencer-12.jpg", initials: "RL", engagement: 4.0 },

  
];
export const influencersByCategory = {
  top: allInfluencers.slice(0, 7),       
  sponsored: allInfluencers.slice(2, 9), 
  rising: allInfluencers.slice(5, 12),   
};
