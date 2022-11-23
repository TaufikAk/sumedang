import React from "react";
import Header from "./Components/Homepage/Header";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Event from "./Components/Pages/Event";
import Coffee from "./Components/Coffee/Coffee";
import Edukasi from "./Components/Edukasi/Edukasi";
import Artikel_petani from "./Components/Edukasi/Artikel_petani";
import Download from "./Components/Pages/Download";
import Footer from "./Components/Navbar/Footer";

function App() {

  

  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {/* <Route path="/" element={<Header/>}/> */}
          <Route path="/home" element={<Header/>}/>
          <Route path="/event" element={<Event/>}/>
          <Route path="/coffee" element={<Coffee/>}/>
          <Route path="/edukasi" element={<Edukasi/>}/>
          
          <Route path="/petani/:id" element={<Artikel_petani/>}/>
 
          <Route path="/download" element={<Download/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
    </div>
    </>
  );
}

export default App;
