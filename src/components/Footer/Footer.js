import React from 'react';
import { AiFillGithub, AiFillGoogleCircle, AiFillLinkedin } from 'react-icons/ai';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem>Cell: 917-860-9478</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:dhuang2495@gmail.com">dhuang2495@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Socials</LinkTitle>
          <LinkItem><a href="https://github.com/dvebino"><AiFillGithub size="3rem"color='white'/></a> <a href="https://linkedin.com/in/dhuang24"> <AiFillLinkedin size="3rem" color='white'/></a></LinkItem>
          <LinkItem></LinkItem>
        </LinkColumn >
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
