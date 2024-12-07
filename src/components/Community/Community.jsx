import React, { useContext } from "react";
import "./Community.css";
import { ReportsContext } from "../../Store/ReportsContext";
import WasteCategoryChart from "../WasteCategory Chart/WasteCategoryChart";
const Community = () => {
  const { reports } = useContext(ReportsContext);
  return (
    <div className="community">
      <div className="text">
        <p>Waste Category Distribution</p>
      </div>
      <div className="community-graph">
        <WasteCategoryChart></WasteCategoryChart>
      </div>
    </div>
  );
};

export default Community;
