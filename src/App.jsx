import "./App.css";
import "./design/HomePage.css";
import "./design/AuthPage.css";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";


import { HomePage } from "./pages/HomePage";
import { AuthPage } from "./pages/AuthPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { DirectionsPage } from "./pages/DirectionsPage";
import { EducationPage } from "./pages/EducationPage";
import { PreparationPage } from "./pages/PreparationPage";


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
    </Routes>
  );
}

export default App;
