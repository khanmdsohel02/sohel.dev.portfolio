import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import "./footer.css";
import { FaSquareGithub } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      {/* <a href="#" className="footer__logo">
        SoHeL.DEV
      </a> */}
      {/* <a href="#" className="footer__logo">
        𝓢𝓞𝓗𝓔𝓛.𝓓𝓔𝓥
      </a> */}
      <a href="#" className="footer__logo">
        𝕊𝕆ℍ𝔼𝕃.𝔻𝔼𝕍
      </a>
      {/* <a href="#" className="footer__logo">
        █▓▒▒░░░𝕊𝕆ℍ𝔼𝕃.𝔻𝔼𝕍░░░▒▒▓█
      </a> */}

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#testimonials">Testimonials</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/DEV.SoHeL.SRS" target="_blank">
          <FaFacebookSquare className="footer__social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/khanmdsohel/" target="_blank">
          <FaLinkedin className="footer__social-icon" />
        </a>
        <a href="https://github.com/khanmdsohel02" target="_blank">
          <FaSquareGithub className="footer__social-icon" />
        </a>
      </div>

      <div className="footer__copyright">
        {" "}
        <small>&copy; Md. SoHeL. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
