import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Header/>
      <main>{children}</main> 
      <Footer/>
    </Container>
  )
}
