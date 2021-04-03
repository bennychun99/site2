import Head from "next/head";
function Menu() {
  return (
    <div className="relative md:static">
      <button className="md:hidden">
        <a href="#">
          <svg
            className="h-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </a>
      </button>
      <ul className="absolute -left-40 mt-8 w-screen md:w-auto md:static">
        <li className=" block md:inline-block">
          <a href="#">Nossa história</a>
        </li>
        <li className=" block md:inline-block">
          <a href="#">Nossos projetos</a>
        </li>
        <li className=" justify-self-center md:inline-block">
          <a href="#">A equipe</a>
        </li>
        <li className="justify-self-center md:inline-block">
          <a href="#">Contato</a>
        </li>
        <li className=" justify-self-center md:inline-block">
          <a href="#">Familhagem</a>
        </li>
      </ul>
    </div>

    //     <div>
    //       <button>
    //         <a href="#"><svg className="h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    // </svg></a>
    //       </button>
    //       <div className="hidden md:p-2 w-screen md:w-auto md:flex items-center">
    //         <a href="#" className="block md:flex">Nossa história</a>
    //         <a href="#" className="block md:flex">Nossos projetos</a>
    //         <a href="#" className="block md:flex">A equipe</a>
    //         <a href="#" className="block md:flex">Contato</a>
    //         <a href="#" className="block md:flex bg-green-400 text-white md:rounded">
    //           Familhagem
    //         </a>
    //       </div>
  );
}

function NavBar() {
  return (
    <div className="md:p-2 md:container md:max-w-5xl md:m-auto md:flex md:justify-between items-center bg-red-50 text-center w-screen z-50">
      {/* LOGOTIPO */}
      <div>
        <a href="#">
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
            <a href="">Nossa história</a>
          </li>
          <li className="mb-4 hover:bg-gray-400">
            <a href="">Nossos projetos</a>
          </li>
          <li className="mb-4 hover:bg-gray-400">
            <a href="">A equipe</a>
          </li>
          <li className="mb-4 hover:bg-gray-400">
            <a href="">Contato</a>
          </li>
          <li className="mb-4 hover:bg-purple-700">
            <a href="#" className="">Familhagem</a>
          </li>
        </ul>
      </div>
      {/* MENU DESKTOP*/}
      <div>
      <ul className="hidden md:block">
          <li className="inline hover:bg-gray-400">
            <a href="">Nossa história</a>
          </li>
          <li className="inline hover:bg-gray-400">
            <a href="">Nossos projetos</a>
          </li>
          <li className="inline hover:bg-gray-400">
            <a href="">A equipe</a>
          </li>
          <li className="inline hover:bg-gray-400">
            <a href="">Contato</a>
          </li>
          <li className="inline mb-4 hover:bg-purple-700">
            <a href="#" className="">Familhagem</a>
          </li>
        </ul>

      </div>
    </div>
  );
}

function SlideShow() {
  return (
    <div className="h-screen">
      <img
        src="https://dummyimage.com/1920x600/000/ffffff&text=Slideshow+com+fotos+da+equipe"
        alt="fotos"
      />
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
      <div className="">
        <NavBar />
      </div>
    </div>
  );
}
export default Home;
