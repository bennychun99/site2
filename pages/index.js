import Head from "next/head";
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

      <div className="md:p-2 w-screen md:w-auto md:flex items-center">
        <a href="#" className="block md:flex">Nossa história</a>
        <a href="#" className="block md:flex">Nossos projetos</a>
        <a href="#" className="block md:flex">A equipe</a>
        <a href="#" className="block md:flex">Contato</a>
        <a href="#" className="block md:flex bg-green-400 text-white md:rounded">
          Familhagem
        </a>
      </div>
  );
}

function NavBar() {
  return (
    <div className="md:p-2 container md:h-28 max-w-7xl m-auto flex flex-col md:flex-row md:justify-between items-center">
      <Logotipo />
      <Menu />
    </div>
  );
}

function SlideShow() {
  return(
    <div className>
      <img src="https://dummyimage.com/1920x400/000/fff" alt="fotos"/>

    </div>
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
      <div>
      <SlideShow />
      </div>
    </div>
  );
}
export default Home;
