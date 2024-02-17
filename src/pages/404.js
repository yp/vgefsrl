import * as React from "react";
import { Link } from "gatsby";

import logo from "../images/logo.png";
import background from "../images/bg.png";

const pageStyles = {
  backgroundImage: "url(" + background + ")",
};

const NotFoundPage = () => {
  return (
    <main
      class="place-items-center px-16 pt-16 pb-8 md:pt-8 gap-12 h-screen bg-no-repeat bg-cover"
      style={pageStyles}
    >
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
      <p class="text-4xl font-bold lg:tracking-tight my-8 text-center">
        Pagina non trovata
      </p>
      <p class="text-lg mt-4 text-slate-600">
        Ci dispiace, abbiamo guardato dappertutto ma non siamo riusciti a
        trovare la pagina richiesta.
      </p>
      <p class="text-lg mt-4 text-slate-600">
        <Link to="/">Torna alla pagina principale</Link>
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => (
  <>
    <html lang="it" />
    <title>Pagina non trovata - Villa Giuseppe & Figli S.r.l.</title>
    <meta
      name="description"
      content="Costruzioni, ristrutturazioni, manutenzioni e risanamenti conservativi"
    />
  </>
);
