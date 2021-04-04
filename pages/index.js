import Head from "next/head";

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
            <a href="#familhagem" className="">Familhagem</a>
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
            <a href="#familhagem" className="bg-green-400 rounded-md hover:bg-green-500">Familhagem</a>
          </li>
        </ul>

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
      <section className="p-2 md:container md:m-auto md:max-w-5xl" id="nossahistoria">
        
    <h1 className="text-2xl	font-bold mt-28 md:mt-20">Nossa história</h1>
    <p>A Equipe PoliMilhagem surgiu em 2006, derivada de um projeto do PET Mecânica e, no ano seguinte, estreou seu primeiro protótipo, o PoliMapfre 07 (gasolina), na primeira competição do grupo, a Maratona de Eficiência Energética de 2007. Nesta competição, foram alcançados resultados significativos, consolidando-se entre as equipes automobilísticas da Poli. <br></br>
Em 2008, após uma série de problemas internos, a equipe ficou inativa por cerca de 2 anos, retomando as atividades em 2011 com o desenvolvimento do novo protótipo a gasolina, o PoliPosition, do qual surgiram sequências nomeadas e baseadas no mesmo projeto, com pequenas mudanças entre as suas versões. Atualmente, a equipe está trabalhando no sétimo protótipo da sequência, o Position VII.<br></br>
	Em 2016, foi introduzida na equipe a ideia de se desenvolver veículos elétricos, assim estreando o PoliVoltage, o primeiro e único veículo elétrico desenvolvido por um grupo de extensão da Poli. Ele foi seguido pelo PoliCurrent, que alcançou ótimos resultados em testes e treinos. Também neste ano, a equipe participou da primeira edição da Shell Eco Marathon, principal competição de sustentabilidade energética mundial.
Com a pandemia causada pelo Covid-19, a equipe continuou os trabalhos remotamente, projetando os futuros carros a serem construídos pela equipe. No segundo semestre de 2020, a Shell, realizadora da principal competição da qual a equipe participava, a Shell Eco Marathon Brasil, cancelou o evento presencial e, em seu lugar, realizou uma versão virtual deste, composta por diversas etapas, as quais ainda ocorrem no início de 2021.</p>
      </section>
      <section className="p-2 md:container md:m-auto md:max-w-5xl" id="nossosprojetos">
    <h1 className="text-2xl	font-bold">Nossos projetos</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, fugiat voluptatibus similique natus atque maiores sapiente a repellendus? Magnam doloribus qui sunt? Pariatur nostrum assumenda ab optio, fuga officia in consequatur aliquam, numquam id aperiam iste facilis, modi ea quidem illo nihil. Tenetur praesentium fugit saepe odio beatae quae reiciendis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos dolores ut beatae repellendus, voluptate corporis magnam, nulla officiis perferendis voluptates incidunt quisquam soluta ipsam officia possimus illo fugiat. Dicta et numquam error omnis laboriosam soluta dolorum quos ipsam voluptates? Error, velit esse. Fugit temporibus nulla cum vitae maiores. Numquam, incidunt!</p>
      </section>
      <div className="bg-fixed">
      <section className="p-2 md:container md:m-auto md:max-w-5xl bg-fixed bg-current" id="aequipe">
    <h1 className="text-2xl	font-bold text-center">A equipe</h1>
    <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, molestias! <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, tempora. <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate porro minus placeat quis reiciendis debitis nesciunt optio harum sequi.</p>
    </section>
     </div>
      <section className="p-2 md:container md:m-auto md:max-w-5xl" id="contato">
    <h1 className="text-2xl	font-bold">Contato</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime maiores saepe aperiam tempora, perferendis, a magni repellat numquam esse voluptates qui sit nihil quidem id fugiat error impedit molestiae consectetur. <br/> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error cupiditate deserunt tempore quisquam similique cumque nesciunt. Repellendus vero enim ut aliquid quia deserunt fugit exercitationem animi molestiae. Quia, nisi pariatur. <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, itaque saepe exercitationem eveniet tenetur natus fugiat minima doloremque quidem earum excepturi corporis soluta quas! Recusandae illum error temporibus perspiciatis laboriosam! <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nisi, similique cupiditate, iure rem enim ab suscipit distinctio officia vitae eius dolore. Neque, quas! Harum doloribus velit necessitatibus possimus aperiam. <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla veritatis tenetur ducimus facere magni adipisci tempora aut, earum labore ut mollitia accusamus. Alias id voluptatibus mollitia nisi laudantium! Quae, optio! <br/> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, vero? Non nulla sunt commodi <br/> architecto ipsum vero est veniam reprehenderit sint dicta praesentium <br/> natus cupiditate voluptatibus necessitatibus porro sit, neque rem ut voluptatum consequatur amet, temporibus repellendus! Eveniet quasi ex eum iusto dicta possimus delectus at corrupti voluptates dignissimos saepe perferendis quo voluptas voluptatum natus dolores quas cumque iste harum, libero corporis laborum? Similique odio nostrum velit consequuntur, aliquam iusto soluta blanditiis, deserunt neque rerum laudantium ducimus dolor perspiciatis exercitationem accusamus unde numquam repudiandae sequi quod non? Quas deserunt labore corrupti, molestias sint perferendis sit minima repellat quis quibusdam similique placeat iure eligendi obcaecati quasi mollitia officiis enim quidem, nesciunt impedit dolores ut saepe. Vero consequatur aliquam nesciunt non eius.</p>
    </section>
    </div>
  );
}
export default Home;
