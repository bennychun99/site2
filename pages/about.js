import Head from "next/head";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

function About() {
  return (
    <div>
      <Head>
        <title>Equipe PoliMilhagem</title>
        <link rel="icon" href="/logo-icon.png" />
      </Head>
      <div className="fixed right-0 left-0 top-0 m-0">
        <NavBar />
      </div>
      <div className="pt-20">
        <section
          className="bg-auto md:bg-contain bg-fixed bg-top bg-about3 bg-repeat-y   h-capa flex flex-col justify-center content-center"
          id="bem-vindos"
        >
          <h1 className="font-bold text-center text-5xl text-white">
            NOSSA HISTÓRIA
          </h1>
          <p className="text-center text-2xl text-white">
            <br /> Desde 2007 (frase impactante).
          </p>
        </section>

        <section className="bg-gray-700">
          <h1 className="pt-10 text-4xl md:text-5xl	font-bold text-center md:m-auto md:max-w-5xl text-white">
            Linha do Tempo
          </h1>
          <img src="/timeline.png" alt="Linha do tempo" className="m-auto" />
        </section>

        <section className="bg-cover bg-center bg-arte1m md:bg-arte1">
          <h1 className="pt-28 text-4xl md:text-5xl	font-bold text-center md:m-auto md:max-w-5xl text-black">
            NOSSA HISTÓRIA
          </h1>
          <p className="pb-28 pt-8 px-3 text-left md:m-auto md:max-w-4xl text-xl md:text-2xl text-black">
            &nbsp; &nbsp; &nbsp; &nbsp; A Equipe PoliMilhagem surgiu em 2007,
            derivada de um projeto do PET Mecânica e, no ano seguinte, estreou
            seu primeiro protótipo, o PoliMapfre 07 (gasolina), na primeira
            competição do grupo, a Maratona de Eficiência Energética de 2007.
            Nesta competição, foram alcançados resultados significativos,
            consolidando-se entre as equipes automobilísticas da Poli.
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; Em 2008, após uma série de problemas
            internos, a equipe ficou inativa por cerca de 2 anos, retomando as
            atividades em 2011 com o desenvolvimento do novo protótipo a
            gasolina, o PoliPosition, do qual surgiram sequências nomeadas e
            baseadas no mesmo projeto, com pequenas mudanças entre as suas
            versões. Atualmente, a equipe está trabalhando no sétimo protótipo
            da sequência, o Position VII.
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; Em 2016, foi introduzida na equipe a
            ideia de se desenvolver veículos elétricos, assim estreando o
            PoliVoltage, o primeiro e único veículo elétrico desenvolvido por um
            grupo de extensão da Poli. Ele foi seguido pelo PoliCurrent, que
            alcançou ótimos resultados em testes e treinos. Também neste ano, a
            equipe participou da primeira edição da Shell Eco Marathon,
            principal competição de sustentabilidade energética mundial.
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; Com a pandemia causada pelo Covid-19, a
            equipe continuou os trabalhos remotamente, projetando os futuros
            carros a serem construídos pela equipe. No segundo semestre de 2020,
            a Shell, realizadora da principal competição da qual a equipe
            participava, a Shell Eco Marathon Brasil, cancelou o evento
            presencial e, em seu lugar, realizou uma versão virtual deste,
            composta por diversas etapas, as quais ainda ocorrem no início de
            2021.
          </p>
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default About;
