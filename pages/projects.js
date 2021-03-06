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
        className="bg-auto md:bg-contain bg-fixed bg-top bg-about3 bg-repeat-y   h-capa flex flex-col justify-center content-center"
        id="bem-vindos"
      >
      <div className="h-20"></div>
        <h1 className="font-bold text-center text-5xl text-white">
          NOSSOS PROJETOS
        </h1>
        <p className="text-center text-2xl text-white">
          <br /> Subtitulo daora
        </p>
      </section>

<h1>teste flexbox</h1>
<div></div>



<h1>teste gird</h1>
<div className="container max-w-5xl m-auto">
<div className="grid grid-cols-4">
  <div><h1>2020</h1></div>
  <div>linha</div>
  <div>foto</div>
  <div className="grid grid-rows-2">
    <div>
<h1>Nome</h1>
    </div>
    <p>descricao</p>
    <div>

    </div>
  </div>
</div>
</div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default Home;
