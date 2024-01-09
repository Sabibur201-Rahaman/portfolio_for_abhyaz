import React from 'react'
import Header from './shared/Header'
import Footer from './shared/Footer'
function Layout({children}) {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
