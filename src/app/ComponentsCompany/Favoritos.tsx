import { MessageSquare, Heart } from "lucide-react";
import { useState } from "react";

interface Fav {
  id: string;
  name: string;
  initials: string;
  niche: string;
  followers: string;
  engagement: string;
  rate: string;
  verified: boolean;
}

const initial: Fav[] = [
  { id: "1", name: "Nara Costa", initials: "NC", niche: "Lifestyle", followers: "420K", engagement: "5.8%", rate: "Kz 350K", verified: true },
  { id: "2", name: "Edmilson Vieira", initials: "EV", niche: "Tech", followers: "180K", engagement: "7.2%", rate: "Kz 220K", verified: true },
  { id: "3", name: "Toty Sa'Med", initials: "TS", niche: "Música", followers: "1.2M", engagement: "4.1%", rate: "Kz 800K", verified: true },
  { id: "4", name: "Yola Araújo", initials: "YA", niche: "Lifestyle", followers: "650K", engagement: "5.0%", rate: "Kz 480K", verified: true },
  { id: "5", name: "Maria Bragança", initials: "MB", niche: "Moda", followers: "95K", engagement: "8.4%", rate: "Kz 150K", verified: false },
  { id: "6", name: "DJ Buda", initials: "DB", niche: "Música", followers: "320K", engagement: "6.0%", rate: "Kz 280K", verified: true },
];

export default function FavoritesGrid() {
  const [favs, setFavs] = useState(initial);
  const remove = (id: string) => setFavs(favs.filter((f) => f.id !== id));

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="font-bold text-slate-900 flex items-center gap-2">
            
            Influenciadores Favoritos
          </h2>
          <p className="text-xs text-slate-500">{favs.length} influenciadores guardados</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {favs.map((f) => (
          <div key={f.id} className="border border-slate-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center text-white font-bold">
                  {f.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm flex items-center gap-1">
                    {f.name}
                    {f.verified && <span className="text-blue-600 text-xs">✓</span>}
                  </p>
                  <p className="text-xs text-slate-500">{f.niche}</p>
                </div>
              </div>
              <button onClick={() => remove(f.id)} className="text-amber-500 hover:text-slate-300">
                <Heart className="h-4 w-4 fill-current" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-3 text-center">
              <div>
                <p className="text-sm font-bold text-slate-900">{f.followers}</p>
                <p className="text-[10px] text-slate-500">Seguidores</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{f.engagement}</p>
                <p className="text-[10px] text-slate-500">Engagement</p>
              </div>
              <div>
                <p className="text-sm font-bold text-blue-600">{f.rate}</p>
                <p className="text-[10px] text-slate-500">Por post</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                <MessageSquare className="h-3 w-3" /> Contactar
              </button>
              <button className="px-3 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold py-2 rounded-lg transition-colors">
                Ver perfil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
