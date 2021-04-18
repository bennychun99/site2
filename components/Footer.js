export const Footer = () => {
    return (
      <div id="contactus" className="bg-gray-700 divide-y divide-gray-900">
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
