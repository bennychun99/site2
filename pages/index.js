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
              <a href="#">Sobre nós</a>
            </li>
            <li className="inline">
              <a href="#">A equipe</a>
            </li>
            <li className="inline">
              <a href="#">Nossos projetos</a>
            </li>
            <li className="inline">
              <a href="#contato">Contato</a>
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
            polimilhagem@usp.br
          </p>
          <p className="text-white text-center md:text-left">telefone</p>
        </div>
        <div className="m-5">
          <h1 className="pb-2 text-green-300 text-xl font-bold text-center md:text-left">
            ACOMPANHE NOSSAS REDES
          </h1>
          <img src="/icons/facebook-square-brands.svg" alt="facebook" className="h-11 filter-green"/>
          <a href="https://www.facebook.com/PoliMilhagem/"><svg className="h-11" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" class="svg-inline--fa fa-facebook-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>
          </a>
          <a href="https://www.instagram.com/polimilhagem/"><svg className="h-11" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram-square" class="svg-inline--fa fa-instagram-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path></svg></a>
          <a href="https://www.youtube.com/channel/UCcn3NmNhqWIoj7IB-Tb0eEQ"><svg className="h-11" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube-square" class="svg-inline--fa fa-youtube-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z"></path></svg></a>
<a href="https://www.linkedin.com/company/polimilhagem"><svg className="h-11" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" class="svg-inline--fa fa-linkedin fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a>
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
          <p className="text-white text-center md:text-left ">GE4R</p>
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

      <section
        className="bg-cover bg-fixed bg-center bg-capa1  h-screen flex flex-col justify-center content-center"
        id="bem-vindos"
      >
        <h1 className="font-bold text-center text-5xl text-white">
          EQUIPE POLIMILHAGEM
        </h1>
        <p className="text-center text-2xl text-white">
          <br /> Equipe de eficiência energética da Escola Politécnica da
          Universidade de São Paulo.
        </p>
      </section>

      <section
        className="bg-cover bg-center bg-arte1m md:bg-arte1"
        id="nossa-historia"
      >
        <h1 className="pt-48 text-4xl md:text-5xl	font-bold text-center md:m-auto md:max-w-5xl text-black">
          Nossa história
        </h1>
        <p className="py-8 px-3 text-center md:m-auto md:max-w-2xl text-xl md:text-2xl text-black">
          Projetamos e construímos nossos próprios
          protótipos automotivos desde 2007 e estamos em constante evolução
          desde então. <br /> Venha conhecer mais sobre a nossa história!
        </p>
        <div className="pb-48 flex justify-center">
          <a href="/about" className="text-lg md:text-xl p-3 bg-green-300 rounded-md">
            Saiba Mais
          </a>
        </div>
      </section>

      <section className="bg-cover bg-center bg-capa2" id="a-equipe">
        <h1 className="pt-48 font-bold text-center md:m-auto md:max-w-2xl text-4xl md:text-5xl text-white">
          A equipe
        </h1>
        <p className="py-8 px-3 text-center md:m-auto md:max-w-2xl text-xl md:text-2xl text-white">
          Para melhor administrar o desenvolvimento dos nossos projetos, a
          equipe é dividida em subsistemas internos. <br /> Venha conhecer mais
          a respeito de nossos membros!
        </p>
        <div className="pb-48 flex justify-center">
          <a href="/team" className="text-lg md:text-xl p-3 bg-green-300 rounded-md">
            Saiba Mais
          </a>
        </div>
      </section>
      <section
        className="bg-cover bg-center bg-arte2m md:bg-arte2"
        id="nossos-projetos"
      >
        <h1 className="pt-48 font-bold text-center md:m-auto md:max-w-5xl text-4xl md:text-5xl text-black">
          Nossos projetos
        </h1>
        <p className="py-8 px-3 text-center md:m-auto md:max-w-2xl text-xl md:text-2xl text-black">
          Seja movido a gasolina ou energia elétrica, desenvolvemos protótipos
          de excelência, sempre buscando alcançar o topo. <br /> Venha conhecer
          os carros da equipe!{""}
        </p>
        <div className="pb-48 flex justify-center">
          <a href="/projects" className="text-lg md:text-xl p-3 bg-green-300 rounded-md">
            Saiba Mais
          </a>
        </div>
      </section>
<div className="flex justify-center flex-col">
  <h1 className="pt-48 font-bold text-center md:m-auto md:max-w-5xl text-4xl md:text-5xl text-black">Patrocinadores</h1>
  <img src="/sponsor.png" alt="Patrocinadores" className="md:max-w-5xl md:m-auto"/>
</div>
      <footer>
        <Footer />
      </footer>
    </div>

  );
}
export default Home;
