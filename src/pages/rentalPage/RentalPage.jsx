import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  // FaLocationDot,
  FaStar,
  // FaRegBuilding,
  FaUserGroup,
  FaBed,
  FaDoorClosed,
  FaRegCalendarCheck,
  FaUserLarge,
  // FaBath,
  FaElevator,
} from "react-icons/fa6";

import "./rentalPage.css";

const RentalPage = () => {
  const { id } = useParams();
  const [properties, setProperties] = useState([]);

  const getData = () => {
    fetch("/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setProperties(myJson.properties);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const selectedProperty = properties?.filter(
    (property) => property.id === id
  )[0];

  return (
    <div className="rentalPage-main-container">
      <div className="rentalPage-image-container">
        <img className="rentalPage-image" src={selectedProperty?.image} />
      </div>
      <div className="rentalPage-information-container">
        <div className="rentalPage-information-main-section">
          <div className="rentalPage-stars-container">
            <div className="rentalPage-stars">
              <FaStar className="rentalPage-rating-star" />
              <FaStar className="rentalPage-rating-star" />
              <FaStar className="rentalPage-rating-star" />
              <FaStar className="rentalPage-rating-star" />
              <FaStar className="rentalPage-rating-star" />
            </div>
            <div className="rentalPage-review-count">(10 reviews)</div>
          </div>
          <div>
            <h1 className="rentalPage-property-name">
              {selectedProperty?.name}
            </h1>
            <h2 className="rentalPage-description-header">Description</h2>
            <p className="rentalPage-description-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              eum non, voluptatem quidem nisi officia ab! Modi quas accusamus
              vel at obcaecati eligendi, aliquam cum aliquid iusto ex ipsam.
              Maxime, nobis repudiandae. Inventore recusandae illo velit
              asperiores ab reprehenderit, nobis error itaque, tempore
              consequuntur ratione consectetur. Quam, ea non. Quia.
            </p>

            <h3 className="rentalPage-section-header">The Space</h3>
            <p className="rentalPage-space-description-item">
              * Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quasi quaerat rerum eaque quisquam vitae.
            </p>
            <p className="rentalPage-space-description-item">
              * Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quasi quaerat rerum eaque quisquam vitae.
            </p>
            <p className="rentalPage-space-description-item">
              * Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quasi quaerat rerum eaque quisquam vitae.
            </p>
            <p className="rentalPage-space-description-item">
              * Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quasi quaerat rerum eaque quisquam vitae.
            </p>

            <h3 className="rentalPage-section-header">Guest Access</h3>
            <p className="rentalPage-guest-access-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium itaque ipsam soluta, voluptatibus nobis eligendi,
              adipisci ab quibusdam blanditiis doloremque, sit incidunt. Ea
              beatae cupiditate itaque rem ducimus doloremque delectus adipisci
              doloribus consequatur corrupti? Modi, error ducimus nulla odit
              inventore consequatur dolorum consequuntur, nihil, expedita ipsum
              est numquam quis praesentium?
            </p>

            <h3 className="rentalPage-section-header">Neighborhood</h3>
            <p className="rentalPage-neighborhood-section-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium itaque ipsam soluta, voluptatibus nobis eligendi,
              adipisci ab quibusdam blanditiis doloremque, sit incidunt. Ea
              beatae cupiditate itaque rem ducimus doloremque delectus adipisci
              doloribus consequatur corrupti? Modi, error ducimus nulla odit
              inventore consequatur dolorum consequuntur, nihil, expedita ipsum
              est numquam quis praesentium?
            </p>

            <h3 className="rentalPage-section-header">Getting Around</h3>
            <p className="rentalPage-neighborhood-section-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium itaque ipsam soluta, voluptatibus nobis eligendi,
              adipisci ab quibusdam blanditiis doloremque, sit incidunt.
            </p>

            <h3 className="rentalPage-section-header">Check in and out</h3>
            <p className="rentalPage-neighborhood-section-check-in">
              Check in 3:00 pm
            </p>
            <p className="rentalPage-neighborhood-section-body">
              Check in 10:00 am
            </p>

            <hr />

            <h3 className="rentalPage-section-header">Property features</h3>
            <div className="rentalPage-property-features-container">
              <div className="rentalPage-property-feature">
                <div>
                  <FaDoorClosed className="rentalPage-property-feature-icon" />
                </div>
                <div className="rentalPage-property-feature-text">
                  {selectedProperty?.numOfRooms} Bedroom
                  {selectedProperty?.numOfRooms > 1 ? "s" : ""}
                </div>
              </div>
              <div className="rentalPage-property-feature">
                <div>
                  <FaBed className="rentalPage-property-feature-icon" />
                </div>
                <div className="rentalPage-property-feature-text">
                  {selectedProperty?.numOfBeds} Bed
                  {selectedProperty?.numOfBeds > 1 ? "s" : ""}
                </div>
              </div>
            </div>

            <hr />

            <h3 className="rentalPage-section-header">Amenities</h3>
            <div className="rentalPage-amenities-container">
              {selectedProperty?.ameneties
                .filter((a) => a.present === true)
                .map((a) => (
                  <div className="rentalPage-amenety-item-container">
                    <div></div>
                    <p>{a.name}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="rentalPage-information-right-sidebar">
          <div className="rentalPage-main-date-container">
            <div className="rentalPage-dates-icon-container">
              <FaRegCalendarCheck className="rentalPage-dates-icon" />
            </div>
            <div className="rentalPage-dates-container">
              <p className="rentalPage-date">Start date</p>
              <p className="rentalPage-date">-</p>
              <p className="rentalPage-date">End date</p>
              {/* <button className="rentalPage-date-delete-btn">X</button> */}
            </div>
          </div>
          <div className="rentalPage-numOfGuests-container">
            <div className="rentalPage-numOfGuests-icon-container">
              <FaUserLarge className="rentalPage-numOfGuests-icon" />
            </div>
            <select className="rentalPage-select">
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <button className="rentalPage-search-button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default RentalPage;
