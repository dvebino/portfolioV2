import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import Access from '../components/Access/Access'

export const Layout = ({children}) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
     {
      !open ? <Access setOpen={setOpen}/>
      :
      <>
        <Header/>
        <main>{children}</main> 
        <Footer/>
      </>
     }
    </Container>
  )
}
