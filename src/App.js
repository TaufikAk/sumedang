import React from "react";
import Header from "./Components/Homepage/Header";
import { BrowserRouter,Route,  Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Event from "./Components/Pages/Event";
import Coffee from "./Components/Coffee/Coffee";
import Edukasi from "./Components/Edukasi/Edukasi";
import Artikel_petani from "./Components/Edukasi/Artikel_petani";
import Download from "./Components/Pages/Download";
import Detailcoffee from "./Components/Coffee/Detailcoffee";
import Footer from "./Components/Navbar/Footer";

function App() {



  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Header/>}/>
            {/* <Route path="/home" element={<Header />} /> */}
            <Route path="/event" element={<Event />} />
            <Route path="/coffee" element={<Coffee />} />
            <Route path="/detailcoffee/:slug" element={<Detailcoffee />} />
            <Route path="/edukasi" element={<Edukasi />} />
            <Route path="/petani/:slug" element={<Artikel_petani />} />
            <Route path="/download" element={<Download />} />
          </Routes>
        </BrowserRouter>
      </div>
          <Footer />
    </>
  );
}

export default App;
