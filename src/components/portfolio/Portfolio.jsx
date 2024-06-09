import "./portfolio.css";
import img1 from "../../assets/portfolio1.jpeg";
import img2 from "../../assets/portfolio2.jpeg";
import img3 from "../../assets/portfolio3.jpeg";

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
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/khanmdsohel02/Teeth-Care"
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
          <h3>Teeth Care Backend</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/khanmdsohel02/Teeth_care-Backend"
              className="btn"
              target="_blank"
            >
              Source Code
            </a>
            <a
              href="https://teeth-care-client.vercel.app/dashboard"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* 3rd */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/khanmdsohel02"
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
      </div>
    </section>
  );
};

export default Portfolio;
