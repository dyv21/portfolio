import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";

export const Skills = () => {
  return (
    <StyledSkills>
      <h2>My Tech Stack</h2>
      <h3>Technologies I’ve been working with recently</h3>
      <StyledSkillsList>
        <li><Icon iconId={'html5'} width={'120'} height={'120'} viewbox={'0 0 120 120'}/></li>
        <li><Icon iconId={'css3'} width={'120'} height={'120'} viewbox={'0 0 120 120'}/></li>
        <li><Icon iconId={'js'} width={'120'} height={'120'} viewbox={'0 0 120 120'}/></li>
        <li><Icon iconId={'react'} width={'120'} height={'120'} viewbox={'0 0 120 120'}/></li>
        <li><Icon iconId={'vector'} width={'120'} height={'120'} viewbox={'0 0 120 120'}/></li>
        <li><Icon iconId={'bootstrap'} width={'120'} height={'120'} viewbox={'0 0 120 120'}/></li>
        <li><Icon iconId={'tailwind'} width={'120'} height={'120'} viewbox={'0 0 120 120'}/></li>
        <li><Icon iconId={'sass'} width={'120'} height={'120'} viewbox={'0 0 120 120'}/></li>
        <li><Icon iconId={'git-icon'} width={'120'} height={'120'} viewbox={'0 0 120 120'}/></li>
        <li><Icon iconId={'greensock'} width={'120'} height={'120'}  viewbox={'0 0 120 120'}/></li>
        <li><Icon iconId={'vscode'} width={'120'} height={'120'} viewbox={'0 0 120 120'}/></li>
        <li><Icon iconId={'github-icon'} width={'120'} height={'120'}  viewbox={'0 0 120 120'}/></li>
      </StyledSkillsList>
    </StyledSkills>
  );
};

const StyledSkills = styled.div`
  background-color: #efe4e6;
`

const StyledSkillsList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 90px;
  flex-wrap: wrap;
  list-style: none;
`
