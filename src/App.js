// import { useState } from 'react';
import * as React from 'react';
import './App.css';
import MainCards from './components/cards/MainCards';
import Tags from './components/cards/Tags';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import NavBar from './components/header/NavBar';
import NavBarCard from './components/header/NavBarCard';



function App() {

  // const [formData, setFormData] = React.useState('suhan')
  // console.log(formData);

  return (
    <div className='app' >
      {/* <NavBar /> */}
      <Header />
      <Tags />
      <MainCards />

      <Footer />
    </div>
  );
}

export default App;
