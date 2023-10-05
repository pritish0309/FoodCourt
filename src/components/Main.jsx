import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';

const Main = () => {
  return (
    <div id='main-container'>
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path='/about' element={<Home />} />
            <Route path='/blog' element={<Home />} />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Main
