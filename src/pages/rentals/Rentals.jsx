import { useEffect, useState } from "react";
import RentalCard from "../../components/rentalCard/RentalCard";

import "./rentals.css";

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
        <RentalCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default Rentals;
