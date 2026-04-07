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
  
];

export const influencersByCategory = {
  top: allInfluencers.slice(0, 4),
  sponsored: allInfluencers.slice(4, 8),
  rising: allInfluencers.slice(8, 12),
};
