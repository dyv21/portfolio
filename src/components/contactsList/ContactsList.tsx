import React from 'react';
import styled from "styled-components";

export const ContactsList = () => {
  return (
    <StyledContactsList>
      <li><a href="tel:+91 12345 09876">+91 12345 09876</a></li>
      <li><a href="mailto:info@example.com">info@example.com</a></li>
    </StyledContactsList>
  );
};


const StyledContactsList = styled.ul`
display: flex;
  list-style: none;
  gap: 30px;
  margin-right: 30px;
`

