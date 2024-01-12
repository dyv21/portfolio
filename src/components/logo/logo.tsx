import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const Logo = () => {
  return (
    <StyledLogo href="/">

      <Icon iconId={'github-icon'} width={'50'} height={'50'} viewbox={'0 0 50 50'}/>

    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  margin-right: auto;
`
