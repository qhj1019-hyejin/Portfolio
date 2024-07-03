/* eslint-disable */

import './reset.css';
import './common.css';
import axios from "axios";
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/header';
import Main from './components/main/main';
import About from './components/about/about';
import Project from './components/project/project';
import Contact from './components/contact/contact';
import Particle from './components/particles';

function App() {

  const callApi = async()=> {
    axios.get("/api").then((res) => { console.log(res.data.test) });
  }

  useEffect(()=>{
    callApi();
  }, []);

  return (
    <BrowserRouter>
      <Particle/>
      <div className="App" >
        <Header/>
        <Routes>
          <Route exact  path="/" element={<Main/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
