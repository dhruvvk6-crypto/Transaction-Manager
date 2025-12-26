import "./App.css";
import Header from "../src/components/HomePage/Header/Header";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import VisualizationPage from "./pages/VisualizationPage/VisualizationPage";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <div className="flex flex-col max-w-screen gap-8">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/visualizations" element={<VisualizationPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
