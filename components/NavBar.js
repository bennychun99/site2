export const NavBar = () => {
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
              {/* <li className="inline">
                <a href="/team">A equipe</a>
              </li> */}
              <li className="inline">
                <a href="/projects">Nossos projetos</a>
              </li>
              <li className="inline">
                <a href="/#sponsors">Patrocinadores</a>
              </li>
              <li className="inline">
                <a href="#contactus">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  