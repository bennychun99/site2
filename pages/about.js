import Head from "next/head";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

function About() {
  return (
    <div>
      <Head>
        <title>Equipe PoliMilhagem</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed right-0 left-0 top-0 m-0">
        <NavBar />
      </div>
      <div className="pt-20">

      <section
        className="bg-contain bg-no-repeat bg-fixed bg-top bg-about3  h-capa flex flex-col justify-center content-center"
        id="bem-vindos"
      >
        <h1 className="font-bold text-center text-5xl text-white">
          NOSSA HISTÓRIA
        </h1>
        <p className="text-center text-2xl text-white">
          <br /> Desde 2007 (frase impactante).
        </p>
      </section>


      <section
        className="bg-cover bg-center bg-arte1m md:bg-arte1"
      >
        <h1 className="pt-48 text-4xl md:text-5xl	font-bold text-center md:m-auto md:max-w-5xl text-black">
          Linha do tempo
        </h1>
        <p className="pb-48 pt-8 px-3 text-center md:m-auto md:max-w-2xl text-xl md:text-2xl text-black">
          Projetamos e construímos nossos próprios
          protótipos automotivos desde 2007 e estamos em constante evolução
          desde então. <br /> Venha conhecer mais sobre a nossa história!
        </p>

      </section>


      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default About;
