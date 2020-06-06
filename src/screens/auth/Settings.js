import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowLeft,
  faTrashRestoreAlt,
  faUser,
  faPercent,
  faPaperPlane,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Settings = (props) => {
  return (
    <div>
      <img
        src="./settings.png"
        style={{ width: "100%", position: "absolute" }}
      />
      <div className="container">
        <div className="">
          <div className="row" style={{ paddingTop: "120px" }}>
            <div className="col-md-12">
              <a href="/home">
                <h6 style={{ fontSize: "24px", color: "white" }}>
                  <FontAwesomeIcon icon={faArrowLeft} /> Terug naar het menu
                </h6>
              </a>
              <br />
              <br />
              <h1 style={{ color: "white" }}>Mijn profiel</h1>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="col-md-12" style={{ fontSize: "18px" }}>
            <p style={{ color: "#457877" }}>
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px" }} />{" "}
              Profiel wijzigen
            </p>
          </div>
          <br />
          <div className="col-md-12" style={{ fontSize: "18px" }}>
            <p style={{ color: "#457877" }}>
              <FontAwesomeIcon
                icon={faPercent}
                style={{ marginRight: "10px" }}
              />{" "}
              Klantenkaart
            </p>
          </div>
          <br />
          <div className="col-md-12" style={{ fontSize: "18px" }}>
            <p style={{ color: "#457877" }}>
              <FontAwesomeIcon
                icon={faPaperPlane}
                style={{ marginRight: "10px" }}
              />{" "}
              Berichten
            </p>
          </div>
          <br />
          <div className="col-md-12" style={{ fontSize: "18px" }}>
            <p style={{ color: "#457877" }}>
              <FontAwesomeIcon
                icon={faSignOutAlt}
                style={{ marginRight: "10px" }}
              />{" "}
              Uitloggen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
