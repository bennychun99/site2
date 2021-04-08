import Head from "next/head";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

function Home() {
  return (
    <div>
      <Head>
        <title>Equipe PoliMilhagem</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed right-0 left-0 top-0 m-0">
        <NavBar />
      </div>
      <section
        className="bg-cover bg-fixed bg-center bg-vibrante  h-capa flex flex-col justify-center content-center"
        id="bem-vindos"
      >
      <div className="h-20"></div>
        <h1 className="font-bold text-center text-5xl text-yellow-400">
          NOSSOS PROJETOS
        </h1>
        <p className="text-center text-2xl text-white">
          <br /> Equipe de eficiência energética da Escola Politécnica da
          Universidade de São Paulo.
        </p>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default Home;
