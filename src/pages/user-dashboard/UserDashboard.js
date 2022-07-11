import React from "react";
import { useNavigate } from "react-router-dom";
import ContainerItem from "./UserContainerItem";
import Topbar from "./UserTopbar";
import "../../styles/UserDashboard.css";

function User() {
  const navigate=useNavigate();
  return (
    <div>
      <Topbar />
      <div className="main">
        <div className="user-info-label">
          <div className="info-d1"> </div>
          <div className="info-d2"> </div>
        <div className="options">
        </div>
          <button
            href="/form"
            onClick={() => {
              navigate("/form");
            }}
          >
            Submit a query
          </button>
          <button
            href="/#/"
            onClick={() => {
              // requestQuery("anuj@gmail.com");
            }}
          >
            Help Centre
          </button>
        </div>
        <ContainerItem/>
      </div>
    </div>
  );
}

export default User;
