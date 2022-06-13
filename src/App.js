// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from "react";
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }



  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Has Beeen Enabled!", "success")
      // document.title = "Dark Mode"
      // setInterval(() => {
      //   document.title = 'TextUtils - Awesome Utility'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'TextUtils - Use it now'
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Beeen Enabled!", "success")
      // document.title = "Light Mode"
      // setInterval(() => {
      //   document.title = 'TextUtils - Awesome Utility'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'TextUtils - Use it now'
      // }, 1500);
    }
  }

  
  return (
    <BrowserRouter>
<Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

<div className="container">
<Routes>
          <Route exact path="/about" element={<About mode={mode} />}>
          </Route>
          <Route exact path="/"element={<TextForm showAlert={showAlert} heading="Enter your text to analyze below"  mode={mode} />} >
          
          </Route>
</Routes>
</div>


</BrowserRouter>
  );
}

export default App;
