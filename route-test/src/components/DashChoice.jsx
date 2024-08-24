import React from "react";
import { useNavigate } from "react-router";

function DashChoice() {
  const navigate = useNavigate();
  return (
    <div style={DashChoice}>
      <div
        className="dash-choice"
        onClick={() => {
          navigate("/dashboard/stats");
        }}
      >
        STATS
      </div>
      <div
        className="dash-choice"
        onClick={() => {
          navigate("/dashboard/bookstats");
        }}
      >
        BOOK STATS
      </div>
    </div>
  );
}

export default DashChoice;
