import { Star, Quote } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
 

  const testimonials = [
    { name: "TechStart Inc.", role: "CEO", text: "A InfluConnect nos ajudou a encontrar os influenciadores perfeitos para o lançamento do nosso produto. Nosso alcance cresceu 300% em apenas dois meses.", img: "/images/testimonial1.jpg" },
    { name: "FashionHub", role: "Diretora de Marketing", text: "A plataforma é incrivelmente intuitiva. Já realizamos 15 campanhas bem-sucedidas com influenciadores que encontramos aqui.", rating: 5, img: "/images/testimonial2.jpg" },
    { name: "GreenLife Co.", role: "Gerente de Marca", text: "A conexão direta com influenciadores sem intermediários economizou nosso tempo e orçamento. Altamente recomendado!", img: "/images/testimonial3.jpg" },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden max-w-7xl mx-auto px-4">
      <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-10 h-48 w-48 rounded-full bg-accent/5 blur-3xl animate-float" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">O Que as Empresas Dizem</h2>
          <p className="text-muted-foreground mt-3 text-lg">Resultados reais de marcas reais</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div key={item.name} className="card-3d rounded-2xl border bg-card p-8 relative overflow-hidden animate-on-scroll" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-16 w-16 text-primary" />
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`h-5 w-5 ${j < (item.rating || 0) ? "fill-accent text-accent" : "text-muted"}`} />
                ))}
              </div>
              <p className="text-muted-foreground italic leading-relaxed mb-6 text-base">{item.text}</p>
              <div className="flex items-center gap-4 pt-4 border-t">
                <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                  <AvatarImage src={item.img} alt={item.name} className="object-cover" />
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">{item.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
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
