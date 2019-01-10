import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

class Storia extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="La nostra storia" />

        <div id="main">
          <section>
            <header className="major">
              <h2>Storia</h2>
            </header>
            <p>
              La microimpresa “Villa Giuseppe & Figli S.r.l.” è nata come
              società familiare nel 1957 ad opera del sig. Villa Giuseppe.
            </p>
            <p>
              Per cinquatasei anni consecutivi, a partire dal 1962 fino al 2018,
              la società aderisce volontariamente all’“Associazione Costruttori
              Edili Bergamo” - denominata “A.C.E.B.”- già operativa nella
              provincia dal 1948 e successivamente trasformata, nel 2007, in
              “Ance Bergamo”.
            </p>
            <p>
              Il 9 gennaio 1972 veniva poi iscritta alla{' '}
              <a href="http://www.bg.camcom.it">
                “Camera di Commercio Industria Agricoltura Artigianato di
                Bergamo”
              </a>{' '}
              e già nell’anno successivo riceveva, per il XXV anniversario di
              fondazione della{' '}
              <a href="www.cassaedilebg.it">
                “Cassa Edile di Mutualità ed Assistenza di Bergamo”
              </a>
              , un attestato di benemerenza sul quale è riportato il nome di
              “Villa Fratelli”. Gli atti notarili del 1975 sanciscono la
              scissione della “Villa Fratelli” in due rami familiari, da uno dei
              quali nasce l'“Impresa edile di Villa Giuseppe & Figli”.
            </p>
            <p>
              Nel 1977 la confraternita si regolarizza in “Società a Nome
              Collettivo” e undici anni dopo, nel 1988 in “Società a
              Responsabilità Limitata”.
            </p>
            <p>
              Un altro passo significativo è stato il trasferimento della sede
              logistica e legale nel nuovo insediamento produttivo di Bonate
              Sotto (BG) avvenuto per la prima e unica volta nel 1999, dopo
              quarantadue anni di permanenza a Bonate Sopra (BG).
            </p>
            <ul className="actions">
              <li>
                <Link to="/#main" className="button">
                  Torna indietro
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Storia
