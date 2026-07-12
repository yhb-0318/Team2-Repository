import React from "react";
import Header from "./components/Header";
import TeamScreen from "./TeamScreen";
import Footer from "./components/Footer";
import MainScreen from "./MainScreen";

function App() {
  return (
    <>
      <Header />

      <MainScreen />
      <TeamScreen />

      <Footer />
    </>
  );
}

export default App;
