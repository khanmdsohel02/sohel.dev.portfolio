import "./portfolio.css";
import img1 from "../../assets/TeethCare1.jpeg";
import img2 from "../../assets/NextBooking1.png";
import img3 from "../../assets/HealthCare3.png";
import { BsPatchCheckFill } from "react-icons/bs";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* 1st */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>Teeth Care</h3>
          <div className="key-features">
            <div className="feature">
              <BsPatchCheckFill className="features-icon" />
              <small className="text-light">
                User Authentication and Authorization
              </small>
            </div>
            <div className="feature">
              <BsPatchCheckFill className="features-icon" />
              <small className="text-light">Appointment Booking System</small>
            </div>
            <div className="feature">
              <BsPatchCheckFill className="features-icon" />
              <small className="text-light">Dashboard</small>
            </div>
            <div className="feature">
              <BsPatchCheckFill className="features-icon" />
              <small className="text-light">Real-Time Messaging</small>
            </div>
          </div>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/khanmdsohel02/Teeth-Care-MERN-Project"
              className="btn"
              target="_blank"
            >
              Source Code
            </a>
            <a
              href="https://teeth-care-client.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* 2nd */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img2} alt="" />
          </div>
          <h3>Next Booking</h3>
          <div className="key-features">
            <div className="feature">
              <BsPatchCheckFill className="features-icon" />
              <small className="text-light">
                User Authentication and Authorization
              </small>
            </div>
            <div className="feature">
              <BsPatchCheckFill className="features-icon" />
              <small className="text-light">Hotel Booking System</small>
            </div>
            <div className="feature">
              <BsPatchCheckFill className="features-icon" />
              <small className="text-light">Admin Dashboard</small>
            </div>
            <div className="feature">
              <BsPatchCheckFill className="features-icon" />
              <small className="text-light">Admin verifies</small>
            </div>
          </div>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/khanmdsohel02/Next-Booking-MERN-Project"
              className="btn"
              target="_blank"
            >
              Source Code
            </a>
            <a
              href="https://nextbookingfrontend.vercel.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
            <a
              href="https://admim-next-booking.vercel.app"
              className="btn btn-primary"
              target="_blank"
            >
              Dashboard
            </a>
          </div>
        </article>
        {/* 3rd */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img3} alt="" />
          </div>
          <h3>HealthCare</h3>
          <div className="key-features">
            <div className="feature">
              <BsPatchCheckFill className="features-icon" />
              <small className="text-light">Appointment Booking System</small>
            </div>
            <div className="feature">
              <BsPatchCheckFill className="features-icon" />
              <small className="text-light">Real-Time Messaging</small>
            </div>
          </div>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/khanmdsohel02/HealthCare"
              className="btn"
              target="_blank"
            >
              Source Code
            </a>
            <a
              href="https://health-care-platform.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
