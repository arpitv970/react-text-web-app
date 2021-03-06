import React from "react";

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // theme mode useState
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#1a1a1a';
      showAlert("Dark Mode has been Enabled")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled")
    }
  }

  // Alert useState
  const [alert, setAlert] = useState(null);
  const showAlert = (message)=>{
    setAlert({
      msg: message,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1580);
  }

  return (
    <>
    <Router>
      {/* using react router */}
      <React.Fragment>
      <Navbar title = "Text Utils" mode={mode} toggleMode={toggleMode}/>
      {/* passing alert into component */}
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path='/' element={<TextForm showAlert={showAlert} heading = "Enter your Text here!" mode={mode} />} />
          
          {/* About page is only added to demonstrate react-routing */}
          <Route path='/about' element={<About mode={mode} />}  />
        </Routes>
      </div>
      </React.Fragment>
    </Router>
    </>
  );
}

export default App;
