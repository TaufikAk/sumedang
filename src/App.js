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
      <About image={aboutimage} title='Lengkap Dengan Fitur Forum Pecinta Kopi' button='Get The App' />
      <Presentation/>
      <About image={aboutimage1} title='Download Sekarang dan Dapatkan Semuanya' button='Download' />
      <Contact/>
    </div>
  );
}

export default App;
