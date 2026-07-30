
import Image from "next/image"
 const influencers=[
   

     {
        image:"/images/influencer-8.jpg",
        nome:"Sérgio Rodrigues",
        nicho:["Desporto" , "Moda" , "Fitness"],
        Provincia:"Benguela"
    },

     {
        image:"/images/influencer-1.jpg",
        nome:"Nelson Oliveira",
        nicho:["Desporto" , "Moda" , "Fitness"],
        Provincia:"Luanda"
    },

     {
        image:"/images/influencer-3.jpg",
        nome:"Dinis Victor",
        nicho:["Desporto" , "Moda" , "Fitness"],
        Provincia:"Luanda"
    },

     {
        image:"/images/influencer-2.jpg",
        nome:"Carla Lopes",
        nicho:["Desporto" , "Moda" , "Fitness"],
        Provincia:"Huíla"
    },

     {
        image:"/images/influencer-4.jpg",
        nome:"Gugu Sampaio",
        nicho:["Desporto" , "Cantor" , "Fitness" ],
        Provincia:"Bengo"
    },

     {
        image:"/images/influencer-5.jpg",
        nome:"Sandra Vini",
        nicho:["Desporto" , "Moda" , "Fitness"],
        Provincia:"Luanda"
    },

     {
        image:"/images/influencer-6.jpg",
        nome:"Nucho Grok",
        nicho:["Desporto" , "Moda" , "Fitness"],
        Provincia:"Huambo"
    },

     {
        image:"/images/influencer-7.jpg",
        nome:"Maria Arvela",
        nicho:["Desporto" , "Moda" , "Fitness"],
        Provincia:"Huambo"
    },
     {
        image:"/images/influencer-4.jpg",
        nome:"Rodriguez",
        nicho:["Desporto" , "Moda" , "Fitness"],
        Provincia:"Luanda"
    }

 ]

export default function Catalogo(){
    return(
        <div className=" py-14 mx-auto px-4 max-w-7xl">
            <h1 className="text-center font-semibold text-xl md:text-3xl flex  items-center justify-center">
                Descubra talentos que podem dar voz à sua marca.
                </h1>

                {/** catalogo  de einfluencer  */}

                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-4">
                    
                    {influencers.map((inf,i)=>(
                    <div key={i}
                     className="group flex items-center justify-center overflow-hidden relative rounded-lg cursor-pointer" >
                    <Image
                        src={inf.image}
                        height={400}
                        width={350}
                        alt=""
                        loading="lazy"
                        className="w-full h-[400px] object-cover hover:bg-black  shadow-sm "
                        />
                        <div className="inset-0 absolute bg-black/25"></div>

                        <div className="absolute bottom-4 right-8 left-4">
                            <h2 className=" text-white font-semibold  text-lg md:text-xl group-hover:opacity-0  transition-opacity duration-300">
                                {inf.nome}
                            </h2>

                        </div>



                            <div className=" 
                                      absolute inset-0 bg-black/70
                                        flex items-center justify-center
                                        translate-x-[-30px]
                                        opacity-0
                                        group-hover:translate-x-0
                                        group-hover:opacity-100
                                        transition-all duration-500 ease-out
                                      ">
                                <div className="text-center text-lg text-white ">
                                     <p className="text-lg md:text-xl text-semibold">{inf.nome}</p>

                                     <div className=" flex gap-1 text-base italic ">
                                        
                                        {inf.nicho.map((nicho, i)=>(
                                            <div key={i}>
                                            <p>{nicho}</p>
                                            </div>
                                            ))}
                                        
                                          <div className="  text-white ">-</div>
                                        
                                        </div>
                                    
                                 </div>

                            </div>
                        </div>

                        
                    ))}
                </div>





        </div>
    )
}