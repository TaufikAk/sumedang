import React from "react";
import Header from "./Components/Homepage/Header";
import Feature from "./Components/Homepage/Feature";
import About from "./Components/Homepage/About";
import Presentation from "./Components/Homepage/Presentation";
// import aboutimage from './images/about.png';
// import aboutimage1 from './images/download.png';
import Contact from "./Components/Homepage/Contact";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Event from "./Components/Pages/Event";
import Coffee from "./Components/Coffee/Coffee";
import Edukasi from "./Components/Edukasi/Edukasi";
import Artikel_barista from "./Components/Edukasi/Artikel_barista";
import Artikel_petani from "./Components/Edukasi/Artikel_petani";
import Artikel_roasting from "./Components/Edukasi/Artikel_roasting";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/event" element={<Event/>}/>
          <Route path="/coffee" element={<Coffee/>}/>
          <Route path="/edukasi" element={<Edukasi/>}/>
          <Route path="/barista" element={<Artikel_barista/>}/>
          <Route path="/petani" element={<Artikel_petani/>}/>
          <Route path="/roasting" element={<Artikel_roasting/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
