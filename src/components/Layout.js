import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, showFooter }) => (
  <React.Fragment>
    <Header />
    {children}
    {showFooter && <Footer />}
  </React.Fragment>
)

export default Layout
