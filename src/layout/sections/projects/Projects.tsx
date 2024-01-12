import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./Project";


export const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <span>Things I’ve built so far</span>
      <FlexWrapper justyfy={'space-between'} wrap={'wrap'}>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
      </FlexWrapper>

    </section>
  );
};

