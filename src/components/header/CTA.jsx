// import Resume from "../../assets/resume_sohel.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={
          "https://drive.google.com/file/d/1qCbaNde65JvXX7DZHqvniDYy5hQrsjpJ/view"
        }
        // download
        className="btn"
      >
        Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let&apos;s Talk
      </a>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
