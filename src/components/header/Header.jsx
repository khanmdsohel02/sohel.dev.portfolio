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
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      cursorChar: "<span style='font-size:1.5rem;'>&#9997;&#127995;</span>",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header>
      <div className="container header__container">
        <h5>Hello Dear I&apos;m</h5>
        {/* <h1>Md. SoHeL</h1> */}
        {/*<h1 className="myName">𝓜𝓓. 𝓢𝓞𝓗𝓔𝓛</h1>*/}
        {/*<h1 className="myName">𝙼𝙳. 𝚂𝙾𝙷𝙴𝙻</h1>*/}
        <h1 className="myName">𝑀𝒟. 𝒮𝒪𝐻𝐸𝐿</h1>

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
