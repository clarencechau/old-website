import Footer from "../Footer";
import "./ContactMe.css";

function ContactMe() {
  return (
    <>
      <div className="contact">
        <img className="toronto" src="../images/toronto.jpg"/>
        <div className="title">Get in touch with me!</div>
        <div className="contact-information">
          If you would like to connect, don't be afraid to shoot me an email at{" "}
          <a href="mailto: clarence.comsci@gmail.com" className="hyperlink">
            clarence.comsci@gmail.com
          </a>
        </div>
        <div className="contact-information">
          You may also visit my social medias listed below, as I am often active
          on those platforms as well.
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactMe;
