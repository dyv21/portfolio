import React from 'react';
import styled from "styled-components";

export const Contact = () => {
  return (
    <StyledContact>
      <h2>For any questions please mail me:</h2>
      <a href="mailto:hi@pavanmg.in">hi@pavanmg.in</a>

    </StyledContact>
  );
};

const StyledContact = styled.section`
  margin: auto;
  
  h2, a {
    font-size: 58px;
    text-align: center;
    display: block;
  }
 
    
  }
`

