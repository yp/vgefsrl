import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <div id="main">
          <section id="storia">
            <header className="major">
              <h2>Chi siamo</h2>
            </header>
            <p>
              La <strong>Villa Giuseppe & Figli S.r.l.</strong> è un'impresa
              edile che opera dal 1957 nell'ambito della{' '}
              <strong>costruzione</strong>, <strong>ristrutturazione</strong>,
              <strong>manutenzione</strong> e{' '}
              <strong>risanamento conservativo</strong> di tutti i tipi di
              edifici, sia residenziali che non residenziali.
            </p>
            <ul className="actions">
              <li>
                <Link to="/storia#main" className="button">
                  La nostra storia
                </Link>
              </li>
            </ul>
          </section>

          <section id="cosafacciamo">
            <h2>Cosa facciamo</h2>
            <ul>
              <li>
                Compravendita di terreni e fabbricati, esercizio dell'attività
                di impresa edilizia di costruzione, trasformazione e
                manutenzione di fabbricati di qualsiasi specie ed uso.
              </li>
              <li>
                Esecuzione di opere stradali, escavazione e livellamento di
                terreni, o simili, sia su suolo per conto proprio sia su suolo
                per conto altrui.
              </li>
              <li>
                Produzione di manufatti in cemento e calcestruzzo con l’inerente
                commercio di detti materiali e prodotti.
              </li>
              <li>
                Costruzione di edifici civili, industriali, monumentali completi
                di impianti e di opere connesse ed accessorie.
              </li>
              <li>
                Opere murarie relative ai complessi per la produzione e
                distribuzione di energia, lavori di terra con eventuali opere
                connesse in muratura e cemento armato di tipo corrente.
              </li>
              <li>
                Demolizioni, sterri, costruzioni stradali, pavimentazioni
                stradali, rilevati aeroportuali e ferroviari, lavori idraulici,
                acquedotti, fognature e impianti di irrigazione.
              </li>
              <li>Commercio al minuto di materiali edili.</li>
            </ul>
          </section>
          <section id="contattaci">
            <h2>Contattaci</h2>
            <ul className="labeled-icons">
              <li>
                <h3 className="icon fa-phone">
                  <span className="label">Telefono</span>
                </h3>
                <a href="tel:+39035991215">035 991215</a>
              </li>
              <li>
                <h3 className="icon fa-envelope-o">
                  <span className="label">E-mail</span>
                </h3>
                <a href="mailto:info@vgefsrl.it">info@vgefsrl.it</a>
              </li>
            </ul>
          </section>
          <section id="dovesiamo">
            <h2>Dove siamo</h2>
            <p>
              La <strong>Villa Giuseppe & Figli S.r.l.</strong> è a Bonate Sotto
              (BG) in Via Primo Maggio, 26 ed è facilmente raggiungibile sia
              dall'A4 (casello Dalmine) che da Bergamo e Lecco (via SP ex SS 342
              A.I.).
            </p>
            <iframe
              title="Mappa"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d44610.09800315954!2d9.579093153512082!3d45.66826790009461!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb7e8ae7364e79e58!2sVilla+Giuseppe+%26+Figli+S.r.l.!5e0!3m2!1sit!2sit!4v1547118191111"
              width="100%"
              height="450"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen
            />
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
