import React, { useState, useEffect } from "react";
import Banner from "./components/Banner";
import Campanha from "./components/Camapanha";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PainelAdmin from "./components/PainelAdmin";
import ProximosPassos from "./components/ProximosPassos";
import Selos from "./components/Selos";
import "./index.css";

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div>
      <Header setShowAdmin={setShowAdmin} showAdmin={showAdmin}></Header>
      <Banner></Banner>
      <Campanha></Campanha>
      <ProximosPassos></ProximosPassos>
      <Selos></Selos>
      {showAdmin ? (
        <PainelAdmin setShowAdmin={setShowAdmin}></PainelAdmin>
      ) : null}
      <Footer></Footer>
    </div>
  );
}

export default App;
