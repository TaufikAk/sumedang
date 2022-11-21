import React from "react";
import Header from "./Components/Homepage/Header";
import Feature from "./Components/Homepage/Feature";
import About from "./Components/Homepage/About";
import Presentation from "./Components/Homepage/Presentation";
import aboutimage from './images/about.png';
import aboutimage1 from './images/download.png';
import Contact from "./Components/Homepage/Contact";

function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutimage} title='Comes With All You Need For Daily Life' button='Get The App' />
      <Presentation/>
      <About image={aboutimage1} title='Download and Get The App Now' button='Download' />
      <Contact/>
    </div>
  );
}

export default App;
