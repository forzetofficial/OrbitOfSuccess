import { useState } from "react";
import "./App.css";
import "./design/HomePage.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AuthPage } from "./pages/AuthPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default App;

/*import { RegistrationPage } from "./pages/RegistrationPage";
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/directions" element={<DirectionsPage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/preparation" element={<PreparationPage />} /> */