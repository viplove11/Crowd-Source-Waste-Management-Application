import React, { useState } from "react";
import "./QuickReports.css";

const QuickReports = () => {
  const [selectedWasteType, setSelectedWasteType] = useState("");
  const [category, setCategory] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const wasteCategories = {
    "1": "Regular", // Household waste
    "2": "Urgent", // Hazardous Household waste
    "3": "Occasional", // Electronic waste
    "4": "Regular", // Plastic and packaging waste
    "5": "Occasional", // Construction and demolition waste
  };

  const handleWasteTypeChange = (event) => {
    const value = event.target.value;
    setSelectedWasteType(value);
    setCategory(wasteCategories[value] || "");
    setIsDisabled(value === ""); // Disable if no selection
  };

  return (
    <div className="quick-reports">
      <div className="quick-report-title">
        <p>Quick Report</p>
      </div>

      <div className="report-form">
        <div className="waste-type">
          <p>Waste Type</p>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleWasteTypeChange}
          >
            <option value="">Select Waste Type</option>
            <option value="1">Household waste</option>
            <option value="2">Hazardous Household waste</option>
            <option value="3">Electronic waste (E-waste)</option>
            <option value="4">Plastic and packaging waste</option>
            <option value="5">Construction and demolition waste</option>
          </select>
        </div>
        <div className="form-floating mydescription">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            style={{ height: '200px' }}
          ></textarea>
          <label htmlFor="floatingTextarea">Description</label>
        </div>

        {/* Conditional rendering for the input field */}
        {selectedWasteType && (
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Waste Category</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              value={category} // Set the value to the category
              disabled={!isDisabled} // Disable based on state
            />
          </div>
        )}
        <button className="btn" id="myBtn">
          Send Report
        </button>
      </div>
    </div>
  );
};

export default QuickReports;