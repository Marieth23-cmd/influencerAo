"use client";

import Image from "next/image";



export default function HeroSection() {
  return (
    <section className="relative bg-white border-b border-gray-100">
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[100vh] overflow-hidden ">
        
        <Image src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1780931434/Captura_de_ecr%C3%A3_2026-06-08_160954_dvbitp.png" alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/50 to-black/30" />


    <div className="absolute inset-0 flex items-center  max-w-7xl mx-auto px-4 ">
      <div className="flex flex-col items-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
  
  <h1 className="font-bold text-white tracking-tight leading-[1.1]">
    <span className="text-3xl md:text-4xl lg:text-7xl">
      Leila Lopes
    </span>
  </h1>

  <p className="text-lg text-white/80 font-normal max-w-sm leading-relaxed mt-8">
    Encontre influenciadores por nicho, analise desempenho
    e lance campanhas de impacto em Angola.
  </p>

</div>
    </div>
  </div>
</section>









    
  );
}