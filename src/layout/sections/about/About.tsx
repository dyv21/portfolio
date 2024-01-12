import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const About = () => {
  return (
    <StyledAbout>
      <div>
        <StyledTitleH2>About Me</StyledTitleH2>
        <p>The Generator App is an online tool that helps you to export ready-made templates ready to work as your
          future website. It helps you to combine slides, panels and other components and export it as a set of static
          files: HTML/CSS/JS.</p>
      </div>
      <div>
        <StyledTitleH2>Work Experience</StyledTitleH2>
        <div>
          <FlexWrapper justyfy={"space-between"}>
            <StyledTitleH3>Junior Web Developer</StyledTitleH3>

            <span>Full Time</span>

          </FlexWrapper>
          <FlexWrapper justyfy={"space-between"}>
            <span>Dr. Rajkumar’s Learning App</span>
            <span>Bengaluru</span>
            <span>Sep 2021 - Dec 2021</span>
          </FlexWrapper>
        </div>

        <div>
          <FlexWrapper justyfy={"space-between"}>
            <StyledTitleH3>Web Development Intern</StyledTitleH3>

            <span>Internship</span>
          </FlexWrapper>
          <FlexWrapper justyfy={"space-between"}>
            <span>IonPixelz Web Solutions</span>
            <span>Bengaluru</span>
            <span> Sep 2021 - Dec 2021</span>
          </FlexWrapper>
        </div>


        <div>
          <FlexWrapper justyfy={"space-between"}>
            <StyledTitleH3>SEO / SEM Specialist</StyledTitleH3>

            <span>Internship</span>
          </FlexWrapper>
          <FlexWrapper justyfy={"space-between"}>
            <span>HAAPS</span>
            <span>Bengaluru</span>
            <span>Sep 2021 - Dec 2021</span>
          </FlexWrapper>
        </div>
      </div>
      <div>
        <StyledTitleH2>Education</StyledTitleH2>
        <div>
          <FlexWrapper justyfy={"space-between"}>
            <StyledTitleH3>Bachelor in Electronics & Communication</StyledTitleH3>

            <span>Full Time</span>

          </FlexWrapper>
          <FlexWrapper justyfy={"space-between"}>
            <span>Bangalore Instutute of Technology</span>
            <span>Aug 2015 - Dec 2020</span>
          </FlexWrapper>
        </div>
      </div>


    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  max-width: 710px;
  background-color: #d0eaea;
`

const StyledTitleH2 = styled.h2`
  font-size: 42px;
  font-weight: 700;
  padding: 32px 0;
`

const StyledTitleH3 = styled.h3`
  font-size: 20px;
  font-weight: 400;
`
