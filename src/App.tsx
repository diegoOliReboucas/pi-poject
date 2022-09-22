import React from "react";
import { Login } from "./components/Login/Index";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { BodyTop } from "./components/BodyTop/Index";
import { Body } from "./components/Body/Index";

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/body' element={<Body />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
