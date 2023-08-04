import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import PhoneIcon from "../../assets/icons/phone.png";
import LocationIcon from "../../assets/icons/location.png";
import EmailIcon from "../../assets/icons/email.png";

import "./contact.css";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  // handleSubmit using emailjs
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_my20arp",
        "template_j7zva5b",
        formRef.current,
        "user_gA8QSmOG7ld5EfHWWmsof"
      )

      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id="contact-me-section">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">
            Give us a call with your questions today!
          </h1>

          {/* Contact information */}
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={PhoneIcon} alt="Phone icon" className="contact-icon" />
              +1 (479) 601-3157
            </div>
            <div className="contact-info-item">
              <img src={EmailIcon} alt="Email icon" className="contact-icon" />
              info@ozarkairbnb.com
            </div>
            <div className="contact-info-item">
              <img
                src={LocationIcon}
                alt="Location icon"
                className="contact-icon"
              />
              Fayetteville, AR
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            <b>We are here for you.</b> Reach out to us to find your next home
            away from home!
          </p>

          {/* Form to reach out via email */}
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              tabIndex={"0"}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              tabIndex={"0"}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              tabIndex={"0"}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              tabIndex={"0"}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button className="button">Submit</button>
            {done && "Thank you for your message!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
