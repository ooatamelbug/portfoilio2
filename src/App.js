import React from 'react';
import About from './components/about';
import Exper from './components/experience';
import Intro from './components/intro';
import Port from './components/portfolio';
import Edu from './components/educations';
// import Service from './components/service';
import Footer from './components/footer';
import { Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter >
      <Route>
        <Intro />
        <About />
        {/* <Service /> */}
        <Exper />
        <Port />
        <Edu />
        <Footer />
      </Route>
    </BrowserRouter>
  );
}

export default App;
