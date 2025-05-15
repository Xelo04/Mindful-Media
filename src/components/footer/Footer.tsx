// Dynamic Footer component using footerData object from data.ts to generate the author name
// footerData = {author}

import "./footer.scss";
import { footerData } from "../../data";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src="logo-icon.png" alt="logo" />
        <span>#{footerData.author}</span>
      </div>
      <span>© {footerData.author}</span>
    </footer>
  );
};

export default Footer;
