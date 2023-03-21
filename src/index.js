import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './components/Home';
import Brawlers from './components/brawlers';
import Brawler from './components/brawler';
import Maps from './components/maps';
import MapPage from './components/map-page';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter id="app">
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/brawlers" element={<Brawlers />}></Route>
    <Route path="/brawlers/:id" element={<Brawler />}></Route>
    <Route path="/maps" element={<Maps />}></Route>
    <Route path="/maps/:id" element={<MapPage />}></Route>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
