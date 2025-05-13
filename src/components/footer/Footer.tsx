import "./footer.scss";
import { footerData } from "../../data";

const Footer = () => {
  return (
    <footer>
      <img src="logo.png" alt="logo" />
      <span>{footerData.author}</span>
    </footer>
  );
};

export default Footer;
