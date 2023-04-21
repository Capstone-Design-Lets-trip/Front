import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MainPage from "./componenets/page/MainPage";
import TokyoInformationPage from './componenets/page/TokyoInformationPage';
import OsakaInformationPage from './componenets/page/OsakaInformationPage';
import KyotoInformationPage from './componenets/page/KyotoInformationPage';
import SapporoInformationPage from './componenets/page/SapporoInformationPage';
import LogInPage from "./componenets/page/LogInPage";
import TypePage from "./componenets/page/TypePage";
import SignUpPage from './componenets/page/SignUpPage';
import MyPage from './componenets/page/MyPage';
import ResultPage from './componenets/page/ResultPage';
import SurveyPage from './componenets/page/SurveyPage';

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
        <Route path="signuppage" element={<SignUpPage />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="resultpage" element={<ResultPage />} />
        <Route path="surveypage" element={<SurveyPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
