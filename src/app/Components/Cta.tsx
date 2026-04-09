 export default function Cta() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl md:text-4xl font-bold">
                Pronto para transformar suas parcerias?
            </h2>
            <div className="flex gap-4">
                <a href="#" className=" px-3 py-2 lg:px-6 lg:py-3 bg-white text-base lg:text-lg text-blue-600 rounded-lg font-medium hover:bg-transparent hover:text-white border  border-white  transition">
                   Sou Empresa
                </a>
                <a href="#" className="px-3 py-2 lg:px-6 lg:py-3 border  text-base lg:text-lg border-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition">
                   Sou Influencer
                </a>
            </div>
        </div>
    </section>
  );
}