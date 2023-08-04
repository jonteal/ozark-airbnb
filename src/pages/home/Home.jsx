import { Outlet } from "react-router";
import Slider from "../../components/slider/Slider";

import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Ozark Airbnb</h1>

      <Slider />

      <h2 className="home-bio-title">Find your next home away from home!</h2>

      <div>
        <p className="home-bio-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          facere rerum nostrum eos ea facilis aspernatur dolorum eaque magni,
          expedita dolor! Deleniti odio aliquam in consequatur, aperiam quam,
          non alias inventore iusto dolor repellendus unde beatae vero, nesciunt
          porro. Totam soluta commodi, quis et animi vero perspiciatis officia
          corporis eligendi!
        </p>

        <p className="home-bio-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          ullam veniam architecto soluta dolor itaque quasi quos, excepturi modi
          nostrum fugit distinctio iure nam minus delectus beatae laboriosam.
          Omnis expedita provident officia dolore tempore molestias minus totam,
          voluptas accusantium nam?
        </p>
      </div>

      <div className="home-button-container">
        <button className="home-book-button">BOOK WITH US</button>
      </div>

      <div className="home-social-text">
        Follow us |{" "}
        <a
          href="https://instagram.com/ozark.airbnb"
          rel="noreferrer noopener"
          target="_blank"
        >
          @ozark.airbnb
        </a>
        !
      </div>

      <p className="home-contact-text">
        Ozark Airbnb, LLC | email: info@ozarkairbnb.com
      </p>

      <Outlet />
    </div>
  );
};

export default Home;
