import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillGithub, AiFillGoogleCircle, AiFillLinkedin } from 'react-icons/ai';
import { FaConnectdevelop } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, ContactDropDown } from './HeaderStyles';
import NavDropDown from '../NavDropDown';

const Header = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color:"white", marginBottom:"5px"}}>
          <FaConnectdevelop size="3rem"/>
          <span style={{marginLeft:"1rem"}}>DVEBINO</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li style={{marginTop:"6px"}}>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li style={{marginTop:"6px"}}>
        <Link href="#tech">
          <NavLink>Tech</NavLink>
        </Link>
      </li>
      <li style={{marginTop:"6px"}}>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2> 
    <Div3>
      <SocialIcons href="https://github.com/dvebino">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/dhuang24">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="mailto:dhuang2495@gmail.com">
        <AiFillGoogleCircle size="3rem"/>
      </SocialIcons>
      <ContactDropDown>
        <GiHamburgerMenu size="3rem" onClick={() => setClicked(!clicked)}/>
        { 
          clicked && <NavDropDown isOpen={clicked}/>
        }
      </ContactDropDown>
    </Div3>
  </Container>
  )
}

export default Header;
