import { FaCheckDouble } from "react-icons/fa";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>MERN Stack Development</h3>
          </div>

          <ul className="service__list">
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
                beatae.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
                beatae.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
                beatae.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
                beatae.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
                beatae.
              </p>
            </li>
          </ul>
        </article>

        {/* END OF MERN Stack Development */}
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development (ReactJS)</h3>
          </div>

          <ul className="service__list">
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
                beatae.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
                beatae.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
                beatae.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
                beatae.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
                beatae.
              </p>
            </li>
          </ul>
        </article>

        {/* END OF FRONTEND Development */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
                beatae.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
                beatae.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
                beatae.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
                beatae.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
                beatae.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
