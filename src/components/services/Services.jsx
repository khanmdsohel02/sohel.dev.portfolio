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
                Improved user experience with the seamless integration of the
                frontend and backend development.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Get your websites and applications improved security with modern
                authentication and authorization methods.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Creating a web application with the MERN stack can efficiently
                handle large amounts of data with MongoDB.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Using React.js and Node.js aids in enhanced performance and
                flexibility of a web application.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Solutions developed on MERN Stack are responsive and hence can
                be accæsed on any device across the globe.
              </p>
            </li>
          </ul>
        </article>

        {/* END OF MERN Stack Development */}
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Both the client-side and the server-side, which ultimately
                boosts the speed of the development process.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                React JS was designed to provide high performance in mind, which
                makes complex apps run extremely fast.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                According to Moz, the lower the page load time and the faster
                the rendering speed, the higher an app will rank on Google.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                A faster yet smoother user experience that increases the
                productivity Of your business.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Integrating highly secure functionality to ensure that your data
                and your users data are safe.
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
                Backend development ensures secure data storage, retrieval, and
                manipulation. It involves designing database schemas.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Security in backend development involves protecting data and
                ensuring only authorized access.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Backend development includes creating APIs for communication
                between the frontend and backend.
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Scalability in backend development ensures an application can
                handle increased loads. This involves using techniques like
                database sharding
              </p>
            </li>
            <li>
              {" "}
              <FaCheckDouble className="service__list-icon" />
              <p>
                Almost every website have a backend database they can store
                their is business data and secret data.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
