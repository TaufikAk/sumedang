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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/event" element={<Event/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
