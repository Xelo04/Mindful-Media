// Dynamic Navbar component using React Router to display the current page title
// It also uses a navbarData array from data.ts to generate the links in the navbar
// navbarData = [{id, navigationTitle, url, pageTitle}]

import "./navbar.scss";
import { Link } from "react-router-dom";
import { navbarData } from "../../data";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <div className="links">
          {navbarData.map((item) => (
            <Link to={item.url}>
              <li
                key={item.id}
                // Add className to SHARE YOUR STORY link to match design
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
        <li>
          <img src="translate.svg" alt="Translate" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
