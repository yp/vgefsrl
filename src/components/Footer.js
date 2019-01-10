import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="labeled-icons">
            <li>
              <h3 className="icon fa-map-marker">
                <span className="label">Indirizzo</span>
              </h3>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Villa%20Giuseppe%20%26%20Figli%20S.r.l.&query_place_id=ChIJc4pwExxTgUcRWJ7nZHOu6Lc"
                target="_blank"
                rel="noopener noreferrer"
              >
                Via Primo Maggio, 26
                <br />
                24040 Bonate Sotto (BG)
              </a>
            </li>
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
          <ul className="copyright">
            <li>Impresa Edile</li>
            <li>Iscr. Reg. Imprese di Bergamo</li>
            <li>C.F. e P. IVA: 00077760163</li>
            <li>Sede: Bonate Sotto (BG)</li>
            <li>Cap. Soc.: 98.800,00€ i.v.</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
