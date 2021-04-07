import Head from "next/head";

function NavBar() {
  return (
    <div className="bg-white">
      <div className="md:p-2 md:container md:max-w-5xl md:m-auto md:flex md:justify-between items-center bg-white text-center w-screen z-50">
        {/* LOGOTIPO */}
        <div>
          <a href="/">
            <img
              src="/logo-horizontal.png"
              alt="Logotipo"
              className="p-2 hidden md:inline-block max-h-16"
            />
            <img
              src="/logo-vertical.png"
              alt="Logotipo"
              width={150}
              className="p-2 inline-block md:hidden"
            />
          </a>
        </div>
        {/* MENU MOBILE */}
        <div className="bg-green-100 relative text-center top-full left-0">
          <button className="md:hidden ring-opacity-0">Menu</button>
          <ul className="bg-gray-200 w-full m-0 p-0 absolute list-none opacity-0 pointer-events-none transition-all	">
            <li className="mb-4 hover:bg-gray-400">
              <a href="#nossahistoria">Nossa história</a>
            </li>
            <li className="mb-4 hover:bg-gray-400">
              <a href="#nossosprojetos">Nossos projetos</a>
            </li>
            <li className="mb-4 hover:bg-gray-400">
              <a href="#aequipe">A equipe</a>
            </li>
            <li className="mb-4 hover:bg-gray-400">
              <a href="#contato">Contato</a>
            </li>
            <li className="mb-4 hover:bg-purple-700">
              <a href="#familhagem" className="">
                Familhagem
              </a>
            </li>
          </ul>
        </div>
        {/* MENU DESKTOP*/}
        <div>
          <ul className="hidden md:block">
            <li className="inline">
              <a href="/about">Sobre nós</a>
            </li>
            <li className="inline">
              <a href="/team">A equipe</a>
            </li>
            <li className="inline">
              <a href="/projects">Nossos projetos</a>
            </li>
            <li className="inline">
              <a href="/contactus">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-gray-700 divide-y divide-gray-900">
      <div className="max-w-5xl container m-auto bg-gray-700 flex flex-col place-items-center md:place-items-start md:justify-between md:flex-row">
        <div className="m-5">
          <h1 className="text-green-300 text-xl font-bold text-center md:text-left pb-2">
            ENTRE EM CONTATO
          </h1>
          <p className="text-white text-center md:text-left">
            polimilhagem.usp@gmail.com
          </p>
        </div>
        <div className="m-5">
          <h1 className="pb-2 text-green-300 text-xl font-bold text-center md:text-left">
            ACOMPANHE NOSSAS REDES
          </h1>
          <a href="https://www.facebook.com/PoliMilhagem/"><img src="/icons/facebook-square-brands.svg" alt="Facebook" className="h-11 filter-white"/></a>
          <a href="https://www.instagram.com/polimilhagem/"><img src="/icons/instagram-square-brands.svg" alt="Instagrm" className="h-11 filter-white"/></a>
          <a href="https://www.youtube.com/channel/UCcn3NmNhqWIoj7IB-Tb0eEQ"><img src="/icons/youtube-square-brands.svg" alt="YouTube" className="h-11 filter-white"/></a>
          <a href="https://www.linkedin.com/company/polimilhagem"><img src="/icons/linkedin-brands.svg" alt="LinkedIn" className="h-11 filter-white"/></a>

        </div>
        <div className="m-5">
          <h1 className="pb-2 text-green-300 text-xl font-bold text-center md:text-left">
            ENDEREÇO
          </h1>
          <p className="text-white text-center md:text-left ">
            Av. Professor Mello Moraes, 2231 <br />
            CEP: 05508-030 <br />
            São Paulo, SP
          </p>
        </div>
        <div className="m-5">
          <h1 className="pb-2 text-green-300 text-xl font-bold text-center md:text-left">
            MEMBRO OFICIAL
          </h1>
          <a href="https://www.gearpoli.com.br/"><img src="ge4rPoli_branco.png" alt="Gear Poli" className="h-12"/></a>
        </div>
      </div>

      <div className="p-5">
        <h1 className="text-center text-white">© 2021 Equipe PoliMilhagem</h1>
      </div>
    </div>
  );
}

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
        <p>equipe</p>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default Home;
