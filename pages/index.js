import Head from "next/head";

function NavBar() {
  return (
    <div className="bg-white">
    <div className="md:p-2 md:container md:max-w-5xl md:m-auto md:flex md:justify-between items-center bg-white text-center w-screen z-50">
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
            <a href="#nossahistoria">Nossa história</a>
          </li>
          <li className="inline">
            <a href="#nossosprojetos">Nossos projetos</a>
          </li>
          <li className="inline">
            <a href="#aequipe">A equipe</a>
          </li>
          <li className="inline">
            <a href="#contato">Contato</a>
          </li>
          <li className="inline ">
            <a
              href="#familhagem"
              className="bg-green-400 rounded-md hover:bg-green-500"
            >
              Familhagem
            </a>
          </li>
        </ul>
      </div>
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
      <section className="bg-cover bg-fixed bg-center bg-capa1  h-screen flex flex-col justify-center content-center">
        <h1 className="font-bold text-center text-5xl text-white">EQUIPE POLIMILHAGEM</h1>
        <p className="text-center text-2xl text-white">
          <br/> Bem vindos à Equipe Polimilhaem!
        </p>

      </section>

        <section className="bg-cover bg-center bg-white" id="aequipe">
            
          <h1 className="pt-48 text-2xl	font-bold text-center md:m-auto md:max-w-5xl text-5xl text-black">
            A equipe
          </h1>
          <p className="pb-48 text-center md:m-auto md:max-w-5xl text-2xl text-black">
          <br /> Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Iure, molestias! <br /> Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Cumque, tempora. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            voluptate porro minus placeat quis reiciendis debitis nesciunt optio
            harum sequi.
          </p>

          <a href="#" className="bg-green-900 rounded-md">
            clique aqui
          </a>
        
        </section>
        <section
        className="bg-cover bg-center bg-arte1"
        id="nossosprojetos"
      >
        <h1 className="pt-48 text-2xl	font-bold text-center md:m-auto md:max-w-5xl text-5xl text-white">Nossos projetos</h1>
        <p className="pb-48 text-center md:m-auto md:max-w-5xl text-2xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          fugiat voluptatibus similique natus atque maiores sapiente a
          repellendus? Magnam doloribus qui sunt? Pariatur nostrum assumenda ab
          optio, fuga officia in consequatur aliquam, numquam id aperiam iste
          facilis, modi ea quidem illo nihil. Tenetur praesentium fugit saepe
          odio beatae quae reiciendis. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Quos dolores ut beatae repellendus, voluptate
          corporis magnam, nulla officiis perferendis voluptates incidunt
          quisquam soluta ipsam officia possimus illo fugiat. Dicta et numquam
          error omnis laboriosam soluta dolorum quos ipsam voluptates? Error,
          velit esse. Fugit temporibus nulla cum vitae maiores. Numquam,
          incidunt!
        </p>
      </section>

        <section className="bg-cover bg-center bg-current" id="aequipe">
            
          <h1 className="pt-48 text-2xl	font-bold text-center md:m-auto md:max-w-5xl text-5xl text-white">
            A equipe
          </h1>
          <p className="pb-48 text-center md:m-auto md:max-w-5xl text-2xl text-white">
          <br /> Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Iure, molestias! <br /> Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Cumque, tempora. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            voluptate porro minus placeat quis reiciendis debitis nesciunt optio
            harum sequi.
          </p>

          <a href="#" className="bg-green-900 rounded-md">
            clique aqui
          </a>
        
        </section>
        <section
        className="bg-cover bg-center bg-white"
        id="nossosprojetos"
      >
        <h1 className="pt-48 text-2xl	font-bold text-center md:m-auto md:max-w-5xl text-5xl text-black">Nossos projetos</h1>
        <p className="pb-48 text-center md:m-auto md:max-w-5xl text-2xl text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          fugiat voluptatibus similique natus atque maiores sapiente a
          repellendus? Magnam doloribus qui sunt? Pariatur nostrum assumenda ab
          optio, fuga officia in consequatur aliquam, numquam id aperiam iste
          facilis, modi ea quidem illo nihil. Tenetur praesentium fugit saepe
          odio beatae quae reiciendis. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Quos dolores ut beatae repellendus, voluptate
          corporis magnam, nulla officiis perferendis voluptates incidunt
          quisquam soluta ipsam officia possimus illo fugiat. Dicta et numquam
          error omnis laboriosam soluta dolorum quos ipsam voluptates? Error,
          velit esse. Fugit temporibus nulla cum vitae maiores. Numquam,
          incidunt!
        </p>
      </section>

        <section className="bg-cover bg-center bg-arte2" id="aequipe">
            
          <h1 className="pt-48 text-2xl	font-bold text-center md:m-auto md:max-w-5xl text-5xl text-white">
            A equipe
          </h1>
          <p className="pb-48 text-center md:m-auto md:max-w-5xl text-2xl text-white">
          <br /> Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Iure, molestias! <br /> Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Cumque, tempora. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            voluptate porro minus placeat quis reiciendis debitis nesciunt optio
            harum sequi.
          </p>

          <a href="#" className="bg-green-900 rounded-md">
            clique aqui
          </a>
        
        </section>
   </div>
  );
}
export default Home;
