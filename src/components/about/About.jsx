import "./about.css";
import ME from "../../assets/me-about.png";
import { SiFuturelearn } from "react-icons/si";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about" className="">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <SiFuturelearn className="about__icon" />
              <h5>Experience</h5>
              <small>1.5+ Years Learning</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>13+ completed</small>
            </article>
          </div>

          <p>
            <p>Assalamu Alaikum,</p>
            This is Md.Sohel, an skilled and professional Full-stack web
            developer as well as an Frontend ReactJS developer. I have been
            working in these fields for a while and achieved much experience. In
            most things I learned by my own efforts and tried to explore things
             on my own. I want an opportunity to prove my worth in this field. I
            have been working on many projects, like E-commerce Website, Medical
            Website, Food App website etc. I am a quick learner and I am always
            looking for new challenges. I enjoy working online/offline.
            Languages skilled are English, Hindi, Bangla(Native), etc.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
