import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

import logo from "../images/logo.png";
import background from "../images/bg.png";

const pageStyles = {
  backgroundImage: "url(" + background + ")",
};

const IndexPage = () => {
  return (
    <main
      class="grid lg:grid-cols-2 place-items-center px-16 pt-16 pb-8 md:pt-8 gap-12 h-screen bg-no-repeat bg-cover"
      style={pageStyles}
    >
      <div>
        <img
          src={logo}
          alt="Logo microimpresa Villa Giuseppe e Figli S.r.l."
          class="pb-6"
        />
        <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">
          Villa Giuseppe & Figli S.r.l.
        </h1>
        <p class="text-lg mt-4 text-slate-600 max-w-xl">
          Microimpresa edile
          <br />
          Costruzioni, ristrutturazioni, manutenzioni e risanamenti conservativi
        </p>
      </div>
      <div class="py-6 hidden md:block">
        <StaticImage
          class="rounded-lg shadow-xl shadow-gray-500"
          src="../images/hero.jpg"
          alt="Sede della microimpresa Villa Giuseppe & Figli S.r.l."
        />
      </div>
      <div class="p-4">
        <div class="flex items-center space-x-2 text-gray-800">
          <MapPinIcon class="w-8 h-8" />
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
      <div class="p-4">
        <div class="flex items-center space-x-2 text-gray-800">
          <EnvelopeIcon class="w-8 h-8" />
          <a href="mailto:info@vgefsrl.it">info@vgefsrl.it</a>
        </div>
      </div>
      <div class="lg:col-span-2 flex flex-wrap justify-around gap-6 text-gray-600 py-6">
        <div>Impresa Edile</div>
        <div>Iscr. Reg. Imprese di Bergamo</div>
        <div>C.F. e P. IVA: 00077760163</div>
        <div>Sede: Bonate Sotto (BG)</div>
        <div>Cap. Soc.: 98.800,00€ i.v.</div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <html lang="it" />
    <title>Villa Giuseppe & Figli S.r.l.</title>
    <meta
      name="description"
      content="Costruzioni, ristrutturazioni, manutenzioni e risanamenti conservativi"
    />
  </>
);
