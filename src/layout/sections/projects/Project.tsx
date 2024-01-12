import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import photo1 from '../../../assets/img/proj-1.webp'

export const Project = () => {
  return (
    <StyledProject>
      <img src={photo1} alt="Project Tile goes here"/>
      <div>
        <h3>Project Tile goes here</h3>
        <p>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
        <span>Tech stack : HTML , JavaScript, SASS, React</span>
        <FlexWrapper justyfy={'space-between'}>
          <a href="">
            <Icon iconId={'link'} width={'20'} height={'20'} viewbox={'0 0 20 20'}/>
            Live Preview
          </a>
          <a href="">
            <Icon iconId={'github'} width={'20'} height={'20'} viewbox={'0 0 20 20'}/>
            View Code
          </a>
        </FlexWrapper>
      </div>


    </StyledProject>
  );
};

const StyledProject = styled.div`
  width: 375px;
  height: 570px;
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.20);
  margin-bottom: 30px;

  img {
    height: 260px;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  div {
    padding: 30px;
    
    div {
      padding: 0;
    }
  }

  h3 {
    font-size: 28px;
    line-height: 26px;
    padding-bottom: 17px;
  }
  
`
