import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";

function Footer() {
  const [state, handleSubmit] = useForm("xgedzjbn");
  if (state.succeeded) {
    <Footer />;
  }
  return (
    <div className="footer-container">
      <div className="footer-row">
        <section className="footer-contact">
          <p className="footer-subscription-heading">
            Don't hesitate to get in touch with me today!
          </p>
          <p className="footer-subscription-text">
            Thanks for stopping by my website!
          </p>
          <label htmlFor="email">Email Address</label>
          <div className="input-area">
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xgedzjbn"
              method="post"
              className="form"
            >
              <input
                placeholder="Email"
                id="email"
                type="email"
                className="email"
                name="mail"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <textarea
                placeholder="Comments"
                id="message"
                className="message"
                name="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button
                className="button"
                type="submit"
                disabled={state.succeeded}
              >
                {state.succeeded ? 'Thank you!' : 'Submit'}
              </button>
            </form>
          </div>
        </section>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <i className="fas fa-wave-square" /> Clarence Chau
            </Link>
          </div>
          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href="https://www.facebook.com/clementjm86"
              target="_blank"
              aria-label="Facebook"
              rel="noreferrer noopener"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/clarence.chauu/?hl=en"
              target="_blank"
              aria-label="Instagram"
              rel="noreferrer noopener"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="social-icon-link linkedin"
              href="https://ca.linkedin.com/in/clarence-chau-3a827b1b7"
              target="_blank"
              aria-label="LinkedIn"
              rel="noreferrer noopener"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="social-icon-link github"
              href="https://github.com/clarencechau"
              target="_blank"
              aria-label="GitHub"
              rel="noreferrer noopener"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
