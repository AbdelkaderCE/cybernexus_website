import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { lazy, Suspense } from "react";
const MeetTheTeamPage = lazy(() => import("./pages/MeetTheTeam"));
import NotFound from "./pages/NotFound";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "boyDark";
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "boyDark",
  );

  const handleScrollComponent = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar
        theme={theme}
        setTheme={setTheme}
        handleScrollComponent={handleScrollComponent}
      />
      <div className="mt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/meet-the-team"
            element={
              <Suspense fallback={<div className="p-8 text-center font-mono">LOADING_TEAM...</div>}>
                <MeetTheTeamPage />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
