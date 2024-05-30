import logo from './logo.svg';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import FirstBanner from './components/FirstBanner';
import SecondBanner from './components/SecondBanner';
import ThirdBanner from './components/ThirdBanner';
import FourthBanner from './components/FourthBanner';
import FifthBanner from './components/FifthBanner';
import SixthBanner from './components/SixthBanner';
import Footer from './components/Footer';


import './App.css';

function App() {
  
  return (
    <div >
      <Navbar/>
       <FirstBanner/>
       <SecondBanner/>
       <ThirdBanner/>
       <FourthBanner/>
       <FifthBanner/>
       <SixthBanner/>
       <Footer/>
    </div>
  );
}

export default App;
