import React from 'react'
import { Helmet } from 'react-helmet'

import '../assets/scss/main.scss'

import Header from './Header'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Helmet
          htmlAttributes={{ lang: 'it' }}
          titleTemplate="%s|Villa Giuseppe & Figli S.r.l."
          defaultTitle="Villa Giuseppe & Figli S.r.l."
          meta={[
            {
              name: 'description',
              content:
                'Costruzioni, ristrutturazioni, manutenzioni e risanamenti conservativi',
            },
          ]}
        />
        <Header />
        {children}
      </div>
    )
  }
}

export default Template
