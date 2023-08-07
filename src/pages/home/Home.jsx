import { Outlet } from "react-router";
import Slider from "../../components/slider/Slider";
import { Link } from "react-router-dom";

import "./home.css";

const Home = () => {
  return (
    <>
      <h1 className="home-title">Ozark Airbnb</h1>
      <div className="slider-container">
        <Slider />
      </div>

      <h2 className="home-bio-title">Find your next home away from home!</h2>

      <div>
        <p className="home-bio-text">
          Journey away to a beautiful and often missed oasis within the natural
          state of Arkansas. Here you'll find a multitude of activities,
          amenities, and enriching experiences ranging from lake front
          relaxation all the way to world class mountain bike excursions.
        </p>

        <p className="home-bio-text">
          A perfect destination for family adventures, romantic getaways, or
          even the solo road trip that you've been meaning to take but just
          haven't committed to just yet. An endless cultural palette of diverse
          food, music, and art await you! Contact us today to book your next
          trip!
        </p>
      </div>

      <div className="home-button-container">
        <Link to="rentals" className="home-book-button">
          BOOK WITH US
        </Link>
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
    </>
  );
};

export default Home;
