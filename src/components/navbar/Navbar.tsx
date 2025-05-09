// Dynamic Navbar component using React Router to display the current page title
// It also uses a navbarData array from data.ts to generate the links in the navbar
// navbarData = [{id, navigationTitle, url, pageTitle}]

import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { navbarData } from "../../data";

const Navbar = () => {
  const location = useLocation();

  const getPageTitle = () => {
    const currentPage = navbarData.find(
      (item) => item.url === location.pathname
    );
    return currentPage ? currentPage.pageTitle : "Couldn't find the page";
  };

  return (
    <div className="navbar-container">
      <nav>
        <ul className="list">
          {navbarData.map((item) => (
            <li key={item.id}>
              <Link to={item.url}>
                <span>{item.navigationTitle}</span>
              </Link>
            </li>
          ))}
          <li>
            <img src="translate.svg" alt="Translate" />
          </li>
        </ul>
      </nav>
      <div className="page-title">{getPageTitle()}</div>
    </div>
  );
};

export default Navbar;
