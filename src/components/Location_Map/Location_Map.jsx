import React, { useContext, useRef } from "react";
import "./Location_Map.css";
import { ReportsContext } from "../../Store/ReportsContext";

const Location_Map = () => {
  const {
    setCity,
    setStreetAdress,
    setPincode,
    setState,
    setLocationURL,
     setIsAddressFetched,
  } = useContext(ReportsContext);

  const form_street_address = useRef();
  const form_pincode = useRef();
  const form_city = useRef();
  const form_state = useRef();

  const handleAdressSubmit = (event) => {
    event.preventDefault();

    // Update state with input values
    const street = form_street_address.current.value;
    const cityValue = form_city.current.value;
    const pincodeValue = form_pincode.current.value;
    const stateValue = form_state.current.value;

    setStreetAdress(street);
    setCity(cityValue);
    setPincode(pincodeValue);
    setState(stateValue);
    setIsAddressFetched(true)

    // Generate the Google Maps URL
    const address = `${street}, ${cityValue}, ${pincodeValue}, ${stateValue}, India`;
    const formattedAddress = address.replace(/ /g, "+");
    const gmapUrl = `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;

    // Update the locationLink state with the generated URL
    setLocationURL(gmapUrl);

    // Clear the input fields
    form_street_address.current.value = "";
    form_city.current.value = "";
    form_pincode.current.value = "";
    form_state.current.value = "";
  };

  return (
    <div className="map-section">
      <form
        className="map-section-form"
        onSubmit={(event) => handleAdressSubmit(event)}
      >
        <div className="street-add">
          <input
            type="text"
            name="street-address"
            id="street-address"
            className="form-control"
            placeholder="Block 32, Namrata Society"
            ref={form_street_address}
          />
          <input
            type="text"
            name="city"
            id="city"
            className="form-control"
            placeholder="Pune"
            ref={form_city}
          />
          <input
            type="text"
            name="state"
            id="state"
            className="form-control"
            placeholder="Maharashtra"
            ref={form_state}
          />
        </div>
        <div className="country-code">
          <input
            type="text"
            name="country"
            id="country"
            className="form-control country"
            value="India"
            disabled
          />
          <input
            type="text"
            name="pincode"
            id="pincode"
            className="form-control code"
            placeholder="Pincode"
            ref={form_pincode}
          />
          <button className="btn btn-dark myAddressButton" type="submit">
            Fetch Address
          </button>
        </div>
      </form>
    </div>
  );
};

export default Location_Map;
