import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/logo";
import {Menu} from "../../components/menu/Menu";
import {Socials} from "../../components/socials/Socials";

export const Header = () => {
  return (
    <StyledHeader>

      <Logo/>
      <Menu/>
      <Socials/>

    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #d3ffd3;
  display: flex;
  justify-conten: start;
  gap: 30px;
`

