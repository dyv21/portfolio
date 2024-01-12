import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const Socials = () => {
  return (
    <StyledSocials>
      <ul>
        <li><a href=""><Icon iconId={'github'} width={'30'} height={'30'} viewbox={'0 0 30 30'}/></a></li>
        <li><a href=""><Icon iconId={'x'} width={'30'} height={'30'} viewbox={'2 2 30 30'}/></a></li>
        <li><a href=""><Icon iconId={'linkedin'} width={'30'} height={'30'} viewbox={'0 0 30 30'}/></a></li>
      </ul>
    </StyledSocials>
  );
};

const StyledSocials = styled.div`
  ul {
    display: flex;
    gap: 10px;
    list-style: none;
  }
`
