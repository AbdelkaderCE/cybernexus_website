import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MeetTheTeamPage from "./pages/MeetTheTeam";

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "boyDark",
  );

  // Sync theme with localStorage and data-theme attribute
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/meet-the-team" element={<MeetTheTeamPage />} />
    </Routes>
  );
};

export default App;
