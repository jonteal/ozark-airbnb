import { Link } from "react-router-dom";
import "./management.css";

const Management = () => {
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
        <p className="mgmt-second-body">
          Shoot us an email at <Link to="/contact">info@ozarkairbnb.com</Link>{" "}
          for more information!
        </p>
      </div>
    </div>
  );
};

export default Management;
