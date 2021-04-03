import Head from "next/head";
import Feed from "react-instagram-authless-feed"
function Logotipo() {
  return (
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
  );
}
function Menu() {
  return (
    <div>
      <div className="inline-block md:hidden">
        <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        </button>
      </div>

      <div className="bg-white p-2 md:flex md:items-center">
        <a href="#" className="block md:flex">Nossa história</a>
        <a href="#" className="block md:flex">Nossos projetos</a>
        <a href="#" className="block md:flex">A equipe</a>
        <a href="#" className="block md:flex">Contato</a>
        <a href="#" className="block md:flex bg-green-400 text-white md:rounded">
          Familhagem
        </a>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="p-2 container h-28 max-w-7xl m-auto bg-red-300 flex justify-between items-center">
      <Logotipo />
      <Menu />
    </div>
  );
}

function InstagramFeed() {
  return(
    ReactDOM.render(
      <Feed username="polimilhagem" />,
      document.getElementById('root')
    );
  )
}




function Home() {
  return (
    <div>
      <Head>
        <title>Equipe PoliMilhagem</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center">
        <NavBar />
      </div>
      <InstagramFeed />
    </div>
  );
}
export default Home;
