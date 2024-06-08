import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/" target="_blank">
        <FaSquareGithub />
      </a>
      <a href="https://facebook.com/" target="_blank">
        <FaFacebookSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
