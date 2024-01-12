import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {About} from "./layout/sections/about/About";
import {Socials} from "./components/socials/Socials";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {Contact} from "./layout/sections/contact/Contact";


function App() {
    return (
        <div className="App">
          <Header/>
          <Main/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
            {/*<Title>Styled-components <span>.attrs</span> method</Title>*/}

            {/*<Form>*/}
            {/*    <Field/>*/}
            {/*    <Field/>*/}
            {/*    <Field/>*/}
            {/*</Form>*/}
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 32px;
    span {
      color: #e91e63;
    }
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
`;

const Field = styled.input`
  padding: 5px 15px;
  margin: 10px 0;
  width: 100%;
  font-size: 1rem;
`;
