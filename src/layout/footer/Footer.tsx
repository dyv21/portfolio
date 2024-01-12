import React from 'react';
import {Logo} from "../../components/logo/logo";
import {Menu} from "../../components/menu/Menu";
import {Socials} from "../../components/socials/Socials";
import {FlexWrapper} from "../../components/FlexWrapper";
import {ContactsList} from "../../components/contactsList/ContactsList";
import {Copyright} from "../../components/copyright/Copyright";

export const Footer = () => {
  return (
    <footer>

      <FlexWrapper>
        <Logo/>
        <ContactsList/>
        <Socials/>
      </FlexWrapper>

      <FlexWrapper justyfy={"space-between"}>
        <Menu/>
        <Copyright/>
      </FlexWrapper>






    </footer>
  );
};
