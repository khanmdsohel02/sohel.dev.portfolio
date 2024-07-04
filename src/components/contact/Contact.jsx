import { MdOutlineEmail } from "react-icons/md";
import "./contact.css";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l8see8s",
        "template_8f36nh7",
        form.current,
        "iW2TU-bHiNGdI8TAJ"
      )
      .then(
        () => {
          toast.success("Message Send");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Message Not Send");
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {/* Email */}
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mdsohel.dev1@gmail.com</h5>
            <a href="mailto:mdsohel.dev1@gmail.com">Send message</a>
          </article>

          {/* Messenger */}
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>SoHeL.SRS25</h5>
            <a href="https://m.me/DEV.SoHeL.SRS" target="_blank">
              Send message
            </a>
          </article>

          {/* WhatsApp */}
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+880 1832716948</h5>
            <a href="https://wa.me/+8801832716948" target="_blank">
              Send message
            </a>
          </article>
        </div>

        {/* end of contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="clientname"
            placeholder="Your Full Name"
            required
          />

          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
