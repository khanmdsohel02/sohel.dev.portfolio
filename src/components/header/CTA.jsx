import Resume from "../../assets/Sohel-Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let&apos;s Talk
      </a>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
