import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "TechStart Inc.",
      role: "CEO",
      text: "A InfluConnect nos ajudou a encontrar os influenciadores perfeitos para o lançamento do nosso produto. Nosso alcance cresceu 300% em apenas dois meses.",
      rating: 5,
      img: "/images/influencer-1.jpg",
    },
    {
      name: "FashionHub",
      role: "Diretora de Marketing",
      text: "A plataforma é incrivelmente intuitiva. Já realizamos 15 campanhas bem-sucedidas com influenciadores que encontramos aqui.",
      rating: 5,
      img: "/images/influencer-2.jpg",
    },
    {
      name: "GreenLife Co.",
      role: "Gerente de Marca",
      text: "A conexão direta com influenciadores sem intermediários economizou nosso tempo e orçamento. Altamente recomendado!",
      rating: 5,
      img: "/images/influencer-3.jpg",
    },
  ];

  return (
    <section className="py-8 lg:py-14 relative max-w-7xl mx-auto px-4">

      {/* Background decor */}
      <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
            O Que as Empresas Dizem
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            Resultados reais de quem já usa a plataforma
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl p-6 bg-white/80 dark:bg-white/5 backdrop-blur-lg
              border border-gray-200 dark:border-white/10
              shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`h-5 w-5 ${
                      j < item.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                “{item.text}”
              </p>

              {/* Footermnknknknk */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-white/10">
                <Avatar className="h-12 w-12 ring-2 ring-blue-500/20">
                  <AvatarImage src={item.img} alt={item.name} className="object-cover" />
                  <AvatarFallback className="bg-blue-100 text-blue-600 font-bold">
                    {item.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;