
"use client";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Image from "next/image";

export default function SobreNos() {
  const equipa = [
    {
      image: "/equipa/Nelson.png",
      name: "Nelson",
      funcao: "Função",
    },
    {
      image:
        "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772014954/Jelson_vkgii9.jpg",
      name: "Jelson",
      funcao: "Função",
    },
    {
      image:
        "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772014954/Jorge_lrfrn2.jpg",
      name: "Jorge",
      funcao: "Função",
    },
  ];

  const parceiros = [
    {
      logo: "/parceiros/logo-1.png",
      nome: "Empresa 1",
    },
    {
      logo: "/parceiros/logo-2.png",
      nome: "Empresa 2",
    },
    {
      logo: "/parceiros/logo-3.png",
      nome: "Empresa 3",
    },
    {
      logo: "/parceiros/logo-4.png",
      nome: "Empresa 4",
    },
    {
      logo: "/parceiros/logo-5.png",
      nome: "Empresa 5",
    },
    {
      logo: "/parceiros/logo-6.png",
      nome: "Empresa 6",
    },
    {
      logo: "/parceiros/logo-7.png",
      nome: "Empresa 7",
    },
    {
      logo: "/parceiros/logo-8.png",
      nome: "Empresa 8",
    },
   
  ];

  return (
    <section>
      <Navbar />

      {/* HERO */}
      <div className="relative w-full h-[70vh] lg:h-[60vh]">
        <div className="relative h-[70vh] md:h-[60vh] w-full bg-blue-500">
          <Image
            src=""
            alt="Equipa InfluencerAO"
            fill
            className="object-cover object-[80%_center]"
          />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-2xl md:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-snug mb-4">
                  Sobre nós
                </h1>

                <p className="text-gray-200 text-base md:text-lg mb-6">
                  Conheça a equipa por trás do projeto e as marcas que fazem
                  parte da nossa rede.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EQUIPA */}
      <section className="max-w-7xl mx-auto py-6 lg:py-14 px-6">
        <h1 className="font-medium text-2xl md:text-3xl lg:text-3xl leading-tight text-black mb-6">
          A equipa responsável
        </h1>

        <p className="text-gray-700 max-w-xl leading-relaxed mb-10 text-base lg:text-lg">
          Conheça as pessoas que trabalham para tornar a plataforma cada vez
          mais simples, acessível e útil para marcas e criadores.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {equipa.map((member, idx) => (
            <div key={idx} className="group">
              <div className="relative h-[500px] w-full lg:h-[550px] rounded-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-6">
                <p className="font-medium text-base lg:text-lg text-gray-700">
                  {member.name}
                </p>

                <p className="text-base lg:text-lg text-black">
                  {member.funcao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MARCAS E EMPRESAS */}
      <section className="max-w-7xl mx-auto py-12 lg:py-16 px-6">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="font-medium text-2xl md:text-3xl text-black leading-tight"> 
                Marcas que confiam na InfluencerAO 
        </h2> 
        
        
        <p className="text-gray-700 max-w-xl leading-relaxed mt-3 text-base lg:text-lg">
             Empresas que recorrem à InfluencerAO para encontrar criadores que combinam com as suas campanhas e objetivos. 
             </p>
          </div>

          {parceiros.length > 8 && (
            <span className="hidden md:block shrink-0 text-sm text-gray-500">
              Deslize para ver mais →
            </span>
          )}
        </div>

        <div
          className={`
            ${
              parceiros.length > 8
                ? "flex overflow-x-auto"
                : "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8"
            }
            gap-4
            pb-2
            [scrollbar-width:thin]
          `}
        >
          {parceiros.map((parceiro, idx) => (
            <div
              key={idx}
              className={`
                flex items-center justify-center
                h-24
                rounded-lg
                border border-gray-200
                bg-white
                shrink-0
                ${
                  parceiros.length > 8
                    ? "w-40 md:w-44"
                    : "w-full"
                }
              `}
            >
              <Image
                src={parceiro.logo}
                alt={parceiro.nome}
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </section>
  );
}

