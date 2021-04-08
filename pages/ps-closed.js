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
      <div className="pt-20">
        <p>testeeeee</p>
        <p>PS fechado</p>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default Home;
