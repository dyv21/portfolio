import React from 'react';
import styled from "styled-components";

export const Socials = () => {
  return (
    <StyledSocials>
      <ul>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
      </ul>
    </StyledSocials>
  );
};

const StyledSocials = styled.div`
  ul {
    display: flex;
    gap: 10px;
  }
`
