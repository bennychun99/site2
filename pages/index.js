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
      <div className="fixed right-0 left-0 top-0 m-0">
        <NavBar />
      </div>
      <iframe width="420" height="315"
src="https://www.youtube.com/watch?v=MJ4Alfup6_k">
</iframe>
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
      <div className="bg-gray-400">
      <section className="p-2 md:container md:m-auto md:max-w-5xl" id="aequipe">
    <h1 className="text-2xl	font-bold">A equipe</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi aperiam delectus commodi necessitatibus quod quidem, deserunt in distinctio tenetur sequi quae fuga, inventore suscipit consectetur explicabo voluptas, repellendus veritatis ea amet a. Obcaecati sit nisi praesentium eius suscipit delectus unde tenetur modi nobis animi perferendis qui consequatur harum fugiat ipsum voluptates aliquam ipsa tempore error, eum dicta mollitia pariatur. Placeat, mollitia. Ea, perspiciatis officia. Nobis velit odit eos. Excepturi quos neque a. Sed voluptas excepturi nesciunt repudiandae sunt odit quibusdam at unde ad quod deleniti nobis accusamus accusantium voluptate placeat, repellat quia incidunt laboriosam porro expedita delectus enim? Explicabo odit error cumque possimus iste commodi et minima, voluptas eveniet ut mollitia fugiat delectus voluptates aspernatur dolor velit, adipisci eos nostrum voluptatibus eligendi quos quod debitis. Quae, quo nulla eos quisquam alias eaque esse perspiciatis eius delectus perferendis. Maxime facere voluptas quos inventore suscipit sit nulla. Voluptatibus, possimus blanditiis facere ducimus molestiae accusantium minima eligendi dolorum dolorem, ipsa temporibus alias! Illum nisi sint adipisci facilis quia, mollitia officia consectetur eius optio delectus suscipit numquam incidunt quod consequatur, non nostrum at vel nihil. Ut ea ab quisquam non tempora unde consequatur iste incidunt a. Ipsa expedita laudantium vel dolorum aspernatur. Facilis qui voluptatibus, cumque obcaecati, nemo voluptates dolore, repellat id dolores iste illum impedit perferendis molestias? Consequatur eaque optio temporibus ratione officia impedit maiores earum! Obcaecati optio est fuga sit expedita, harum corrupti itaque similique, ea deserunt vel aliquam alias omnis pariatur non aspernatur illum fugiat repellendus magnam quaerat commodi soluta minus unde sapiente? Obcaecati ex est voluptates laudantium delectus voluptatibus explicabo ea laboriosam. Cupiditate molestiae sequi modi doloribus voluptatem repellat optio officiis aperiam sint, ea voluptatum quod et. Quibusdam, aspernatur cupiditate rerum voluptatem expedita sed iste ab placeat quos quia distinctio facilis natus fugiat, quas eligendi? Unde ducimus reiciendis expedita veritatis nulla deleniti illo? Veritatis debitis adipisci nostrum enim porro impedit ad. Impedit, animi sit veritatis similique pariatur voluptatum reprehenderit, consectetur velit rerum dolorem non qui! Dolorum a minima expedita dolores mollitia itaque atque sint dolor. Quae sapiente unde quos accusamus officiis dicta laborum vero. Ipsa fugit recusandae repellat voluptatem obcaecati impedit ullam iste temporibus, cupiditate a, sequi eos, reiciendis rerum quo veritatis repudiandae nulla. Ratione, nulla, animi qui corporis ducimus quos accusamus dolor labore molestiae cumque exercitationem similique vero fuga vitae sit quibusdam beatae harum sunt. Quaerat, assumenda beatae libero vel mollitia voluptates pariatur, sapiente voluptatum repudiandae commodi quos porro et nisi facere reiciendis unde doloremque itaque id amet animi fuga soluta reprehenderit, tenetur cupiditate. Nisi id laborum numquam labore, nobis quis adipisci deleniti. Hic ea tenetur dignissimos doloremque sint aliquid minima deserunt dolore? Esse quae sint unde. Non nulla quaerat modi nisi fugit neque tempore necessitatibus nobis maiores ullam earum minus natus beatae reiciendis, animi dicta provident similique dolorum consequatur sed consectetur ducimus! Velit minus vitae id libero inventore nesciunt, earum illo aspernatur, delectus odio culpa voluptas dolor magnam! Temporibus reiciendis aliquam placeat! Nam mollitia, placeat velit distinctio libero, totam atque cupiditate voluptatum magni doloremque veritatis perspiciatis quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum impedit, doloribus eaque dolore fugiat quisquam enim a nihil esse fuga. Similique corrupti unde facilis dolores neque quibusdam assumenda possimus aliquid maxime soluta! Distinctio nesciunt cum tempora odio sed ex officia dolorum repudiandae reiciendis ipsam? Laboriosam, odio reprehenderit a, totam inventore odit sunt magnam dolor corporis earum quae consectetur tempora, possimus beatae similique nobis! Fugit a et laboriosam itaque accusamus minima quae inventore alias, numquam porro quibusdam aperiam, sint harum!</p>
     </section>
     </div>
      <section className="p-2 md:container md:m-auto md:max-w-5xl" id="contato">
    <h1 className="text-2xl	font-bold">Contato</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, vero? Non nulla sunt commodi architecto ipsum vero est veniam reprehenderit sint dicta praesentium natus cupiditate voluptatibus necessitatibus porro sit, neque rem ut voluptatum consequatur amet, temporibus repellendus! Eveniet quasi ex eum iusto dicta possimus delectus at corrupti voluptates dignissimos saepe perferendis quo voluptas voluptatum natus dolores quas cumque iste harum, libero corporis laborum? Similique odio nostrum velit consequuntur, aliquam iusto soluta blanditiis, deserunt neque rerum laudantium ducimus dolor perspiciatis exercitationem accusamus unde numquam repudiandae sequi quod non? Quas deserunt labore corrupti, molestias sint perferendis sit minima repellat quis quibusdam similique placeat iure eligendi obcaecati quasi mollitia officiis enim quidem, nesciunt impedit dolores ut saepe. Vero consequatur aliquam nesciunt non eius.</p>
    </section>
    </div>
  );
}
export default Home;
