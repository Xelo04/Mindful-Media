import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { navigationBar } from "../../data";

const Navbar = () => {
  const location = useLocation();

  const getPageTitle = () => {
    const currentPage = navigationBar.find(
      (item) => item.url === location.pathname
    );
    return currentPage ? currentPage.title : "Couldn't find the page";
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-links">
          {navigationBar.map((item) => (
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
