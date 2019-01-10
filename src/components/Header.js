import React from 'react'
import { Link } from 'gatsby'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <Link to="/" className="image avatar">
            <img src={avatar} alt="Logo Villa Giuseppe & Figli S.r.l." />
          </Link>
          <h1>
            <strong>Villa Giuseppe & Figli S.r.l.</strong>
            Costruzioni, ristrutturazioni, manutenzioni e risanamenti
            conservativi
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
