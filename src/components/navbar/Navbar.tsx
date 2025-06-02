// Dynamic Navbar component using React Router to display the current page title
// It also uses a navbarData array from data.ts to generate the links in the navbar
// navbarData = [{id, navigationTitle, url, pageTitle}]

import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { navbarData } from "../../data";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="navbar-header">
        <button
          className="hamburger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="material-icons">{menuOpen ? "close" : "menu"}</span>
        </button>
      </div>
      <ul className={`nav-links${menuOpen ? " open" : ""}`}>
        <div className="links">
          {navbarData.map((item) => (
            <Link
              to={item.url}
              key={item.id}
              onClick={() => setMenuOpen(false)}
            >
              <li
                className={
                  item.navigationTitle === "SHARE YOUR STORY"
                    ? "your-story"
                    : "other-link"
                }
              >
                <span>{item.navigationTitle}</span>
              </li>
            </Link>
          ))}
        </div>
      </ul>
      {/* Optional: overlay to close menu when clicking outside */}
      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
{
  /* Translate image */
}
{
  /* <li>
          <img src="translate.svg" alt="Translate" />
        </li> */
}
