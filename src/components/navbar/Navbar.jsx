import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import "./navbar.css";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine, RiUserStarLine } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <p>Home</p>
        <AiOutlineHome className="icon" />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <p>About</p>
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <p>Experience</p>
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <p>Services</p>
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <p>Portfolio</p>
        <GrProjects />
      </a>
      <a
        href="#testimonials"
        onClick={() => setActiveNav("#testimonials")}
        className={activeNav === "#testimonials" ? "active" : ""}
      >
        <p>Testimonials</p>
        <RiUserStarLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <p>Contact</p>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navbar;
