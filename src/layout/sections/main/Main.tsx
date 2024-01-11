import React from 'react';
import photo from '../../../assets/img/denis_photo.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";


export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justyfy={"space-around"}>
        <FlexWrapper direction={"column"}>
          <span>Hi 👋,</span>
          <span>My name is</span>
          <span>Denis</span>
          <h1>I build things for web</h1>

        </FlexWrapper>
        <Photo src={photo} alt="Photo"/>

      </FlexWrapper>
    </StyledMain>
  );
};

const Photo = styled.img`
width: 349px;
height: 340px;
border-radius: 50% ;
object-fit: cover;
object-position: 50% 70%;
`

const StyledMain = styled.div`
background-color: #fff5e7;
`
