import Image from "next/image";
import Link from "next/link";
import { Roboto } from 'next/font/google'

import logo from "./images/logo.png";

const roboto = Roboto({
  subsets: ['latin'],
})

export default () => {
  return (
    <main
      className={`place-items-center px-16 pt-16 pb-8 md:pt-8 gap-12 h-screen bg-no-repeat bg-cover bg-[url('/bg.png')] ${roboto.className}`}
    >
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
      <p className="text-4xl font-bold lg:tracking-tight my-8 text-center">
        Pagina non trovata
      </p>
      <p className="text-lg mt-4 text-slate-600">
        Ci dispiace, abbiamo guardato dappertutto ma non siamo riusciti a
        trovare la pagina richiesta.
      </p>
      <p className="text-2xl font-bold lg:tracking-tight my-24 text-center">
        <Link href="/">Torna alla pagina principale</Link>
      </p>
    </main>
  );
};