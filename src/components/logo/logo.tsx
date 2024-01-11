import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const Logo = () => {
  return (
    <StyledLogo href="/">

      <Icon iconId={'git-icon'}/>

    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  margin-right: auto;
`
