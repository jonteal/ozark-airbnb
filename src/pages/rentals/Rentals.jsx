import OzarkHouse from "../../assets/images/stock1.jpg";
import WesternWoods from "../../assets/images/stock3.jpg";
import TripleWide from "../../assets/images/stock4.jpg";
import TheGreatEscape from "../../assets/images/stock5.jpg";
import LakesideView from "../../assets/images/stock6.jpg";

import {
  FaLocationDot,
  FaStar,
  FaRegBuilding,
  FaUserGroup,
  FaBed,
  FaBath,
} from "react-icons/fa6";

const rentalProperties = [
  {
    id: 1,
    name: "Ozark House",
    description:
      "An organic and rustic home away from a home that will be the break from reality that you have been waiting on.",
    location: "Bella Vista, AR",
    type: "House",
    guestSize: "2-4",
    numOfBeds: 2,
    numOfBaths: 1,
    price: "$100",
    rating: "5",
    numOfReviews: 10,
    image: OzarkHouse,
  },
  {
    id: 2,
    name: "Western Woods",
    description:
      "Nestled in the woods of the Ozarks, a quiet and quaint experience awaits you.",
    location: "Bella Vista, AR",
    type: "House",
    guestSize: "3-6",
    numOfBeds: 3,
    numOfBaths: 2,
    price: "$150",
    rating: "5",
    numOfReviews: 8,
    image: WesternWoods,
  },
  {
    id: 3,
    name: "Triple Wide",
    description:
      "A single studio space with character and class within walking distance of Beaver Lake.",
    location: "Rogers, AR",
    type: "House",
    guestSize: "2-4",
    numOfBeds: 2,
    numOfBaths: 1,
    price: "$125",
    rating: "5",
    numOfReviews: 12,
    image: TripleWide,
  },
  {
    id: 4,
    name: "The Great Escape",
    description:
      "The escape for reality that you have been dreaming of that sits right outside of the heart of the Ozarks.",
    location: "Fayetteville, AR",
    type: "House",
    guestSize: "2",
    numOfBeds: 1,
    numOfBaths: 1,
    price: "$100",
    rating: "5",
    numOfReviews: 15,
    image: TheGreatEscape,
  },
  {
    id: 5,
    name: "Lakeside View",
    description:
      "A romantic, vibrant and modern space within walking distance of Beaver Lake",
    location: "Rogers, AR",
    type: "Apartment",
    guestSize: "2-4",
    numOfBeds: 2,
    numOfBaths: 2,
    price: "$150",
    rating: "5",
    numOfReviews: 9,
    image: LakesideView,
  },
];

import "./rentals.css";

const Rentals = () => {
  return (
    <div className="rentals-container">
      {rentalProperties.map((property) => (
        <div className="property-item-container" key={property.id}>
          <div className="property-item-image-container">
            <img className="property-item-image" src={property.image} alt="" />
          </div>
          <div className="property-info-container">
            <div className="property-details-container">
              <h2 className="property-name">{property.name}</h2>
              <div className="property-item-location-container">
                <FaLocationDot className="property-item-location-icon" />
                <p className="property-item-location">{property.location}</p>
              </div>
              <p className="property-item-description">
                {property.description}
              </p>
              <div className="property-item-additional-detail">
                <div className="property-item-additional-item-container">
                  <div className="property-item-additional-info-icon-container">
                    <FaRegBuilding className="property-item-additional-info-icon" />
                  </div>
                  <div className="property-item-additional-info-text-container">
                    <p className="property-item-type-text">{property.type}</p>
                  </div>
                </div>
                <div className="property-item-additional-item-container">
                  <div className="property-item-additional-info-icon-container">
                    <FaUserGroup className="property-item-additional-info-icon" />
                  </div>
                  <div className="property-item-additional-info-text-container">
                    <p className="property-item-type-text">
                      {property.guestSize}
                    </p>
                  </div>
                </div>
                <div className="property-item-additional-item-container">
                  <div className="property-item-additional-info-icon-container">
                    <FaBed className="property-item-additional-info-icon" />
                  </div>
                  <div className="property-item-additional-info-text-container">
                    <p className="property-item-type-text">
                      {property.numOfBeds}
                    </p>
                  </div>
                </div>
                <div className="property-item-additional-item-container">
                  <div className="property-item-additional-info-icon-container">
                    <FaBath className="property-item-additional-info-icon" />
                  </div>
                  <div className="property-item-additional-info-text-container">
                    <p className="property-item-type-text">
                      {property.numOfBaths}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="booking-container">
              <div className="property-item-reviews-container">
                <div className="booking-stars-container">
                  <FaStar className="rating-star" />
                  <FaStar className="rating-star" />
                  <FaStar className="rating-star" />
                  <FaStar className="rating-star" />
                  <FaStar className="rating-star" />
                </div>
                <p className="review-count">(10 reviews)</p>
              </div>
              <div className="property-item-pricing-container">
                <p className="property-item-pricing-from">from</p>
                <p className="property-item-pricing-rate-line">
                  <span className="property-item-price">$100</span>{" "}
                  <span className="property-item-per-night-text">
                    per night
                  </span>
                </p>
                <p className="property-item-terms-text">
                  Additional charges may apply
                </p>
                <button className="property-item-book-now-btn">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rentals;
