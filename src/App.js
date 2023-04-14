import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';
import MainPage from "./componenets/page/MainPage";
import TokyoInformationPage from './componenets/page/TokyoInformationPage';
import OsakaInformationPage from './componenets/page/OsakaInformationPage';
import KyotoInformationPage from './componenets/page/KyotoInformationPage';
import SapporoInformationPage from './componenets/page/SapporoInformationPage';
import LogInPage from "./componenets/page/LogInPage";
import TypePage from "./componenets/page/TypePage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="loginpage" element={<LogInPage />} />
        <Route path="tokyoinformationpage" element={<TokyoInformationPage />} />
        <Route path="osakainformationpage" element={<OsakaInformationPage />} />
        <Route path="kyotoinformationpage" element={<KyotoInformationPage />} />
        <Route path="sapporoinformationpage" element={<SapporoInformationPage />} />
        <Route path="typepage" element={<TypePage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
