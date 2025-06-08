import { FaSun, FaMoon } from "react-icons/fa";
import "../styles/Navbar.css";

export default function Navbar({
  setCurrentPage,
  currentPage,
  darkMode,
  setDarkMode,
}) {
  return (
    <nav>
      <ul className="nav-left">
        {["home", "about", "projects", "contact"].map((page) => (
          <li key={page}>
            <a
              className={currentPage === page ? "active" : ""}
              onClick={() => setCurrentPage(page)}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-right">
        <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
      </div>
    </nav>
  );
}
