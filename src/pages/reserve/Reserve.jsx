import "./reserve.css";

const Reserve = () => {
  return (
    <div className="main-reserve-container">
      <h1>Reserve Now!</h1>
      <div className="name-input-container">
        <input
          type="text"
          className="border rounded p-3 w-80 mb-4 info-input-left"
          placeholder="First name"
          name="bookerFirstName"
        />
        <input
          type="text"
          className="border rounded p-3 w-80 mb-4 info-input-right"
          placeholder="Last name"
          name="bookerLastName"
        />
      </div>
      <div className="number-email-container">
        <input
          type="text"
          className="border rounded p-3 w-80 mb-4 info-input-left"
          placeholder="Phone number"
          name="bookerPhone"
        />
        <input
          type="text"
          className="border rounded p-3 w-80 mb-4 info-input-right"
          placeholder="Email"
          name="bookerEmail"
        />
      </div>
      <div className="additional-info-container">
        <input
          type="text"
          className="border rounded p-3 w-80 mb-4 info-input-left"
          placeholder="Occasion (optional)"
          name="bookerOccasion"
        />
        <input
          type="text"
          className="border rounded p-3 w-80 mb-4 info-input-right"
          placeholder="Requests (optional)"
          name="bookerRequest"
        />
      </div>
      <div>
        <button className="reserve-btn">Reserve</button>
        <p className="mt-4 text-sm">
          By clicking “Complete reservation” you agree to the Ozark Airbnb Terms
          of Use and Privacy Policy. Standard text message rates may apply. You
          may opt out of receiving text messages at any time.
        </p>
      </div>
    </div>
  );
};

export default Reserve;
