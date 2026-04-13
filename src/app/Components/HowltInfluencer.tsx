 import Image from "next/image";


export default function HowltInfluencer() {
  return (
        <div className=" py-8 lg:py-14  flex  flex-col lg:flex-row items-center gap-6 lg:gap-14 max-w-7xl mx-auto px-4">
             <div className="max-w-2xl">
                <h1 className="text-2xl md:text-4xl font-semibold mb-10">
                Gerencie todas as suas mensagens de forma simples e eficiente.
                 </h1>

                <p className="text-gray-900 dark:text-gray-300 text-base lg:text-lg">
                    Chega de perder tempo alternando entre WhatsApp, Instagram, TikTok e YouTube.
                    Aqui, você centraliza todas as suas mensagens num só lugar e foca no que realmente importa: as oportunidades.

                         Criado para influenciadores e criadores de conteúdo, esta plataforma ajuda você a manter sua comunicação organizada,
                          profissional e pronta para fechar negócios com mais facilidade.
            </p>
            </div>
     
        <div className="text-center lg:text-left">
            <Image
                src="/images/influecermsg.png"
                alt="Imagem de um influenciador digital"
                width={500}
                height={500}
                className="rounded-lg shadow-lg  w-full  h-full object-cover"
            />
             </div>
            
 </div>
  );
}