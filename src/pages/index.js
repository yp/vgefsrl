import Image from "next/image";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { Roboto } from 'next/font/google'

import logo from "./images/logo.png";
import hero from "./images/hero.jpg";

const roboto = Roboto({
  subsets: ['latin'],
})

export default () => {
  return (
    <main
      className={`grid lg:grid-cols-2 place-items-center px-16 pt-16 pb-8 md:pt-8 gap-12 h-screen bg-no-repeat bg-cover bg-[url('/bg.png')] ${roboto.className}`}
    >
      <div>
        <Image
          src={logo}
          alt="Logo microimpresa Villa Giuseppe e Figli S.r.l."
          className="pb-6"
        />
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">
          Villa Giuseppe & Figli S.r.l.
        </h1>
        <p className="text-lg mt-4 text-slate-600 max-w-xl">
          Microimpresa edile
          <br />
          Costruzioni, ristrutturazioni, manutenzioni e risanamenti conservativi
        </p>
      </div>
      <div className="py-6 hidden md:block">
        <Image
          className="rounded-lg shadow-xl shadow-gray-500"
          src={hero}
          alt="Sede della microimpresa Villa Giuseppe & Figli S.r.l."
        />
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-2 text-gray-800">
          <MapPinIcon className="w-8 h-8" />
          <a
            href="https://www.google.com/maps/search/?api=1&query=Villa%20Giuseppe%20%26%20Figli%20S.r.l.&query_place_id=ChIJc4pwExxTgUcRWJ7nZHOu6Lc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Via Primo Maggio, 26
            <br />
            24040 Bonate Sotto (BG)
          </a>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-2 text-gray-800">
          <EnvelopeIcon className="w-8 h-8" />
          <a href="mailto:info@vgefsrl.it">info@vgefsrl.it</a>
        </div>
      </div>
      <div className="lg:col-span-2 flex flex-wrap justify-around gap-6 text-gray-600 py-6">
        <div>Impresa Edile</div>
        <div>Iscr. Reg. Imprese di Bergamo</div>
        <div>C.F. e P. IVA: 00077760163</div>
        <div>Sede: Bonate Sotto (BG)</div>
        <div>Cap. Soc.: 98.800,00€ i.v.</div>
      </div>
    </main>
  );
};