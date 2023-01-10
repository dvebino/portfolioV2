import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillGoogleCircle, AiFillLinkedin } from 'react-icons/ai';
import { FaConnectdevelop } from 'react-icons/fa';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color:"white", marginBottom:"5px"}}>
          <FaConnectdevelop size="3rem"/>
          <span style={{marginLeft:"1rem"}}>Portfolio V2 </span>
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
    </Div3>
  </Container>
);

export default Header;
