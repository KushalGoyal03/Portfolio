import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PageWrapper from "./components/PageWrapper";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "light" ? false : true
  );

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <div className="app-container">
        <AnimatePresence mode="wait">
          <PageWrapper key={currentPage}>{renderPage()}</PageWrapper>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
