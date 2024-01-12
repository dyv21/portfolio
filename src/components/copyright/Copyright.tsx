import React from 'react';
import styled from "styled-components";

export const Copyright = () => {
  return (
    <StyledCopyright>
      <p>Designed and built by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span></p>
    </StyledCopyright>
  );
};


const StyledCopyright = styled.div`
  
  span {
    font-weight: bold;
  }
`
