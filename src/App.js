import Homepage from "./pages/HomePage";
import SurveyPage from "./pages/survey";
import {Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/survey">Survey</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/survey" element={<SurveyPage />} />
      </Routes>
    </div>
  );
}

export default App;
