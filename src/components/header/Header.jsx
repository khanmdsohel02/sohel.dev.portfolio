import CTA from "./CTA";
import ME from "../../assets/me.png";
import "./header.css";
import HeaderSocials from "./HeaderSocials";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Header = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "MERN Stack Developer",
        "Frontend ReactJS Developer",
        "Full Stack Developer",
        // "Backend Developer",
      ],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header>
      <div className="container header__container">
        <h5>Hello Dear I&apos;m</h5>
        <h1>Md. SoHeL</h1>
        <h5 className="text-light">
          An <span ref={el} />
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
