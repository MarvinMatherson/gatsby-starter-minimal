import * as React from "react";
import Hero from "../comps/Hero";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Header from "../comps/Header";
import "../scss/main.scss";
import Intro from "../comps/Intro";
import Projects from "../comps/Projects";
import Languages from "../comps/Languages";
import Contact from "../comps/Contact"


// markup
const IndexPage = () => {
  return (
    <div>
          <Header/>
          <Hero />
          <Intro />
          <Projects />
    </div>
  )
}

export default IndexPage;
