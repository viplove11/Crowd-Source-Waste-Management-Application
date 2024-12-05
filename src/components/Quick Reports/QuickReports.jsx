import React, { useContext, useRef, useState } from "react";
import "./QuickReports.css";
import { ReportsContext } from "../../Store/ReportsContext";

const QuickReports = () => {
  const [selectedWasteType, setSelectedWasteType] = useState("");
  const [category, setCategory] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  // const [uploadedImage, setUploadedImage] = useState(null);

  // Using context
  const { uploadedImage, setUploadedImage, reports, addReport } = useContext(ReportsContext);

  // Using useRef() for form elements data
  const formData = useRef();
  const form_wasteType = useRef();
  const form_wasteCategory = useRef();
  const form_description = useRef();
  const form_image = useRef();

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

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedImage({
        name: file.name,
        type: file.type,
        size: file.size,
        file: file,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const description = form_description.current.value;
    const wasteCategory = form_wasteCategory.current.value;
    const wasteType = form_wasteType.current.value;

    const newReport = {
      description,
      wasteCategory,
      wasteType,
      image: uploadedImage, // Attach the uploaded image
    };

    addReport(newReport);

    // Reset form and state
    formData.current.reset();
    setIsDisabled(true);
    setCategory("");
    setSelectedWasteType("");
    setUploadedImage(null);
  };

  return (
    <div className="quick-reports">
      <div className="quick-report-title">
        <p>Quick Report</p>
      </div>

      <form
        className="report-form"
        ref={formData}
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="waste-type">
          <p>Waste Type</p>
          <select
            ref={form_wasteType}
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
            ref={form_description}
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            style={{ height: "200px" }}
          ></textarea>
          <label htmlFor="floatingTextarea">Description</label>
        </div>

        {selectedWasteType && (
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Waste Category
            </label>
            <input
              ref={form_wasteCategory}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              value={category}
              disabled={!isDisabled}
            />
          </div>
        )}

        {/* New Image Upload Field */}
        <div className="image-upload mb-3">
          <label htmlFor="imageUpload" className="form-label">
            Upload Image
          </label>
          <input
            ref={form_image}
            type="file"
            accept="image/*"
            className="form-control"
            id="imageUpload"
            onChange={handleImageUpload}
          />
          {uploadedImage && (
            <div className="image-preview mt-2">
              <p>
                <strong>Selected Image:</strong> {uploadedImage.name} (
                {(uploadedImage.size / 1024).toFixed(2)} KB)
              </p>
              <img
                src={URL.createObjectURL(uploadedImage.file)}
                alt="Preview"
                style={{ width: "100%", maxHeight: "200px", marginTop: "10px" }}
              />
            </div>
          )}
        </div>

        <button className="btn" id="myBtn">
          Send Report
        </button>
      </form>
    </div>
  );
};

export default QuickReports;
