import "./App.css";
import "./design/HomePage.css";
import "./design/AuthPage.css";
import "./design/RegistrationPage.css";
import "./design/Refreshpass.css";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";


import { HomePage } from "./pages/HomePage";
import { AuthPage } from "./pages/AuthPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { DirectionsPage } from "./pages/DirectionsPage";
import { EducationPage } from "./pages/EducationPage";
import { PreparationPage } from "./pages/PreparationPage";
import { TestPage } from "./pages/test";
import { Homemain } from "./pages/Homemain";
import { RefreshPage } from "./pages/Refreshpass";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/directions" element={<DirectionsPage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/preparation" element={<PreparationPage />} /> 
      <Route path="/activate/:url" element={<TestPage />} /> 
      <Route path="/homemain" element={<Homemain />} /> 
      <Route path="/change_password/:url" element={<RefreshPage />} /> 
    </Routes>
  );
}

export default App;
