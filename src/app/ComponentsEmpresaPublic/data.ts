import type { StaticImageData } from "next/image";

export interface CompanyCampaign {
  title: string;
  influencer: string;
  img: string;
  reach: number;
  engagement: number;
  format: "Reel" | "Story" | "Post" | "Vídeo" | "Live";
  result: string;
  cover: string | StaticImageData;
}

export interface CompanyReview {
  influencer: string;
  campaign: string;
  rating: number;
  date: string;
  text: string;
}

export const company = {
  name: "Unitel",
  slug: "unitel",
  sector: "Telecomunicações",
  verified: true,
  logo: "U",
  shortDescription:
    "Operadora líder de telecomunicações em Angola. Conectamos pessoas, marcas e histórias através de campanhas com criadores locais.",
  location: "Luanda, Angola",
  founded: 2001,
  website: "unitel.ao",
  stats: {
    campaigns: 142,
    influencers: 68,
    responseRate: 97,
    rating: 4.8,
    reviews: 54,
  },
  campaigns: [
    { 
        title: "Lançamento 5G",
         influencer: "Luísa Fernandes",
         img:"/images/influencer-1.jpg", 
         reach: 240000, engagement: 6.2, 
         format: "Reel", 
         result: "+18% awareness",
        cover: "/images/influencer-1.jpg" },


    { title: "Promo Verão",
         influencer: "Carlos Mendes",
         img:"/images/influencer-2.jpg", 
         reach: 180000, 
         engagement: 5.4,
        format: "Vídeo", 
        result: "+12K leads",
         cover: "/images/influencer-2.jpg" },

    {
         title: "Net Mais Rápida",
         influencer: "Joana Silva",
          img:"/images/influencer-3.jpg", 
          reach: 95000, 
          engagement: 4.8, 
          format: "Story", 
          result: "+9% conversão", 
          cover: "/images/influencer-3.jpg" },


    { title: "Black Friday",
         influencer: "Pedro Lima",  
         img:"/images/influencer-4.jpg", 
         reach: 156000, 
         engagement: 6.0, 
         format: "Post", 
         result: "+22K cliques", 
         cover: "/images/influencer-4.jpg" },
    {
         title: "Música ao Vivo",
          influencer: "Ana Costa", 
          img:"/images/influencer-5.jpg",
           reach: 132000, 
           engagement: 5.7, 
           format: "Live", 
           result: "8K espectadores", 
           cover: "/images/influencer-5.jpg" },
    ] as CompanyCampaign[],
     
  reviews: [
    { influencer: "Luísa Fernandes", campaign: "Lançamento 5G", rating: 5, date: "Mar 2025", text: "Equipa profissional, briefing claro e pagamento dentro do prazo. Recomendo." },
    { influencer: "Carlos Mendes", campaign: "Promo Verão", rating: 5, date: "Jan 2025", text: "Parceria de excelência. Total liberdade criativa e ótima comunicação." },
    { influencer: "Joana Silva", campaign: "Net Mais Rápida", rating: 4, date: "Nov 2024", text: "Boa experiência geral, processo organizado do início ao fim." },
    { influencer: "Pedro Lima", campaign: "Black Friday", rating: 5, date: "Nov 2024", text: "Uma das marcas mais sérias com que já trabalhei em Angola." },
  ] as CompanyReview[],
};

export const formatN = (n: number) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return `${n}`;
};
