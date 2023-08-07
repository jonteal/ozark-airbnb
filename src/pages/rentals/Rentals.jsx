import { useEffect, useState } from "react";

import {
  FaLocationDot,
  FaStar,
  FaRegBuilding,
  FaUserGroup,
  FaBed,
  FaBath,
} from "react-icons/fa6";

import "./rentals.css";
import { Link } from "react-router-dom";

const Rentals = () => {
  const [properties, setProperties] = useState([]);
  const getData = () => {
    fetch("/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson.properties);
        setProperties(myJson.properties);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="rentals-container">
      {properties.map((property) => (
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
                <p className="review-count">
                  ({property.numOfReviews} review
                  {property.numOfReviews > 1 ? "s" : ""})
                </p>
              </div>
              <div className="property-item-pricing-container">
                <p className="property-item-pricing-from">from</p>
                <p className="property-item-pricing-rate-line">
                  <span className="property-item-price">{property.price}</span>{" "}
                  <span className="property-item-per-night-text">
                    per night
                  </span>
                </p>
                <p className="property-item-terms-text">
                  Additional charges may apply
                </p>
                {/* <button className="property-item-book-now-btn">
                  <a href={`/rentals/${property.id}`}>Book Now</a>
                </button> */}
                <Link
                  className="property-item-book-now-btn"
                  to={`/rentals/${property.id}`}
                >
                  BOOK NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rentals;
