import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainScreen from "./MainScreen";
import TeamScreen from "./TeamScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./Pages/Project";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        {/*  주소에 따라 바뀌는 본문 영역 */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/team" element={<TeamScreen />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
