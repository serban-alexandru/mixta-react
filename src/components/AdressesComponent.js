import React from "react";
import { Radio } from "react-bootstrap";
import "./Radio.css";

const AdressesComponent = (props) => {
  const adresses = props.adresses;

  return (
    <div>
      <h1
        style={{
          fontSize: "24px",
          textAlign: "left",
          color: "#858585",
          paddingLeft: "15px",
        }}
        id="levering"
      >
        LEVERING
      </h1>
      <hr
        style={{
          display: "block",
          height: "1px",
          border: "0",
          borderTop: "1px solid #ccc",
          margin: "0",
          marginTop: "5px",
          padding: "0",
        }}
      />
      {props.adresses.map((adress, index) => {
        return (
          <div>
            <div
              style={{
                textAlign: "left",
                fontSize: "18px",
                color: "white",
                padding: "10px 20px 10px 20px",
              }}
            >
              <input
                type="radio"
                style={{ border: "5px solid #0DFF92", marginRight: "20px" }}
                name="groupOptions"
                value={adress.id}
              />
              {adress.adress}
              <br />
            </div>
            <hr
              style={{
                display: "block",
                height: "1px",
                border: "0",
                borderTop: "1px solid #ccc",
                margin: "0",
                marginTop: "5px",
                padding: "0",
              }}
            />
          </div>
        );
      })}
      <h1
        style={{
          fontSize: "24px",
          textAlign: "left",
          color: "#858585",
          paddingLeft: "15px",
          marginTop: "30px",
        }}
      >
        BETALING
      </h1>
      <hr
        style={{
          display: "block",
          height: "1px",
          border: "0",
          borderTop: "1px solid #ccc",
          margin: "0",
          marginTop: "5px",
          padding: "0",
        }}
      />
      <div
        style={{
          textAlign: "left",
          fontSize: "18px",
          color: "white",
          padding: "10px 20px 10px 20px",
        }}
      >
        <input
          type="radio"
          style={{ border: "5px solid #0DFF92", marginRight: "20px" }}
          name="groupOptions"
          value="offline"
        />
        Betaling ter plaatse
        <br />
      </div>
      <hr
        style={{
          display: "block",
          height: "1px",
          border: "0",
          borderTop: "1px solid #ccc",
          margin: "0",
          marginTop: "5px",
          padding: "0",
        }}
      />
      <div
        style={{
          textAlign: "left",
          fontSize: "18px",
          color: "white",
          padding: "10px 20px 10px 20px",
        }}
      >
        <input
          type="radio"
          style={{ border: "5px solid #0DFF92", marginRight: "20px" }}
          name="groupOptions"
          value="online"
        />
        Online betalen
        <br />
      </div>
      <hr
        style={{
          display: "block",
          height: "1px",
          border: "0",
          borderTop: "1px solid #ccc",
          margin: "0",
          marginTop: "5px",
          padding: "0",
        }}
      />
      <button
        className="btn"
        style={{
          marginTop: "30px",
          width: "80%",
          padding: "20px 0px",
          backgroundColor: "#F2A83B",
          color: "white",
          fontWeight: "bold",
          marginBottom: "40px",
        }}
        onClick={() => props.sendOrder()}
      >
        Nu bestellen
      </button>
    </div>
  );
};

export default AdressesComponent;
