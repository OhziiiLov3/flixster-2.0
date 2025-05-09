
import { FaFilm } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        <FaFilm className="footer-icon" /> Built with {" "}
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TMDb API
        </a>.
      </p>
      <p className="footer-text">© {new Date().getFullYear()} Flixor Movie App</p>
        <p className="footer-text"><strong>By Keith Baskerville</strong></p>
    </footer>
  );
};

export default Footer;
