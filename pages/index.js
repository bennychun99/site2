import Head from "next/head";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";




function Home() {
  return (
    <div>
      <Head>
        <title>Equipe PoliMilhagem</title>
        <link rel="icon" href="/logo-icon.png" />
      </Head>
      <div className="fixed right-0 left-0 top-0 m-0">
        <NavBar />
      </div>
      <section
        className="bg-cover bg-fixed bg-center bg-capa3  h-screen flex flex-col justify-center content-center"
        id="bem-vindos"
      >
        <h1 className="font-bold text-center text-5xl text-white">
          EQUIPE POLIMILHAGEM
        </h1>
        <p className="text-center text-2xl text-white">
          <br /> Equipe de eficiência energética da Escola Politécnica da
          Universidade de São Paulo.
        </p>
      </section>

      <section
        className="bg-cover bg-center bg-arte1m md:bg-arte1"
        id="nossa-historia"
      >
        <h1 className="pt-48 text-4xl md:text-5xl	font-bold text-center md:m-auto md:max-w-5xl text-black">
          Nossa história
        </h1>
        <p className="py-8 px-3 text-center md:m-auto md:max-w-2xl text-xl md:text-2xl text-black">
          Projetamos e construímos nossos próprios
          protótipos automotivos desde 2007 e estamos em constante evolução
          desde então. <br /> Venha conhecer mais sobre a nossa história!
        </p>
        <div className="pb-48 flex justify-center">
          <a href="/about" className="text-lg md:text-xl p-3 bg-green-300 rounded-md">
            Saiba Mais
          </a>
        </div>
      </section>

      <section className="bg-cover bg-center bg-capa2" id="a-equipe">
        <h1 className="pt-48 font-bold text-center md:m-auto md:max-w-2xl text-4xl md:text-5xl text-white">
          A equipe
        </h1>
        <p className="py-8 px-3 text-center md:m-auto md:max-w-2xl text-xl md:text-2xl text-white">
          Para melhor administrar o desenvolvimento dos nossos projetos, a
          equipe é dividida em subsistemas internos. <br /> Venha conhecer mais
          a respeito de nossos membros!
        </p>
        <div className="pb-48 flex justify-center">
          <a href="/team" className="text-lg md:text-xl p-3 bg-green-300 rounded-md">
            Saiba Mais
          </a>
        </div>
      </section>
      <section
        className="bg-cover bg-center bg-arte2m md:bg-arte2"
        id="nossos-projetos"
      >
        <h1 className="pt-48 font-bold text-center md:m-auto md:max-w-5xl text-4xl md:text-5xl text-black">
          Nossos projetos
        </h1>
        <p className="py-8 px-3 text-center md:m-auto md:max-w-2xl text-xl md:text-2xl text-black">
          Seja movido a gasolina ou energia elétrica, desenvolvemos protótipos
          de excelência, sempre buscando alcançar o topo. <br /> Venha conhecer
          os carros da equipe!{""}
        </p>
        <div className="pb-48 flex justify-center">
          <a href="/projects" className="text-lg md:text-xl p-3 bg-green-300 rounded-md">
            Saiba Mais
          </a>
        </div>
      </section>
<div id="sponsors" className="flex justify-center flex-col w-full">
  <h1 className="pt-6 font-bold text-center md:m-auto md:max-w-5xl text-4xl md:text-5xl text-black">Patrocinadores</h1>
  <img src="/sponsor.png" alt="Patrocinadores" className="md:max-w-5xl md:m-auto w-full"/>
</div>
      <footer>
        <Footer />
      </footer>
    </div>

  );
}
export default Home;
