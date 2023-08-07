import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import PhoneIcon from "../../assets/icons/phone.png";
import LocationIcon from "../../assets/icons/location.png";
import EmailIcon from "../../assets/icons/email.png";
import "./management.css";

const Management = () => {
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
    <div className="">
      <h1 className="mgmt-page-title">
        Learn about our short term rental management services!
      </h1>
      <div>
        <p className="mgmt-main-body">
          Aside from our many incredible properties that are owned by Ozark
          Airbnb, we offer short term management rental services as well! If you
          have property that you wish to turn into a high profit margin business
          but do not have the time to manage it, let us handle it for you!
        </p>

        <div className="contact" id="contact-me-section">
          <div className="contact-bg"></div>
          <div className="contact-wrapper">
            <div className="contact-right">
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
      </div>
    </div>
  );
};

export default Management;
